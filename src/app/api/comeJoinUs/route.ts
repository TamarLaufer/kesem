import { firebaseConfig } from "@/firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  connectFirestoreEmulator,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// init firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.NEXT_PUBLIC_USE_FIRESTORE_EMULATOR === "true") {
  connectFirestoreEmulator(db, "localhost", 8080);
}

// init resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const cv = formData.get("cv") as File | null;

    const docRef = await addDoc(collection(db, "teachers"), {
      firstName,
      lastName,
      phone,
      createdAt: serverTimestamp(),
    });

    if (cv) {
      const arrayBuffer = await cv.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      await resend.emails.send({
        from: "Kesem Website <info@kesemproject.co.il>",
        to: "kesem.gs@gmail.com",
        subject: "קובץ קורות חיים חדש מהאתר",
        html: `
          <h2>קיבלת פנייה חדשה מהאתר:</h2>
          <p>שם: ${firstName} ${lastName}</p>
          <p>טלפון: ${phone}</p>
          <p>מצורף קובץ קו"ח</p>
        `,
        attachments: [
          {
            filename: cv.name,
            content: buffer,
          },
        ],
      });
    }

    return NextResponse.json({ message: "teacher succeed", id: docRef.id });
  } catch (error) {
    console.error("Enroll error:", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
          ? error
          : "Unknown error";
    return NextResponse.json(
      { message: "Error", error: message },
      { status: 500 }
    );
  }
}

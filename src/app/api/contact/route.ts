import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  connectFirestoreEmulator,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseConfig } from "@/firebase/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.NEXT_PUBLIC_USE_FIRESTORE_EMULATOR === "true") {
  console.log("Using Firestore Emulator!");

  connectFirestoreEmulator(db, "localhost", 8080);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const docRef = await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ message: "contact succeed", id: docRef.id });
  } catch (error) {
    console.error("Enroll error:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

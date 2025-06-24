import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseConfig } from "@/firebase/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const docRef = await addDoc(collection(db, "students"), {
      ...data,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ message: "Enroll succeed", id: docRef.id });
  } catch (error) {
    console.error("Enroll error:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

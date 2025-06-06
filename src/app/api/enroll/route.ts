import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "@/firebase/firebaseConfig";

//Firebase init:
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Save into a collection named: "enrollments"
    const docRef = await addDoc(collection(db, "enrollments"), data);

    return NextResponse.json({ message: "Enroll succeed", id: docRef.id });
  } catch (error) {
    console.error("Enroll error:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

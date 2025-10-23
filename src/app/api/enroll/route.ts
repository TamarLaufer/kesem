import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const response = await fetch(process.env.FUNCTION_ADD_STUDENT as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Cloud Function error: ${text}`);
    }

    const json = await response.json();
    return NextResponse.json({ message: "Enroll succeed", id: json.id });
  } catch (error) {
    console.error("❌ Enroll error:", error);
    return NextResponse.json(
      { message: "Error", error: String(error) },
      { status: 500 }
    );
  }
}

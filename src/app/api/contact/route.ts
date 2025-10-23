import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const response = await fetch(process.env.FUNCTION_ADD_CONTACT as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Cloud Function error: ${text}`);
    }

    const json = await response.json();
    return NextResponse.json({ message: "contact succeed", id: json.id });
  } catch (error) {
    console.error("❌ Contact error:", error);
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

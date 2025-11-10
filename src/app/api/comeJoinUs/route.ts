import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const cv = formData.get("cv") as File | null;

    const response = await fetch(process.env.FUNCTION_ADD_TEACHER as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, phone }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Cloud Function error: ${text}`);
    }

    const json = await response.json();

    if (cv) {
      const arrayBuffer = await cv.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      await resend.emails.send({
        from: "Kesem Website <info@kesemproject.co.il>",
        // from: "Kesem Website <onboarding@resend.dev>", //for test on dev
        to: "kesem.gs@gmail.com",
        // to: "tamarlaufer@gmail.com", //for test on dev
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

    return NextResponse.json({ message: "teacher succeed", id: json.id });
  } catch (error) {
    console.error("❌ Teacher error:", error);
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

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendContactNotificationToOwner } from "@/lib/emailService";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    const record = db.addContactMessage({ name, email: email ?? "", message });

    // Send email notification to adilang852@gmail.com
    try {
      await sendContactNotificationToOwner({
        name,
        email: email ?? "",
        message,
      });
    } catch (emailError) {
      console.error("Non-critical email dispatch error:", emailError);
    }

    return NextResponse.json({ ok: true, message: record });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



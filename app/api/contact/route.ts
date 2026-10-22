import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  sendContactNotificationToOwner,
  sendEnquiryAcknowledgementEmail,
} from "@/lib/emailService";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    const record = db.addContactMessage({
      name: String(name).trim(),
      email: email ? String(email).trim() : "",
      message: String(message).trim(),
    });

    // Send notification to foundation inboxes AND confirmation receipt to client
    try {
      await Promise.allSettled([
        sendContactNotificationToOwner({
          name: record.name,
          email: record.email,
          phone: phone ? String(phone).trim() : undefined,
          message: record.message,
        }),
        sendEnquiryAcknowledgementEmail({
          name: record.name,
          email: record.email,
          phone: phone ? String(phone).trim() : undefined,
          message: record.message,
        }),
      ]);
    } catch (emailError) {
      console.error("Non-critical enquiry email dispatch error:", emailError);
    }

    return NextResponse.json({ ok: true, message: record });
  } catch (err) {
    console.error("Contact enquiry route error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



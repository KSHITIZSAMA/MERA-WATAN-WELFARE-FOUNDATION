import nodemailer from "nodemailer";

export interface CadetRegistrationEmailPayload {
  name: string;
  phone: string;
  email?: string;
  program: string;
  message?: string;
  date?: string;
}

export async function sendCadetNotificationToOwner(payload: CadetRegistrationEmailPayload) {
  const ownerEmail = process.env.OWNER_EMAIL || "adilang852@gmail.com";

  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

  console.log(`[Cadet Registration] New Cadet Signed Up: ${payload.name} (${payload.program}) - Phone: ${payload.phone}`);

  // If SMTP environment variables are not yet added to Vercel/env, log payload safely
  if (!smtpUser || !smtpPass) {
    console.warn(
      "[Email Service Warning] SMTP_USER / SMTP_PASS environment variables missing. Cadet record saved to DB, but email notification skipped. Add SMTP_USER & SMTP_PASS in .env.local or Vercel settings."
    );
    return { sent: false, reason: "SMTP credentials missing in environment variables" };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 25px; border-radius: 12px; color: #0f172a; max-width: 600px; margin: 0 auto; border: 2px solid #163b66;">
        <div style="background-color: #163b66; color: #ffffff; padding: 15px 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">🚩 MERE VATAN WELFARE FOUNDATION</h2>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #ff9933; font-weight: bold;">NEW CADET REGISTRATION FORM</p>
        </div>

        <div style="padding: 20px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #cbd5e1;">
          <p style="font-size: 14px; color: #334155;">A new candidate has submitted a join cause application on the website:</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66; width: 35%;">Cadet Name:</td>
              <td style="padding: 10px; font-weight: bold; color: #0f172a;">${payload.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66;">Phone Number:</td>
              <td style="padding: 10px; font-weight: bold; color: #d97706;">${payload.phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66;">Email Address:</td>
              <td style="padding: 10px; color: #0f172a;">${payload.email || "Not Provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66;">Selected Wing / Cause:</td>
              <td style="padding: 10px; font-weight: bold; color: #10b981;">${payload.program}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66;">Submission Date:</td>
              <td style="padding: 10px; color: #64748b;">${payload.date || new Date().toISOString().slice(0, 10)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #163b66; vertical-align: top;">Candidate Message:</td>
              <td style="padding: 10px; color: #334155;">${payload.message || "No additional message provided."}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 12px; background-color: #ebf9ff; border-left: 4px solid #163b66; border-radius: 6px; font-size: 12px; color: #1e3a8a;">
            💡 <b>Action Item:</b> Contact the candidate at <b>${payload.phone}</b> to confirm physical drill batch timings and document verification.
          </div>
        </div>

        <div style="text-align: center; margin-top: 15px; font-size: 11px; color: #64748b;">
          Mere Vatan Welfare Foundation · Betul, MP · Email Notification System
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Mere Vatan Website" <${smtpUser}>`,
      to: ownerEmail,
      subject: `🚩 New Cadet Registration: ${payload.name} (${payload.program})`,
      html: htmlContent,
    });

    console.log(`[Email Dispatch Success] Registration email sent to ${ownerEmail}`);
    return { sent: true };
  } catch (error) {
    console.error("[Email Dispatch Error] Failed to send email via SMTP:", error);
    return { sent: false, error };
  }
}

export interface ContactMessageEmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactNotificationToOwner(payload: ContactMessageEmailPayload) {
  const ownerEmail = process.env.OWNER_EMAIL || "adilang852@gmail.com";

  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

  console.log(`[Contact Enquiry] New Message from ${payload.name} (${payload.email})`);

  if (!smtpUser || !smtpPass) {
    console.warn(
      "[Email Service Warning] SMTP_USER / SMTP_PASS missing. Message saved to DB, email skipped."
    );
    return { sent: false, reason: "SMTP credentials missing" };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 25px; border-radius: 12px; color: #0f172a; max-width: 600px; margin: 0 auto; border: 2px solid #163b66;">
        <div style="background-color: #163b66; color: #ffffff; padding: 15px 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">✉️ MERE VATAN WELFARE FOUNDATION</h2>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #ff9933; font-weight: bold;">NEW DIRECT ENQUIRY / MESSAGE</p>
        </div>

        <div style="padding: 20px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #cbd5e1;">
          <p style="font-size: 14px; color: #334155;">A new message was submitted via the website contact desk:</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66; width: 35%;">Sender Name:</td>
              <td style="padding: 10px; font-weight: bold; color: #0f172a;">${payload.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66;">Email Address:</td>
              <td style="padding: 10px; color: #d97706; font-weight: bold;">${payload.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #163b66; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #334155; white-space: pre-wrap;">${payload.message}</td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; margin-top: 15px; font-size: 11px; color: #64748b;">
          Mere Vatan Welfare Foundation · Sent to ${ownerEmail}
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Mere Vatan Website" <${smtpUser}>`,
      to: ownerEmail,
      subject: `✉️ New Foundation Enquiry from ${payload.name}`,
      html: htmlContent,
      replyTo: payload.email,
    });

    console.log(`[Contact Email Success] Sent enquiry to ${ownerEmail}`);
    return { sent: true };
  } catch (error) {
    console.error("[Contact Email Error] Failed to send email via SMTP:", error);
    return { sent: false, error };
  }
}


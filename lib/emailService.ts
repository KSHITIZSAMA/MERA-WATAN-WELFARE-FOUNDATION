import nodemailer from "nodemailer";

export interface CadetRegistrationEmailPayload {
  name: string;
  phone: string;
  email?: string;
  program: string;
  message?: string;
  date?: string;
}

export interface ContactMessageEmailPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface DirectVolunteerEmailPayload {
  to: string;
  name: string;
  subject: string;
  message: string;
}

// Credentials configuration with fallbacks
function getSmtpCredentials() {
  const user =
    process.env.SMTP_USER ||
    process.env.EMAIL_USER ||
    "merawatanwelfarefoundation@gmail.com";

  const rawPass =
    process.env.SMTP_PASS ||
    process.env.EMAIL_PASS ||
    "";

  // Google App Passwords work best with whitespace stripped
  const pass = rawPass.replace(/\s+/g, "");

  const ownerEmail =
    process.env.OWNER_EMAIL ||
    "merawatanwelfarefoundation@gmail.com";

  return { user, pass, ownerEmail };
}

export function getEmailTransporter() {
  const { user, pass } = getSmtpCredentials();
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends notification email to Foundation Owner / Admin when a new Cadet / Volunteer registers.
 */
export async function sendCadetNotificationToOwner(payload: CadetRegistrationEmailPayload) {
  const { user, ownerEmail } = getSmtpCredentials();
  const transporter = getEmailTransporter();

  console.log(`[Cadet Registration] New Cadet Signed Up: ${payload.name} (${payload.program}) - Phone: ${payload.phone}`);

  try {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 25px; border-radius: 12px; color: #0f172a; max-width: 600px; margin: 0 auto; border: 2px solid #163b66;">
        <div style="background-color: #163b66; color: #ffffff; padding: 15px 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">🚩 MERA WATAN WELFARE FOUNDATION</h2>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #ff9933; font-weight: bold;">NEW CADET / VOLUNTEER REGISTRATION</p>
        </div>

        <div style="padding: 20px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #cbd5e1;">
          <p style="font-size: 14px; color: #334155;">A new candidate has submitted a volunteer / cadet application on the website:</p>

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
          Mera Watan Welfare Foundation · Betul, MP · Email Notification System
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Mera Watan Website" <${user}>`,
      to: ownerEmail,
      subject: `🚩 New Cadet Registration: ${payload.name} (${payload.program})`,
      html: htmlContent,
      replyTo: payload.email || user,
    });

    console.log(`[Email Dispatch Success] Registration notification sent to ${ownerEmail}`);
    return { sent: true };
  } catch (error) {
    console.error("[Email Dispatch Error] Failed to send email via SMTP:", error);
    return { sent: false, error };
  }
}

/**
 * Sends a welcome & confirmation email directly to the Volunteer/Cadet.
 */
export async function sendVolunteerWelcomeEmail(payload: CadetRegistrationEmailPayload) {
  if (!payload.email || !payload.email.includes("@")) {
    console.log(`[Volunteer Email Skipped] No valid email provided for ${payload.name}`);
    return { sent: false, reason: "No email address provided" };
  }

  const { user } = getSmtpCredentials();
  const transporter = getEmailTransporter();

  const htmlContent = `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f8fafc; padding: 25px; color: #0f172a; max-width: 600px; margin: 0 auto; border: 2px solid #163b66; border-radius: 12px;">
      <!-- Header -->
      <div style="background-color: #163b66; color: #ffffff; padding: 22px 20px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 20px; letter-spacing: 1px; color: #ffffff;">MERA WATAN WELFARE FOUNDATION</h1>
        <p style="margin: 6px 0 0 0; font-size: 12px; color: #ff9933; font-weight: bold; text-transform: uppercase;">
          Volunteer Registration Confirmed • Betul, MP
        </p>
      </div>

      <!-- Main Body -->
      <div style="padding: 24px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
        <h2 style="font-size: 18px; color: #163b66; margin-top: 0;">Jai Hind &amp; Warm Welcome, ${payload.name}! 🇮🇳</h2>
        
        <p style="font-size: 14px; line-height: 1.6; color: #334155;">
          Thank you for stepping forward to serve the nation and society with <b>Mera Watan Welfare Foundation Betul</b>. Your application has been successfully registered in our official roster.
        </p>

        <!-- Details Card -->
        <div style="background-color: #f8fafc; border-left: 4px solid #d97706; padding: 15px; border-radius: 6px; margin: 20px 0; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
          <h3 style="margin: 0 0 10px 0; font-size: 13px; color: #163b66; text-transform: uppercase; letter-spacing: 0.5px; font-weight: bold;">
            Your Application Summary
          </h3>
          <table style="width: 100%; font-size: 13px; line-height: 1.8;">
            <tr>
              <td style="color: #64748b; width: 40%;">Volunteer Name:</td>
              <td style="font-weight: bold; color: #0f172a;">${payload.name}</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Selected Wing / Program:</td>
              <td style="font-weight: bold; color: #10b981;">${payload.program}</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Registered Phone:</td>
              <td style="font-weight: bold; color: #0f172a;">${payload.phone}</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Application Date:</td>
              <td style="color: #0f172a;">${payload.date || new Date().toISOString().slice(0, 10)}</td>
            </tr>
          </table>
        </div>

        <h3 style="font-size: 14px; color: #163b66; margin-bottom: 8px;">What Happens Next:</h3>
        <ul style="font-size: 13px; line-height: 1.6; color: #475569; padding-left: 20px; margin-top: 4px;">
          <li>Our ground coordinator will contact you at <b>${payload.phone}</b> to discuss physical drill timings or workshop schedules.</li>
          <li>You will be inducted into your selected wing and assigned a training / activity mentor.</li>
          <li>Physical training batches take place at the Betul stadium &amp; community grounds.</li>
        </ul>

        <div style="margin-top: 24px; padding: 14px; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; font-size: 13px; color: #065f46; text-align: center; font-weight: bold;">
          “हुनर से रोजगार • अनुशासन से नेतृत्व • अवसर से आत्मनिर्भरता”
        </div>

        <div style="margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 13px; color: #475569;">
          <p style="margin: 0 0 4px 0;">Have questions or want to visit our ground office?</p>
          <p style="margin: 0; color: #163b66;">
            Email: <a href="mailto:merawatanwelfarefoundation@gmail.com" style="color: #d97706; text-decoration: none; font-weight: bold;">merawatanwelfarefoundation@gmail.com</a>
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align: center; margin-top: 16px; font-size: 11px; color: #94a3b8;">
        © Mera Watan Welfare Foundation · Betul, Madhya Pradesh · All Rights Reserved
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Mera Watan Welfare Foundation" <${user}>`,
      to: payload.email,
      replyTo: user,
      subject: `🇮🇳 Welcome to Mera Watan Welfare Foundation — Registration Confirmed!`,
      html: htmlContent,
    });
    console.log(`[Volunteer Welcome Email Success] Sent to ${payload.email}`);
    return { sent: true };
  } catch (error) {
    console.error("[Volunteer Welcome Email Error] Failed to send email to volunteer:", error);
    return { sent: false, error };
  }
}

/**
 * Sends a custom email directly to a volunteer.
 */
export async function sendEmailToVolunteer(payload: DirectVolunteerEmailPayload) {
  const { user } = getSmtpCredentials();
  const transporter = getEmailTransporter();

  const htmlContent = `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f8fafc; padding: 25px; color: #0f172a; max-width: 600px; margin: 0 auto; border: 2px solid #163b66; border-radius: 12px;">
      <div style="background-color: #163b66; color: #ffffff; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
        <h2 style="margin: 0; font-size: 18px; letter-spacing: 1px; color: #ffffff;">MERA WATAN WELFARE FOUNDATION</h2>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #ff9933; font-weight: bold;">OFFICIAL VOLUNTEER DESK</p>
      </div>

      <div style="padding: 24px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
        <p style="font-size: 14px; color: #163b66; font-weight: bold; margin-top: 0;">Dear ${payload.name || "Volunteer"},</p>
        
        <div style="font-size: 14px; line-height: 1.7; color: #334155; white-space: pre-wrap; margin: 15px 0;">
          ${payload.message}
        </div>

        <div style="margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 12px; color: #64748b;">
          Warm regards,<br />
          <b>Team Mera Watan Welfare Foundation</b><br />
          Betul, Madhya Pradesh<br />
          Email: <a href="mailto:${user}" style="color: #d97706;">${user}</a>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Mera Watan Welfare Foundation" <${user}>`,
      to: payload.to,
      replyTo: user,
      subject: payload.subject,
      html: htmlContent,
    });
    return { sent: true };
  } catch (error) {
    console.error("[Direct Email Error] Failed to send email to volunteer:", error);
    return { sent: false, error };
  }
}

/**
 * Sends notification email to Foundation Owner / Admin when a contact form enquiry is submitted.
 * Delivers to both official foundation email and leadership inbox.
 */
export async function sendContactNotificationToOwner(payload: ContactMessageEmailPayload) {
  const { user, ownerEmail } = getSmtpCredentials();
  const transporter = getEmailTransporter();

  const recipients = Array.from(
    new Set([ownerEmail, "raghuwanshiashok34@gmail.com"])
  )
    .filter(Boolean)
    .join(", ");

  console.log(`[Contact Enquiry] New Enquiry from ${payload.name} (${payload.email || "No email"}${payload.phone ? ` - Phone: ${payload.phone}` : ""}) -> Sending to: ${recipients}`);

  try {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 25px; border-radius: 12px; color: #0f172a; max-width: 600px; margin: 0 auto; border: 2px solid #163b66;">
        <div style="background-color: #163b66; color: #ffffff; padding: 15px 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">✉️ MERA WATAN WELFARE FOUNDATION</h2>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #ff9933; font-weight: bold; text-transform: uppercase;">NEW FOUNDATION ENQUIRY</p>
        </div>

        <div style="padding: 20px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #cbd5e1;">
          <p style="font-size: 14px; color: #334155;">A new enquiry has been submitted on the website enquiry desk:</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66; width: 35%;">Inquirer Name:</td>
              <td style="padding: 10px; font-weight: bold; color: #0f172a;">${payload.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px; font-weight: bold; color: #163b66;">Email Address:</td>
              <td style="padding: 10px; color: #d97706; font-weight: bold;">${payload.email || "Not Provided"}</td>
            </tr>
            ${
              payload.phone
                ? `<tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px; font-weight: bold; color: #163b66;">Phone Number:</td>
                    <td style="padding: 10px; font-weight: bold; color: #0f172a;">${payload.phone}</td>
                  </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #163b66; vertical-align: top;">Enquiry Details:</td>
              <td style="padding: 10px; color: #334155; white-space: pre-wrap;">${payload.message}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 12px; background-color: #ebf9ff; border-left: 4px solid #163b66; border-radius: 6px; font-size: 12px; color: #1e3a8a;">
            💡 <b>Action Item:</b> Reply directly to <b>${payload.email || "the inquirer"}</b>${payload.phone ? ` or call <b>${payload.phone}</b>` : ""} to respond.
          </div>
        </div>

        <div style="text-align: center; margin-top: 15px; font-size: 11px; color: #64748b;">
          Mera Watan Welfare Foundation · Official Notification
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Mera Watan Website" <${user}>`,
      to: recipients,
      subject: `✉️ New Foundation Enquiry: ${payload.name}`,
      html: htmlContent,
      replyTo: payload.email || user,
    });

    console.log(`[Contact Email Success] Sent enquiry to ${recipients} (MessageId: ${info.messageId})`);
    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error("[Contact Email Error] Failed to send email via SMTP:", error);
    return { sent: false, error };
  }
}

/**
 * Sends an enquiry receipt acknowledgement to the client / inquirer.
 * Confirms receipt of their message without any volunteer induction confusion.
 */
export async function sendEnquiryAcknowledgementEmail(payload: ContactMessageEmailPayload) {
  if (!payload.email || !payload.email.includes("@")) {
    console.log(`[Enquiry Acknowledgement Skipped] No valid email provided for ${payload.name}`);
    return { sent: false, reason: "No email address provided" };
  }

  const { user } = getSmtpCredentials();
  const transporter = getEmailTransporter();

  const htmlContent = `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f8fafc; padding: 25px; color: #0f172a; max-width: 600px; margin: 0 auto; border: 2px solid #163b66; border-radius: 12px;">
      <div style="background-color: #163b66; color: #ffffff; padding: 22px 20px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 20px; letter-spacing: 1px; color: #ffffff;">MERA WATAN WELFARE FOUNDATION</h1>
        <p style="margin: 6px 0 0 0; font-size: 12px; color: #ff9933; font-weight: bold; text-transform: uppercase;">
          Enquiry Received • Betul, Madhya Pradesh
        </p>
      </div>

      <div style="padding: 24px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
        <h2 style="font-size: 18px; color: #163b66; margin-top: 0;">Namaste, ${payload.name}!</h2>
        
        <p style="font-size: 14px; line-height: 1.6; color: #334155;">
          Thank you for reaching out to <b>Mera Watan Welfare Foundation Betul</b>. We have successfully received your enquiry.
        </p>

        <div style="background-color: #f8fafc; border-left: 4px solid #163b66; padding: 15px; border-radius: 6px; margin: 20px 0; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
          <h3 style="margin: 0 0 10px 0; font-size: 12px; color: #163b66; text-transform: uppercase; letter-spacing: 0.5px; font-weight: bold;">
            Your Enquiry Summary
          </h3>
          <p style="font-size: 13px; line-height: 1.6; color: #475569; margin: 0; white-space: pre-wrap;">${payload.message}</p>
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #475569;">
          Our administration desk will review your query and get back to you shortly at <b>${payload.email}</b>${payload.phone ? ` or <b>${payload.phone}</b>` : ""}.
        </p>

        <div style="margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #64748b;">
          <p style="margin: 0 0 4px 0;">Need urgent assistance or have questions?</p>
          <p style="margin: 0; color: #163b66;">
            Email: <a href="mailto:${user}" style="color: #d97706; text-decoration: none; font-weight: bold;">${user}</a> | Phone: <b>+91 97976 33077</b>
          </p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 16px; font-size: 11px; color: #94a3b8;">
        © Mera Watan Welfare Foundation · Betul, Madhya Pradesh · All Rights Reserved
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Mera Watan Welfare Foundation" <${user}>`,
      to: payload.email,
      replyTo: user,
      subject: `✉️ Enquiry Received — Mera Watan Welfare Foundation Betul`,
      html: htmlContent,
    });
    console.log(`[Enquiry Acknowledgement Success] Sent receipt to ${payload.email} (MessageId: ${info.messageId})`);
    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error("[Enquiry Acknowledgement Error] Failed to send receipt to client:", error);
    return { sent: false, error };
  }
}

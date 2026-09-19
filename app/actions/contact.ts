"use server";

import { RESERVATIONS_EMAIL, resend } from "@/lib/resend";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export async function submitContactRequest(data: ContactFormData) {
  const { name, email, phone, subject, message } = data;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please complete the required fields.",
    };
  }

  try {
    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Blue Marlin Beach Hotel <onboarding@resend.dev>",
      to: RESERVATIONS_EMAIL,
      replyTo: email,
      subject: `Website Enquiry — ${subject || "General Enquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1d2529; line-height: 1.6;">
          <h2 style="color: #082f49;">
            New Website Enquiry
          </h2>

          <p>
            A visitor has submitted a message through the
            Blue Marlin Beach Hotel website.
          </p>

          <hr />

          <p>
            <strong>Name:</strong> ${name}<br />
            <strong>Email:</strong> ${email}<br />
            <strong>Phone:</strong> ${phone || "Not provided"}<br />
            <strong>Subject:</strong> ${subject || "General Enquiry"}
          </p>

          <h3>Message</h3>

          <p>${message}</p>

          <hr />

          <p style="color: #687278; font-size: 13px;">
            Reply directly to this email to respond to the visitor.
          </p>
        </div>
      `,
    });

    return {
      success: true,
      message:
        "Your message has been sent. We'll get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message:
        "We couldn't send your message right now. Please try again or contact the hotel directly.",
    };
  }
}

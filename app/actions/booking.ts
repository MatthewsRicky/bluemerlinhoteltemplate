"use server";

import { RESERVATIONS_EMAIL, resend } from "@/lib/resend";

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
  message: string;
};

export async function submitBookingRequest(data: BookingFormData) {
  const { name, email, phone, checkIn, checkOut, guests, room, message } = data;

  if (!name || !email || !checkIn || !checkOut || !guests) {
    return {
      success: false,
      message: "Please complete all required fields.",
    };
  }

  try {
    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Blue Marlin Beach Hotel <onboarding@resend.dev>",
      to: RESERVATIONS_EMAIL,
      replyTo: email,
      subject: `New Booking Request — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1d2529; line-height: 1.6;">
          <h2 style="color: #082f49;">
            New Booking Request
          </h2>

          <p>
            A new booking request has been submitted through the
            Blue Marlin Beach Hotel website.
          </p>

          <hr />

          <h3>Guest Details</h3>

          <p>
            <strong>Name:</strong> ${name}<br />
            <strong>Email:</strong> ${email}<br />
            <strong>Phone:</strong> ${phone || "Not provided"}
          </p>

          <h3>Stay Details</h3>

          <p>
            <strong>Check-in:</strong> ${checkIn}<br />
            <strong>Check-out:</strong> ${checkOut}<br />
            <strong>Guests:</strong> ${guests}<br />
            <strong>Room preference:</strong> ${room || "No preference"}
          </p>

          ${
            message
              ? `
                <h3>Additional Information</h3>
                <p>${message}</p>
              `
              : ""
          }

          <hr />

          <p style="color: #687278; font-size: 13px;">
            This request was submitted through the Blue Marlin Beach Hotel
            website.
          </p>
        </div>
      `,
    });

    return {
      success: true,
      message:
        "Your booking request has been sent. The reservations team will be in touch.",
    };
  } catch (error) {
    console.error("Booking request error:", error);

    return {
      success: false,
      message:
        "We couldn't send your request right now. Please try again or contact the hotel directly.",
    };
  }
}

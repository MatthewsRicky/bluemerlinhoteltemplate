"use server";

import { RESERVATIONS_EMAIL, resend } from "@/lib/resend";
import { escapeHtml } from "@/lib/escape-html";

export type BookingActionState = {
  success: boolean;
  message: string;
};

export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitBookingRequest(
  data: BookingFormData,
): Promise<BookingActionState> {
  try {
    const name = data.name?.trim() ?? "";
    const email = data.email?.trim() ?? "";
    const phone = data.phone?.trim() ?? "";
    const checkIn = data.checkIn?.trim() ?? "";
    const checkOut = data.checkOut?.trim() ?? "";
    const guests = data.guests?.trim() ?? "";
    const room = data.room?.trim() ?? "";
    const message = data.message?.trim() ?? "";

    if (!name || !email || !checkIn || !checkOut || !guests) {
      return {
        success: false,
        message: "Please complete all required booking fields.",
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (
      Number.isNaN(checkInDate.getTime()) ||
      Number.isNaN(checkOutDate.getTime())
    ) {
      return {
        success: false,
        message: "Please provide valid check-in and check-out dates.",
      };
    }

    if (checkOutDate <= checkInDate) {
      return {
        success: false,
        message: "Check-out must be after check-in.",
      };
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCheckIn = escapeHtml(checkIn);
    const safeCheckOut = escapeHtml(checkOut);
    const safeGuests = escapeHtml(guests);
    const safeRoom = escapeHtml(room || "No specific room selected");
    const safeMessage = escapeHtml(
      message || "No additional message provided.",
    );

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Blue Marlin Beach Hotel <onboarding@resend.dev>",
      to: RESERVATIONS_EMAIL,
      replyTo: email,
      subject: `New Booking Request — ${name}`,
      html: `
        <div style="margin:0;padding:0;background:#f6f1e8;font-family:Arial,Helvetica,sans-serif;color:#1d2529;">
          <div style="max-width:680px;margin:0 auto;padding:40px 20px;">
            
            <div style="background:#082f49;padding:32px 36px;color:#fffdf9;">
              <p style="margin:0 0 10px;font-size:10px;line-height:1.5;letter-spacing:3px;text-transform:uppercase;color:#b99a62;">
                Blue Marlin Beach Hotel
              </p>

              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1.1;font-weight:400;">
                New Booking Request
              </h1>

              <p style="margin:16px 0 0;font-size:14px;line-height:1.7;color:rgba(255,253,249,.72);">
                A new booking enquiry has been submitted through the hotel website.
              </p>
            </div>

            <div style="background:#fffdf9;padding:32px 36px;">
              
              <h2 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:400;color:#082f49;">
                Guest details
              </h2>

              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;color:#687278;width:35%;">
                    Name
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;font-weight:600;">
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;color:#687278;">
                    Email
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;">
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;color:#687278;">
                    Phone
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;">
                    ${safePhone || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;color:#687278;">
                    Guests
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;">
                    ${safeGuests}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;color:#687278;">
                    Room
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;">
                    ${safeRoom}
                  </td>
                </tr>
              </table>

              <h2 style="margin:32px 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:400;color:#082f49;">
                Stay details
              </h2>

              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;color:#687278;width:35%;">
                    Check-in
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;font-weight:600;">
                    ${safeCheckIn}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;color:#687278;">
                    Check-out
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #e7e0d5;font-weight:600;">
                    ${safeCheckOut}
                  </td>
                </tr>
              </table>

              <h2 style="margin:32px 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:400;color:#082f49;">
                Guest message
              </h2>

              <div style="padding:20px;background:#f6f1e8;font-size:14px;line-height:1.8;white-space:pre-wrap;">
                ${safeMessage}
              </div>

              <div style="margin-top:32px;padding-top:20px;border-top:1px solid #e7e0d5;">
                <p style="margin:0;font-size:12px;line-height:1.7;color:#687278;">
                  This request was submitted through the Blue Marlin Beach Hotel website.
                  Reply directly to this email to contact the guest.
                </p>
              </div>

            </div>

            <div style="padding:24px 10px;text-align:center;">
              <p style="margin:0;font-size:11px;line-height:1.6;color:#687278;">
                Blue Marlin Beach Hotel · Diani Beach Road · Diani Beach, Kenya
              </p>
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Booking email error:", error);

      return {
        success: false,
        message:
          "We couldn't send your booking request right now. Please try again or contact the hotel directly.",
      };
    }

    return {
      success: true,
      message:
        "Your booking request has been sent. The hotel will get back to you shortly.",
    };
  } catch (error) {
    console.error("Booking action error:", error);

    return {
      success: false,
      message:
        "Something went wrong while sending your booking request. Please try again.",
    };
  }
}

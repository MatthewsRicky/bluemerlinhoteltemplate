"use client";

import { FormEvent, useState } from "react";
import { submitBookingRequest } from "@/app/actions/booking";
import BookingSuccess from "./BookingSuccess";

const inputClass =
  "w-full border border-[#082f49]/15 bg-white px-4 py-4 text-sm text-[#1d2529] outline-none transition-colors placeholder:text-[#687278]/55 focus:border-[#082f49]";

const labelClass =
  "mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#082f49]/65";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const form = new FormData(event.currentTarget);

    const result = await submitBookingRequest({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      checkIn: String(form.get("checkIn") || ""),
      checkOut: String(form.get("checkOut") || ""),
      guests: String(form.get("guests") || ""),
      room: String(form.get("room") || ""),
      message: String(form.get("message") || ""),
    });

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      setMessage(result.message);
      return;
    }

    setMessage(result.message);
  }

  if (success) {
    return <BookingSuccess message={message} />;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#fffdf9] p-6 sm:p-8 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254 ..."
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="guests" className={labelClass}>
            Guests *
          </label>

          <select
            id="guests"
            name="guests"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select guests
            </option>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5">5 guests</option>
            <option value="6">6 guests</option>
            <option value="7+">7+ guests</option>
          </select>
        </div>

        <div>
          <label htmlFor="checkIn" className={labelClass}>
            Check-in *
          </label>

          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="checkOut" className={labelClass}>
            Check-out *
          </label>

          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="room" className={labelClass}>
            Room preference
          </label>

          <select id="room" name="room" defaultValue="" className={inputClass}>
            <option value="">No preference</option>

            <option value="Sea View Standard">Sea View Standard</option>

            <option value="Sea View Superior">Sea View Superior</option>

            <option value="Sea View Family Room">Sea View Family Room</option>

            <option value="Family Suite">Family Suite</option>

            <option value="Beach Suite">Beach Suite</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Additional information
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us anything that may help us with your request..."
            className={inputClass}
          />
        </div>
      </div>

      {message && !success && (
        <p className="mt-6 border border-[#b99a62]/30 bg-[#b99a62]/10 px-4 py-3 text-sm leading-6 text-[#082f49]">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full bg-[#082f49] px-6 py-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending Request..." : "Send Booking Request"}
      </button>

      <p className="mt-4 text-center text-[11px] leading-5 text-[#687278]/70">
        Your request is subject to availability. The hotel will confirm your
        stay directly.
      </p>
    </form>
  );
}

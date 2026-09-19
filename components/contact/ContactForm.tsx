"use client";

import { FormEvent, useState } from "react";
import { Check } from "lucide-react";
import { submitContactRequest } from "@/app/actions/contact";

const inputClass =
  "w-full border border-[#082f49]/15 bg-white px-4 py-4 text-sm text-[#1d2529] outline-none transition-colors placeholder:text-[#687278]/55 focus:border-[#082f49]";

const labelClass =
  "mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#082f49]/65";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setFeedback("");

    const form = new FormData(event.currentTarget);

    const result = await submitContactRequest({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    });

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      setFeedback(result.message);
      return;
    }

    setFeedback(result.message);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[400px] flex-col justify-center bg-[#fffdf9] p-8 sm:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#082f49] text-[#f6f1e8]">
          <Check className="h-6 w-6" />
        </div>

        <h2 className="mt-8 font-display text-4xl leading-none text-[#082f49] sm:text-5xl">
          Message sent.
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-7 text-[#1d2529]/65">
          {feedback}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#fffdf9] p-6 sm:p-8 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name *
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email address *
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+254 ..."
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClass}>
            Subject
          </label>

          <select
            id="contact-subject"
            name="subject"
            defaultValue="General Enquiry"
            className={inputClass}
          >
            <option>General Enquiry</option>
            <option>Accommodation</option>
            <option>Weddings</option>
            <option>Dining</option>
            <option>Wellness</option>
            <option>Experiences</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            Message *
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows={7}
            required
            placeholder="How can we help?"
            className={inputClass}
          />
        </div>
      </div>

      {feedback && !submitted && (
        <p className="mt-6 border border-[#b99a62]/30 bg-[#b99a62]/10 px-4 py-3 text-sm leading-6 text-[#082f49]">
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full bg-[#082f49] px-6 py-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending Message..." : "Send Message"}
      </button>
    </form>
  );
}

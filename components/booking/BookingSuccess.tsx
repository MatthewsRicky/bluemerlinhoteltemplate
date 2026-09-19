"use client";

import Link from "next/link";
import { Check } from "lucide-react";

type BookingSuccessProps = {
  message: string;
};

export default function BookingSuccess({ message }: BookingSuccessProps) {
  return (
    <div className="border border-[#082f49]/10 bg-[#f6f1e8] p-8 sm:p-12">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#082f49] text-[#f6f1e8]">
        <Check className="h-6 w-6" />
      </div>

      <h2 className="mt-8 font-display text-4xl leading-none text-[#082f49] sm:text-5xl">
        Request received.
      </h2>

      <p className="mt-5 max-w-lg text-sm leading-7 text-[#1d2529]/65">
        {message}
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex bg-[#082f49] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c]"
      >
        Return Home
      </Link>
    </div>
  );
}

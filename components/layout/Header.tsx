"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1600px] px-5 py-4 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border border-white/20 bg-[#082f49]/35 px-5 py-4 text-white backdrop-blur-md sm:px-7">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex gap-4 leading-none"
          >
            <Image
              src={"/images/blue-marlin-Logo.avif"}
              alt="Blue Marlin Logo"
              width={80}
              height={25}
              className="bg-white/90 rounded-2xl p-2"
            />
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-wide sm:text-3xl">
                Blue Marlin
              </span>

              <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/60">
                Beach Hotel
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/book"
              className="border border-[#d8c3a5] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#d8c3a5] hover:text-[#082f49]"
            >
              Book Your Stay
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-x border-b border-white/20 bg-[#082f49] px-5 py-5 text-white lg:hidden">
            <div className="flex flex-col">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/10 py-4 text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="mt-5 bg-[#d8c3a5] px-5 py-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
              >
                Book Your Stay
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

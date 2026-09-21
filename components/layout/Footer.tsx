import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#082f49] text-[#f6f1e8]">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src={"/images/blue-marlin-Logo.avif"}
                alt="Main Blue Marlin Logo"
                width={100}
                height={45}
                className="bg-sky-200/90 rounded p-2"
              />
              <div className="flex flex-col">
                <p className="font-display text-4xl sm:text-5xl">Blue Marlin</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/50">
                  Beach Hotel
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/65">
              A boutique beachfront stay in Diani Beach, Kenya, surrounded by
              tropical gardens, ocean air and the rhythm of the coast.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8c3a5]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8c3a5]">
              Visit
            </p>

            <div className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              <p>
                Diani Beach Road
                <br />
                Diani Beach, Kenya
              </p>

              <a
                href="mailto:reservations@bluemarlinbeachhotel.com"
                className="block break-words transition-colors hover:text-white"
              >
                reservations@bluemarlinbeachhotel.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8c3a5]">
              Your Stay
            </p>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Planning your escape to Diani Beach?
            </p>

            <Link
              href="/book"
              className="mt-6 inline-flex border border-[#d8c3a5] px-5 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#d8c3a5] hover:text-[#082f49]"
            >
              Book Your Stay
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
            © {new Date().getFullYear()} Blue Marlin Beach Hotel
          </p>
        </div>
      </div>
    </footer>
  );
}

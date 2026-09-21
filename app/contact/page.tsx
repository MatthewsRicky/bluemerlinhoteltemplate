import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Blue Marlin Beach Hotel",
  description:
    "Contact Blue Marlin Beach Hotel in Diani Beach, Kenya, about accommodation, weddings, dining, wellness and coastal experiences.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#f6f1e8]">
      <ContactHero />

      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <ContactDetails />

            <div className="bg-[#082f49]/[0.04] p-2 sm:p-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#f6f1e8] px-5 py-32">
      <div className="max-w-2xl text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
          Blue Marlin Beach Hotel
        </p>

        <h1 className="mt-5 font-display text-7xl leading-[0.85] text-[#082f49] sm:text-9xl">
          Lost by
          <br />
          the coast?
        </h1>

        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#1d2529]/60">
          The page you're looking for doesn't exist or may have moved. Let's get
          you back to Diani Beach.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-[#082f49] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c]"
          >
            Back Home
          </Link>

          <Link
            href="/rooms"
            className="border border-[#082f49]/20 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#082f49] hover:text-[#f6f1e8]"
          >
            Explore Rooms
          </Link>
        </div>
      </div>
    </main>
  );
}

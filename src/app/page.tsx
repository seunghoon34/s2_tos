import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <Image
        src="/s2icon.png"
        alt="S2 logo"
        width={96}
        height={96}
        className="mb-6 rounded-2xl"
        priority
      />

      <p className="mt-4 max-w-md text-lg text-gray-600">
        A content-basedd social app for meeting new people.
      </p>

      <div className="mt-10 flex gap-6 text-sm">
        <Link
          href="/privacy"
          className="rounded-full border border-gray-200 px-6 py-2.5 font-medium transition-colors hover:bg-gray-50"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="rounded-full border border-gray-200 px-6 py-2.5 font-medium transition-colors hover:bg-gray-50"
        >
          Terms of Service
        </Link>
      </div>

      <p className="mt-12 text-sm text-gray-500">
        Support:{" "}
        <a
          href="mailto:s2.shootyourshot@gmail.com"
          className="underline hover:text-black"
        >
          s2.shootyourshot@gmail.com
        </a>
      </p>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 h-16 sm:h-20 md:h-[111px] flex justify-center bg-[#211D1C]">
      <button
        onClick={scrollToTop}
        className="cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="최상단으로 이동"
      >
        <Image
          src="/logo.png"
          alt="Navbar"
          width={80}
          height={48}
          className="h-full object-contain w-12 sm:w-16 md:w-20"
        />
      </button>
    </nav>
  );
}

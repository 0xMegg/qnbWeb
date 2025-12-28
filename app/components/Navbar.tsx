import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-16 sm:h-20 md:h-[111px] flex justify-center bg-[#211D1C]">
      <Image
        src="/logo.png"
        alt="Navbar"
        width={80}
        height={48}
        className="h-full object-contain w-12 sm:w-16 md:w-20"
      />
    </nav>
  );
}

"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <footer className="w-full py-6 mt-12 border-t backdrop-blur-md border-[#222] text-center text-[#eaeaea7d] text-sm">
      © {new Date().getFullYear()} Ej Sinfuego. All rights reserved.
    </footer>
  );
};

export default Footer;

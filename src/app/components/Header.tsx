"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <header className="max-w-5xl mx-auto sticky top-0 z-50 border-b border-[#222] py-4 px-4 sm:px-8 flex items-center justify-between backdrop-blur-md bg-[#101820cc]">
      <Link href="/" className="text-xl font-bold text-[#eaeaea] tracking-tight">Ej Sinfuego</Link>
      <nav className="flex gap-6 text-[#eaeaea9d] text-sm">
        <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
        <Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link>
        <Link href="/#projects" className="hover:text-sky-400 transition-colors">Projects</Link>
      </nav>
    </header>
  );
};

export default Header;

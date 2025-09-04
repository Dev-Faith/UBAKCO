"use client" 
import Image from "next/image";
import { Button } from "../ui/buttons/Button";
import { Navbar } from "../ui/Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("../ui/MobileMenu"), { ssr: false });

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=" flex items-center xl:justify-center bg-white/20 backdrop-blur-[40px] fixed shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] z-[10] w-screen">
      <div className="xl:w-[1440px]  flex items-center justify-between px-[16px] md:px-[60px] lg:px-[60px] py-[24px] w-full">
        <Image src="/images/logo.png" alt="UBAKCO" width={153} height={40} />
        <Navbar />
        <div className="hidden lg:flex">
          <Button
            variant="secondary"
            className="relative overflow-hidden cursor-pointer"
          >
            Track package{" "}
            <div className="absolute top-0 left-0 text-[5px]/[6px] font-[400] font-sans text-white bg-[#9494FF] rounded-br-[5px] px-[6px] py-[2px]">
              Coming soon
            </div>
          </Button>
          <Button className="ml-2 cursor-pointer">Request a Quote</Button>
        </div>
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#EA5C2B]"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <RxHamburgerMenu className="size-[24px]" />
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/buttons/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [quoteModalTrigger, setQuoteModalTrigger] = React.useState(false);
  React.useEffect(() => {
    if (quoteModalTrigger && typeof window !== 'undefined') {
      const event = new CustomEvent('openQuoteModal');
      window.dispatchEvent(event);
      setQuoteModalTrigger(false);
    }
  }, [quoteModalTrigger]);
  function openQuoteModal() {
    setQuoteModalTrigger(true);
  }
  const quickLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Track Package", url: "#" },
    { title: "Request a Quote", url: "#" },
    { title: "Blog", url: "#" },
  ];
  const servicesLinks = [
    { title: "Nationwide delivery", url: "#" },
    { title: "Corporate Cargo", url: "#" },
    { title: "Import/Export", url: "#" },
    { title: "Premium & White Glove", url: "#" },
    { title: "Airport Services", url: "#" },
    { title: "Last Mile delivery", url: "#" },
  ];
  const businesshourLink = [
    "Monday - Friday: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 4:00 PM",
  ];

  return (
    <footer className="w-full bg-[#000000] flex justify-center">
  <div className="max-w-[1440px] w-full bg-[#000000] px-[16px] sm:px-[60px] lg:px-[60px] pt-[100px] flex flex-col gap-[100px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-[32px]">
            <Image
              src="/images/footerLogo.png"
              alt="Logo"
              width={215}
              height={56}
            />
            <p className="w-[375px] font-sans font-regular text-[18px]/[40px] text-[#B2B2B2]">
              Nigeria's premier logistics partner, delivering excellence and
              reliability across the nation for over 12 years.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[100px] mt-[60px] lg:mt-0">
            <div>
              <p className="font-display text-[24px] font-semibold text-[#ffffff]">
                Quick Links
              </p>
              <nav className="flex flex-col gap-[32px] mt-[16px] text-[18px] text-[#B2B2B2]">
                {quickLinks.map((link) => (
                  link.title === "Request a Quote" ? (
                    <button
                      key={link.title}
                      type="button"
                        onClick={openQuoteModal}
                      className="block text-[#B2B2B2] hover:text-white w-full text-left py-2 px-0 bg-transparent border-none cursor-pointer font-inherit"
                    >
                      {link.title}
                    </button>
                  ) : (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="block text-[#B2B2B2] hover:text-white"
                    >
                      {link.title}
                    </Link>
                  )
                ))}
              </nav>
            </div>
            <div>
              <p className="font-display text-[24px] font-semibold text-[#ffffff]">
                Services
              </p>
              <nav className="flex flex-col gap-[32px] mt-[16px] text-[18px] text-[#B2B2B2] ">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="block text-[#B2B2B2] hover:text-white"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-display text-[24px] font-semibold text-[#ffffff]">
                Busines Hours
              </p>
              <nav className="flex flex-col gap-[32px] mt-[16px] text-[18px] text-[#B2B2B2] ">
                {businesshourLink.map((link) => (
                  <p key={link} className=" text-[#B2B2B2]">
                    {link}
                  </p>
                ))}
              </nav>
              <div className="mt-[51px] flex flex-col gap-[40px]">
                <h1 className="text-white font-display text-[24px] font-semibold">
                  Follow Us
                </h1>
                <div className="flex gap-[32px] text-[24px] ">
                  <FaFacebookF className="text-[#B2B2B2] hover:text-white" />
                  <FaInstagram className="text-[#B2B2B2] hover:text-white" />
                  <FaXTwitter className="text-[#B2B2B2] hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[40px] border-t-1 border-white/10 text-white/70 flex items-center justify-center lg:justify-between w-full text-[18px] pb-[100px]">
          <p>© 2025 Ubakco. All rights reserved.</p>
          <div className="lg:flex items-center gap-[24px] hidden">
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms of Service</p>
            <p>|</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

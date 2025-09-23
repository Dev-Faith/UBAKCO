"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/buttons/Button";

// Prevent background scroll when menu is open
function useLockBodyScroll(lock: boolean) {
  React.useEffect(() => {
    if (lock) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [lock]);
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Our Services" },
  { href: "/features", label: "Premium logistics" },
  { href: "/contact", label: "Contact us" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useLockBodyScroll(open);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#EFEFEF]/80 backdrop-blur-lg flex justify-end"
          >
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-[400px] h-[100dvh] bg-[#EFEFEF] shadow-xl p-[16px] sm:p-[60px] flex flex-col justify-between"
            >
              <div>
                <button
                  className="self-end text-3xl font-bold mb-8 text-[#EA5C2B] hover:text-black transition-colors"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  ×
                </button>
                <nav className="flex flex-col justify-between mt-8 h-full">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-[20px] font-semibold text-black hover:text-black transition-colors py-2 px-2 rounded"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex flex-col gap-4 w-full mt-8">
                <Button
                  variant="outline"
                  className="relative overflow-hidden cursor-pointer"
                >
                  Track package{" "}
                  <div className="absolute top-0 left-0 text-[10px]/[6px] font-[400] font-sans text-white bg-[#9494FF]  rounded-br-[5px] px-[6px] py-[4px]">
                    Coming soon
                  </div>
                </Button>
                <Button fn="quote" className="ml-2 cursor-pointer">
                  Request a Quote
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

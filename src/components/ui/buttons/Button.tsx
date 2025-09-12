"use client";
import React from "react";
import clsx from "clsx";
import { useStore } from "@/lib/store/useStore";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "sm" | "md" | "lg";
  fn?: "quote";
}

const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<string, string> = {
  primary: "bg-[#EA5C2B] text-[#FFFFFF] hover:bg-[#D95A2B]",
  secondary: "bg-[#EFEFEF] text-[#000000] hover:bg-gray-300",
  tertiary: "bg-[#323232] group-hover:bg-[#EA5C2B]  text-[#ffffff] ",
  outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-[12px] py-[10px] text-[16px] rounded-[8px] font-[400]",
  lg: "px-6 py-3 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", fn, children, ...props },
    ref
  ) => {

    const {openQuoteModal} = useStore();
    return (
      <button
        ref={ref}
        className={clsx(
          "cursor-pointer",
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
        onClick={fn === "quote" ? () => openQuoteModal() : props.onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

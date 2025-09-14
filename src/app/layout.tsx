
import type { Metadata } from "next";
import { poppins, montserrat } from "./fonts";
import "./globals.css";
import Header from "@/components/shared/Header";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import { Quote } from "lucide-react";
import QuoteModal from "@/components/ui/QuoteModal";


export const metadata: Metadata = {
  title: "UBAKCO",
  description: "Nigeria's premier logistics partner, delivering excellence and reliability across the nation for over 12 years.",
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} hide-scrollbar scroll-smooth max-[1440px] xl:flex xl:flex-col xl:justify-center`}>
      <body
  className={`antialiased` }
      >
  <QuoteModal/>
  <Header/>
  {children}
  <WhatsAppFloatingButton />
  {/* <Footer/> */}
      </body>
    </html>
  );
}

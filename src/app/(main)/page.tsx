import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Records from "@/components/sections/Records";
import Testimonial from "@/components/sections/Testimonial";
import Trusted from "@/components/sections/Trusted";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return <main className="h-[300vh] scrollbar-hide">
    <Hero />
    <Mission/>
    <Features />
    <Records />
    <Trusted />
    <Testimonial />
    <CTA/>
    <Footer />
  </main>;
}

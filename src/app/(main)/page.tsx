import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";

export default function HomePage() {
  return <main className="h-[300vh]">
    <Hero />
    <Mission/>
    <Features />
  </main>;
}

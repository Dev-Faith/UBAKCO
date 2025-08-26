import Services from "@/components/sections/Services";
import Features from "./modules/features-service";
import RequestQuote from "@/components/sections/RequestQuote";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/shared/Footer";

export default function ServicesPage() {
  return <main>
    <Services />
    <Features />
    <RequestQuote />
    <CTA className="mt-[220px]" />
    <Footer />
  </main>;
}

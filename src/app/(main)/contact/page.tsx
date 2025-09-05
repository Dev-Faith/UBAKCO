import Contactus from "@/components/sections/Contactus";
import Map from "@/components/sections/Map";
import RequestQuote from "@/components/sections/RequestQuote";
import WedLove from "@/components/sections/WedLove";
import Footer from "@/components/shared/Footer";

export default function ContactPage() {
  return <main className="overflow-hidden">
    <Contactus />
    <WedLove />
    <Map />
    <RequestQuote formOffset={false} bg="[#EDEDED]" className="pb-[514px] pt-[220px]" />
    <Footer/>
  </main>;
}

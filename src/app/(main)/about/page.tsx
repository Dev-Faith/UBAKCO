import Aboutus from "@/components/sections/Aboutus";
import AboutusTrusted from "@/components/sections/AboutusTrusted";
import CertAndComp from "@/components/sections/CertAndComp";
import CompanyBg from "@/components/sections/companyBg";
import CTA from "@/components/sections/CTA";
import Statistics from "@/components/sections/Statistics";
import Whatdrives from "@/components/sections/Whatdrives";
import Footer from "@/components/shared/Footer";

export default function AboutPage() {
  return (
    <main>
      <Aboutus />
      <Whatdrives />
      <CompanyBg />
      <Statistics />
      <AboutusTrusted />
      <CertAndComp />
      <CTA className="mb-[-128px] lg:mb-0"/>
      <Footer />
    </main>
  );
}

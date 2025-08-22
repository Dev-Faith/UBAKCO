import Image from "next/image";
import FeatureCard from "../ui/cards/FeatureCard";

export default function Features() {
  const featuresCardItems = [
    {
      icon: "/icons/Nationwide.png",
      title: "Nationwide Delivery",
      desc: "Comprehensive logistics coverage across all 36 states with guaranteed delivery timelines.",
      subDesc: "All 36 states coverage, E-commerce integration, Bulk shipping rates, API Connectivity",
      separator: true
    },
    {
      icon: "/icons/Coporate-cargo.png",
      title: "Corporate cargo",
      desc: "Specialized solutions for businesses with volume discounts and dedicated account management.",
      subDesc: "Same-day delivery options, Bulk shipping discounts, Dedicated account management, Real-time tracking",
      separator: false
    },
    {
      icon: "/icons/Haulage.png",
      title: "Haulage Services",
      desc: "Heavy-duty transportation for industrial equipment and bulk cargo with specialized vehicles.",
      subDesc: "Heavy machinery transport, Construction materials, Industrial equipment, Specialized vehicles",
      separator: true
    },
    {
      icon: "/icons/import.png",
      title: "Import/Export",
      desc: "Seamless international shipping with customs clearance and documentation support.",
      subDesc: "Customs clearance, International shipping, Documentation support, Duty management",
      separator: false
    },
  ]
  return (
    <section className="bg-[#EFEFEF] 2xl:w-screen rounded-tl-[50px] pb-[113px] rounded-tr-[50px] overflow-hidden">
      <div className="relative  pt-[150px]  pl-[60px] 2xl:pl-[120px] flex items-start justify-between overflow-hidden">
        <div className="left flex flex-col gap-[64px] ">
          <h1 className="text-[75px]/[94px] font-bold tracking-[0.02em] w-[918px] font-display text-[#000000] z-9 ">
            Complete Logistics Solutions
          </h1>
          <p className="font-sans text-[#323232] text-[28px] w-[516px]">
            Ubakco offers tailored logistics built on trust and performance.
            Every delivery, big or small is managed with the precision our
            clients expect.
          </p>
        </div>
        <div className="overflow-hidden absolute w-[600px] h-full bg-[#EFEFEF] top-0 right-[-64px]">
          <Image
            src="/images/Logomark.png"
            alt="Ubakco Logo"
            width={793}
            height={752}
            className=" w-[700px] h-[752px] soft-light-effect absolute right-0 top-[-150px]"
          />
        </div>
      </div>
      <div className="px-[60px] w-full mt-[100px] flex justify-center">
        <div className="separator w-[1800px] mx-auto border-t border-[#CACACA] px-[20px] py-[75px] grid grid-cols-2 gap-y-[115px] relative justify-items-center ">
          {featuresCardItems.map((item, index)=><FeatureCard key={index} icon={item.icon} title={item.title} desc={item.desc} subDesc={item.subDesc} separator={item.separator}/>)}
           <div className="separator h-[1px] absolute w-full bg-[#CACACA] top-[50%]"></div>
           <div className="separator h-[1px] absolute w-full bg-[#CACACA] bottom-0"></div>
        </div>
      </div>
    </section>
  );
}

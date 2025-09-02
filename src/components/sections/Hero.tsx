import Image from "next/image";
import { Button } from "../ui/buttons/Button";

export default function Hero() {
  return (
    <section className="sticky top-0 bg-[#DCDEE0] w-full xl:w-screen xl:w-[1440px] h-screen xl:h-[872px] flex overflow-hidden -z-10 justify-center">
      <div className="lg:flex w-full xl:w-[1440px]">
        <Image
          src="/images/gradient.png"
          alt="gradient"
          fill
          className="object-cover fixed pointer-events-none z-[8]"
        />
        <div className="left-hero w-full h-[60%] lg:h-full px-[16px] lg:px-[60px] pt-[40%] lg:pt-[201px] pb-[130px] flex flex-col justify-between-[48px]">
          <div className=" w-[343px] lg:w-[559px] flex flex-col gap-[32px] lg:gap-[48px]">
            <h1 className="font-display text-[32px]/[41.6px] lg:text-[75px]/[82px] font-bold text-[#1C1C1C] tracking-[0.02em]">
              Ubakco delivers from airport to anywhere
            </h1>
            <p className="font-sans text-[#323232] text-[14px]/[21px] lg:text-[20px]/[30px]">
              From standard delivery to white-glove logistics. We move goods
              with precision, care, and a commitment to excellence across
              Nigeria and beyond.
            </p>
            <Button className="flex items-center gap-[12px] w-[209px] h-[55px]">
              Request a Quote{" "}
              <Image
                src="/icons/arrow-angled.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
        <div className=" h-[40%] lg:h-full w-full flex relative overflow-hidden">
          <Image
            src="/images/hero-img.png"
            alt="Hero Image"
            width={725}
            height={1024}
            className="w-full h-full relative mt-[92px] top-[-64px] lg:mt-0 lg:top-[64px] object-cover"
          />
          <Image
            src="/images/dash.png"
            alt="dash"
            width={100}
            height={100}
            className="w-[20px] h-screen xl:h-[872px] left-[10%] lg:left-0 lg:right-[98%] top-[-115%] lg:top-0  rotate-90 lg:rotate-0 absolute"
          />
        </div>
      </div>
    </section>
  );
}

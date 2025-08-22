import Image from "next/image";
import { Button } from "../ui/buttons/Button";

export default function Hero() {
  return (
    <section className="sticky top-0 bg-[#DCDEE0] w-full xl:w-screen xl:w-[1440px] h-screen xl:h-[872px] flex overflow-hidden -z-10 xl:justify-center">
      <div className="flex w-full xl:w-[1440px]">
        <Image
          src="/images/gradient.png"
          alt="gradient"
          fill
          className="object-cover fixed pointer-events-none"
        />
        <div className="left-hero w-full h-full px-[60px] pt-[180px] pb-[130px] flex flex-col justify-between-[48px]">
          <div className="w-[559px] flex flex-col gap-[48px]">
            <h1 className="font-display text-[75px]/[82px] font-bold text-[#FFFFFF] tracking-[0.02em]">
              Ubakco delivers from airport to anywhere
            </h1>
            <p className="font-sans text-[#323232] text-[20px] text-[#323232]">
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
        <div className="h-full w-full flex relative">
          <Image
            src="/images/hero-img.png"
            alt="Hero Image"
            width={725}
            height={1024}
            className="w-full h-full relative top-[64px] object-cover"
          />
          <Image
            src="/images/dash.png"
            alt="dash"
            width={100}
            height={100}
            className="w-[20px] h-screen xl:h-[872px] right-[98%] absolute"
          />
        </div>
      </div>
    </section>
  );
}

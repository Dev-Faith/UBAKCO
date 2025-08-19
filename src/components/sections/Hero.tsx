import Image from "next/image";
import { Button } from "../ui/buttons/Button";

export default function Hero() {
  return (
    <section className="bg-[#DCDEE0] w-full h-full flex overflow-hidden relative">
      <Image src="/images/gradient.png" alt="gradient" fill className="object-cover fixed pointer-events-none" />
      <div className="left-hero w-full h-full px-[60px] pt-[180px] pb-[130px] flex flex-col justify-between-[48px]">
        <div className="w-[559px] flex flex-col gap-[48px]">
          <h1 className="font-display text-[75px]/[82px] font-bold text-[#FFFFFF] tracking-[0.02em]">
          Ubakco delivers from airport to anywhere
        </h1>
        <p className="font-sans text-[#323232] text-[20px]">
          From standard delivery to white-glove logistics. We move goods with
          precision, care, and a commitment to excellence across Nigeria and
          beyond.
        </p>
        <Button className="flex items-center gap-[12px] w-[209px]">
          Request a Quote{" "}
          <Image
            src="/images/arrow-angled.png"
            alt="arrow"
            width={24}
            height={24}
          />
        </Button>
        </div>
      </div>
      <div className="h-full w-full flex relative">
      <Image src="/images/Hero-image.png" alt="Hero Image" width={725} height={1024} className="w-full h-full relative top-[64px] object-cover" />
      <Image src="/images/dash.png" alt="dash" width={100} height={100} className="w-[20px] h-[802px] fixed" />
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "../ui/buttons/Button";
import { Navbar } from "../ui/Navbar";

export default function Header() {
  return (
    <header className=" flex items-center justify-between px-[60px] py-[24px] bg-white/20 backdrop-blur-[40px] fixed shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] z-[10] w-full">
      <Image src="/images/logo.png" alt="UBAKCO" width={153} height={40} />
      <Navbar />
      <div>
        <Button variant="secondary">Track package</Button>
        <Button className="ml-2">Request a Quote</Button>
      </div>
    </header>
  );
}

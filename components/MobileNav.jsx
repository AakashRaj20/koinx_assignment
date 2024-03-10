import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="flex lg:hidden bg-white justify-between px-5 py-5 items-center">
      <Link href="/">
        <p className="text-2xl font-bold">Koinx</p>
      </Link>
      <Sheet className="flex flex-col justify-center items-center">
        <SheetTrigger asChild>
          <AlignJustify className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <Button variant="ghost" className="font-bold text-base active:border-none">
            Crypto Taxes
          </Button>
          <Button variant="ghost" className="font-bold text-base">
            Free Tools
          </Button>
          <Button variant="ghost" className="font-bold text-base">
            Resource Center
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-400 font-bold text-base">
            Get Started
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

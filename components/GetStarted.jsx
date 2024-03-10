import Image from "next/image";
import { Button } from "./ui/button";
import {ArrowRight} from "lucide-react";

const GetStarted = () => {
  return (
    <div className="bg-blue-700 text-white text-center py-6 md:py-12 md:px-24 px-3 rounded-2xl  flex flex-col items-center gap-y-5">
      <div className="flex flex-col-reverse md:flex-col justify-center items-center w-full gap-y-5">
        <div className="flex flex-col gap-y-5">
          <p className="text-xl md:text-3xl font-bold tracking-wider md:leading-[3rem]">
            Get Started with KoinX for FREE
          </p>
          <p className="font-normal text-[0.85rem] md:text-sm tracking-wider md:leading-7 text-center">
            With our range of features that you can equip for <br /> free, KoinX
            allows you to be more educated and <br /> aware of your tax reports.
          </p>
        </div>
        <div className="relative aspect-square max-w-52 w-full">
          <Image
            src="/images/get_started_img.svg"
            alt="Get Started"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <Button className="bg-white text-black text-xl flex gap-x-3 py-6">
        Get Started for free <ArrowRight />
      </Button>
    </div>
  );
};

export default GetStarted;

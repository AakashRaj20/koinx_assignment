import Image from "next/image";
import { Button } from "./ui/button";
import ArrowRight from "./icons/ArrowRight";

const GetStarted = () => {
  return (
    <div className="bg-blue-700 text-white text-center py-12 px-24 rounded-2xl flex flex-col items-center gap-y-5">
      <p className="text-3xl font-bold tracking-wider leading-[3rem]">
        Get Started with KoinX for FREE
      </p>
      <p className="font-normal tracking-wider leading-7">
        With our range of feature that you can for free, KoinX allows you to be
        more educated and aware of your tax reports.
      </p>
      <Image
        className="my-4"
        src="/images/get_started_img.svg"
        alt="Get Started"
        width={200}
        height={200}
      />
      <Button className="bg-white text-black text-xl flex gap-x-3 py-6">
        Get Started for free <ArrowRight />
      </Button>
    </div>
  );
};

export default GetStarted;

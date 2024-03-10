import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const AboutCoin = ({ coinData }) => {
  return (
    <div className="options-tab-style">
      <h2 className="text-4xl font-bold">
        {coinData && `About ${coinData.name}`}
      </h2>
      <h3 className="text-2xl font-bold">
        {coinData && `What is ${coinData.name}?`}
      </h3>
      <p className="text-[#3E424A]">
        {coinData && coinData.description.en.substring(0, 700)}.
      </p>
      <div className="flex flex-col gap-y-4 md:border-y-2 md:py-5">
        <h3 className="text-2xl font-bold">Lorem ipsum dolor sit amet elit</h3>
        <div className="text-[#3E424A] flex flex-col gap-y-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="md:border-b-2 md:pb-5 flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold">{`Already Holding ${
          coinData && coinData.name
        }?`}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="about-already-have-account-divs bg-gradient-to-br from-[#76ECA5] to-[#1363AC]">
            <Image
              className="rounded-lg aspect-square"
              src="/images/computer_img_1.jpeg"
              alt="computer_img_1"
              width={110}
              height={50}
            />
            <div className="flex flex-col gap-y-3 items-start">
              <p className="text-white font-bold text-2xl">
                Calculate your Profits
              </p>
              <Button className="bg-white rounded-xl text-black text-md flex gap-x-2">
                Check Now <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="about-already-have-account-divs bg-gradient-to-br from-[#FF9764] to-[#F13C37]">
            <Image
              className="rounded-lg aspect-square"
              src="/images/computer_img_2.jpeg"
              alt="computer_img_2"
              width={110}
              height={100}
            />
            <div className="flex flex-col gap-y-3 items-start">
              <p className="text-white font-bold text-2xl">
                Calculate your tax liability
              </p>
              <Button className="bg-white rounded-xl text-black text-md flex gap-x-2">
                Check Now <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#3E424A] hidden md:flex">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>
    </div>
  );
};

export default AboutCoin;

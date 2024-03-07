import Image from "next/image";
import DivSlider from "./DivSlider";

const Sentiment = () => {
  const divs = [
    {
      icon: "/images/newspaper.png",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "/images/rocket-launch.png",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "/images/planning.png",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "/images/newspaper.png",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="bg-white rounded-lg p-10 flex flex-col gap-y-6">
      <h2 className="text-4xl font-bold">Sentiment</h2>
      <div className="flex gap-x-3">
        <p className="text-[#44475B] text-2xl font-bold">Key Events</p>
        <Image
          src="/images/info-icon.svg"
          alt="info-icon"
          width={30}
          height={30}
        />
      </div>
      <DivSlider arr={divs} />
      <div className="flex gap-x-3">
        <p className="text-[#44475B] text-2xl font-bold">Analyst Estimates</p>
        <Image
          src="/images/info-icon.svg"
          alt="info-icon"
          width={30}
          height={30}
        />
      </div>
      <div className="flex items-center gap-x-16">
        <div className="rounded-full bg-[#EBF9F4] p-12 flex items-center justify-center w-60 h-60">
          <p className="text-6xl font-medium text-green-500">76%</p>
        </div>
        <div className="flex flex-col gap-6 w-full text-center text-xl text-[#999AA5]">
          <div className="flex items-center gap-x-10">
            <p>Buy</p>
            <div className="bg-green-500 rounded-md h-5 w-[35rem]"></div>
            <p>76%</p>
          </div>
          <div className="flex items-center gap-x-8">
            <p>Hold</p>
            <div className="bg-[#C7C8CE] rounded-md h-5 w-20"></div>
            <p>8%</p>
          </div>
          <div className="flex items-center gap-x-10">
            <p>Sell</p>
            <div className="bg-red-500 w-60 rounded-md h-5"></div>
            <p>16%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;

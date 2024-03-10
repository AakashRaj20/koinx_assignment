import Image from "next/image";
import KeyEventsSlider from "./KeyEventsSlider";

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
    <div className="options-tab-style">
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
      <KeyEventsSlider arr={divs} />
      <div className="flex gap-x-3">
        <p className="text-[#44475B] text-2xl font-bold">Analyst Estimates</p>
        <Image
          src="/images/info-icon.svg"
          alt="info-icon"
          width={30}
          height={30}
        />
      </div>
      <div className="analyst-estimates-buy-sell-hold">
        <div>
          <div className="analyst-estimates-circular-div">
            <p className="text-3xl lg:text-6xl font-medium text-green-500">
              76%
            </p>
          </div>
        </div>
        <div className="analyst-estimates-div">
          <div className="flex items-center gap-x-2 md:gap-x-10">
            <p>Buy</p>
            <div className="bg-green-500 analyst-estimates-buy-sell-hold-indicators max-w-[35rem]"></div>
            <p>76%</p>
          </div>
          <div className="flex items-center gap-x-1 md:gap-x-8">
            <p>Hold</p>
            <div className="bg-[#C7C8CE] analyst-estimates-buy-sell-hold-indicators max-w-20"></div>
            <p>8%</p>
          </div>
          <div className="flex items-center gap-x-2 md:gap-x-10">
            <p>Sell</p>
            <div className="bg-red-500 max-w-60 analyst-estimates-buy-sell-hold-indicators"></div>
            <p>16%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;

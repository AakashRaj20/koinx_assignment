import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomSlider from "./CustomSlider";
import Image from "next/image";

const OptionsTabs = ({ coinData }) => {
  const TabTriggers = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Teams",
    "Technicals",
    "Tokenomics",
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const calculateYearDifference = (dateString) => {
    const currentYear = new Date().getFullYear();
    const yearFromDateString = new Date(dateString).getFullYear();
    return currentYear - yearFromDateString;
  };

  const fundamentalsTable1 = [
    {
      name: `${coinData && coinData.name}  Price`,
      value: coinData && `$${coinData.market_data.current_price.usd}`,
    },
    {
      name: "24h Low / 24h High",
      value: `$${coinData && coinData.market_data.low_24h.usd} / $${
        coinData && coinData.market_data.high_24h.usd
      }`,
    },
    {
      name: "7d Low / 7d High",
      value: `$${
        coinData && coinData.market_data.price_change_percentage_7d
      } / $${coinData && coinData.market_data.price_change_percentage_7d}`,
    },
    {
      name: "Trading Volume",
      value: `$${coinData && coinData.market_data.total_volume.usd}`,
    },
    {
      name: "Market Cap Rank",
      value: coinData && `#${coinData.market_data.market_cap_rank}`,
    },
  ];

  const fundamentalsTable2 = [
    {
      name: "Market Cap",
      value: `$${coinData && coinData.market_data.market_cap.usd}`,
    },
    {
      name: "Market Cap Dominance",
      value: `${
        coinData && coinData.market_data.market_cap_change_percentage_24h
      }%`,
    },
    {
      name: "Volume / Market Cap",
      value:
        coinData &&
        (
          coinData.market_data.total_volume.usd /
          coinData.market_data.market_cap.usd
        ).toFixed(4),
    },
    {
      name: "All Time High",
      value: `$${coinData && coinData.market_data.ath.usd}`,
      change:
        coinData &&
        `${coinData.market_data.ath_change_percentage.usd.toFixed(1)}%`,
      date: coinData && formatDate(coinData.market_data.ath_date.usd),
      diff:
        coinData &&
        `(about ${calculateYearDifference(
          coinData.market_data.ath_date.usd
        )} years)`,
      color: "text-red-500",
    },
    {
      name: "All Time Low",
      value: `$${coinData && coinData.market_data.atl.usd}`,
      change:
        coinData &&
        `${coinData.market_data.atl_change_percentage.usd.toFixed(1)}%`,
      date: coinData && formatDate(coinData.market_data.atl_date.usd),
      diff:
        coinData &&
        `(over ${calculateYearDifference(
          coinData.market_data.atl_date.usd
        )} years)`,
      color: "text-green-500",
    },
  ];

  return (
    <Tabs defaultValue="overview" className="bg-none">
      <TabsList className="grid w-full grid-cols-7">
        {TabTriggers.map((trigger, index) => (
          <TabsTrigger key={index} value={trigger.toLowerCase()}>
            {trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="overview">
        <div className="bg-white flex flex-col p-10 gap-y-6 rounded-lg mt-8">
          <p className="text-2xl font-bold">Performance</p>
          <div className="flex justify-between items-center">
            <p className="text-start text-base font-light leading-8 text-[#44475B]">
              Today's Low <br />
              <span className="font-medium text-[#484B5F]">
                {coinData && coinData.market_data.low_24h.usd}
              </span>
            </p>
            <CustomSlider
              low={coinData && coinData.market_data.low_24h.usd}
              high={coinData && coinData.market_data.high_24h.usd}
            />
            <p className="text-end leading-8 text-base font-light text-[#44475B]">
              Today's High <br />
              <span className="font-medium text-[#484B5F]">
                {coinData && coinData.market_data.high_24h.usd}
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-start text-base font-light  leading-8 text-[#44475B]">
              52W Low <br />
              <span className="font-medium font-[#484B5F]">
                {coinData && coinData.market_data.low_24h.usd}
              </span>
            </p>
            <CustomSlider
              low={coinData && coinData.market_data.low_24h.usd}
              high={coinData && coinData.market_data.high_24h.usd}
            />
            <p className="text-end text-base font-light leading-8 text-[#44475B]">
              52W High <br />
              <span className="font-medium font-[#484B5F]">
                {coinData && coinData.market_data.high_24h.usd}
              </span>
            </p>
          </div>
          <div className="my-12 flex flex-col gap-y-6">
            <div className="flex gap-x-3">
              <p className="text-2xl font-bold">Fundamentals</p>
              <Image
                src="/images/info-icon.svg"
                alt="info-icon"
                width={30}
                height={30}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-32">
              <div>
                {fundamentalsTable1.map((data, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-[#E5E5E5] py-6"
                  >
                    <p className="text-base font-light text-[#44475B]">
                      {data.name}
                    </p>
                    <p className="text-base font-medium">{data.value}</p>
                  </div>
                ))}
              </div>
              <div>
                {fundamentalsTable2.map((data, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-[#E5E5E5] py-[1.2rem]"
                  >
                    <p className="text-base font-light text-[#44475B]">
                      {data.name}
                    </p>
                    <div>
                      <p className="text-base text-end font-medium">
                        {data.value}
                        <span className={data.color}>{" " + data.change}</span>
                      </p>
                      <p className="text-base font-light text-[#44475B]">
                        {data.date}
                        <span className="text-[#44475B]"> {data.diff}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      {TabTriggers.map((trigger, index) => (
        <TabsContent key={index} value={trigger.toLowerCase()}>
          <div className="bg-white flex flex-col p-10 gap-y-6 rounded-lg mt-8">
            <p className="text-2xl font-bold">{trigger}</p>
            <p className="text-base font-light text-[#44475B]">
              {coinData && coinData.description.en}
            </p>
          </div>
        </TabsContent>
      
      ))}
    </Tabs>
  );
};

export default OptionsTabs;

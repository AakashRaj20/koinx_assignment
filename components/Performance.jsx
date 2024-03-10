import CustomRangeSlider from "./CustomRangeSlider";
import Image from "next/image";

const Performance = ({ coinData }) => {
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

  const fundamentalsTable1 = coinData && [
    {
      name: `${coinData && coinData.name}  Price`,
      value: `$${coinData.market_data.current_price.usd.toLocaleString()}`,
    },
    {
      name: "24h Low / 24h High",
      value: `$${coinData.market_data.low_24h.usd.toLocaleString()} / $${coinData.market_data.high_24h.usd.toLocaleString()}`,
    },
    {
      name: "7d Low / 7d High",
      value: `$${coinData.market_data.price_change_percentage_7d.toLocaleString()} / $${coinData.market_data.price_change_percentage_7d.toLocaleString()}`,
    },
    {
      name: "Trading Volume",
      value: `$${coinData.market_data.total_volume.usd.toLocaleString()}`,
    },
    {
      name: "Market Cap Rank",
      value: `#${coinData.market_data.market_cap_rank.toLocaleString()}`,
    },
  ];

  const fundamentalsTable2 = coinData && [
    {
      name: "Market Cap",
      value: `$${coinData.market_data.market_cap.usd.toLocaleString()}`,
      span: false,
    },
    {
      name: "Market Cap Dominance",
      value: `${coinData.market_data.market_cap_change_percentage_24h}%`,
      span: false,
    },
    {
      name: "Volume / Market Cap",
      value: (
        coinData.market_data.total_volume.usd /
        coinData.market_data.market_cap.usd
      )
        .toFixed(4)
        .toLocaleString(),
      span: false,
    },
    {
      name: "All Time High",
      value: `$${coinData.market_data.ath.usd.toLocaleString()}`,
      change: `${coinData.market_data.ath_change_percentage.usd.toFixed(1)}%`,
      date: coinData && formatDate(coinData.market_data.ath_date.usd),
      diff:
        coinData &&
        `(about ${calculateYearDifference(
          coinData.market_data.ath_date.usd
        )} years)`,
      color: "text-red-500",
      span: true,
    },
    {
      name: "All Time Low",
      value: `$${coinData.market_data.atl.usd.toLocaleString()}`,
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
      span: true,
    },
  ];
  return (
    coinData && (
      <div className="options-tab-style mt-8">
        <p className="text-4xl font-bold">Performance</p>
        <div className="flex flex-col gap-y-14">
          <div className="flex justify-between items-center gap-x-5 md:gap-x-10">
            <div className="flex-grow whitespace-nowrap">
              <p className="text-start text-sm md:text-base font-light md:leading-10 text-[#44475B]">
                Today's Low <br />
                <span className="font-medium text-[#484B5F]">
                  {coinData.market_data.low_24h.usd.toLocaleString()}
                </span>
              </p>
            </div>
            <CustomRangeSlider
              min={coinData && coinData.market_data.low_24h.usd}
              max={coinData && coinData.market_data.high_24h.usd}
            />
            <div className="flex-grow whitespace-nowrap">
              <p className="text-end md:leading-10 text-sm md:text-base font-light text-[#44475B]">
                Today's High <br />
                <span className="font-medium text-[#484B5F]">
                  {coinData.market_data.high_24h.usd.toLocaleString()}
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-x-10 md:gap-x-16">
            <div className="flex-grow whitespace-nowrap">
              <p className="text-start text-sm md:text-base font-light md:leading-10 text-[#44475B]">
                52W Low <br />
                <span className="font-medium font-[#484B5F]">
                  {coinData && coinData.market_data.low_24h.usd.toLocaleString()}
                </span>
              </p>
            </div>
            <CustomRangeSlider
              min={coinData && coinData.market_data.low_24h.usd}
              max={coinData && coinData.market_data.high_24h.usd}
            />
            <div className="flex-grow whitespace-nowrap">
              <p className="text-end text-sm md:text-base font-light md:leading-10 text-[#44475B]">
                52W High <br />
                <span className="font-medium font-[#484B5F]">
                  {coinData && coinData.market_data.high_24h.usd.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="my-12 flex flex-col gap-y-6">
          <div className="flex gap-x-3">
            <p className="text-2xl text-[#44475B] font-bold">Fundamentals</p>
            <Image
              src="/images/info-icon.svg"
              alt="info-icon"
              width={30}
              height={30}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32">
            <div>
              {fundamentalsTable1.map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#E5E5E5] px py-6"
                >
                  <p className="text-base font-light text-[#44475B] text-start">
                    {data.name}
                  </p>
                  <p className="text-base font-medium text-end">{data.value}</p>
                </div>
              ))}
            </div>
            <div>
              {fundamentalsTable2.map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#E5E5E5] px-1 py-[1.2rem]"
                >
                  <p className="text-base font-light text-[#44475B] text-start">
                    {data.name}
                  </p>
                  <div>
                    <p className="text-base text-end font-medium">
                      {data.value}
                      {data.span && (
                        <span className={data.color}>{" " + data.change}</span>
                      )}
                    </p>
                    <p className="text-sm lg:text-base font-light text-[#44475B] text-end">
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
    )
  );
};

export default Performance;

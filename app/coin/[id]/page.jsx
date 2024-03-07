"use client";

import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCoinInfo, getOneCoinInfo } from "@/apiCalls/trendingApi";
import TradingViewWidget from "@/components/Chart";
import GetStarted from "@/components/GetStarted";
import TopThreeTrending from "@/components/TopThreeTrending";
import OptionsTabs from "@/components/OptionsTabs";
import Sentiment from "@/components/Sentiment";

const Coin = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const { id } = params;
  console.log(name);

  const [coinInfo, setCoinInfo] = useState(null);
  const [oneCoinInfo, setOneCoinInfo] = useState(null);

  const fetchCoininfo = async () => {
    const coinInfoData = await getCoinInfo(id);
    setCoinInfo(coinInfoData);
  };

  const fetchOneCoinInfo = async () => {
    const oneCoinInfoData = await getOneCoinInfo(id);
    setOneCoinInfo(oneCoinInfoData);
  };

  useEffect(() => {
    fetchOneCoinInfo();
    fetchCoininfo();
  }, [id]);

  console.log(coinInfo);
  console.log(oneCoinInfo);
  return (
    <div className="px-10 py-5 flex flex-col gap-y-5">
      <p className="font-light text-black/60">
        Cryptocurrencies {" >> "}
        <span className="font-medium text-black">{name}</span>
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="grid col-span-8 gap-y-5">
          <TradingViewWidget />
          <OptionsTabs coinData={oneCoinInfo} />
          <Sentiment />
        </div>
        <div className="grid col-span-4">
          <div className="flex flex-col items-start gap-y-5">
            <GetStarted />
            <TopThreeTrending />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;

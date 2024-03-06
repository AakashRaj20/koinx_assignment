"use client";

import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCoinInfo } from "@/apiCalls/trendingApi";
import TradingViewWidget from "@/components/Chart";
import GetStarted from "@/components/GetStarted";
import TopThreeTrending from "@/components/TopThreeTrending";
import OptionsTabs from "@/components/OptionsTabs";

const Coin = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const { id } = params;
  console.log(name);

  const [coinInfo, setCoinInfo] = useState(null);

  useEffect(() => {
    const fetchCoininfo = async () => {
      const coinInfoData = await getCoinInfo(id);
      setCoinInfo(coinInfoData);
    };

    fetchCoininfo();
  }, [id]);
  console.log(coinInfo);
  return (
    <div className="px-10 py-5 flex flex-col gap-y-5">
      <p className="font-light text-black/60">
        Cryptocurrencies {" >> "} 
        <span className="font-medium text-black">{name}</span>
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="grid col-span-8 gap-y-5">
          <TradingViewWidget />
          <OptionsTabs />
        </div>
        <div className="grid col-span-4 gap-y-5">
          <GetStarted />
          <TopThreeTrending />
        </div>
      </div>
    </div>
  );
};

export default Coin;

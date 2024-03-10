"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCoinInfo, getOneCoinInfo } from "@/apiCalls/trendingApi";
import TradingViewWidget from "@/components/Chart";
import GetStarted from "@/components/GetStarted";
import TopThreeTrending from "@/components/TopThreeTrending";
import OptionsTabs from "@/components/OptionsTabs";
import Sentiment from "@/components/Sentiment";
import AboutCoin from "@/components/AboutCoin";
import Tokenomics from "@/components/Tokenomics";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const Coin = () => {
  const params = useParams();
  const { id } = params;

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

  return (
    <div className="pt-5 flex flex-col gap-y-5">
      <div className="px-2 lg:px-10">
        <div className="flex font-light text-black/60 mb-4 gap-x-1">
          <Link href="/">
            <p>Cryptocurrencies</p>
          </Link>
          <ChevronsRight />
          <p className="font-medium text-black">
            {oneCoinInfo && oneCoinInfo.name}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col gap-y-5">
              <TradingViewWidget />
              <OptionsTabs coinData={oneCoinInfo} />
              <Sentiment />
              <AboutCoin coinData={oneCoinInfo} />
              <Tokenomics />
              <Team />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-col items-start gap-y-5">
              <div className="w-full">
                <GetStarted />
              </div>
              <div className="w-full hidden lg:flex">
                <TopThreeTrending />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex">
        <Footer />
      </div>
      <div className="flex md:hidden w-full">
        <TopThreeTrending />
      </div>
    </div>
  );
};

export default Coin;

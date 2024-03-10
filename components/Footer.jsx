"use client";

import CoinsSlider from "./CoinsSlider";
import { getCoins } from "@/apiCalls/trendingApi";
import { useEffect, useState } from "react";

const Footer = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchCoins = async () => {
      const coinsData = await getCoins();
      setCoins(coinsData);
    };
    fetchCoins();
  }, []);
  return (
    <div className="bg-white gap-12 flex flex-col overflow-hidden md:px-10 py-4 md:py-16 text-2xl md:text-4xl font-medium">
      <div className="flex flex-col gap-y-3">
        <h2>You May Also Like</h2>
        <CoinsSlider arr={coins} />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2>Trending Coins</h2>
        <CoinsSlider arr={coins} />
      </div>
    </div>
  );
};

export default Footer;

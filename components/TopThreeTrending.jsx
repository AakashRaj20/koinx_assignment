"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { getCoins } from "@/apiCalls/trendingApi";
import TriangleUp from "./icons/TriangleUp";

const TopThreeTrending = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const coinsData = await getCoins();
      setCoins(coinsData);
    };
    coins.splice(3);
    fetchCoins();
  }, []);

  console.log(coins.splice(3));

  return (
    <div className="bg-white rounded-xl p-7 flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold">Trending Coins {"(24h)"}</h2>
      <div className="flex flex-col gap-y-4">
        {coins.map((coin, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={coin.item.small}
                alt={coin.item.name}
                width={50}
                height={50}
              />
              <p className="font-medium">
                {coin.item.name + " " + `(${coin.item.symbol})`}
              </p>
            </div>
            <Button className="text-[#14B079] bg-[#EBF9F4] p-2">
              <TriangleUp />
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopThreeTrending;
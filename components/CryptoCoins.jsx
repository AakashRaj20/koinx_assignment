"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCoinsList } from "@/apiCalls/trendingApi";
import Loading from "./Loading";

const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      const coinsData = await getCoinsList();
      setCoins(coinsData);
      setIsLoading(false);
    };

    fetchCoins();
    coins && coins.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const headings = ["Symbol", "Name"];

  return isLoading ? (
    <Loading />
  ) : (
    <div className="m-4 bg-white py-6 px-11">
      <div className="grid grid-cols-2 gap-4 items-center mb-5">
        {headings.map((heading, index) => (
          <p key={index} className="text-xl font-bold">
            {heading}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-y-5">
        {coins &&
          coins.map((coin, index) => (
            <Link href={`/coin/${coin.id}`} key={index}>
              <div className="grid grid-cols-2 gap-4 items-center cursor-pointer">
                <p>{coin.symbol}</p>
                <p>{coin.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CryptoCoins;

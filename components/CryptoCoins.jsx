"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCoinsList } from "@/apiCalls/trendingApi";

const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const coinsData = await getCoinsList();
      setCoins(coinsData);
    };

    fetchCoins();
    console.log("called");
  }, []);

  coins.sort((a,b) => a.name.localeCompare(b.name));

  const router = useRouter();

  const handleClick = (id, name) => {
    router.push(`/coin/${id}?name=${name}`);
  };

  const headings = ["Symbol", "Name"];

  return (
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
            <div
              key={index}
              className="grid grid-cols-2 gap-4 items-center cursor-pointer"
              onClick={() => handleClick(coin.id, coin.name)}
            >
              <p>{coin.symbol}</p>
              <p>{coin.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CryptoCoins;

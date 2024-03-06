"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCoins } from "@/apiCalls/trendingApi";

const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const coinsData = await getCoins();
      setCoins(coinsData);
    };

    fetchCoins();
    console.log("called");
  }, []);

  const router = useRouter();

  const handleClick = (id, name) => {
    router.push(`/coin/${id}?name=${name}`);
  };

  //some of the prices are in the format $1<sub title="United States Dollar">USD</sub> from the API response so we need to format them
  const formatPrice = (priceString) => {
    const regex = /\$(.*?)<sub title="(.*?)">(.*?)<\/sub>(.*)/;
    const matches = regex.exec(priceString);
    if (matches) {
      const [_, dollars, sub, decimal, rest] = matches;
      return `${"$" + dollars}.${decimal}${rest}`;
    }
    return priceString;
  };

  const headings = [
    "Logo",
    "Name",
    "Symbol",
    "Price",
    "Graph",
    "Market Cap",
    "Price Change",
  ];

  return (
    <div className="m-4 bg-white py-6 px-11">
      <div className="grid grid-cols-7 gap-4 items-center mb-5">
        {headings.map((heading, index) => (
          <p key={index} className="text-xl font-bold">
            {heading}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-y-5">
        {coins &&
          coins.map((coin, index) => (
            // <Link
            //   href={`/coin/${coin.item.id}?name=${coin.item.name}`}
            //   as={`/coin/${coin.item.id}`}
            // >
              <div
                key={index}
                className="grid grid-cols-7 gap-4 items-center cursor-pointer"
                onClick={() => handleClick(coin.item.id, coin.item.name)}
              >
                <Image
                  src={coin.item.large}
                  alt={coin.item.name}
                  width={50}
                  height={50}
                />
                <p>{coin.item.name}</p>
                <p>{coin.item.symbol}</p>
                <p>{formatPrice(coin.item.data.price)}</p>
                <Image
                  src={coin.item.data.sparkline}
                  alt={coin.item.name}
                  width={50}
                  height={50}
                />
                <p>{coin.item.data.market_cap}</p>
                <p>
                  {coin.item.data?.price_change_percentage_24h.usd.toFixed(2)}
                </p>
              </div>
            // </Link>
          ))}
      </div>
    </div>
  );
};

export default CryptoCoins;

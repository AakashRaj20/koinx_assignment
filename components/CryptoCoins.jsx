"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCoinsList } from "@/apiCalls/ApiCalls";
import SearchBar from "./SearchBar";
import { Input } from "./ui/input";
import Loading from "./Loading";

const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState("");
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

  // const searchCoins = coins.filter((coin) => {
  //   return (
  //     coin.name.toLowerCase().includes(value.toLowerCase()) ||
  //     coin.symbol.toLowerCase().includes(value.toLowerCase())
  //   );
  // });

  const handleChange = (event) => {
    setValue(event.target.value);
    //setCoins(searchCoins);
  };

  useEffect(() => {
    const searchCoins = async () => {
      if (value === "") {
        setIsLoading(true);
        const coinsData = await getCoinsList();
        setCoins(coinsData);
        setIsLoading(false);
      } else {
        const filteredCoins = coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(value.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(value.toLowerCase())
        );
        setCoins(filteredCoins);
      }
    };
    searchCoins();
  }, [value]);

  return (
    <div className="m-4 overflow-x-hidden bg-white py-6 px-8 md:px-11">
      <div className="flex justify-center items-center w-full">
        <Input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Search for a CoinName or Symbol..."
          className="search-bar"
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="m-4 bg-white py-6">
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
      )}
    </div>
  );
};

export default CryptoCoins;

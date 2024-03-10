"use client";

import CoinsSlider from "./CoinsSlider";
import { getCoins } from "@/apiCalls/ApiCalls";
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
    <div className="footer">
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

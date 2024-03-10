"use client";

import { useState, useEffect } from "react";
import { Input } from "./ui/input"

const SearchBar = ({coins}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <Input
        type="text"
        placeholder="Search for a CoinName or Symbol..."
        className="w-full bg-[#F5F5F5] p-3 rounded-lg text-sm font-light text-[#3E424A] active:border-none active:border-0"
      />
    </div>
  )
}

export default SearchBar

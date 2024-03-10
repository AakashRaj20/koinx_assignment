import React, { useState } from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Slider } from "./ui/slider";

const CustomSlider = ({ min, max }) => {
  const [value, setValue] = useState(0);
  console.log(value, min, max);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative w-full">
      <Slider
        defaultValue={[max / 3]}
       
        max={max}
        step={1}
        className="w-full"
      />

     
    </div>
  );
};

export default CustomSlider;

"use client";

import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";

const CustomRangeSlider = ({ min, max }) => {
  const [step, setStep] = useState(0.1);
  const [value, setValue] = useState((min + max) / 2);

  useEffect(() => {
    const difference = max - min;
     if (difference <= 5) {
      setStep(0.01);
    } else if (difference <= 10) {
      setStep(0.1);
    } else if (difference <= 100) {
      setStep(1);
    } else {
      setStep(10);
    }
    setValue((min + max) / 2);
  }, [min, max]);

  return (
    <ReactSlider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(value) => setValue(value)}
      trackClassName="customTrack"
      className="w-full rounded-lg h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
      thumbClassName="customThumb"
      renderThumb={(props, state) => (
        <div {...props}>
          <p className="text-[#adafb7] text-sm font-medium absolute left-1/2 transform translate-x-[-50%] top-5">{`$${state.valueNow}`}</p>
        </div>
      )}
    />
  );
};

export default CustomRangeSlider;

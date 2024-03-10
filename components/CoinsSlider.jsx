"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const CoinsSlider = ({ arr }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {arr &&
          arr.map((each, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-[45%] md:basis-1/3 lg:basis-1/5"
            >
              <div className="p-[0.15rem] md:p-1">
                <Card>
                  <CardContent className="flex flex-col items-start p-2 md:p-3 gap-3 md:pb-6">
                    <div className="flex gap-x-2 font-light text-sm items-center">
                      <div className="w-[10px] md:w-[25px]">
                        <Image
                          src={each.item.thumb}
                          alt={each.item.name}
                          width={25}
                          height={25}
                        />
                      </div>
                      <p className="text-[#3E424A] text-xs">
                        {each.item.symbol}
                      </p>
                      <Button
                        className={
                          each.item.data.price_change_percentage_24h.usd >= 0
                            ? "bg-green-100 text-green-500 hover:bg-green-100 p-0 md:p-1 text-xs w-[50px] h-[25px]"
                            : "bg-[#FEF0EE] text-red-500 hover:bg-red-200 p-0 md:p-1 text-xs w-[50px] h-[25px]"
                        }
                      >
                        {each.item.data.price_change_percentage_24h.usd >= 0
                          ? `+${each.item.data.price_change_percentage_24h.usd.toFixed(
                              2
                            ).toLocaleString()}`
                          : `${each.item.data.price_change_percentage_24h.usd.toFixed(
                              2
                            ).toLocaleString()}`}
                        %
                      </Button>
                    </div>
                    <p className="text-sm md:text-xl font-medium">
                      {each.item.data.price.substring(0, 9)}
                    </p>
                    <div className="flex item-center justify-center w-full pb-3 md:pb-0">
                      <Image
                        src={each.item.data.sparkline}
                        alt="sparkline"
                        width={200}
                        height={200}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious type="coinSlider" className="left-0 md:-left-3 top-24" />
      <CarouselNext type="coinSlider" className="right-0 md:-right-3 top-24" />
    </Carousel>
  );
};

export default CoinsSlider;

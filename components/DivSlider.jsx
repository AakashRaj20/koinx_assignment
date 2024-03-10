import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DivSlider = ({ arr }) => {
  console.log(arr);

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {arr &&
          arr.map((each, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-[95%] md:basis-[60%] lg:basis-[55%]"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="bg-[#EBF9F4] flex items-start text-[#3E424A] justify-center p-3 md:p-6 gap-x-4 md:pb-14">
                    <div className="max-w-[70px] w-full">
                      <Image
                        src={each.icon}
                        alt="icon"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="flex flex-col gap-y-3 text-sm lg:text-xl">
                      <h2 className="font-bold">{each.heading}</h2>
                      <p>{each.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default DivSlider;

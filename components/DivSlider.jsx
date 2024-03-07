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
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {arr.map((each, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-[55%]"
          >
            <div className="p-1">
              <Card>
                <CardContent className="bg-[#EBF9F4] flex items-start justify-center p-6 gap-x-4 pb-14">
                  <Image src={each.icon} alt="icon" width={70} height={70} />
                  <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl font-bold">{each.heading}</h2>
                    <p>{each.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default DivSlider;

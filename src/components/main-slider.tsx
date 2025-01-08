import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
  
  type SliderProps = {
    image: string;
    caption: string;
  }[];
  
  export function MainSlider({ images }: { images: SliderProps }) {
    return (
      <Carousel>
        <CarouselPrevious>
          <Button className="p-2 bg-white rounded-full">&lt;</Button>
        </CarouselPrevious>
  
        <CarouselContent className="flex sm:overflow-hidden md:overflow-visible ">
          {images.map((slide) => (
            <CarouselItem key={slide.image} className="md:basis-1/2 lg:basis-1/2">
              <div className="rounded-lg sm:overflow-hidden md:overflow-visible">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.image + 1}`}
                  className="object-cover rounded-t-2xl"
                  width={1000}
                  height={450}
                />
                <div className="p-5 px-22 bg-white text-center border border-gray-200 rounded-b-2xl">
                  <p className="text-primaryBlue text-sm font-normal">
                    {slide.caption}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
  
        <div>
          <CarouselNext>
            <Button className="bg-white rounded-full shadow-md">&gt;</Button>
          </CarouselNext>
        </div>
  
        <div className="flex justify-center mt-5 space-x-2">
          {images.map((slide) => (
            <span
              key={slide.image}
              className="inline-block w-2 h-2 bg-gray-300 rounded-full"
            />
          ))}
        </div>
      </Carousel>
    );
  }
  
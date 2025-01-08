import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

type DeviceSliderProps = {
  images: {
    image: string;
  }[];
};

export function DeviceSlider({ images }: DeviceSliderProps) {
  return (
    <Carousel>
      <CarouselPrevious className="md:hidden">
        <Button className="p-2 bg-white rounded-full shadow-md">&lt;</Button>
      </CarouselPrevious>

      <CarouselContent className="flex sm:overflow-hidden md:overflow-visible gap-4">
        {images.map((slide, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0 w-full md:basis-1/3"
          >
            <div className="rounded-lg shadow-md">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[340px] object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div>
        <CarouselNext className="md:hidden">
          <Button className="bg-white rounded-full shadow-md">&gt;</Button>
        </CarouselNext>
      </div>

      <div className="flex justify-center mt-4 space-x-2 md:hidden">
        {images.map((_, index) => (
          <span
            key={index}
            className="inline-block w-2 h-2 bg-gray-300 rounded-full"
          />
        ))}
      </div>
    </Carousel>
  );
}

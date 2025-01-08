import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  className?: string;
};

type GalleryProps = {
  gallery: GalleryItem[];
};

export function MainGallery({ gallery }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
      {gallery.map((item, index) => (
        <Card
          key={index}
          className={`overflow-hidden hover:opacity-90 transition-opacity ${
            item.className || ""
          } ${index === 0 ? "hidden sm:block" : ""}`}
        >
          <CardContent className="p-0 h-full">

            <Image
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

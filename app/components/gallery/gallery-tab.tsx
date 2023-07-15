import { cn } from "@/libs/utils";
import { Image } from "@/types";
import { Tab } from "@headlessui/react";
import NextImage from "next/image";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative aspect-square cursor-pointer items-center justify-center rounded-md flex bg-white">
      {({ selected }) => (
        <div>
          <span className="h-full w-full rounded-md overflow-hidden absolute inset-0 aspect-square">
            <NextImage
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;

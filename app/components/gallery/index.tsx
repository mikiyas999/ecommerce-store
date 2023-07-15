"use client";

import { Image } from "@/types";
import { Tab } from "@headlessui/react";
import NextImage from "next/image";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: Image[];
}
const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="flex  flex-col-reverse">
      <div className="w-full mt-6 mx-auto max-w-2xl hidden sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full ">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className=" aspect-square  relative h-full w-full rounded-lg overflow-hidden">
              <NextImage
                alt=""
                src={image.url}
                className="object-cover object-center"
                fill
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryItems, type GalleryItem } from "@/lib/data";
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

type Filter = "All" | "Food" | "Events" | "Culture";

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedImage, setSelectedImage] = useState<{
    item: GalleryItem;
    placeholder: ImagePlaceholder;
  } | null>(null);

  const filters: Filter[] = ["All", "Food", "Events", "Culture"];

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const handleImageClick = (item: GalleryItem) => {
    const placeholder = PlaceHolderImages.find((p) => p.id === item.imageId);
    if (placeholder) {
      setSelectedImage({ item, placeholder });
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            Gallery
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into the world of Rangoon California—our food, our space,
            and our community.
          </p>
        </header>

        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full",
                filter === f
                  ? "bg-secondary hover:bg-secondary/90"
                  : "border-bamboo text-bamboo-dark hover:bg-bamboo/10"
              )}
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const placeholder = PlaceHolderImages.find(
                (p) => p.id === item.imageId
              );
              if (!placeholder) return null;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer group relative break-inside-avoid"
                  onClick={() => handleImageClick(item)}
                >
                  <Image
                    src={placeholder.imageUrl}
                    alt={item.caption}
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <p className="text-white p-4 text-center font-headline text-lg drop-shadow-md">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-3xl p-0 border-0">
            {selectedImage && (
              <>
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={selectedImage.placeholder.imageUrl}
                    alt={selectedImage.item.caption}
                    fill
                    className="object-contain"
                  />
                </div>
                <DialogHeader className="p-6">
                  <DialogTitle className="font-headline text-2xl text-secondary">
                    {selectedImage.item.caption}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">
                    Category: {selectedImage.item.category}
                  </DialogDescription>
                </DialogHeader>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

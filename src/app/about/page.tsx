import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { culturalInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, MapPin, Sparkles } from "lucide-react";

export default function AboutPage() {
  const foundersImage = PlaceHolderImages.find(
    (p) => p.id === "about-founders"
  );
  const journeyImage = PlaceHolderImages.find((p) => p.id === "about-journey");
  const cultureImage = PlaceHolderImages.find((p) => p.id === "about-culture");

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            Our Story
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From Yangon to California, a journey of flavor and tradition.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline text-4xl font-bold text-secondary mb-4 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-primary" />
              The Journey
            </h2>
            <p className="text-lg text-muted-foreground whitespace-pre-wrap">
              {culturalInfo.story}
            </p>
          </div>
          {journeyImage && (
            <div className="order-1 lg:order-2 h-80 lg:h-96 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={journeyImage.imageUrl}
                alt={journeyImage.description}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {foundersImage && (
            <div className="h-80 lg:h-96 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={foundersImage.imageUrl}
                alt={foundersImage.description}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div>
            <h2 className="font-headline text-4xl font-bold text-secondary mb-4 flex items-center gap-3">
              <Leaf className="h-8 w-8 text-primary" />
              Our Founders
            </h2>
            <p className="text-lg text-muted-foreground">
              Our family's love for food is at the heart of Rangoon California.
              Led by Chef Nway, our team is dedicated to preserving the
              authenticity of Burmese recipes while embracing the fresh, local
              ingredients of California. We believe every meal is a celebration
              of heritage and community.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline text-4xl font-bold text-secondary mb-4 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              Cultural Inspirations
            </h2>
            <p className="text-lg text-muted-foreground whitespace-pre-wrap">
              {culturalInfo.inspiration}
            </p>
          </div>
          {cultureImage && (
            <div className="order-1 lg:order-2 h-80 lg:h-96 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={cultureImage.imageUrl}
                alt={cultureImage.description}
                fill
                className="object-cover"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

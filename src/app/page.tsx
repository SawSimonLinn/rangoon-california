import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { menuItems } from "@/lib/data";

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-1");
  const featuredDishes = menuItems.filter((item) => item.isFeatured);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/50 to-transparent" />
        <div className="relative z-10 flex flex-col items-center gap-6 p-4 animate-fade-in-down">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg">
            Taste Burma in California
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-cream drop-shadow-md">
            An immersive journey into the heart of Burmese cuisine, where
            traditional flavors meet California's warmth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-gold text-gold hover:bg-gold hover:text-dark font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <Link href="/reservation">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Featured Dishes
            </h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
              A selection of our most loved creations, passed down through
              generations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((item) => {
              const itemImage = PlaceHolderImages.find(
                (p) => p.id === item.imageId
              );
              return (
                <Card
                  key={item.id}
                  className="overflow-hidden border-bamboo/50 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    {itemImage && (
                      <Image
                        src={itemImage.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <CardTitle className="font-headline text-3xl text-white drop-shadow-md">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="font-accent text-lg text-gold drop-shadow-md">
                        {item.burmeseName}
                      </CardDescription>
                    </div>
                  </div>
                  <CardContent className="flex-grow pt-6">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0 flex justify-between items-center">
                    <p className="font-bold text-xl text-primary">
                      {item.price}
                    </p>
                    <Button variant="ghost" asChild>
                      <Link href={`/menu#${item.id}`}>
                        <UtensilsCrossed className="mr-2 h-4 w-4" /> View More
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <Button
              asChild
              variant="link"
              className="text-xl text-accent hover:text-accent/80 font-bold"
            >
              <Link href="/menu">
                Explore The Full Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Dine With Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Immerse yourself in an unforgettable dining experience. Book your
            table today and let us transport you to the heart of Burma.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            <Link href="/reservation">Make a Reservation</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
              Everything you need to know for your visit
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="parking">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Is parking available?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Yes! We have plenty of parking spots available for our guests.
                  Our spacious parking lot can accommodate all party sizes, so
                  you never have to worry about finding a spot when you visit
                  us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="reservations">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Do I need a reservation?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  While walk-ins are welcome, we highly recommend making a
                  reservation to ensure you get a table at your preferred time.
                  You can easily book online through our reservation system or
                  call us directly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hours">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  What are your hours of operation?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We're open Tuesday through Sunday from 5:00 PM to 9:00 PM.
                  We're closed on Mondays to allow our team to rest and prepare
                  for the week ahead.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dietary">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Do you accommodate dietary restrictions?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Absolutely! We offer vegetarian, vegan, and gluten-free
                  options. Please inform your server about any allergies or
                  dietary restrictions when ordering, and our kitchen team will
                  be happy to accommodate your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="takeout">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Do you offer takeout or delivery?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Yes, we offer takeout orders. You can call ahead to place your
                  order or visit us in person. We currently don't offer
                  delivery, but we're working on partnering with local delivery
                  services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="group">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Can you accommodate large groups or events?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We welcome large groups and special events! For parties of 6
                  or more, please call us in advance so we can ensure we have
                  adequate seating and staff prepared. We also offer special
                  group menus for larger celebrations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We accept all major credit cards (Visa, MasterCard, American
                  Express), debit cards, and cash. We also accept contactless
                  payments including Apple Pay and Google Pay for your
                  convenience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

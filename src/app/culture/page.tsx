"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigationHistory } from "@/hooks/use-navigation-history";

// A simple client component to activate the navigation history hook
function NavigationTracker() {
  useNavigationHistory();
  return null;
}

const culturalElements = [
  {
    id: "thingyan",
    title: "Thingyan: The Water Festival",
    description:
      "Myanmar's most important festival marks the New Year with joyful water throwing, symbolizing the washing away of the previous year's sins and bad luck. Families gather, food is shared, and the entire country celebrates with music, dance, and community spirit.",
    imageUrl:
      "https://greensuntravel.com/wp-content/uploads/2023/10/611246105bfdf.jpg",
    imageAlt:
      "Vibrant Water Festival (Thingyan) celebration with people splashing water and celebrating in traditional Burmese style.",
  },
  {
    id: "thadingyut",
    title: "Thadingyut: The Festival of Lights",
    description:
      "Thadingyut marks the end of Buddhist Lent and is celebrated with dazzling lights, colorful lanterns, and heartfelt gratitude. Homes, streets, and pagodas glow under countless lamps as people pay respect to elders, teachers, and parents — a symbol of enlightenment, appreciation, and renewal in Myanmar culture.",
    imageUrl:
      "https://www.indochinavoyages.com/wp-content/uploads/2015/11/2-11-15Thadingyut-Festival-1200x675.jpg",
    imageAlt:
      "Thadingyut Festival of Lights in Myanmar with glowing lanterns and illuminated pagodas at night, symbolizing respect and gratitude.",
  },
  {
    id: "longyi",
    title: "Longyi: The Traditional Garment",
    description:
      "The longyi is Myanmar's traditional wraparound garment worn by both men and women. Made from beautiful woven cloth, it's both practical and elegant, representing the timeless grace of Burmese fashion and the skill of local textile artisans.",
    imageUrl:
      "https://images.goway.com/production/hero/iStock-1188911425.jpg?VersionId=ViuRLrgXzjdIzu0WeKBVqhPSSV4dH2lg",
    imageAlt:
      "Traditional Burmese longyi (sarong-style garment) worn by both men and women, showcasing beautiful patterns and colors.",
  },
  {
    id: "thanaka",
    title: "Thanaka: The Natural Beauty Secret",
    description:
      "For over 2,000 years, Myanmar people have used thanaka - a natural paste made from ground bark - as sunscreen, skincare, and decoration. The distinctive yellow patterns on faces are a beautiful tradition that connects modern Myanmar to its ancient roots.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E12AQFBXEeTN6j7bA/article-cover_image-shrink_720_1280/B4EZT9RfDeHcAM-/0/1739416011662?e=2147483647&v=beta&t=QbT4NqR6MxzQe4PZiiLdMjDYs1sro6KlRnBLUhun3Mw",
    imageAlt:
      "Traditional Burmese thanaka paste being applied to face - a natural cosmetic and sun protection made from tree bark.",
  },
  {
    id: "pagoda",
    title: "Golden Pagodas: Spiritual Landmarks",
    description:
      "Myanmar is home to thousands of golden pagodas, with the magnificent Shwedagon Pagoda being the most famous. These sacred structures are centers of Buddhist devotion and community life, their golden spires reaching toward enlightenment.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1697730401845-6326cd4a9e3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    imageAlt:
      "Golden Buddhist pagoda temple with intricate architecture, representing Myanmar's spiritual heritage.",
  },
  {
    id: "puppetry",
    title: "Marionette Puppetry: Ancient Storytelling",
    description:
      "Traditional Burmese marionette shows tell epic tales of kings, princesses, and mythical creatures. These intricate performances combine music, dance, and storytelling, preserving centuries-old legends and entertaining audiences with their magical artistry.",
    imageUrl:
      "https://images.unsplash.com/photo-1603804741501-2a8c31732d61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJhZGl0aW9uYWwlMjBCdXJtZXNlJTIwbWFyaW9uZXR0ZSUyMHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    imageAlt:
      "Traditional Burmese marionette puppetry performance showing intricate string puppets in colorful costumes.",
  },
];

export default function CulturePage() {
  const burmesePhrases = [
    { burmese: "Mingalaba", english: "Hello (a formal greeting)" },
    { burmese: "Kyay zu tin bar tal", english: "Thank you" },
    { burmese: "Kaung bar tal", english: "It is good / delicious" },
    { burmese: "Nae kaung lar?", english: "How are you?" },
    { burmese: "A kaung zone bal", english: "This is the best" },
  ];

  return (
    <>
      <NavigationTracker />
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
              Burmese Heritage
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the rich tapestry of culture that inspires our cuisine
              and our spirit.
            </p>
          </header>

          {/* Cultural Elements Carousel */}
          <div className="mb-20 relative z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <h2 className="font-headline text-3xl md:text-4xl text-center text-secondary mb-8">
                Cultural Treasures
              </h2>
              <div className="relative z-20">
                <Carousel className="w-full max-w-5xl mx-auto">
                  <CarouselContent className="relative z-30 -ml-2 md:-ml-4">
                    {culturalElements.map((element) => {
                      return (
                        <CarouselItem
                          key={element.id}
                          className="relative z-40 pl-2 md:pl-4"
                        >
                          <div className="p-3 md:p-6 relative z-50">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center bg-background/95 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6 border border-bamboo/50">
                              {/* Image Side */}
                              <div className="relative h-48 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg z-50">
                                <Image
                                  src={element.imageUrl}
                                  alt={element.imageAlt}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              {/* Content Side */}
                              <div className="space-y-3 md:space-y-4 relative z-50">
                                <h3 className="font-headline text-xl md:text-2xl lg:text-3xl text-primary">
                                  {element.title}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                  {element.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 md:-left-12 lg:-left-16 z-50" />
                  <CarouselNext className="right-2 md:-right-12 lg:-right-16 z-50" />
                </Carousel>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start px-4 sm:px-6">
            <Card className="border-bamboo/50 shadow-md">
              <CardHeader>
                <CardTitle className="font-headline text-2xl md:text-3xl text-secondary flex items-center gap-3">
                  Sounds of Burma
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-48 md:h-60 lg:h-80 w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Saung_Mandalay.jpg/960px-Saung_Mandalay.jpg"
                    alt="Traditional Burmese harp (saung-gauk) - the national instrument of Burma"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  The national instrument of Burma is the{" "}
                  <strong>saung-gauk</strong>, an arched harp of elegant beauty
                  and ancient history. Its gentle, melodic tones have
                  accompanied royal courts and folk tales for over a thousand
                  years. The music is said to embody the soul of the Burmese
                  people—graceful, resilient, and deeply expressive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bamboo/50 shadow-md">
              <CardHeader>
                <CardTitle className="font-headline text-2xl md:text-3xl text-secondary flex items-center gap-3">
                  A Few Burmese Words
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 md:space-y-4">
                  {burmesePhrases.map((phrase) => (
                    <li
                      key={phrase.burmese}
                      className="border-b border-bamboo/30 pb-3"
                    >
                      <p className="font-accent text-lg md:text-xl text-foreground">
                        {phrase.burmese}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {phrase.english}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Words of Wisdom Section */}
          <div className="mt-16 md:mt-20 relative z-10 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl text-center text-secondary mb-6 md:mb-8">
                Words of Wisdom
              </h2>
              <div className="space-y-6 md:space-y-8 relative z-30">
                <blockquote className="text-center p-6 md:p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary relative z-40 bg-background/95 backdrop-blur-sm shadow-lg">
                  <p className="text-lg md:text-xl lg:text-2xl font-accent text-foreground italic leading-relaxed">
                    "To understand the culture, one must first taste the food."
                  </p>
                </blockquote>

                <blockquote className="text-center p-6 md:p-8 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-lg border-l-4 border-accent relative z-40 bg-background/95 backdrop-blur-sm shadow-lg">
                  <p className="text-lg md:text-xl lg:text-2xl font-accent text-foreground italic leading-relaxed">
                    "In Burma, every meal is a celebration of family and
                    community."
                  </p>
                </blockquote>

                <blockquote className="text-center p-6 md:p-8 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg border-l-4 border-secondary relative z-40 bg-background/95 backdrop-blur-sm shadow-lg">
                  <p className="text-lg md:text-xl lg:text-2xl font-accent text-foreground italic leading-relaxed">
                    "Generosity is the secret ingredient in every Burmese dish."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { menuItems, type MenuItem } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const categories = ["Starters", "Main Dishes", "Drinks & Desserts"] as const;

const MenuSection = ({
  category,
}: {
  category: (typeof categories)[number];
}) => {
  const items = menuItems.filter((item) => item.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {items.map((item: MenuItem) => {
        const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
        return (
          <Card
            key={item.id}
            id={item.id}
            className="overflow-hidden border-bamboo/50 shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            {itemImage && (
              <div className="relative h-48 sm:h-56 md:h-60 w-full">
                <Image
                  src={itemImage.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="font-headline text-xl md:text-2xl text-secondary">
                {item.name}
              </CardTitle>
              <CardDescription className="font-accent text-sm md:text-base text-bamboo">
                {item.burmeseName}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-4 md:p-6 pt-0">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </CardContent>
            <div className="p-4 md:p-6 pt-0">
              <p className="font-bold text-lg md:text-xl text-primary">
                {item.price}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default function MenuPage() {
  return (
    <div className="py-12 md:py-16 lg:py-24 rice-paper-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-primary">
            Our Menu
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A culinary exploration of Burma's diverse and flavorful cuisine,
            made with love.
          </p>
        </header>

        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 bg-cream border border-bamboo/50 h-auto gap-1 sm:gap-0 p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="py-3 px-4 text-base md:text-lg font-medium data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground rounded-md sm:rounded-none transition-all duration-200"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="mt-8 md:mt-12"
            >
              <MenuSection category={category} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

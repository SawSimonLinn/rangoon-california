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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item: MenuItem) => {
        const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
        return (
          <Card
            key={item.id}
            id={item.id}
            className="overflow-hidden border-bamboo/50 shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            {itemImage && (
              <div className="relative h-60 w-full">
                <Image
                  src={itemImage.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-secondary">
                {item.name}
              </CardTitle>
              <CardDescription className="font-accent text-base text-bamboo">
                {item.burmeseName}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <p className="font-bold text-lg text-primary">{item.price}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default function MenuPage() {
  return (
    <div className="py-16 md:py-24 rice-paper-bg">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            Our Menu
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A culinary exploration of Burma's diverse and flavorful cuisine,
            made with love.
          </p>
        </header>

        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-cream border border-bamboo/50 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="py-3 text-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-12">
              <MenuSection category={category} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

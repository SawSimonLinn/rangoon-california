
export type MenuItem = {
  id: string;
  name: string;
  burmeseName: string;
  description: string;
  price: string;
  category: 'Starters' | 'Main Dishes' | 'Drinks & Desserts';
  imageId: string;
  isFeatured: boolean;
};

export type GalleryItem = {
  id: string;
  caption: string;
  category: 'Food' | 'Events' | 'Culture';
  imageId: string;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Tea Leaf Salad',
    burmeseName: 'Laphet Thoke',
    description: 'A mix of fermented tea leaves, crispy nuts, beans, and garlic with a zesty dressing.',
    price: '$12.99',
    category: 'Starters',
    imageId: 'laphet-thoke',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Samosa Soup',
    burmeseName: 'Samusa Thouk',
    description: 'Crispy samosas in a flavorful, tangy broth with chickpeas, cabbage, and mint.',
    price: '$10.99',
    category: 'Starters',
    imageId: 'samosa-soup',
    isFeatured: false,
  },
  {
    id: '3',
    name: 'Mohinga',
    burmeseName: 'Mohinga',
    description: 'The national dish of Burma. A hearty fish noodle soup with rice noodles, lemongrass, and crispy fritters.',
    price: '$16.99',
    category: 'Main Dishes',
    imageId: 'mohinga',
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Shan Noodles',
    burmeseName: 'Shan Khauk Swe',
    description: 'Tomato-based chicken or tofu sauce over rice noodles, garnished with peanuts and pickled greens.',
    price: '$15.99',
    category: 'Main Dishes',
    imageId: 'shan-noodles',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Coconut Noodles',
    burmeseName: 'Ohn No Khauk Swe',
    description: 'A creamy and rich coconut milk broth with chicken, wheat noodles, and a variety of toppings.',
    price: '$15.99',
    category: 'Main Dishes',
    imageId: 'coconut-noodles',
    isFeatured: false,
  },
  {
    id: '6',
    name: 'Faluda',
    burmeseName: 'Faluda',
    description: 'A sweet, vibrant dessert drink with rose syrup, basil seeds, jelly, and ice cream.',
    price: '$7.99',
    category: 'Drinks & Desserts',
    imageId: 'faluda',
    isFeatured: false,
  },
  {
    id: '7',
    name: 'Sticky Rice with Mango',
    burmeseName: 'Kauknyintok',
    description: 'Sweet sticky rice served with fresh mango slices and a drizzle of coconut cream.',
    price: '$8.99',
    category: 'Drinks & Desserts',
    imageId: 'sticky-rice-mango',
    isFeatured: false,
  },
];

export const galleryItems: GalleryItem[] = [
    { id: 'g1', caption: 'Burmese Curry', category: 'Food', imageId: 'gallery-food-1' },
    { id: 'g2', caption: 'Restaurant Interior', category: 'Culture', imageId: 'gallery-interior-1' },
    { id: 'g3', caption: 'Table Spread', category: 'Food', imageId: 'gallery-food-2' },
    { id: 'g4', caption: 'Cultural Event', category: 'Events', imageId: 'gallery-event-1' },
    { id: 'g5', caption: 'Restaurant Decor', category: 'Culture', imageId: 'gallery-interior-2' },
    { id: 'g6', caption: 'Spring Rolls', category: 'Food', imageId: 'gallery-food-3' },
];

export const culturalInfo = {
  story: "Our journey began in the vibrant streets of Yangon, amidst the chorus of market vendors and the aroma of freshly cooked Mohinga. We wanted to bring that same warmth, community, and flavor to our new home in California. Rangoon California is more than a restaurant; it's a bridge between two cultures, a place where stories are shared over plates of authentic Burmese food.",
  inspiration: "We draw inspiration from everything that makes Burma beautiful: the golden glow of the Shwedagon Pagoda, the intricate patterns of luntaya acheik fabrics, the communal joy of sharing a pot of tea, and the earthy fragrance of thanaka. Each dish on our menu is a tribute to these traditions, crafted with love and respect for our heritage."
};

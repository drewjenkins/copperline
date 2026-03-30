export type RoastLevel = 'light' | 'medium' | 'dark';
export type Category = 'single-origin' | 'blend' | 'seasonal';
export type GrindType = 'whole-bean' | 'medium-grind' | 'fine-grind';
export type BagSize = '12oz' | '2lb' | '5lb';

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  origin: {
    country: string;
    region: string;
  };
  roastLevel: RoastLevel;
  flavorNotes: string[];
  basePrice: number; // 12oz price
  images: string[];
  category: Category;
  isNew: boolean;
  isFeatured: boolean;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'yirgacheffe-natural',
    name: 'Yirgacheffe Natural',
    description: 'A jewel of Ethiopian coffee culture, this natural-processed gem bursts with fruit-forward complexity. Dried on raised beds in the highland air of Yirgacheffe, each bean absorbs the terroir of ancient coffee forests. Expect a wine-like body with explosive berry character — a coffee that defines what specialty means.',
    origin: { country: 'Ethiopia', region: 'Yirgacheffe' },
    roastLevel: 'light',
    flavorNotes: ['Blueberry', 'Jasmine', 'Dark Chocolate', 'Red Wine'],
    basePrice: 22,
    images: [
      'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80',
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: false,
    isFeatured: true,
    reviews: [
      { id: 'r1', author: 'Marcus T.', rating: 5, date: '2025-11-12', title: 'Absolutely stunning', body: 'The blueberry notes are real — I was shocked at how fruit-forward this is. Best light roast I\'ve had.' },
      { id: 'r2', author: 'Sarah K.', rating: 5, date: '2025-10-28', title: 'Like drinking a fruit smoothie', body: 'I brew this as a pour-over every morning and the jasmine aroma alone is worth the price. Highly recommend.' },
      { id: 'r3', author: 'David L.', rating: 4, date: '2025-10-03', title: 'Great but distinctive', body: 'Takes some getting used to if you\'re a dark roast person, but the complexity is remarkable. Worth trying.' },
    ],
  },
  {
    id: '2',
    slug: 'huila-washed',
    name: 'Huila Washed',
    description: 'From the high-altitude valleys of Colombia\'s Huila department, this meticulously washed coffee delivers precision in every cup. Small-holder farmers cultivate Caturra and Colombia varietals at 1,800+ meters, producing a coffee of striking clarity. Clean, sweet, and endlessly drinkable.',
    origin: { country: 'Colombia', region: 'Huila' },
    roastLevel: 'medium',
    flavorNotes: ['Caramel', 'Brown Sugar', 'Stone Fruit', 'Almond'],
    basePrice: 19,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: false,
    isFeatured: true,
    reviews: [
      { id: 'r4', author: 'Jennifer M.', rating: 5, date: '2025-11-20', title: 'My daily driver', body: 'Balanced, sweet, and forgiving across brew methods. This is the coffee I always come back to.' },
      { id: 'r5', author: 'Alex R.', rating: 4, date: '2025-11-05', title: 'Solid everyday coffee', body: 'Consistent quality batch to batch. The caramel sweetness really comes through in a French press.' },
    ],
  },
  {
    id: '3',
    slug: 'sumatra-mandheling',
    name: 'Sumatra Mandheling',
    description: 'Bold, earthy, and unmistakably Indonesian — this wet-hulled Mandheling is a love letter to complexity. Grown in the volcanic soils of North Sumatra\'s Mandheling region, the unique wet-hulling process imparts a syrupy body and deep, savory depth. For those who want their coffee to mean something.',
    origin: { country: 'Indonesia', region: 'North Sumatra' },
    roastLevel: 'dark',
    flavorNotes: ['Dark Cocoa', 'Cedar', 'Tobacco', 'Brown Spice'],
    basePrice: 18,
    images: [
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
      'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80',
      'https://images.unsplash.com/photo-1596590816882-f74a37a4c7d5?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: false,
    isFeatured: true,
    reviews: [
      { id: 'r6', author: 'Tom B.', rating: 5, date: '2025-12-01', title: 'Finally a dark roast that isn\'t burnt', body: 'This has all the boldness I want without tasting like charcoal. The cedar note is so interesting.' },
      { id: 'r7', author: 'Linda P.', rating: 4, date: '2025-11-18', title: 'Great for espresso', body: 'Pulled this as espresso and it made an incredible americano. Really bold and satisfying.' },
    ],
  },
  {
    id: '4',
    slug: 'kenya-aa-nyeri',
    name: 'Kenya AA Nyeri',
    description: 'Grown on the slopes of Mount Kenya in the Nyeri county, this AA-grade coffee represents the pinnacle of Kenyan production. Fully washed and double-fermented at cooperative wet mills, the result is a coffee of electric acidity and stunning fruit complexity. A true showcase origin.',
    origin: { country: 'Kenya', region: 'Nyeri' },
    roastLevel: 'light',
    flavorNotes: ['Black Currant', 'Tomato', 'Lemon Zest', 'Bergamot'],
    basePrice: 24,
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80',
      'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: true,
    isFeatured: false,
    reviews: [
      { id: 'r8', author: 'Rachel S.', rating: 5, date: '2025-12-10', title: 'Most complex coffee I\'ve tried', body: 'The black currant and tomato notes sound weird but taste incredible. This is sophisticated, grown-up coffee.' },
    ],
  },
  {
    id: '5',
    slug: 'guatemala-antigua',
    name: 'Guatemala Antigua',
    description: 'Nestled between three volcanoes in the Valley of Antigua, this classic Guatemalan grows in mineral-rich volcanic soil. The combination of altitude, climate, and terroir produces a coffee of consistent excellence — bright but balanced, complex but approachable. A world-class origin at an honest price.',
    origin: { country: 'Guatemala', region: 'Antigua' },
    roastLevel: 'medium',
    flavorNotes: ['Milk Chocolate', 'Apple', 'Honey', 'Subtle Spice'],
    basePrice: 17,
    images: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: false,
    isFeatured: false,
    reviews: [
      { id: 'r9', author: 'Chris W.', rating: 4, date: '2025-10-15', title: 'Reliable and delicious', body: 'I\'ve bought this three times now. Consistent, chocolatey, and works great in everything from drip to espresso.' },
      { id: 'r10', author: 'Emily H.', rating: 5, date: '2025-09-22', title: 'Hidden gem', body: 'This doesn\'t get as much attention as the Ethiopian but it\'s phenomenal. The honey sweetness is perfect.' },
    ],
  },
  {
    id: '6',
    slug: 'copperline-espresso',
    name: 'Copperline Espresso',
    description: 'Our house espresso blend is the result of years of refinement — a carefully calibrated marriage of Ethiopian brightness and Brazilian sweetness that pulls beautifully across variables. Developed for our in-house espresso program, it\'s now available for home use. Creamy body, clean finish, cafe-quality results.',
    origin: { country: 'Ethiopia + Brazil', region: 'Blend' },
    roastLevel: 'medium',
    flavorNotes: ['Dark Caramel', 'Hazelnut', 'Citrus', 'Cocoa'],
    basePrice: 20,
    images: [
      'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
      'https://images.unsplash.com/photo-1596590816882-f74a37a4c7d5?w=800&q=80',
    ],
    category: 'blend',
    isNew: false,
    isFeatured: false,
    reviews: [
      { id: 'r11', author: 'Marco F.', rating: 5, date: '2025-11-30', title: 'Best espresso blend I\'ve found', body: 'I\'ve tried a dozen roasters\' espresso blends and this one takes the top spot. The crema is outstanding.' },
      { id: 'r12', author: 'Nina V.', rating: 5, date: '2025-11-10', title: 'Perfect lattes every time', body: 'Works incredibly well with milk. The caramel notes come through even in a flat white. Will subscribe.' },
    ],
  },
  {
    id: '7',
    slug: 'brazil-cerrado',
    name: 'Brazil Cerrado',
    description: 'The vast Cerrado plateau of Minas Gerais produces some of Brazil\'s finest coffees at altitude. Natural-processed and sun-dried, this Cerrado is loaded with sweetness and body — the archetypal comfort coffee. If you want something warm, low-acid, and endlessly satisfying, this is it.',
    origin: { country: 'Brazil', region: 'Cerrado, Minas Gerais' },
    roastLevel: 'medium',
    flavorNotes: ['Peanut Butter', 'Milk Chocolate', 'Brown Sugar', 'Vanilla'],
    basePrice: 16,
    images: [
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: false,
    isFeatured: false,
    reviews: [
      { id: 'r13', author: 'Paul N.', rating: 4, date: '2025-09-08', title: 'Low acid heaven', body: 'My stomach can\'t handle high-acid coffees and this is the perfect solution. Sweet, rich, and gut-friendly.' },
    ],
  },
  {
    id: '8',
    slug: 'costa-rica-tarrazu',
    name: 'Costa Rica Tarrazú',
    description: 'The Tarrazú region produces some of Costa Rica\'s most prized coffees, and this lot from a small cooperative in San Marcos is a standout. Grown at 1,600–1,900 meters and honey-processed on raised beds, it delivers clean sweetness with elegant complexity. Refined and expressive.',
    origin: { country: 'Costa Rica', region: 'Tarrazú, San Marcos' },
    roastLevel: 'light',
    flavorNotes: ['Peach', 'Hibiscus', 'White Grape', 'Sweet Maple'],
    basePrice: 21,
    images: [
      'https://images.unsplash.com/photo-1596590816882-f74a37a4c7d5?w=800&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
      'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: true,
    isFeatured: false,
    reviews: [
      { id: 'r14', author: 'Olivia T.', rating: 5, date: '2025-12-08', title: 'Delicate and beautiful', body: 'The peach note is so clearly present. Brewed this as a Chemex and it tasted like a stone fruit dessert.' },
    ],
  },
  {
    id: '9',
    slug: 'blue-ridge-morning',
    name: 'Blue Ridge Morning',
    description: 'Named for the mountain range that frames Asheville\'s horizon, Blue Ridge Morning is our signature breakfast blend — crafted to be the ideal companion for whatever the day holds. We combine Central American brightness with a Southeast Asian base for a smooth, versatile cup that delivers every time.',
    origin: { country: 'Colombia + Vietnam', region: 'Blend' },
    roastLevel: 'medium',
    flavorNotes: ['Toasted Nuts', 'Caramel', 'Citrus Peel', 'Bittersweet Chocolate'],
    basePrice: 17,
    images: [
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80',
      'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    ],
    category: 'blend',
    isNew: false,
    isFeatured: false,
    reviews: [
      { id: 'r15', author: 'Greg M.', rating: 4, date: '2025-10-25', title: 'Perfect morning coffee', body: 'Does exactly what you want from a morning blend — consistent, delicious, not too acidic. Bought for the whole family.' },
      { id: 'r16', author: 'Ann B.', rating: 5, date: '2025-10-02', title: 'Replaced my grocery store habit', body: 'I was skeptical about switching from my grocery store brand but this is so much better. The caramel sweetness is incredible.' },
    ],
  },
  {
    id: '10',
    slug: 'decaf-swiss-water',
    name: 'Decaf Swiss Water',
    description: 'Decaf doesn\'t have to be a compromise. Our Swiss Water Process decaf starts with exceptional Mexican Chiapas and removes caffeine without chemicals, preserving the coffee\'s natural character. Rich, chocolatey, and satisfying — a late-night cup you\'ll actually look forward to.',
    origin: { country: 'Mexico', region: 'Chiapas' },
    roastLevel: 'medium',
    flavorNotes: ['Milk Chocolate', 'Graham Cracker', 'Dried Cherry', 'Walnut'],
    basePrice: 18,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: false,
    isFeatured: false,
    reviews: [
      { id: 'r17', author: 'Susan L.', rating: 5, date: '2025-11-22', title: 'Best decaf ever', body: 'I gave up on decaf years ago because it always tasted flat. This changed my mind completely. Real coffee flavor.' },
    ],
  },
  {
    id: '11',
    slug: 'asheville-dark',
    name: 'Asheville Dark',
    description: 'For those who want bold, full-stop. Our Asheville Dark is a city-roast-plus approach that pushes structure to its limit while preserving origin character. Sourced from a reliable Honduras cooperative, this coffee pulls clean shots and makes a formidable cold brew. Dark as the mountains at midnight.',
    origin: { country: 'Honduras', region: 'Santa Bárbara' },
    roastLevel: 'dark',
    flavorNotes: ['Dark Chocolate', 'Roasted Walnut', 'Molasses', 'Black Cherry'],
    basePrice: 17,
    images: [
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
      'https://images.unsplash.com/photo-1596590816882-f74a37a4c7d5?w=800&q=80',
      'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80',
    ],
    category: 'single-origin',
    isNew: false,
    isFeatured: false,
    reviews: [
      { id: 'r18', author: 'Derek F.', rating: 5, date: '2025-11-14', title: 'Dark roast done right', body: 'There\'s actual sweetness here, not just bitterness. This is what dark roast coffee should taste like.' },
    ],
  },
  {
    id: '12',
    slug: 'autumn-harvest-seasonal',
    name: 'Autumn Harvest Seasonal',
    description: 'Our limited seasonal offering captures the spirit of an Appalachian autumn — warm, spiced, and deeply comforting. This year\'s release features a spectacular honey-processed Peruvian from a small family farm in Cajamarca, roasted to celebrate the harvest season. When it\'s gone, it\'s gone.',
    origin: { country: 'Peru', region: 'Cajamarca' },
    roastLevel: 'medium',
    flavorNotes: ['Apple Cider', 'Cinnamon', 'Toffee', 'Dried Fig'],
    basePrice: 25,
    images: [
      'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80',
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80',
      'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80',
    ],
    category: 'seasonal',
    isNew: true,
    isFeatured: false,
    reviews: [
      { id: 'r19', author: 'Molly C.', rating: 5, date: '2025-11-28', title: 'Seasonal perfection', body: 'I bought three bags the moment I saw this was back. The toffee and cinnamon notes are absolutely perfect for fall.' },
    ],
  },
];

export const bagSizePricing: Record<BagSize, number> = {
  '12oz': 0,
  '2lb': 12,
  '5lb': 30,
};

export const bagSizeLabels: Record<BagSize, string> = {
  '12oz': '12 oz',
  '2lb': '2 lb',
  '5lb': '5 lb',
};

export const grindTypeLabels: Record<GrindType, string> = {
  'whole-bean': 'Whole Bean',
  'medium-grind': 'Medium Grind',
  'fine-grind': 'Fine Grind (Espresso)',
};

export const roastLevelLabels: Record<RoastLevel, string> = {
  light: 'Light',
  medium: 'Medium',
  dark: 'Dark',
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

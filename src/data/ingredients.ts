export interface Ingredient {
  id: string;
  name: string;
  commonName: string;
  description: string;
  category: "Hair" | "Skin" | "Wellness" | "Foot Care" | "All";
  image?: string;
  associatedProducts: string[]; // Slugs
}

export const ingredients: Ingredient[] = [
  {
    id: "onion-seed",
    name: "Onion Seed",
    commonName: "Allium cepa",
    description: "Traditionally used to support healthy hair growth and scalp health.",
    category: "Hair",
    image: "/ingredients/onion.webp",
    associatedProducts: ["onion-shampoo"]
  },
  {
    id: "black-seed",
    name: "Black Seed",
    commonName: "Kalonji",
    description: "Known in traditional wellness for its nourishing properties.",
    category: "Hair",
    image: "/ingredients/black-seed.webp",
    associatedProducts: ["onion-shampoo"]
  },
  {
    id: "fenugreek",
    name: "Fenugreek",
    commonName: "Methi",
    description: "Used to add shine and softness to hair.",
    category: "Hair",
    image: "/ingredients/fenugreek.webp",
    associatedProducts: ["onion-shampoo", "black-layer-combo", "dia-365-foot-care-cream"]
  },
  {
    id: "moringa",
    name: "Moringa",
    commonName: "Drumstick Tree",
    description: "A nutrient-dense botanical widely used for its wellness benefits.",
    category: "Wellness",
    image: "/ingredients/moringa.webp",
    associatedProducts: ["moringa-capsules"]
  },
  {
    id: "saffron",
    name: "Saffron",
    commonName: "Kesar",
    description: "A luxurious spice historically used to promote radiant, glowing skin.",
    category: "Skin",
    image: "/ingredients/saffron.webp",
    associatedProducts: ["kumkumadi-fairness-oil"]
  },
  {
    id: "neem",
    name: "Neem",
    commonName: "Azadirachta indica",
    description: "Renowned in Ayurveda for its cleansing and purifying properties.",
    category: "Foot Care",
    image: "/ingredients/neem.webp",
    associatedProducts: ["dia-365-foot-care-cream"]
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    commonName: "Ghritkumari",
    description: "A soothing botanical known to moisturize skin and hair.",
    category: "All",
    image: "/ingredients/aloe-vera.webp",
    associatedProducts: ["onion-shampoo", "black-layer-combo", "kumkumadi-fairness-oil", "dia-365-foot-care-cream"]
  }
];

export function getAllIngredients() {
  return ingredients;
}

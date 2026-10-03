export interface Product {
  slug: string;
  brand: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription?: string;
  mrp?: string;
  sellingPrice?: string;
  packSize?: string;
  howToUse?: string;
  storageInstructions?: string;
  status: string;
  image?: string;
  poster?: string;
  model3d?: string;
  modelLabel?: string;
  ingredients: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    slug: "dia-365-foot-care-cream",
    brand: "Morusu Life Sciences",
    name: "Dia 365",
    category: "Ayurvedic, Herbal Therapy",
    tagline: "Diabetic Wellness Cream",
    shortDescription: "Helps you regulate blood sugar naturally",
    fullDescription: "Dia 365 contains the pure extract of momordica charantia which is traditionally well known for its antidiabetic property. Various Clinical trails have demonstrated that among the many active constituents of memodica charantia, proteins such as polypeptide-P, M, Cy, and Mc6 possessed the ability to lower the blood sugar levels. Also a peptide extracted from bitter gourd, mcIRBP-19, can bind to the insulin receptor and exhibit insulin-like effect, subsequently resulting in significant reduction of HbA1c. Dia 365 helps regulate the blood sugar levels, prevents fall in blood sugar below the normal range, and promotes glucose metabolism, and ultimately protects other organs of the body from diabetes mediated damage.",
    mrp: "Rs. 1500/-",
    sellingPrice: "Rs. 1500/-",
    packSize: "1 nos",
    howToUse: "Apply to both feets and rub vigorously up to absorb the cream",
    storageInstructions: "Store at room temperature.",
    status: "Featured announcement",
    image: "/models/dia-365.png",
    poster: "/products/dia-365-foot-care-cream/poster.webp",
    ingredients: ["Bramhi Extract", "Neem Extract", "Kalajamaun Extract", "Karela Extract", "Fenugreek Extract"],
    benefits: ["Diabetic Wellness Cream", "Safe for Diabetic Foot", "Hydrates & Soothes", "Protects from Damage"]
  },
  {
    slug: "black-layer-combo",
    brand: "CosMelle Herbals",
    name: "Black Layer: Hair Oil & Rita & Shikakai Shampoo Combo Pack",
    category: "Herbal Extract Products",
    tagline: "Rita & Shikakai Shampoo + Herbal Hair Oil",
    shortDescription: "Rita & Shikakai Shampoo + Herbal Hair Oil - for All Hair Problems",
    fullDescription: "The Herbal Hair oil also contains ingredients that purify the scalp and penetrate into hair fibers deeply leaving its smother and throughly nourished. Shampoo pleasing foam of rising minimal skin and eye irritation, thick or creamy feeling pleasant fragrance, low toxicity good biodegradibility slight acidity (ph<7) no damage to hair repair of damage already done to hair.",
    mrp: "Rs. 699/-",
    sellingPrice: "Rs. 699/-",
    packSize: "2 Nos 1 Box",
    howToUse: "Oil - Part your hair and apply oil all over the scalp massage the scalp gently with fingers in a circular motion and leave it for an hour or more before washing. Shampoo - Apply small quantity of shampoo on the wet hair scalp, massage the scalp gently with fingers in a circular motion leave it for while and wash it throughly.",
    storageInstructions: "Store in a cool and dry place, protect from direct sun light.",
    status: "Sample product data",
    image: "/models/black-layer.png",
    poster: "/products/black-layer-combo/poster.webp",
    ingredients: ["Black Layer Herbal Hair Oil: Coconut Oil, Bhringaraj, Fenugreek, Vattiveru, Marivudalu, Amla, Mandara Flowers.", "Shampoo: Shikakai, Fenugreek seeds, Alovera, Marri vudalu, Coco Powder, Vattiveru, Mandara Flowers."],
    benefits: ["Scalp purification", "Deep hair fiber penetration", "Low toxicity and good biodegradability", "Repairs hair damage"]
  },
  {
    slug: "onion-hair-oil",
    brand: "CosMelle Herbals",
    name: "Onion Hair Oil - 100ml",
    category: "Herbal Extract Products",
    tagline: "Anti Hair fall, Hair Growth Oil",
    shortDescription: "Anti Hair fall, Hair Growth Oil",
    fullDescription: "Onion herbal hair oil prevents excessive falling of hair, stimulates hair growth, prevent premature greying and keeps hair long lustrous & healthy.",
    mrp: "Rs. 285/-",
    sellingPrice: "Rs. 285/-",
    packSize: "1 Nos",
    howToUse: "Part your hair and apply oil all over the scalp massage the scalp gently with fingers in a circular motion leave it for an hour or more before washing.",
    storageInstructions: "Store in a cool and dry place, Protect from direct sun light.",
    status: "Sample product data",
    image: "/models/onion-oil.png",
    ingredients: ["Raw Onion", "Onion Seeds", "Kaddu", "Fenugreek Seeds", "Marivudalu", "Usiri", "Mandara Flowers"],
    benefits: ["Prevents excessive hair fall", "Stimulates hair growth", "Prevents premature greying", "Keeps hair long, lustrous & healthy"]
  },
  {
    slug: "moringa-capsules",
    brand: "Morusu Life Sciences",
    name: "Moringa Capsules",
    category: "Ayurvedic, Herbal Therapy",
    tagline: "Helps improve vitality",
    shortDescription: "Helps improve vitality, Reduces abnormalities under oxidative and psychological stress.",
    fullDescription: "Helps improve vitality, Reduces abnormalities under oxidative and psychological stress. Exhibit Neuroprotective action - has Analgesic and Anti inflammatory activity. Helps treat Neuro Developmental disorders like ADHD parkinsons disease. Help Maintain diabetic levels and relieve constipation. Antioxidant, Anti-mutagenic, and Anti-carcinogenic activites.",
    mrp: "Rs. 250/-",
    sellingPrice: "Rs. 250/-",
    packSize: "30 capsules in a container",
    howToUse: "1 or 2 capsules daily or as prescribed by the Health care Practitioner.",
    storageInstructions: "Store in cool and dry Place, away from heat, moisture & sunlight.",
    status: "Sample product data",
    image: "/models/moringa-capsules.png",
    poster: "/products/moringa-capsules/poster.webp",
    ingredients: ["Moringa Leaf Extract 500Mg"],
    benefits: ["Helps improve vitality", "Reduces abnormalities under oxidative and psychological stress", "Neuroprotective action", "Maintains diabetic levels and relieves constipation", "Antioxidant and anti-inflammatory properties"]
  },
  {
    slug: "kumkumadi-fairness-oil",
    brand: "CosMelle Herbals",
    name: "Kumkumadi Fairness Oil",
    category: "Ayurvedic, Herbal Therapy",
    tagline: "Beauty Treatment for Golden Glow",
    shortDescription: "Anti Aging, Cures Pigmentation",
    fullDescription: "Beauty Treatment for Golden Glow - Anti Aging, Cures Pigmentation.",
    mrp: "Rs. 395/-",
    sellingPrice: "Rs. 395/-",
    packSize: "1 Nos",
    howToUse: "After Cleansing Face with Little warm water, take a few drops of kumkumadi Oil on your plam, apply fingertips gently massage into the skin until fully absorbed and leave over night for best results.",
    storageInstructions: "Store in a cool and dry place, protect from direct sun light.",
    status: "Sample product data",
    image: "/models/kumkumadi-oil.png",
    poster: "/products/kumkumadi-fairness-oil/poster.webp",
    ingredients: ["Kumkumadi Oil (Saffron Oil)", "Jojoba Oil", "Badam oil", "Manjista", "Gorochan", "Lotus Petals", "Sesame Oil", "Orange Extract", "Aloevera", "Lemon Peel off", "Extract Vitamin E", "Grape seed Oil"],
    benefits: ["Beauty Treatment for Golden Glow", "Anti Aging", "Cures Pigmentation"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

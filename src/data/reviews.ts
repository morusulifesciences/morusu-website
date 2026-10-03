export interface Review {
  id: string;
  productSlug: string;
  productName: string;
  authorName: string;
  rating: number;
  date: string;
  content: string;
  isSample: boolean;
}

export const reviews: Review[] = [
  {
    id: "rev-1",
    productSlug: "onion-shampoo",
    productName: "Onion Shampoo",
    authorName: "A. Sharma",
    rating: 5,
    date: "2026-08-15",
    content: "Loved the natural feel of this shampoo. Leaves hair very clean.",
    isSample: true
  },
  {
    id: "rev-2",
    productSlug: "kumkumadi-fairness-oil",
    productName: "Kumkumadi Fairness Oil",
    authorName: "R. Patel",
    rating: 4,
    date: "2026-09-02",
    content: "A very nourishing oil, part of my nightly routine now.",
    isSample: true
  },
  {
    id: "rev-3",
    productSlug: "dia-365-foot-care-cream",
    productName: "DIA 365 Diabetic Wellness Cream",
    authorName: "M. Singh",
    rating: 5,
    date: "2026-09-20",
    content: "Very moisturizing and soothing for my feet.",
    isSample: true
  }
];

export function getReviewsByProduct(slug: string) {
  return reviews.filter(r => r.productSlug === slug);
}

export function getRecentReviews(count = 3) {
  return reviews.slice(0, count);
}

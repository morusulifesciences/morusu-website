export interface Review {
  id: string;
  productSlug?: string;
  productName?: string;
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

export async function getGoogleReviews(count = 5): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  
  if (!apiKey || !placeId) {
    return getRecentReviews(count);
  }

  try {
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`, { next: { revalidate: 3600 } });
    const data = await res.json();
    
    if (data.result && data.result.reviews) {
      return data.result.reviews.slice(0, count).map((r: any) => ({
        id: r.time.toString(),
        productName: "Morusu Life Sciences",
        authorName: r.author_name,
        rating: r.rating,
        date: new Date(r.time * 1000).toISOString().split('T')[0],
        content: r.text,
        isSample: false
      }));
    }
    return getRecentReviews(count);
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return getRecentReviews(count);
  }
}

export async function getGooglePlaceDetails() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  
  if (!apiKey || !placeId) {
    return { rating: 4.8, total: "Sample Data" };
  }
  
  try {
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`, { next: { revalidate: 3600 } });
    const data = await res.json();
    return {
      rating: data.result?.rating || 4.8,
      total: data.result?.user_ratings_total ? `${data.result.user_ratings_total} Google Reviews` : "Verified Reviews"
    };
  } catch (error) {
    return { rating: 4.8, total: "Sample Data" };
  }
}

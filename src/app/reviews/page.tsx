import { Metadata } from "next";
import { Star } from "lucide-react";
import { getGoogleReviews, getGooglePlaceDetails } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | Morusu Life Sciences",
  description: "Browse verified customer reviews and product feedback for Morusu Life Sciences.",
};

export default async function ReviewsPage() {
  const reviews = await getGoogleReviews(10);
  const placeDetails = await getGooglePlaceDetails();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream-dark/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-section text-primary-dark mb-6">
            Customer Reviews
          </h1>
          <p className="text-body-content text-text-muted mb-6">
            Read what our customers are saying about their experience with Morusu Life Sciences products.
          </p>
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-soft shadow-soft">
            <div className="flex text-gold">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <div className="flex flex-col text-left border-l border-soft pl-4">
              <span className="font-semibold text-primary-dark">{placeDetails.rating} out of 5</span>
              <span className="text-xs text-text-muted">{placeDetails.total}</span>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 md:p-8 rounded-2xl border border-soft shadow-soft flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 shrink-0">
                <div className="flex text-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-primary-dark/10'}`} />
                  ))}
                </div>
                <p className="font-medium text-primary-dark">{review.authorName}</p>
                <p className="text-xs text-text-muted mt-1">{review.date}</p>
                {review.isSample && (
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-wider bg-primary/5 text-text-muted px-2 py-1 rounded">
                    Sample Data
                  </span>
                )}
              </div>
              
              <div className="md:w-3/4 flex flex-col">
                <p className="text-sm font-semibold text-primary mb-3 border-b border-soft pb-3">
                  Reviewed: {review.productName}
                </p>
                <p className="text-text-muted italic leading-relaxed">
                  "{review.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

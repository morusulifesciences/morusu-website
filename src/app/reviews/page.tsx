import { Metadata } from "next";
import { Star } from "lucide-react";
import { getRecentReviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | Morusu Life Sciences",
  description: "Browse sample customer reviews and product feedback for Morusu Life Sciences.",
};

export default function ReviewsPage() {
  const reviews = getRecentReviews(10); // getting all reviews for now

  return (
    <div className="pt-32 pb-24 min-h-screen bg-ivory-dark/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest-900 mb-6">
            Customer Reviews
          </h1>
          <p className="text-lg text-forest-900/80 mb-6">
            Read what our customers are saying about their experience with Morusu Life Sciences products.
          </p>
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-forest-900/10 shadow-sm">
            <div className="flex text-gold">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <div className="flex flex-col text-left border-l border-forest-900/10 pl-4">
              <span className="font-semibold text-forest-900">4.8 out of 5</span>
              <span className="text-xs text-forest-900/50">Sample Rating Data</span>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 md:p-8 rounded-2xl border border-forest-900/5 shadow-sm flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 shrink-0">
                <div className="flex text-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-forest-900/10'}`} />
                  ))}
                </div>
                <p className="font-medium text-forest-900">{review.authorName}</p>
                <p className="text-xs text-forest-900/50 mt-1">{review.date}</p>
                {review.isSample && (
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-wider bg-forest-900/5 text-forest-900/50 px-2 py-1 rounded">
                    Sample Data
                  </span>
                )}
              </div>
              
              <div className="md:w-3/4 flex flex-col">
                <p className="text-sm font-semibold text-forest-700 mb-3 border-b border-forest-900/5 pb-3">
                  Reviewed: {review.productName}
                </p>
                <p className="text-forest-900/80 italic leading-relaxed">
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

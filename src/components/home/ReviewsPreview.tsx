import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { getGoogleReviews, getGooglePlaceDetails } from "@/data/reviews";

export async function ReviewsPreview() {
  const reviews = await getGoogleReviews(3);
  const placeDetails = await getGooglePlaceDetails();

  return (
    <section className="py-16 md:py-24 bg-cream-dark/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-section text-primary-dark mb-6">
              What Customers Say
            </h2>
            <div className="flex items-center gap-4 text-text-muted">
              <div className="flex text-gold">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-medium">{placeDetails.rating} / 5</span>
              <span className="text-sm border-l border-soft pl-4">{placeDetails.total}</span>
            </div>
          </div>
          <Link 
            href="/reviews"
            className="inline-flex items-center gap-2 text-primary-dark font-medium hover:text-primary transition-colors group whitespace-nowrap"
          >
            <span className="border-b border-primary group-hover:border-primary pb-0.5 transition-colors">
              View All Reviews
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative overflow-hidden -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#e8e7e1] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#e8e7e1] to-transparent z-10 pointer-events-none" />
          
          {/* Marquee Track */}
          <div className="flex w-[200%] gap-6 md:gap-8 animate-marquee">
            {/* We duplicate the reviews array to make the infinite scroll seamless */}
            {[...reviews, ...reviews].map((review, idx) => (
              <div 
                key={`${review.id}-${idx}`} 
                className="w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 bg-white p-8 rounded-2xl border border-soft shadow-soft flex flex-col h-full"
              >
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-primary-dark/10'}`} />
                  ))}
                </div>
                <p className="text-text-muted mb-6 flex-1 italic">&quot;{review.content}&quot;</p>
                <div className="mt-auto border-t border-soft pt-4">
                  <p className="font-medium text-primary-dark">{review.authorName}</p>
                  <p className="text-xs text-primary mt-1">{review.productName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/data/products";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  
  return {
    title: `${product.name} | ${product.category} | Morusu Life Sciences`,
    description: product.shortDescription,
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://morusulifesciences.com${product.image}`,
    "description": product.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "category": product.category
  };

  return (
    <div className="pt-32 lg:pt-40 pb-24 min-h-screen bg-ivory">
      <JsonLd data={productSchema} />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <Breadcrumbs items={[{ name: "Products", url: "/products" }, { name: product.name }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left: Product Image (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] bg-white rounded-3xl overflow-hidden flex items-center justify-center p-12 border border-forest-900/5 shadow-sm">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src={product.image} 
                 alt={product.name}
                 className="w-auto h-full object-contain drop-shadow-xl" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-forest-900/5 to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Right: Buy Box & Info */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Header section */}
            <div className="mb-6">
              <span className="text-forest-700 text-xs font-bold uppercase tracking-widest mb-3 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-forest-800 font-serif italic">
                {product.tagline}
              </p>
            </div>
            
            {/* Price section */}
            {product.sellingPrice && (
              <div className="mb-8 flex items-baseline gap-4 py-4 border-y border-forest-900/10">
                <span className="text-3xl md:text-4xl font-serif text-forest-900 font-semibold">{product.sellingPrice}</span>
                {product.mrp && product.mrp !== product.sellingPrice && (
                  <span className="text-lg text-forest-900/50 line-through">MRP: {product.mrp}</span>
                )}
                <span className="ml-auto text-xs font-medium uppercase tracking-wider text-forest-700 bg-sage-light/20 px-3 py-1 rounded-full">
                  In Stock
                </span>
              </div>
            )}
            
            {/* Short Description */}
            <p className="text-lg text-forest-900/80 mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Pack Size Box */}
            {product.packSize && (
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block mb-3">Available Pack Size</span>
                <div className="inline-flex items-center justify-center border-2 border-forest-900 text-forest-900 px-6 py-3 rounded-xl font-medium bg-white">
                  {product.packSize}
                </div>
              </div>
            )}
            
            {/* Action */}
            <div className="mb-12">
              <a 
                href={`https://wa.me/917893683052?text=${encodeURIComponent(`Hello, I would like to enquire about your product: ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#1DA851] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] shadow-xl shadow-[#25D366]/20 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire via WhatsApp
              </a>
            </div>
            
            {/* Details Accordion-style layout */}
            <div className="flex flex-col border-t border-forest-900/10">
              
              {product.fullDescription && (
                <div className="py-6 border-b border-forest-900/10">
                  <h3 className="text-lg font-serif text-forest-900 mb-3">Product Description</h3>
                  <p className="text-forest-900/70 text-sm leading-relaxed">{product.fullDescription}</p>
                </div>
              )}
              
              {product.howToUse && (
                <div className="py-6 border-b border-forest-900/10">
                  <h3 className="text-lg font-serif text-forest-900 mb-3">How to Use</h3>
                  <p className="text-forest-900/70 text-sm leading-relaxed">{product.howToUse}</p>
                </div>
              )}

              {product.storageInstructions && (
                <div className="py-6 border-b border-forest-900/10">
                  <h3 className="text-lg font-serif text-forest-900 mb-3">Storage Instructions</h3>
                  <p className="text-forest-900/70 text-sm leading-relaxed">{product.storageInstructions}</p>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Bottom Section: Ingredients & Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-forest-900/5">
            <h2 className="text-2xl font-serif text-forest-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xl">✦</span>
              Key Benefits
            </h2>
            <ul className="space-y-5 text-forest-900/80">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-forest-900 shrink-0 mt-2" />
                  <span className="leading-relaxed font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-sage-light/10 rounded-[2rem] p-8 md:p-10 shadow-sm border border-forest-900/5">
            <h2 className="text-2xl font-serif text-forest-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-forest-900 text-xl shadow-sm">🌿</span>
              Key Ingredients
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.ingredients.map((ingredient, idx) => (
                <span key={idx} className="bg-white border border-forest-900/10 text-forest-900 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

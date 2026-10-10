"use client";

import { useState } from "react";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { Product } from "@/data/products";
import { Check, Shield, Stethoscope, Leaf, Minus, Plus, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";

interface Props {
  product: Product;
}

export function ProductDetailClient({ product }: Props) {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Combine product_mockup.png first, then the rest of the images
  const images = [
    ...(product.image ? [product.image] : []),
    ...(product.images || [])
  ];

  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    const numericString = product.sellingPrice ? product.sellingPrice.replace(/[^\d]/g, '') : '';
    const priceValue = numericString ? parseInt(numericString, 10) : 0;
    
    addToCart({
      id: product.slug,
      name: product.name,
      price: isNaN(priceValue) ? 0 : priceValue,
      quantity: quantity,
      image: product.image || ""
    });
  };

  return (
    <div className="bg-cream min-h-screen pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-8 mt-2 font-medium">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>›</span>
          <a href="/products" className="hover:text-primary transition-colors">Products</a>
          <span>›</span>
          <span className="text-primary-dark">{product.name}</span>
        </div>

        {/* Top Split Layout - Narrower Left Column */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] xl:grid-cols-[380px_1fr] gap-10 lg:gap-12 mb-12 items-start">
          
          {/* Left: Images */}
          <div className="flex flex-col gap-3 w-full sticky top-32">
            {/* Main Big Picture */}
            <div className="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-soft border border-soft">
              <Image 
                src={images[activeImage]} 
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            
            {/* Thumbnails Slider */}
            {images.length > 1 && (
              <div className="relative group mt-2">
                <button 
                  onClick={() => document.getElementById('thumb-scroll')?.scrollBy({ left: -100, behavior: 'smooth' })}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 border border-soft rounded-full shadow-md z-10 flex items-center justify-center text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cream"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div id="thumb-scroll" className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 px-1">
                  {images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`shrink-0 w-[88px] h-[88px] snap-start relative rounded-2xl overflow-hidden border-2 transition-all bg-white ${activeImage === idx ? 'border-primary shadow-md' : 'border-soft hover:border-sage-light opacity-70 hover:opacity-100'}`}
                    >
                      <Image src={img} alt={`Thumbnail ${idx+1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => document.getElementById('thumb-scroll')?.scrollBy({ left: 100, behavior: 'smooth' })}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 border border-soft rounded-full shadow-md z-10 flex items-center justify-center text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cream"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col pt-0">
            <h1 className="text-[36px] lg:text-[42px] font-serif text-primary-dark font-semibold leading-none mb-2">{product.name}</h1>
            {/* <p className="text-[20px] lg:text-[24px] text-primary-dark/80 font-serif leading-tight mb-4">{product.tagline || product.category}</p>
             */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center text-gold text-base">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <span className="text-[14px] font-medium text-primary-dark">(4.8)</span>
              <span className="text-text-muted">|</span>
              <span className="text-[14px] text-primary-dark underline underline-offset-4 decoration-soft font-medium">120+ Reviews</span>
            </div>

            {/* Price Display */}
            <div className="flex items-end gap-3 mb-6">
              {product.sellingPrice && (
                <span className="text-[28px] font-bold text-primary-dark font-sans leading-none">
                  {product.sellingPrice}
                </span>
              )}
              {product.mrp && product.mrp !== product.sellingPrice && (
                <>
                  <span className="text-[16px] text-text-muted line-through font-medium leading-relaxed">
                    MRP: {product.mrp}
                  </span>
                  <span className="text-[14px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    20% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-[15px] lg:text-[16px] text-text-muted leading-relaxed mb-6 max-w-lg">
              {product.shortDescription || (product.fullDescription ? product.fullDescription.substring(0, 150) + "..." : "")}
            </p>

            {/* Icon Boxes */}
            <div className="grid grid-cols-3 gap-3 mb-6 max-w-xl">
              <div className="flex flex-col items-center justify-center text-center gap-2 p-3 border border-soft rounded-2xl">
                <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <span className="text-[11px] lg:text-[12px] font-medium text-primary-dark leading-tight px-1">Supports Healthy<br/>Sugar Levels</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2 p-3 border border-soft rounded-2xl">
                <Stethoscope className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <span className="text-[11px] lg:text-[12px] font-medium text-primary-dark leading-tight px-1">Improves<br/>Metabolism</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2 p-3 border border-soft rounded-2xl">
                <Leaf className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <span className="text-[11px] lg:text-[12px] font-medium text-primary-dark leading-tight px-1">100% Natural<br/>Ingredients</span>
              </div>
            </div>

            {/* Pack Size */}
            {product.packSize && (
              <div className="mb-6">
                <span className="text-[13px] font-semibold text-text-muted block mb-2 uppercase tracking-wider">Pack Size</span>
                <div className="flex flex-wrap gap-2.5">
                  <button className="px-4 py-2 bg-primary text-white text-[14px] font-medium rounded-lg border border-primary shadow-soft">
                    {product.packSize}
                  </button>
                </div>
              </div>
            )}

            {/* Add to Cart / Quantity */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center bg-white border border-soft rounded-lg shadow-sm h-12 w-28">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 flex justify-center text-text-muted hover:text-primary transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold text-primary-dark text-[15px] w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="flex-1 flex justify-center text-text-muted hover:text-primary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="bg-primary text-white h-12 px-6 rounded-lg text-[15px] font-semibold hover:bg-primary-dark transition-all shadow-elevated hover:-translate-y-0.5 flex items-center justify-center gap-2 max-w-[180px]"
              >
                Add to Cart <ShoppingCart className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Feature Row */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 md:p-10 rounded-[2rem] border border-soft mb-16 shadow-soft/50">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-sage-light/50 flex items-center justify-center text-primary border border-sage-light">
              <Leaf className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <span className="text-[15px] text-primary-dark font-medium">100% Natural</span>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-sage-light/50 flex items-center justify-center text-primary border border-sage-light">
              <div className="font-serif italic font-bold text-2xl mb-1">A</div>
            </div>
            <span className="text-[15px] text-primary-dark font-medium">Ayurvedic Formula</span>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-sage-light/50 flex items-center justify-center text-primary border border-sage-light">
              <Shield className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <span className="text-[15px] text-primary-dark font-medium">No Side Effects</span>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-sage-light/50 flex items-center justify-center text-primary border border-sage-light">
              <Check className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className="text-[15px] text-primary-dark font-medium">Quality Assured</span>
          </div>
        </div> */}

        {/* Tabs Section */}
        <div className="border-b border-soft flex gap-8 md:gap-12 overflow-x-auto no-scrollbar mb-10 pb-2">
          {[
            { id: "description", label: "Description" },
            { id: "ingredients", label: "Ingredients" },
            { id: "benefits", label: "Benefits" },
            { id: "how-to-use", label: "How to Use" },
            { id: "faqs", label: "FAQs" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-[16px] font-semibold whitespace-nowrap transition-colors relative ${
                activeTab === tab.id ? "text-primary-dark" : "text-text-muted hover:text-primary-dark"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start pb-10">
          <div className="flex flex-col gap-6">
            {activeTab === "description" && (
              <>
                <p className="text-[16px] text-text-muted leading-[1.8]">
                  {product.fullDescription || product.shortDescription}
                </p>
                {product.benefits && product.benefits.length > 0 && (
                  <ul className="flex flex-col gap-5 mt-4">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-[16px] text-primary-dark font-medium leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {activeTab === "ingredients" && (
              <div className="flex flex-wrap gap-3">
                {product.ingredients?.map((ingredient, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white border border-soft rounded-full text-[15px] text-primary-dark font-medium shadow-sm">
                    {ingredient}
                  </span>
                )) || <p className="text-[16px] text-text-muted">100% natural botanical ingredients.</p>}
              </div>
            )}

            {activeTab === "benefits" && (
              <ul className="flex flex-col gap-5">
                {product.benefits?.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] text-primary-dark font-medium leading-relaxed">{benefit}</span>
                  </li>
                )) || <p className="text-[16px] text-text-muted">Supports natural wellness.</p>}
              </ul>
            )}

            {activeTab === "how-to-use" && (
              <p className="text-[16px] text-text-muted leading-[1.8]">
                {product.howToUse || "Follow the directions on the package or consult your healthcare practitioner."}
              </p>
            )}

            {activeTab === "faqs" && (
              <p className="text-[16px] text-text-muted leading-[1.8]">
                For detailed queries, please reach out to our team via the WhatsApp button above or visit our contact page.
              </p>
            )}
          </div>

          {/* Editorial Image next to Tab Content */}
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-soft border border-soft">
            <Image 
              src="/images/hero1.png" 
              alt="Natural Ayurvedic Ingredients"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

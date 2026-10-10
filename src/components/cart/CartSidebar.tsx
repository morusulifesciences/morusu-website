"use client";

import { useCart } from "./CartProvider";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { BlobImage as Image } from "@/components/blob/BlobImage";
import { useState } from "react";

export function CartSidebar() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!isCartOpen) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT_1;
    if (!endpoint) {
      console.error("Missing Google Sheets Endpoint URL");
      setStatus("error");
      return;
    }

    const orderData = {
      type: "Order",
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      items: items.map(item => `${item.name} x ${item.quantity}`).join(", "),
      totalValue: `₹${totalPrice}`,
      date: new Date().toISOString()
    };

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(orderData),
      });

      setStatus("success");
      setTimeout(() => {
        clearCart();
        setIsCartOpen(false);
        setIsCheckingOut(false);
        setStatus("idle");
        setFormData({ name: "", phone: "", address: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting order:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-primary-dark/40 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl z-[110] flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-soft flex items-center justify-between bg-white">
          <div className="flex items-center gap-3 text-primary-dark">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-xl font-serif font-bold">Your Cart</h2>
            <span className="bg-cream text-primary-dark text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-cream flex items-center justify-center text-text-muted hover:text-primary-dark transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <button 
                type="button" 
                onClick={() => setIsCheckingOut(false)}
                className="text-sm font-medium text-text-muted hover:text-primary-dark mt-2 text-left p-4"
              >
                &larr; Back to Cart
              </button>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-text-muted">
              <ShoppingBag className="w-16 h-16 mb-4 text-soft" strokeWidth={1} />
              <p className="text-lg font-medium mb-2">Your cart is empty</p>
              <p className="text-sm">Add some amazing Ayurvedic products!</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 text-primary font-semibold hover:text-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : isCheckingOut ? (
            <form onSubmit={handleSubmitOrder} className="p-6 flex flex-col gap-5 animate-fade-in">
              <h3 className="font-serif text-lg font-semibold text-primary-dark mb-2">Shipping Details</h3>
              
              <div>
                <label className="block text-nav text-primary-dark mb-1.5">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-soft focus:outline-none focus:ring-2 focus:ring-primary text-body-content"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-nav text-primary-dark mb-1.5">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-soft focus:outline-none focus:ring-2 focus:ring-primary text-body-content"
                  placeholder="+91"
                />
              </div>

              <div>
                <label className="block text-nav text-primary-dark mb-1.5">Delivery Address</label>
                <textarea 
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-soft focus:outline-none focus:ring-2 focus:ring-primary text-body-content resize-none"
                  placeholder="Full address with pincode"
                />
              </div>

              
            </form>
          ) : (
            <div className="p-4 sm:p-6 flex flex-col gap-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-soft shadow-sm">
                  <div className="w-20 h-20 bg-cream rounded-xl relative overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-primary-dark text-sm leading-snug">{item.name}</h4>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-text-muted hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="font-bold text-primary-dark">₹{item.price}</div>
                      
                      <div className="flex items-center bg-surface border border-soft rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream text-text transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream text-text transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-soft shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between mb-4 text-lg font-serif">
              <span className="font-sans">Subtotal</span>
              <span className="font-bold font-sans" >₹{totalPrice}</span>
            </div>

            {status === "success" ? (
              <div className="w-full bg-sage-light text-primary-dark text-center py-4 rounded-xl font-semibold">
                Order placed successfully! We'll contact you soon.
              </div>
            ) : status === "error" ? (
              <div className="w-full bg-red-50 text-red-700 text-center py-3 rounded-xl font-medium mb-3">
                Error placing order. Please try again.
              </div>
            ) : null}

            {status !== "success" && (
              isCheckingOut ? (
                <button 
                  onClick={handleSubmitOrder}
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all flex justify-center items-center gap-2 shadow-elevated disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending Details..." : "Place Order "}
                </button>
              ) : (
                <button 
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all flex justify-center items-center gap-2 shadow-elevated"
                >
                  Proceed to Order
                  <ArrowRight className="w-4 h-4" />
                </button>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}

import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Morusu Life Sciences",
  description: "Contact Morusu Life Sciences for product enquiries, partnerships and general information.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ivory">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-20 text-center">
        <span className="text-gold font-semibold uppercase tracking-widest mb-4 block">Get In Touch</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-forest-900 mb-6 max-w-4xl mx-auto leading-tight">
          Contact Us
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
        <p className="text-xl md:text-2xl text-forest-900/70 max-w-3xl mx-auto font-serif italic">
          We're here to help with product enquiries, partnerships, and general information.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-10">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-forest-900/5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-700 mb-8 block">
                Contact Information
              </h2>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sage-light/20 flex items-center justify-center shrink-0">
                    <span className="font-serif text-xl text-forest-900">M</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-forest-900 mb-1">Director</h3>
                    <p className="text-forest-900/70 leading-relaxed font-serif text-xl">
                      Lion Dr. M. Murali Mohan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sage-light/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-forest-900" />
                  </div>
                  <div>
                    <h3 className="font-medium text-forest-900 mb-1">Office Address</h3>
                    <p className="text-forest-900/70 leading-relaxed text-lg">
                      123 Wellness Avenue<br />
                      Herbal Park, Mumbai<br />
                      Maharashtra, India 400001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sage-light/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-forest-900" />
                  </div>
                  <div>
                    <h3 className="font-medium text-forest-900 mb-1">Email</h3>
                    <a href="mailto:hello@morusulifesciences.com" className="text-forest-900/70 hover:text-forest-900 transition-colors text-lg">
                      hello@morusulifesciences.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sage-light/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-forest-900" />
                  </div>
                  <div>
                    <h3 className="font-medium text-forest-900 mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-forest-900/70 hover:text-forest-900 transition-colors text-lg">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[250px] bg-ivory-dark/50 rounded-[3rem] border border-forest-900/5 flex items-center justify-center overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <span className="text-forest-900/50 text-sm font-medium relative z-10 uppercase tracking-widest">Map Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-forest-900/5 h-fit">
            <h2 className="text-3xl font-serif text-forest-900 mb-8">Send an Enquiry</h2>
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest-900 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  autoComplete="name"
                  className="w-full px-5 py-4 rounded-2xl bg-ivory-dark/20 border border-forest-900/10 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:bg-white transition-colors" 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest-900 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  autoComplete="email"
                  inputMode="email"
                  className="w-full px-5 py-4 rounded-2xl bg-ivory-dark/20 border border-forest-900/10 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:bg-white transition-colors" 
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-forest-900 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  autoComplete="tel"
                  inputMode="tel"
                  className="w-full px-5 py-4 rounded-2xl bg-ivory-dark/20 border border-forest-900/10 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:bg-white transition-colors" 
                  placeholder="+91"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-900 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl bg-ivory-dark/20 border border-forest-900/10 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:bg-white transition-colors resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="mt-4 w-full bg-forest-900 text-white py-5 rounded-2xl font-medium hover:bg-forest-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-900 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Morusu Life Sciences",
  description: "Contact Morusu Life Sciences for product enquiries, partnerships and general information.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-20 text-center">
        <span className="text-gold font-semibold uppercase tracking-widest mb-4 block">Get In Touch</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-dark mb-6 max-w-4xl mx-auto leading-tight">
          Contact Us
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-serif italic">
          We're here to help with product enquiries, partnerships, and general information.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-10">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-soft border border-soft">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8 block">
                Contact Information
              </h2>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <span className="font-serif text-xl text-primary-dark">M</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-dark mb-1">Director</h3>
                    <p className="text-text-muted leading-relaxed font-serif text-xl">
                      Lion Dr. M. Murali Mohan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-dark mb-1">Office Address</h3>
                    <p className="text-text-muted leading-relaxed text-lg">
                      123 Wellness Avenue<br />
                      Herbal Park, Mumbai<br />
                      Maharashtra, India 400001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-dark mb-1">Email</h3>
                    <a href="mailto:hello@morusulifesciences.com" className="text-text-muted hover:text-primary-dark transition-colors text-lg">
                      hello@morusulifesciences.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-dark mb-1">Phone</h3>
                    <a href="tel:+917893683052" className="text-text-muted hover:text-primary-dark transition-colors text-lg">
                      +91 78936 83052
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[250px] bg-cream-dark/50 rounded-[3rem] border border-soft flex items-center justify-center overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <span className="text-text-muted text-sm font-medium relative z-10 uppercase tracking-widest">Map Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-soft border border-soft h-fit">
            <h2 className="text-3xl font-serif text-primary-dark mb-8">Send an Enquiry</h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}

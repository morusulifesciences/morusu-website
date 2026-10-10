import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Morusu Life Sciences",
  description:
    "Contact Morusu Life Sciences for product enquiries, partnerships and general information.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Banner Top */}
      <div className="relative pt-32 pb-16 md:pt-36 md:pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gold-light/5" />
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center mt-12">
          <span className="text-label text-gold mb-3 block">Get In Touch</span>
          <h1 className="text-hero text-white mb-4 max-w-4xl mx-auto leading-tight">
            Contact Us
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-5" />
          <p className="text-intro text-cream/90 max-w-2xl mx-auto">
            We're here to help with product enquiries, partnerships, and general
            information.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Details Card */}
          <div className="bg-cream rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-between gap-12">
            <div>
              <h2 className="text-section text-primary-dark mb-6">
                Contact Information
              </h2>
              {/* <p className="text-body-content text-text-muted mb-10">
                Reach out to us directly using the information below, or fill
                out the form and we'll get back to you promptly.
              </p> */}

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full  flex items-center justify-center shrink-0 border border-soft">
                    <span className="font-serif text-xl text-primary-dark ">
                      M
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-nav text-primary-dark mb-1">
                      Director
                    </h3>
                    <p className="text-body-content text-text-muted">
                      Lion Dr. M. Murali Mohan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <a
                    href="https://maps.app.goo.gl/K2PwJc8mE97m7rxg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-soft flex items-center justify-center shrink-0"
                  >
                    <MapPin className="w-5 h-5 text-primary-dark " />
                  </a>
                  <div className="pt-1">
                    <h3 className="text-nav text-primary-dark mb-1">
                      Office Address
                    </h3>
                    <a
                      href="https://maps.app.goo.gl/K2PwJc8mE97m7rxg7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-content text-text-muted hover:text-primary transition-colors block"
                    >
                      Plot no.21, Ground Floor, IDA, Phase -Il Charlapally,
                      Kapra, Medchal Malakajgiri District, Telangana,
                      500051 CHERLAPALLY(V), KAPRA(M) MEDCHAL - MALKAJGIRI(D),
                      T.S
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-soft flex items-center justify-center shrink-0 ">
                    <Mail className="w-5 h-5 text-primary-dark " />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-nav text-primary-dark mb-1">Email</h3>
                    <a
                      href="mailto:hello@morusulifesciences.com"
                      className="text-body-content text-text-muted hover:text-primary transition-colors"
                    >
                      support@morusulifesciences.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-soft flex items-center justify-center shrink-0 ">
                    <Phone className="w-5 h-5 text-primary-dark " />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-nav text-primary-dark mb-1">Phone</h3>
                    <a
                      href="tel:+917893683052"
                      className="text-body-content text-text-muted hover:text-primary transition-colors"
                    >
                      +91 8639343659
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full min-h-[300px] flex-grow bg-surface rounded-2xl border border-soft overflow-hidden relative">
              <iframe
                src="https://maps.google.com/maps?q=17.4663831,78.5989773&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Morusu Life Sciences Location"
              />
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-soft h-full flex flex-col">
            <h2 className="text-section text-primary-dark mb-8">
              Send an Enquiry
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

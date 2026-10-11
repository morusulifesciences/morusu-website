import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Phone, MapPin, Globe, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Morusu Life Sciences",
  description:
    "Read the Privacy Policy of Morusu Life Sciences explaining how we collect, use, and protect your personal data for website browsing, WhatsApp orders, and customer support.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream text-text pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Transparency & Trust</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-4 leading-tight">
            Privacy Policy
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-sm md:text-base text-text-muted leading-relaxed">
            Morusu Life Sciences is committed to respecting your privacy and protecting the personal information you share with us.
          </p>
          <span className="inline-block text-xs text-text-muted/70 mt-2 font-medium">
            Last Updated: October 2026
          </span>
        </div>

        {/* Company Quick Details Card */}
        <div className="bg-white rounded-2xl border border-soft p-6 md:p-8 mb-12 shadow-soft">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
            Company Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-muted">
            <div className="flex items-start gap-3">
              <span className="font-semibold text-primary-dark min-w-[120px]">Company Name:</span>
              <span>Morusu Life Sciences</span>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a 
                href="https://www.morusulifesciences.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.morusulifesciences.com/
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a href="tel:+918639343659" className="hover:text-primary transition-colors">
                +91 8639343659
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a href="mailto:support@morusulifesciences.com" className="hover:text-primary transition-colors">
                support@morusulifesciences.com
              </a>
            </div>
            <div className="sm:col-span-2 flex items-start gap-3 pt-2 border-t border-soft/60">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <address className="not-italic text-xs md:text-sm">
                Plot No. 21, Ground Floor, IDA, Phase II, Cherlapally, Kapra, Medchal–Malkajgiri District, Telangana – 500051, India.
              </address>
            </div>
          </div>
        </div>

        {/* Policy Content Body */}
        <div className="bg-white rounded-[2rem] border border-soft p-8 sm:p-10 md:p-14 lg:p-16 shadow-soft space-y-12">
          
          {/* Introduction */}
          <div className="space-y-4 text-base text-text-muted leading-relaxed border-b border-soft pb-8">
            <p>
              Morusu Life Sciences is committed to respecting your privacy and protecting the personal information you share with us. We aim to handle your information responsibly when you visit our website, enquire about our products, or place an order through WhatsApp.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use it, when we may share it with third parties, and the measures we take to protect it. It also explains the choices available to you regarding your personal information.
            </p>
            <p className="text-sm italic">
              Our Privacy Policy may be updated from time to time to reflect changes in our business practices, website functionality, or applicable legal requirements. We encourage you to review this page periodically.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              1. Collection of Personally Identifiable Information and Other Information
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              When you visit our website, contact us, or place an order, we may collect personal information necessary to respond to your enquiry, process your order, and provide customer support.
            </p>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              The information we may collect includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-cream/50 rounded-xl p-5 border border-soft">
                <h3 className="font-sans font-semibold text-primary-dark text-sm mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-xs md:text-sm text-text-muted space-y-1">
                  <li>Full name</li>
                  <li>Mobile number</li>
                  <li>Email address, if provided</li>
                  <li>WhatsApp contact details</li>
                  <li>Delivery address</li>
                  <li>Billing address, where applicable</li>
                  <li>City, state, and PIN code</li>
                </ul>
              </div>

              <div className="bg-cream/50 rounded-xl p-5 border border-soft">
                <h3 className="font-sans font-semibold text-primary-dark text-sm mb-2">Order Information</h3>
                <ul className="list-disc list-inside text-xs md:text-sm text-text-muted space-y-1">
                  <li>Products selected or ordered</li>
                  <li>Product quantities</li>
                  <li>Order value</li>
                  <li>Order date and order status</li>
                  <li>Delivery instructions</li>
                  <li>Payment confirmation or transaction reference, where provided</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                <strong className="text-primary-dark">Communication Information:</strong> We may retain relevant information from your WhatsApp messages, telephone calls, or emails to respond to enquiries, confirm orders, resolve issues, and provide customer support.
              </p>
              <p>
                <strong className="text-primary-dark">Technical Information:</strong> Depending on the technologies used on our website, we may collect technical information such as your IP address, browser type, device information, pages visited, and website usage data.
              </p>
              <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary text-xs sm:text-sm font-medium text-primary-dark mt-3">
                We do not intentionally collect personal information that is unnecessary for the purposes described in this policy. We do not sell your personal information to third parties.
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              2. Website Browsing and Customer Orders
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Our website allows visitors to explore Morusu Life Sciences products and contact us to place orders.
              </p>
              <p>
                Customers may initiate an order through the WhatsApp option available on our website or contact us directly through WhatsApp.
              </p>
              <p>
                When you contact us to place an order, we may request information such as your name, mobile number, delivery address, PIN code, selected products, and quantities. This information is used to confirm your order, communicate payment instructions, arrange delivery, and provide order-related support.
              </p>
              <p>
                Currently, we do not require customers to create a website account to place an order through our WhatsApp ordering process. If website registration or customer accounts are introduced in the future, this section will be updated accordingly.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              3. Technologies That May Collect Website Information
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              We may use technical tools to maintain our website, understand website performance, and improve the browsing experience. Depending on the technologies implemented, these tools may collect information such as:
            </p>
            <ul className="list-disc list-inside text-sm text-text-muted space-y-1.5 pl-2">
              <li>Internet Protocol (IP) address</li>
              <li>Browser type and version</li>
              <li>Device and operating system information</li>
              <li>Pages visited and time spent on the website</li>
              <li>Referring website address</li>
              <li>Date and time of website access</li>
            </ul>
            <p className="text-sm text-text-muted">
              This information may help us understand how visitors use our website and identify technical problems. We will update this section if additional analytics or tracking technologies are introduced.
            </p>

            <div className="space-y-3 pt-3">
              <h3 className="text-base sm:text-lg font-serif font-bold text-primary-dark">3.1 Cookies</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Cookies are small text files that websites may store on your device to support functionality and remember certain preferences. Our website may use cookies or similar technologies to support essential website functionality, understand website traffic, remember preferences, and improve the browsing experience.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                You may manage or disable cookies through your browser settings. However, disabling certain cookies may affect some website features. Where required, we will provide appropriate information and consent options for non-essential cookies.
              </p>
            </div>

            <div className="space-y-3 pt-3">
              <h3 className="text-base sm:text-lg font-serif font-bold text-primary-dark">3.2 Analytics and Tracking Technologies</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                If we use website analytics, pixels, web beacons, or similar technologies, they may collect information about how visitors interact with our website. Such information helps us measure website performance, understand visitor behaviour, and improve our services.
              </p>
              <p className="text-xs italic text-text-muted/80">
                We do not claim to use advertising trackers or web beacons unless they are actually configured.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              4. Use of Personal Information
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              We use the information collected for legitimate business purposes, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Responding to product enquiries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Processing and confirming customer orders.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Communicating through WhatsApp, telephone, or email.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Sharing payment instructions and verifying payments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Arranging deliveries through third-party delivery services.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Providing order updates and customer support.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Handling complaints and resolving disputes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Maintaining business, transaction, and accounting records.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Improving our website and customer experience.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Detecting suspected fraud or unauthorised activity.</span>
              </li>
              <li className="flex items-start gap-2 sm:col-span-2">
                <span className="text-primary font-bold">•</span>
                <span>Meeting applicable legal and regulatory obligations.</span>
              </li>
            </ul>
            <p className="text-sm text-text-muted pt-2">
              We will not use personal information for unrelated purposes except as permitted by applicable law or with appropriate consent where required.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              5. How We Communicate with Customers
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              We may use the contact information you provide to communicate with you about your enquiries, orders, payments, deliveries, and customer support requests.
            </p>

            <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed">
              <div>
                <h3 className="font-serif font-bold text-primary-dark text-base sm:text-lg mb-1">5.1 WhatsApp Messages</h3>
                <p>
                  WhatsApp is our primary customer communication and ordering channel. We may use WhatsApp to answer product questions, confirm selections and quantities, request delivery details, share UPI payment instructions, confirm payment and order status, coordinate delivery, and respond to customer concerns.
                </p>
                <p className="text-xs text-text-muted/80 mt-1">
                  When you contact us through WhatsApp, the information you share may be processed by WhatsApp in accordance with its own terms and privacy policy.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-primary-dark text-base sm:text-lg mb-1">5.2 Telephone Calls</h3>
                <p>
                  We may call you using the phone number you provide when necessary to clarify order details, verify delivery information, resolve order-related issues, or respond to your enquiry. We will use your contact information for promotional calls only where permitted by applicable law and with consent where required.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-primary-dark text-base sm:text-lg mb-1">5.3 Emails</h3>
                <p>
                  If you provide your email address, we may use it to respond to enquiries or communicate information relating to your order. If we introduce newsletters or promotional emails, we will provide appropriate choices and comply with applicable requirements.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-primary-dark text-base sm:text-lg mb-1">5.4 Service-Related Communications</h3>
                <p>
                  We may send communications necessary to process an order or provide the services you request, including order confirmations, payment-related updates, delivery coordination, and customer support responses.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark flex items-center gap-2">
              <Lock className="w-5 h-5 text-gold shrink-0" />
              <span>6. Payment Information</span>
            </h2>
            <div className="bg-cream/60 rounded-xl p-5 border border-soft space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p className="font-medium text-primary-dark">
                Morusu Life Sciences currently accepts payments through manual UPI transfers. Cash on Delivery (COD) is not available.
              </p>
              <p>
                Customers may be asked to complete a UPI payment using the payment instructions provided by us. We may retain relevant payment confirmations or transaction references to verify the payment and maintain order records.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-earth bg-white p-3 rounded-lg border border-soft">
                Important Security Note: We do not ask customers to share their UPI PIN, banking password, OTP, or other banking authentication credentials.
              </p>
              <p className="text-xs text-text-muted">
                Because payments are currently handled through manual UPI transfers, our website does not store card or banking credentials. If an online payment gateway is introduced in the future, this section will be updated accordingly.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              7. Sharing of Personal Information
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share relevant information with third parties where necessary to fulfil your order, operate our website, provide customer support, or comply with applicable law.
            </p>
            <div className="space-y-3 text-sm text-text-muted">
              <p>
                <strong className="text-primary-dark">Delivery and Courier Partners:</strong> We may share your name, mobile number, delivery address, PIN code, and relevant order information to arrange delivery and coordinate shipment.
              </p>
              <p>
                <strong className="text-primary-dark">WhatsApp and Communication Services:</strong> When you use WhatsApp or another communication service to contact us, your information may be processed by that service under its own privacy terms.
              </p>
              <p>
                <strong className="text-primary-dark">Website Hosting and Technology Providers:</strong> Service providers responsible for hosting, maintaining, securing, or supporting our website may process technical information necessary to perform their services.
              </p>
              <p>
                <strong className="text-primary-dark">Payment and Financial Service Providers:</strong> Relevant transaction information may be processed or verified through the applicable payment and financial service providers.
              </p>
              <p>
                <strong className="text-primary-dark">Professional Advisers and Authorities:</strong> We may disclose information where necessary to comply with applicable laws, respond to lawful requests, protect our legal rights, or address suspected fraud or security issues.
              </p>
            </div>
          </section>

          {/* Section 8 & 9 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-soft pt-8">
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark">
                8. Third-Party Services and External Links
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Our website may provide links to third-party websites or services, including WhatsApp and external resources. When you access these, their respective terms and privacy policies apply. Morusu Life Sciences does not control the independent privacy practices of third-party websites.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark">
                9. Data Security
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss, or misuse. However, no method of electronic transmission can be guaranteed to be completely secure. Please avoid sharing sensitive credentials over communication channels.
              </p>
            </section>
          </div>

          {/* Section 10 & 11 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-soft pt-8">
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark">
                10. Data Retention
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We retain personal information only for as long as reasonably necessary to process and fulfil orders, maintain customer and transaction records, respond to enquiries, and meet applicable legal, tax, and accounting obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark">
                11. Sharing or Transfer of Data
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Personal information may be processed by our website hosting, communication, delivery, or other service providers. We handle any transfer of personal information in accordance with applicable data-protection requirements.
              </p>
            </section>
          </div>

          {/* Section 12 */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              12. Your Choices and Privacy Rights
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              Subject to applicable law, you may have the right to request information about personal information we hold about you, request correction of inaccurate data, request deletion where legally permissible, withdraw consent, raise concerns, or request that promotional communications stop.
            </p>
            <p className="text-xs text-text-muted/80">
              To submit a request, contact us using the details in the Contact Information section. We may ask you to verify your identity before acting on a request.
            </p>
          </section>

          {/* Section 13, 14, 15 */}
          <section className="space-y-6 border-t border-soft pt-8">
            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                13. Promotional Communications and Opt-Out
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We may contact you about products, offers, or other updates where permitted under applicable law with appropriate consent. You may opt out at any time by contacting us. Opting out will not affect necessary messages relating to existing orders or delivery coordination.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                14. Business Transfers
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                If Morusu Life Sciences undergoes a merger, restructuring, acquisition, or transfer of business assets, personal information may be transferred as part of that transaction where legally permitted and subject to appropriate safeguards.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                15. Children&apos;s Privacy
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Our website is intended for individuals who can lawfully use our services and provide personal information in accordance with applicable law. We do not knowingly collect personal information from children in violation of applicable legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                16. Your Consent
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We process personal information in accordance with applicable law and, where required, on the basis of your consent. You may withdraw consent where processing relies on consent, subject to applicable legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                17. Changes to This Privacy Policy
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We may update this Privacy Policy to reflect changes in our business, website features, customer communication methods, or applicable legal requirements. The updated version will be published on this page along with the revised date.
              </p>
            </div>
          </section>

          {/* Section 18: Contact & Grievance */}
          <section className="bg-cream/40 rounded-2xl border border-soft p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              18. Contact Information and Privacy Complaints
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              If you have questions about this Privacy Policy, wish to exercise an applicable privacy right, or want to raise a concern about the handling of your personal information, please contact us:
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-text-muted pt-2">
              <p><strong className="text-primary-dark">Company Name:</strong> Morusu Life Sciences</p>
              <p>
                <strong className="text-primary-dark">Address:</strong> Plot No. 21, Ground Floor, IDA, Phase II, Cherlapally, Kapra, Medchal–Malkajgiri District, Telangana – 500051, India.
              </p>
              <p>
                <strong className="text-primary-dark">Phone / WhatsApp:</strong>{" "}
                <a href="tel:+918639343659" className="text-primary hover:underline">
                  +91 8639343659
                </a>
              </p>
              <p>
                <strong className="text-primary-dark">Website:</strong>{" "}
                <a href="https://www.morusulifesciences.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://www.morusulifesciences.com/
                </a>
              </p>
              <p>
                <strong className="text-primary-dark">Email:</strong>{" "}
                <a href="mailto:support@morusulifesciences.com" className="text-primary hover:underline">
                  support@morusulifesciences.com
                </a>
              </p>
            </div>

            <p className="text-xs text-text-muted/80 pt-2 border-t border-soft/80">
              We will review privacy-related requests and complaints and respond in accordance with applicable requirements.
            </p>
          </section>

          {/* Closing Copyright */}
          <div className="pt-6 border-t border-soft flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted/70 gap-2">
            <p>Copyright © {new Date().getFullYear()} Morusu Life Sciences. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

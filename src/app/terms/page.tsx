import { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, Phone, MapPin, Globe, Mail, AlertCircle, RefreshCw, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Morusu Life Sciences",
  description:
    "Read the Terms & Conditions governing access to Morusu Life Sciences, product purchases, WhatsApp ordering, shipping, cancellations, and replacements.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream text-text pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Customer Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-4 leading-tight">
            Terms & Conditions
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-sm md:text-base text-text-muted leading-relaxed">
            Please read these terms carefully before exploring our products or placing an order through WhatsApp.
          </p>
          <span className="inline-block text-xs text-text-muted/70 mt-2 font-medium">
            Last Updated: October 2026
          </span>
        </div>

        {/* Company Quick Details Card */}
        <div className="bg-white rounded-2xl border border-soft p-6 md:p-8 mb-12 shadow-soft">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
            Entity Details
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

        {/* Terms Content Body */}
        <div className="bg-white rounded-[2rem] border border-soft p-8 sm:p-10 md:p-14 lg:p-16 shadow-soft space-y-12">
          
          {/* Section 1: Introduction */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              1. Introduction
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Welcome to Morusu Life Sciences.
              </p>
              <p>
                These Terms & Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the Morusu Life Sciences website and the purchase of products offered through our website and WhatsApp ordering channel.
              </p>
              <p>
                In these Terms, &ldquo;Morusu Life Sciences,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; and &ldquo;us&rdquo; refer to Morusu Life Sciences. &ldquo;Customer,&rdquo; &ldquo;you,&rdquo; and &ldquo;your&rdquo; refer to any person visiting our website, enquiring about our products, or placing an order.
              </p>
              <p>
                By accessing our website or placing an order, you agree to these Terms, subject to applicable law. Please read them carefully before placing an order.
              </p>
            </div>
          </section>

          {/* Section 2: Website Use */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              2. Website Use
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Our website provides information about Morusu Life Sciences and its Ayurvedic and herbal products. You agree to use the website only for lawful purposes and in a manner that does not harm the website, interfere with its operation, or infringe the rights of others.
              </p>
              <p className="font-semibold text-primary-dark">You must not:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-text-muted">
                <li>Use the website for fraudulent or unlawful activities.</li>
                <li>Attempt to gain unauthorised access to the website or its systems.</li>
                <li>Interfere with the website&apos;s security or functionality.</li>
                <li>Submit false or misleading information when placing an order.</li>
                <li>Use website content in a way that infringes applicable intellectual property rights.</li>
              </ul>
              <p className="text-xs text-text-muted/80">
                We may take appropriate action where misuse of the website is identified, subject to applicable law.
              </p>
            </div>
          </section>

          {/* Section 3: Product Information */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              3. Product Information
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                We make reasonable efforts to display accurate product names, descriptions, images, ingredients, pack sizes, prices, usage instructions, and other relevant details.
              </p>
              <p>
                However, product images are provided for identification and illustration. Actual packaging, colour, labelling, or appearance may vary where packaging or labelling changes occur.
              </p>
              <p>
                Customers should read the product label, ingredients, directions for use, precautions, and other applicable product information before using a product. If you have questions about a product, please contact us before placing your order.
              </p>
              <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary text-xs sm:text-sm text-primary-dark font-medium">
                Product information on this website is not a substitute for professional medical advice. Do not rely on general website descriptions to diagnose, treat, or manage a medical condition.
              </div>
            </div>
          </section>

          {/* Section 4: Product Availability */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              4. Product Availability
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Product availability may change from time to time. Submitting an order enquiry through WhatsApp does not automatically guarantee that the requested product is available or that the order has been accepted.
              </p>
              <p>
                We will communicate availability and confirmation details to you before proceeding with an order. If a product becomes unavailable after an order has been accepted or payment has been received, we will contact you to discuss available options and any applicable refund.
              </p>
            </div>
          </section>

          {/* Section 5: Order Placement and Confirmation */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              5. Order Placement and Confirmation
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Orders are currently accepted through WhatsApp. Customers may place an order by selecting a product on our website and initiating a WhatsApp conversation, or by contacting us directly through WhatsApp.
              </p>
              <p>To process an order, we may request:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-text-muted">
                <li>Full name and mobile number</li>
                <li>Selected product and quantity</li>
                <li>Complete delivery address, city, state, and PIN code</li>
                <li>Email address, if required or provided</li>
                <li>Other information reasonably necessary to fulfil the order</li>
              </ul>
              <p>
                Before confirming your order, please verify the product name, quantity, price, delivery address, and other order details shared with you.
              </p>
              <p>
                An order will be considered confirmed only after Morusu Life Sciences communicates its acceptance and confirms the relevant order details. We reserve the right to decline or cancel an order for legitimate reasons, such as product unavailability, incorrect pricing, suspected fraud, or inability to fulfil delivery, subject to applicable law and appropriate refund obligations.
              </p>
            </div>
          </section>

          {/* Section 6: Pricing and Taxes */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              6. Pricing and Taxes
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Product prices will be communicated through our website or during the WhatsApp ordering process. The final order amount will be confirmed before payment.
              </p>
              <p>
                Prices, offers, and availability may change without prior notice. Any changes will not override an order that has already been accepted at a confirmed price, except where correction or cancellation is legally permitted.
              </p>
              <p>
                Where applicable, taxes, delivery charges, and other additional charges will be communicated before the order is finalised. If an incorrect price is displayed because of a genuine technical or clerical error, we will inform you and provide an opportunity to confirm the corrected price or cancel the order.
              </p>
            </div>
          </section>

          {/* Section 7: Payment Terms */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              7. Payment Terms
            </h2>
            <div className="bg-cream/60 rounded-xl p-5 border border-soft space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p className="font-semibold text-primary-dark">
                Payments are currently accepted through manual UPI transfers. Cash on Delivery (COD) is not available.
              </p>
              <p>
                Customers must complete payment using the payment instructions provided by Morusu Life Sciences. An order may be processed for dispatch after payment has been verified and the order has been confirmed.
              </p>
              <div className="space-y-1 text-xs sm:text-sm">
                <p className="font-semibold text-primary-dark">Customer Responsibilities:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Verify the payment recipient before transferring money.</li>
                  <li>Enter the correct payment amount.</li>
                  <li>Retain the UPI transaction reference.</li>
                  <li>Share payment confirmation only through the specified official communication channel.</li>
                </ul>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-soft text-xs font-semibold text-earth">
                Security Assurance: We will never ask you to disclose your UPI PIN, banking password, or OTP to verify a payment.
              </div>
              <p className="text-xs text-text-muted/80">
                If a payment is unsuccessful, duplicated, or incorrectly recorded, please contact us with the relevant transaction details so that we can investigate. Where a refund is due, it will be handled in accordance with the applicable refund policy.
              </p>
            </div>
          </section>

          {/* Section 8: Shipping and Delivery */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              8. Shipping and Delivery
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Orders are delivered through third-party courier or delivery service providers. Customers are responsible for providing a complete and accurate delivery address, PIN code, and reachable contact number.
              </p>
              <p>
                Delivery timelines, where provided, are estimates and may be affected by courier operations, weather, holidays, location, transport disruptions, or other circumstances beyond our reasonable control.
              </p>
              <p>
                Morusu Life Sciences is not responsible for delays caused by circumstances beyond its reasonable control. However, this does not exclude any responsibility or customer remedies that apply under applicable law.
              </p>
              <p className="text-xs text-text-muted/80">
                If a parcel cannot be delivered because the customer provided an incorrect address or is unavailable, additional delivery arrangements or charges may apply where disclosed and legally permitted.
              </p>
            </div>
          </section>

          {/* Section 9: Cancellation Policy */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              9. Cancellation Policy
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                If you wish to cancel an order, contact us through WhatsApp at{" "}
                <a href="tel:+918639343659" className="text-primary font-semibold hover:underline">
                  +91 8639343659
                </a>{" "}
                as soon as possible. Cancellation requests will be reviewed according to the order status:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-xs sm:text-sm text-text-muted">
                <li>
                  <strong className="text-primary-dark">Before order confirmation:</strong> You may withdraw your enquiry without placing an order.
                </li>
                <li>
                  <strong className="text-primary-dark">After confirmation but before dispatch:</strong> Contact us immediately. We will inform you whether cancellation is possible.
                </li>
                <li>
                  <strong className="text-primary-dark">After dispatch or delivery:</strong> Cancellation may no longer be possible, subject to applicable law and circumstances.
                </li>
              </ul>
              <p className="text-xs text-text-muted">
                Where an order is cancelled and a refund is due, it will be processed in accordance with our refund policy. Please do not assume an order has been cancelled until Morusu Life Sciences confirms it.
              </p>
            </div>
          </section>

          {/* Section 10: Return Policy */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              10. Return Policy
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Morusu Life Sciences follows a <strong>no-return policy</strong> for products, subject to applicable consumer-protection laws and the exceptions described below.
              </p>
              <p>
                Customers are requested to review product information, ingredients, pack size, quantity, and price before confirming an order. Once delivered, returns for reasons such as a change of mind, incorrect product selection by the customer, or preference changes will generally not be accepted.
              </p>
              <p className="bg-cream/50 p-4 rounded-xl border border-soft text-xs sm:text-sm text-primary-dark">
                <strong>Exception:</strong> This policy does not exclude remedies that may be available under applicable law for defective, damaged, incorrect, misrepresented, or otherwise non-conforming products. If you receive a damaged, defective, incorrect, or missing product, please contact us promptly so we can resolve the issue.
              </p>
            </div>
          </section>

          {/* Section 11: Replacement Policy */}
          <section className="space-y-6 border-t border-soft pt-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark mb-2">
                11. Replacement Policy
              </h2>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                We understand the importance of receiving the correct products in good condition. If an eligible order has an issue, Morusu Life Sciences may arrange a replacement after reviewing the complaint and supporting evidence.
              </p>
            </div>

            {/* 11.1 Eligible Situations */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-primary-dark text-base sm:text-lg">
                11.1 Situations Eligible for Replacement Review
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-cream/40 p-4 rounded-xl border border-soft">
                  <h4 className="font-bold text-primary-dark mb-1">Damaged Product</h4>
                  <p className="text-text-muted">
                    If a product arrives visibly damaged, leaking, broken, or damaged in transit, contact us with photos.
                  </p>
                </div>
                <div className="bg-cream/40 p-4 rounded-xl border border-soft">
                  <h4 className="font-bold text-primary-dark mb-1">Incorrect Product Delivered</h4>
                  <p className="text-text-muted">
                    If delivered items do not match what was confirmed in your order, contact us for verification.
                  </p>
                </div>
                <div className="bg-cream/40 p-4 rounded-xl border border-soft">
                  <h4 className="font-bold text-primary-dark mb-1">Missing Product</h4>
                  <p className="text-text-muted">
                    If items are missing from your parcel, contact us with order details and package photos.
                  </p>
                </div>
                <div className="bg-cream/40 p-4 rounded-xl border border-soft">
                  <h4 className="font-bold text-primary-dark mb-1">Defective or Quality Issue</h4>
                  <p className="text-text-muted">
                    If a product has a manufacturing defect or packaging fault, contact us with a description and photos.
                  </p>
                </div>
              </div>
            </div>

            {/* 11.2 How to Request */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-primary-dark text-base sm:text-lg">
                11.2 How to Request a Replacement
              </h3>
              <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-text-muted pl-2">
                <li>Contact us through WhatsApp at <a href="tel:+918639343659" className="text-primary font-medium hover:underline">+91 8639343659</a>.</li>
                <li>Provide your name and mobile number.</li>
                <li>Share your order confirmation or relevant order details.</li>
                <li>Explain the issue clearly.</li>
                <li>Provide photographs or videos showing the product, packaging, shipping label, and damage.</li>
                <li>Follow any reasonable instructions provided by our support team.</li>
              </ol>
              <div className="bg-gold/10 border border-gold/30 p-3.5 rounded-xl text-xs sm:text-sm text-primary-dark font-medium mt-2">
                Reporting Window: Please report delivery damage, incorrect products, or missing items within 48 hours of delivery, wherever reasonably possible.
              </div>
            </div>

            {/* 11.3, 11.4, 11.5 */}
            <div className="space-y-3 text-xs sm:text-sm text-text-muted leading-relaxed">
              <p>
                <strong className="text-primary-dark">11.3 Replacement Approval:</strong> Each request is reviewed individually. We may approve a replacement, request additional details, arrange collection, or offer another legally appropriate resolution.
              </p>
              <p>
                <strong className="text-primary-dark">11.4 Replacement Shipping:</strong> Where the issue is attributable to an incorrect, damaged, or defective item supplied by us, applicable costs will be handled in accordance with law. Customers should not return products without first contacting us.
              </p>
              <p>
                <strong className="text-primary-dark">11.5 Product Condition and Evidence:</strong> Please retain the product, packaging, and shipping labels until the issue is resolved. Do not discard packaging before contacting our team.
              </p>
            </div>
          </section>

          {/* Section 12: Refund Policy */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              12. Refund Policy
            </h2>
            <div className="space-y-3 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                Refunds will be considered where required by applicable law or where Morusu Life Sciences has confirmed that a refund is appropriate, such as:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-text-muted">
                <li>An accepted order that cannot be fulfilled due to stock unavailability.</li>
                <li>A confirmed payment for an order cancelled prior to dispatch and eligible for refund.</li>
                <li>A duplicate payment verified by us.</li>
                <li>Any other situation where a refund is mandated under applicable law.</li>
              </ul>
              <p className="text-xs text-text-muted/80">
                Where approved, refunds for UPI payments will be remitted to the verified source account. Processing timelines may vary based on your bank or payment provider.
              </p>
            </div>
          </section>

          {/* Section 13: Order Disputes and Complaints */}
          <section className="space-y-4 border-t border-soft pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              13. Order Disputes and Complaints
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              If you experience an issue with an order, payment, delivery, or product, please contact our support team. Provide your name, contact number, order details, and supporting photographs or transaction references.
            </p>
            <div className="bg-cream/50 p-4 rounded-xl border border-soft text-xs sm:text-sm text-text-muted space-y-1">
              <p><strong className="text-primary-dark">Customer Support / WhatsApp:</strong> +91 8639343659</p>
              <p><strong className="text-primary-dark">Support Email:</strong> support@morusulifesciences.com</p>
            </div>
          </section>

          {/* Section 14 to 17 */}
          <div className="space-y-6 border-t border-soft pt-8">
            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                14. Product Use and Safety
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Customers must read product labels, ingredients, directions for use, storage instructions, and precautions before use. Use products only as directed. If you have medical conditions or allergies, seek professional healthcare advice. Website descriptions are for general informational purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                15. Intellectual Property
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Website text, photography, product images, branding, graphics, and trademarks are owned by or licensed to Morusu Life Sciences. You may browse for personal, non-commercial use only. Unauthorised reproduction or commercial use is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                16. Limitation of Liability
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                To the extent permitted by law, Morusu Life Sciences is not responsible for losses arising solely from circumstances beyond our reasonable control (e.g. courier delays, network disruptions, or communication service outages). Statutory consumer rights are not affected.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                17. Third-Party Services
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Our ordering and delivery process involves third-party services including WhatsApp, UPI applications, banks, and courier partners. Your use of those services is governed by their independent policies and terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                18. Changes to These Terms
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We may update these Terms to reflect operational or regulatory changes. The updated version will be published here with an updated date. Terms applicable to a specific order are determined at the time the order was accepted.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-primary-dark mb-2">
                19. Governing Law and Dispute Resolution
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of India. Any disputes should first be brought to our attention for informal resolution.
              </p>
            </div>
          </div>

          {/* Section 20: Contact */}
          <section className="bg-cream/40 rounded-2xl border border-soft p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-dark">
              20. Contact Information
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              For questions regarding these Terms, orders, cancellations, replacements, or grievances, please reach out to us:
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-text-muted pt-2">
              <p><strong className="text-primary-dark">Company:</strong> Morusu Life Sciences</p>
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
          </section>

          {/* Closing Links */}
          <div className="pt-6 border-t border-soft flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted/70 gap-2">
            <p>© {new Date().getFullYear()} Morusu Life Sciences. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
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

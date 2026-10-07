import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { getAllCertifications } from "@/data/certifications";

export function CertificationsPreview() {
  const certifications = getAllCertifications().slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-dark mb-6 max-w-3xl mx-auto">
          Quality You Can See. Standards You Can Trust.
        </h2>
        <p className="text-text-muted mb-12 max-w-2xl mx-auto">
          We maintain rigorous manufacturing and quality standards to ensure our products meet your expectations for safety and efficacy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-6 border border-soft rounded-2xl flex flex-col items-center text-center hover:bg-cream-dark/30 transition-colors">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-primary-dark text-sm md:text-base mb-1">{cert.name}</h3>
              {/* <p className="text-xs text-text-muted">Sample verification</p> */}
            </div>
          ))}
        </div>

        <Link 
          href="/certifications"
          className="inline-flex items-center gap-2 text-primary-dark font-medium hover:text-primary transition-colors group"
        >
          <span className="border-b border-primary group-hover:border-primary pb-0.5 transition-colors">
            View All Certifications
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

"use client";

import { FileText } from "lucide-react";
import { useBlobUrl } from "@/components/blob/BlobProvider";

export function CertificatesDisplay() {
  const certificates = [
    {
      title: "Morusu Life Sciences Certificate",
      description: "Official registration and certification documents.",
      file: "/pdfs/morusulifecertificate.pdf",
    },
    {
      title: "Morusu Labor Certificate",
      description: "Labor compliance and operational certification.",
      file: "/pdfs/morusulaborcertificate.pdf",
    },
    {
      title: "Ayush Trust Certification",
      description: "Department of AYUSH government license and approval.",
      file: "/pdfs/ayush.pdf",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Left Aligned Header with View All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-[40px] font-sans font-bold tracking-tight text-primary-dark mb-4 lg:mb-6 leading-tight">Our Certifications</h2>
            <div className="w-16 h-0.5 bg-gold mb-6" />
            <p className="text-body-content text-text-muted">
              We operate with complete transparency and adhere to the highest standards. View our official certificates below.
            </p>
          </div>
          <a href="/certifications" className="inline-flex items-center justify-center bg-cream border-2 border-primary-dark text-primary-dark hover:bg-primary hover:border-primary hover:text-white transition-all font-semibold px-6 py-3 rounded-full text-sm shrink-0 shadow-sm hover:shadow-md">
            View All Certifications &rarr;
          </a>
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {certificates.map((cert, index) => {
            const fileUrl = useBlobUrl(cert.file);
            return (
              <a 
                key={index}
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-5 shadow-sm border border-soft flex items-start gap-4 group hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-cream shrink-0 flex items-center justify-center text-primary-dark group-hover:bg-primary group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-lg font-sans font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-3 line-clamp-2">
                    {cert.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider group-hover:text-gold transition-colors mt-auto">
                    View Document
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

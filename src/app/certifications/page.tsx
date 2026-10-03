import { Metadata } from "next";
import { ShieldCheck, Download } from "lucide-react";
import { getAllCertifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications & Quality | Morusu Life Sciences",
  description: "Explore Morusu Life Sciences quality, certification and manufacturing information.",
};

export default function CertificationsPage() {
  const certifications = getAllCertifications();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest-900 mb-6">
            Certifications & Quality
          </h1>
          <p className="text-lg text-forest-900/80 leading-relaxed">
            We are committed to maintaining rigorous manufacturing and quality standards. 
            Below are our sample certifications. Verified certificate details will be added before launch.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-8 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex flex-col items-start">
              <ShieldCheck className="w-10 h-10 text-forest-700 mb-6" />
              <h2 className="text-2xl font-serif text-forest-900 mb-3">{cert.name}</h2>
              <p className="text-forest-900/70 mb-8 flex-1">{cert.description}</p>
              
              <button 
                disabled
                className="inline-flex items-center gap-2 text-sm font-medium text-forest-900/40 bg-forest-900/5 px-4 py-2 rounded-lg cursor-not-allowed w-full justify-center"
              >
                <Download className="w-4 h-4" />
                Certificate (Pending)
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

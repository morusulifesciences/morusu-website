import { Metadata } from "next";
import { ShieldCheck, Download } from "lucide-react";
import { getAllCertifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "AYUSH Approval & Certifications | Morusu Life Sciences",
  description: "Explore Morusu Life Sciences' AYUSH licensing and approval information from the Government of Telangana Department of AYUSH.",
};

export default function CertificationsPage() {
  const certifications = getAllCertifications();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <header className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-sans font-bold tracking-tight text-primary-dark mb-6 leading-tight">
            Regulatory Approvals & Quality
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed font-sans">
            We are committed to maintaining rigorous quality standards and regulatory compliance for all our formulations.
          </p>
        </header>

        {/* Minimalist AYUSH Document Section */}
        <div className="mb-24 border-t border-soft pt-16">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
            
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Official Certification
              </div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-primary-dark mb-8">AYUSH Approval</h2>
              
              <div className="space-y-6 mb-10">
                <div className="grid grid-cols-2 gap-4 border-b border-soft pb-4">
                  <span className="text-sm text-text-muted font-medium">Issuing Department</span>
                  <span className="text-primary-dark font-medium text-right text-sm">Dept. of AYUSH, Govt. of Telangana</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-soft pb-4">
                  <span className="text-sm text-text-muted font-medium">AYUSH License</span>
                  <span className="text-primary-dark font-medium text-right text-sm">T-2217/Ayur</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-soft pb-4">
                  <span className="text-sm text-text-muted font-medium">Approval Letter No.</span>
                  <span className="text-primary-dark font-medium text-right text-sm">13627/DA/2024</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-soft pb-4">
                  <span className="text-sm text-text-muted font-medium">Approval Date</span>
                  <span className="text-primary-dark font-medium text-right text-sm">30/12/2024</span>
                </div>
              </div>
              
              <a href="/pdfs/ayush.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-dark text-white px-7 py-3.5 rounded-full hover:bg-primary transition-all font-medium text-sm tracking-wide">
                <Download className="w-4 h-4" />
                View Official Document
              </a>
            </div>
            
            <div className="md:w-1/2 w-full pt-2 md:pt-14">
               <h3 className="text-lg font-sans font-semibold text-primary-dark mb-6">Approved Formulations</h3>
               
               <div className="space-y-4">
                 <div className="group flex justify-between items-center p-5 border border-soft hover:border-primary/30 transition-colors rounded-xl bg-white shadow-sm">
                   <h4 className="text-sm font-sans font-bold text-primary-dark">DIA 365 CREAM</h4>
                   <span className="text-xs text-text-muted font-mono bg-surface px-3 py-1 rounded-full group-hover:bg-primary/5 transition-colors">T-2217/Ayur/0002/2024/P</span>
                 </div>
                 
                 <div className="group flex justify-between items-center p-5 border border-soft hover:border-primary/30 transition-colors rounded-xl bg-white shadow-sm">
                   <h4 className="text-sm font-sans font-bold text-primary-dark">EXMOR CAPSULE</h4>
                   <span className="text-xs text-text-muted font-mono bg-surface px-3 py-1 rounded-full group-hover:bg-primary/5 transition-colors">T-2217/Ayur/0003/2024/P</span>
                 </div>
               </div>
            </div>
            
          </div>
        </div>

        <div className="mt-20 border-t border-soft pt-16">
          <h2 className="text-3xl font-sans font-bold text-primary-dark mb-10 tracking-tight">Other Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="p-8 rounded-2xl bg-white border border-soft hover:shadow-sm transition-shadow flex flex-col items-start group">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-primary-dark mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-sans font-bold text-primary-dark mb-2">{cert.name}</h2>
                <p className="text-sm text-text-muted mb-8 flex-1">{cert.description}</p>
                
                <button 
                  disabled
                  className="inline-flex items-center gap-2 text-xs font-semibold text-primary-dark/40 bg-surface px-4 py-2 rounded-lg cursor-not-allowed uppercase tracking-wider"
                >
                  <Download className="w-3 h-3" />
                  Pending
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

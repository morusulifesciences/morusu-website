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
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-dark mb-6">
            Regulatory Approvals & Quality
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            We are committed to maintaining rigorous quality standards and regulatory compliance for all our formulations.
          </p>
        </header>

        {/* AYUSH Document Section */}
        <div className="bg-white border-2 border-soft p-10 md:p-16 rounded-[2.5rem] shadow-soft mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-gold-light/20 text-primary-dark px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5" />
                Official Certification
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-6">AYUSH Approval</h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Issuing Department</p>
                  <p className="text-primary-dark font-medium text-lg">Government of Telangana, Department of AYUSH</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">AYUSH License</p>
                  <p className="text-primary-dark font-medium text-lg">T-2217/Ayur</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Approval Letter No.</p>
                  <p className="text-primary-dark font-medium text-lg">13627/DA/2024</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Approval Date</p>
                  <p className="text-primary-dark font-medium text-lg">30/12/2024</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Approving Authority</p>
                  <p className="text-primary-dark font-medium">Dr. Ajmera Parameshwar Naik<br/><span className="text-sm font-normal text-text-muted">Additional Director (Ayurveda), Drug Licensing Authority</span></p>
                </div>
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors font-medium">
                <Download className="w-5 h-5" />
                View AYUSH Approval
              </a>
            </div>
            
            <div className="md:w-1/2 w-full">
               <div className="bg-sage-light border border-soft p-8 rounded-2xl relative">
                  <div className="absolute top-4 right-4 opacity-10">
                     <ShieldCheck className="w-24 h-24 text-primary-dark" />
                  </div>
                  <h3 className="text-2xl font-serif text-primary-dark mb-6 relative z-10">AYUSH-Approved Products</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="bg-white p-6 rounded-xl shadow-soft border border-soft">
                      <h4 className="text-lg font-serif text-primary-dark mb-1">DIA 365 CREAM</h4>
                      <p className="text-sm text-text-muted font-mono">Product ID: T-2217/Ayur/0002/2024/P</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-soft border border-soft">
                      <h4 className="text-lg font-serif text-primary-dark mb-1">EXMOR CAPSULE</h4>
                      <p className="text-sm text-text-muted font-mono">Product ID: T-2217/Ayur/0003/2024/P</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-serif text-primary-dark mb-8">Other Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="p-8 rounded-2xl bg-white border border-soft shadow-soft flex flex-col items-start">
                <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                <h2 className="text-2xl font-serif text-primary-dark mb-3">{cert.name}</h2>
                <p className="text-text-muted mb-8 flex-1">{cert.description}</p>
                
                <button 
                  disabled
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark/40 bg-primary/5 px-4 py-2 rounded-lg cursor-not-allowed w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  Certificate (Pending)
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

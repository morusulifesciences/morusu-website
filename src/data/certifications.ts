export interface Certification {
  id: string;
  name: string;
  description: string;
  isVerified: boolean;
}

export const certifications: Certification[] = [
  {
    id: "cert-gmp",
    name: "GMP Certified",
    description: "Good Manufacturing Practice (Placeholder)",
    isVerified: false
  },
  {
    id: "cert-iso",
    name: "ISO 9001",
    description: "Quality Management System (Placeholder)",
    isVerified: false
  },
  {
    id: "cert-veg",
    name: "100% Vegetarian",
    description: "Formulated without animal ingredients (Placeholder)",
    isVerified: false
  },
  {
    id: "cert-cruelty",
    name: "Cruelty Free",
    description: "Not tested on animals (Placeholder)",
    isVerified: false
  },
  {
    id: "cert-india",
    name: "Made in India",
    description: "Manufactured in India (Placeholder)",
    isVerified: false
  },
  {
    id: "cert-quality",
    name: "Quality Tested",
    description: "Rigorous quality assurance (Placeholder)",
    isVerified: false
  }
];

export function getAllCertifications() {
  return certifications;
}

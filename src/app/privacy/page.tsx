import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Morusu Life Sciences",
  description: "Read the privacy policy for the Morusu Life Sciences website.",
  robots: "noindex, nofollow"
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-forest-900 mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-p:text-forest-900/80 prose-headings:text-forest-900 max-w-none">
          <p>Last updated: [Date]</p>
          <p>This is a placeholder for the Privacy Policy. Content will be added here prior to the launch of the website.</p>
        </div>
      </div>
    </div>
  );
}

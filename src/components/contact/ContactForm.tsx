"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT;
    if (!endpoint) {
      console.error("Missing Google Sheets Endpoint URL");
      setStatus("error");
      return;
    }

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors", // Bypasses browser CORS restrictions on Google Script redirects
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      // With mode: 'no-cors', the response is opaque, so success is assumed if no network error occurred
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">Full Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          className="w-full px-5 py-4 rounded-2xl bg-cream-dark/20 border border-soft focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors" 
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">Email Address</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          inputMode="email"
          className="w-full px-5 py-4 rounded-2xl bg-cream-dark/20 border border-soft focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors" 
          placeholder="hello@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          value={formData.phone}
          onChange={handleChange}
          required
          autoComplete="tel"
          inputMode="tel"
          className="w-full px-5 py-4 rounded-2xl bg-cream-dark/20 border border-soft focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors" 
          placeholder="+91"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">Message</label>
        <textarea 
          id="message" 
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-5 py-4 rounded-2xl bg-cream-dark/20 border border-soft focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors resize-none" 
          placeholder="How can we help you?"
        ></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="mt-4 w-full bg-primary text-white py-5 rounded-2xl font-medium hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary shadow-elevated disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      
      {status === "success" && (
        <div className="p-4 bg-sage-light text-primary-dark rounded-xl text-center text-sm font-medium">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center text-sm font-medium">
          Something went wrong. Please try again later.
        </div>
      )}
    </form>
  );
}

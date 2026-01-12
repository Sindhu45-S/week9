"use client"; // MUST be the very first line

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!mounted) return;

    // Show toast
    setShowToast(true);

    // Clear the form
    e.currentTarget.reset();

    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!mounted) return null; // ensures client-only rendering

  return (
    <div className="max-w-3xl mx-auto p-6 relative"><br></br>
    <br></br>
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Contact Us
      </h1>

      <form
        onSubmit={handleSendMessage}
        className="flex flex-col gap-4 bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          rows={5}
          required
        />
        <Button type="submit" variant="blue" size="lg">
          Send Message
        </Button>
      </form>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
          ✅ Message sent successfully!
        </div>
      )}

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s forwards;
        }
      `}</style>
    </div>
  );
}

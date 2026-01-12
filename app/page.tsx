import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const services = [
    { title: "UI/UX Design", description: "Beautiful, modern interfaces." },
    { title: "Web Development", description: "Fast, scalable websites." },
    { title: "Product Strategy", description: "Plan and grow your product." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background-dark">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center">
          <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-sm text-white/70">
            🚀 Building digital experiences
          </span>

          <h1 className="mt-6 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
            Build modern products that scale
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            NexaFlow helps startups and businesses design, develop, and launch
            high-quality digital products faster than ever.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button variant="blue" size="lg" className="group">
              <Link href="/services" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button variant="blue" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
     <section className="mt-20 max-w-6xl mx-auto px-6">
  <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
    What We Offer
  </h2>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Fast Websites",
        description: "Responsive and blazing fast web apps built to scale.",
        icon: <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/></svg>,
      },
      {
        title: "API Integration",
        description: "Seamless connection between your apps and cloud services.",
        icon: <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>,
      },
      {
        title: "UX/UI Design",
        description: "Beautiful interfaces with modern user experience principles.",
        icon: <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l5 20H7z"/></svg>,
      },
    ].map((service) => (
      <div
        key={service.title}
        className="bg-gray-900 border border-gray-700 p-6 rounded-xl flex flex-col items-start gap-4 hover:scale-105 transition-transform"
      >
        <div>{service.icon}</div>
        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
        <p className="text-gray-300">{service.description}</p>
      </div>
    ))}
  </div>
</section>
<br></br>
    </>
  );
}

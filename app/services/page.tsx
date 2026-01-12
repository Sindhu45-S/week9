import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Craft modern, intuitive, and engaging interfaces that delight users.",
      details:
        "We focus on user flows, wireframes, prototypes, and full UI/UX design systems to create a delightful experience.",
      href: "/services/ui-ux",
    },
    {
      title: "Web Development",
      description:
        "Build fast, scalable, and maintainable websites and web apps.",
      details:
        "Our team builds robust frontend and backend solutions using modern frameworks and cloud infrastructures.",
      href: "/services/web-dev",
    },
    {
      title: "Mobile Apps",
      description: "Develop cross-platform mobile apps that engage users.",
      details:
        "We create iOS and Android apps with responsive UI, smooth animations, and optimized performance.",
      href: "/services/mobile-apps",
    },
    {
      title: "Branding & Strategy",
      description:
        "Design cohesive brand experiences and strategies that resonate with your audience.",
      details:
        "We help you create logos, brand guidelines, and marketing strategies that tell your story effectively.",
      href: "/services/branding",
    },
    {
      title: "Cloud Solutions",
      description:
        "Deploy scalable, secure, and high-performance cloud infrastructures.",
      details:
        "From cloud migration to serverless architectures, we optimize your services for speed, security, and cost.",
      href: "/services/cloud",
    },
    {
      title: "Marketing Automation",
      description:
        "Optimize campaigns with AI-driven marketing automation solutions.",
      details:
        "We help businesses automate email campaigns, social media posting, and analytics for maximum ROI.",
      href: "/services/marketing",
    },
    {
      title: "SEO & Analytics",
      description:
        "Boost your online visibility and track performance effectively.",
      details:
        "We optimize your website for search engines, improve content strategy, and track metrics for actionable insights.",
      href: "/services/seo",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Create online stores that convert visitors into customers.",
      details:
        "We develop scalable e-commerce platforms with smooth checkout flows, payment integration, and analytics.",
      href: "/services/ecommerce",
    },
    {
      title: "AI & Automation",
      description:
        "Integrate AI and automation into your products for smarter solutions.",
      details:
        "From chatbots to predictive analytics, we implement AI features that enhance user experience and efficiency.",
      href: "/services/ai",
    },
  ];

  return (
    <main className="bg-gray-900 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 text-lg mb-16">
          Explore our wide range of services. Hover over a card to see a quick preview.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              {/* Learn More Button */}
              <Button asChild variant="blue" size="default">
                <Link href={service.href}>Learn More</Link>
              </Button>

              {/* Hover Popover */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-95 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center rounded-2xl">
                <h4 className="text-xl font-bold mb-2">{service.title} Details</h4>
                <p className="text-gray-300">{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

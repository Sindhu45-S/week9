"use client";

import { Card } from "@/components/ui/card";
import { User, Code, Palette } from "lucide-react";

export default function AboutPage() {
  const team = [
    { name: "Alice", role: "Founder & CEO", icon: User },
    { name: "Bob", role: "Lead Developer", icon: Code },
    { name: "Carol", role: "Designer", icon: Palette },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About NexaFlow
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          NexaFlow is a modern digital solutions company focused on innovation,
          performance, and great user experience.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card
              key={member.name}
              className="bg-gray-900 border border-gray-700 p-6 text-center
                         hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full
                              bg-linear-to-br from-cyan-500/20 to-purple-500/20
                              flex items-center justify-center
                              ring-2 ring-cyan-400/60
                              hover:ring-purple-400 transition-all">
                <member.icon className="w-12 h-12 text-cyan-400 animate-pulse" />
              </div>

              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Box, Cpu, Palette, Code2, GitBranch, Cloud, Database, Network, Rocket, Wrench } from 'lucide-react';

const technologies = [
  {
    category: 'Game Engines',
    items: [
      { name: 'Unreal Engine 5', icon: Layers, color: 'from-purple-500 to-blue-500' },
      { name: 'Unity', icon: Layers, color: 'from-gray-500 to-white' },
    ],
  },
  {
    category: '3D Software',
    items: [
      { name: 'Blender', icon: Box, color: 'from-orange-500 to-yellow-500' },
      { name: 'Maya', icon: Box, color: 'from-cyan-500 to-blue-500' },
    ],
  },
  {
    category: 'Programming',
    items: [
      { name: 'C++', icon: Code2, color: 'from-blue-600 to-blue-400' },
      { name: 'C#', icon: Code2, color: 'from-purple-600 to-pink-500' },
      { name: 'Blueprints', icon: Palette, color: 'from-red-500 to-orange-500' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { name: 'Git', icon: GitBranch, color: 'from-orange-600 to-red-500' },
      { name: 'Perforce', icon: GitBranch, color: 'from-blue-500 to-indigo-500' },
    ],
  },
  {
    category: 'Cloud & Backend',
    items: [
      { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-yellow-500' },
      { name: 'Firebase', icon: Database, color: 'from-yellow-500 to-orange-500' },
      { name: 'Photon', icon: Network, color: 'from-cyan-500 to-teal-500' },
      { name: 'PlayFab', icon: Rocket, color: 'from-blue-600 to-purple-600' },
    ],
  },
  {
    category: 'Distribution',
    items: [
      { name: 'Steamworks', icon: Wrench, color: 'from-blue-700 to-gray-600' },
      { name: 'Console SDKs', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    ],
  },
];

function TechCard({ name, icon: Icon, color, index }: { name: string; icon: React.ElementType; color: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group"
    >
      <div className="relative glass-card rounded-xl p-4 hover:border-primary/30 transition-all duration-300">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity`} />

        <div className="relative flex flex-col items-center text-center gap-3">
          {/* Icon Container */}
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Name */}
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </span>

          {/* Glow Effect */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="technologies" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            Our Stack
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow-subtle">Technologies</span> We Use
          </h2>
          <p className="section-subtitle">
            Industry-leading tools and frameworks powering our game development pipeline
            from concept to live operations.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-10">
          {technologies.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.items.map((item, itemIndex) => (
                  <TechCard
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                    color={item.color}
                    index={catIndex * 10 + itemIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm mb-6">
            Official partners and certified integrations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {['Epic Games', 'Unity', 'Steam', 'AWS', 'Meta', 'PlayStation'].map((partner) => (
              <div
                key={partner}
                className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

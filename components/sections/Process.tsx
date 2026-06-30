'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Lightbulb, PenTool, Palette, Code2, CheckCircle2, Rocket, HeartHandshake
} from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Concept & Planning',
    description: 'We collaborate to define your vision, target audience, core mechanics, and project scope through detailed documentation.',
    details: ['Game Design Document', 'Market Research', 'Technical Feasibility', 'Milestone Planning'],
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Game Design',
    description: 'Our designers craft engaging mechanics, progression systems, and compelling narratives that captivate players.',
    details: ['Mechanics Design', 'Level Design', 'Narrative Writing', 'UX Flow'],
  },
  {
    icon: Palette,
    number: '03',
    title: 'Art Production',
    description: 'Artists create stunning 3D assets, environments, characters, and visual effects that define your game\'s identity.',
    details: ['Concept Art', '3D Modeling', 'Texturing', 'Animation Rig'],
  },
  {
    icon: Code2,
    number: '04',
    title: 'Programming',
    description: 'Engineers implement gameplay features, AI systems, networking, and optimize performance for target platforms.',
    details: ['Gameplay Code', 'AI Systems', 'Multiplayer Backend', 'Optimization'],
  },
  {
    icon: CheckCircle2,
    number: '05',
    title: 'QA Testing',
    description: 'Rigorous testing ensures stability, performance, and gameplay balance across all supported platforms.',
    details: ['Automated Tests', 'Playtesting', 'Bug Tracking', 'Certification'],
  },
  {
    icon: Rocket,
    number: '06',
    title: 'Launch',
    description: 'Strategic release planning with marketing support, store optimization, and distribution coordination.',
    details: ['Store Setup', 'Marketing Campaign', 'Press Kit', 'Soft Launch'],
  },
  {
    icon: HeartHandshake,
    number: '07',
    title: 'Live Support & Updates',
    description: 'Ongoing post-launch support with content updates, community management, and feature enhancements.',
    details: ['Content Updates', 'Community Events', 'Analytics', 'Feature Roadmap'],
  },
];

function ProcessStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        {/* Left Side - Content (odd) or Timeline (even) */}
        <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
          {index % 2 === 0 && (
            <div className="glass-card rounded-2xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span key={detail} className="px-2 py-1 text-xs rounded-md bg-primary/5 text-muted-foreground border border-border/50">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Center - Timeline */}
        <div className="md:order-2 flex flex-col items-center relative">
          {/* Timeline Line */}
          {!isLast && (
            <motion.div
              className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/50 via-primary/30 to-transparent min-h-[200px]"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: 'top' }}
            />
          )}

          {/* Step Number */}
          <motion.div
            className="relative w-24 h-24 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center group hover:border-primary transition-colors duration-300 z-10"
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-100 opacity-50 transition-opacity" />
            <span className="text-2xl font-bold gradient-text relative z-10">
              {step.number}
            </span>
          </motion.div>

          {/* Mobile Content */}
          <div className="md:hidden w-full mt-6 glass-card rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content (even) or empty (odd) */}
        <div className={`flex-1 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
          {index % 2 !== 0 && (
            <div className="hidden md:block glass-card rounded-2xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span key={detail} className="px-2 py-1 text-xs rounded-md bg-primary/5 text-muted-foreground border border-border/50">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
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
            How We Work
          </motion.span>
          <h2 className="section-title">
            Development <span className="gradient-text text-glow-subtle">Process</span>
          </h2>
          <p className="section-subtitle">
            A proven workflow that transforms creative concepts into polished gaming experiences
            on time and within budget.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

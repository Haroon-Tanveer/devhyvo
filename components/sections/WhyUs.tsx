'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award, Cpu, Globe, Zap, Users, Gauge,
  Sparkles, Headphones, Layers, CheckCircle2
} from 'lucide-react';

const reasons = [
  {
    icon: Cpu,
    title: 'Unreal Engine 5 Experts',
    description: 'Deep mastery of UE5 features including Nanite, Lumen, and MetaHumans for cutting-edge visuals.',
  },
  {
    icon: Award,
    title: 'AAA Visual Quality',
    description: 'Production values that rival major studios with cinematic lighting, detailed assets, and polish.',
  },
  {
    icon: Globe,
    title: 'Cross-Platform Development',
    description: 'Deploy to PC, console, and mobile simultaneously with platform-specific optimizations.',
  },
  {
    icon: Zap,
    title: 'Agile Workflow',
    description: 'Iterative development with transparent communication, regular builds, and flexible pivots.',
  },
  {
    icon: Users,
    title: 'Multiplayer Expertise',
    description: 'Battle-tested networking solutions for seamless online experiences at any scale.',
  },
  {
    icon: Gauge,
    title: 'Optimized Performance',
    description: 'Target 60+ FPS on all platforms with memory optimization and efficient rendering.',
  },
  {
    icon: Sparkles,
    title: 'Creative Storytelling',
    description: 'Compelling narratives that emotionally engage players and build lasting franchises.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Direct communication with your team, responsive updates, and post-launch partnership.',
  },
  {
    icon: Layers,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow from prototypes to live services handling millions.',
  },
];

export default function WhyUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              Why Choose Us
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Excellence in Every
              <br />
              <span className="gradient-text text-glow-subtle">Pixel & Line</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With over a decade of combined experience in game development, our team brings
              the expertise, passion, and dedication needed to transform your vision into
              an unforgettable gaming experience.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
                { value: '50+', label: 'Games Delivered' },
                { value: '5 ★', label: 'Average Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="glass-card rounded-xl p-5 h-full hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {reason.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

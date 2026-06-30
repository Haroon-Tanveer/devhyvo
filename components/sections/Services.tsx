'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Gamepad2, Users, Smartphone, Monitor, Headset,
  Palette, Mountain, Sparkles, Wand2, Layout, Bug,
  Rocket, Globe, Cpu, Layers
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Unreal Engine 5 Development',
    description: 'Next-gen game development with UE5, leveraging Nanite, Lumen, and cutting-edge rendering technologies.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Layers,
    title: 'Unity Development',
    description: 'Cross-platform game development with Unity for mobile, VR, and indie projects.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Users,
    title: 'Multiplayer Solutions',
    description: 'Scalable multiplayer architecture with dedicated servers, matchmaking, and real-time synchronization.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile Game Development',
    description: 'Native iOS and Android games optimized for touch controls and mobile performance.',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: Monitor,
    title: 'Console Game Development',
    description: 'PlayStation, Xbox, and Nintendo Switch development with platform-specific optimizations.',
    color: 'from-blue-600/20 to-indigo-500/20',
  },
  {
    icon: Cpu,
    title: 'PC Game Development',
    description: 'High-performance PC games with advanced graphics settings and hardware optimization.',
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    icon: Headset,
    title: 'VR & AR Experiences',
    description: 'Immersive virtual and augmented reality experiences for Meta Quest, PSVR, and SteamVR.',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Palette,
    title: 'Character Modeling',
    description: 'High-fidelity 3D character creation with PBR texturing, rigging, and animation-ready models.',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    icon: Mountain,
    title: 'Environment Art',
    description: 'Stunning game worlds with procedural generation, landscape design, and atmospheric effects.',
    color: 'from-green-500/20 to-teal-500/20',
  },
  {
    icon: Sparkles,
    title: 'Animation',
    description: 'Fluid character and environment animations using motion capture and procedural techniques.',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Wand2,
    title: 'Visual Effects (VFX)',
    description: 'Cinematic visual effects, particle systems, and real-time simulation for stunning visuals.',
    color: 'from-purple-600/20 to-violet-500/20',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Intuitive game interfaces, menus, and HUD systems designed for player engagement.',
    color: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    icon: Bug,
    title: 'Game Testing & QA',
    description: 'Comprehensive quality assurance with automated testing, playtesting, and bug tracking.',
    color: 'from-red-600/20 to-pink-500/20',
  },
  {
    icon: Rocket,
    title: 'Live Services',
    description: 'Ongoing game support with content updates, live events, and community management.',
    color: 'from-cyan-600/20 to-green-500/20',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`} />

      <div className="relative glass-card rounded-2xl p-6 transition-all duration-500 group-hover:border-primary/30 h-full">
        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
            What We Offer
          </motion.span>
          <h2 className="section-title">
            Our <span className="gradient-text text-glow-subtle">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive game development services from concept to launch
            and beyond, tailored to your unique vision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex"
          >
            Start Your Project
            <Globe className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code2, Gamepad2, Globe, Smartphone, Monitor, Headset, Palette, Users, Zap } from 'lucide-react';


const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Gamepad2 },
  { value: 20, suffix: '+', label: 'Expert Developers', icon: Users },
  { value: 100, suffix: '+', label: 'Global Clients', icon: Globe },
  { value: 100, suffix: '%', label: 'UE5 Specialists', icon: Zap },
];

const specialties = [
  { icon: Code2, label: 'Unreal Engine 5 Development' },
  { icon: Users, label: 'Multiplayer Games' },
  { icon: Smartphone, label: 'Mobile Games' },
  { icon: Monitor, label: 'PC Games' },
  { icon: Monitor, label: 'Console Games' },
  { icon: Headset, label: 'VR & AR Experiences' },
  { icon: Palette, label: 'Game Art' },
  { icon: Users, label: 'Character Design' },
  { icon: Globe, label: 'Environment Design' },
  { icon: Zap, label: 'Animation' },
  { icon: Code2, label: 'Gameplay Programming' },
  { icon: Zap, label: 'Live Operations' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Decorative Orbs */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
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
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            About Us
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow-subtle">DevHyvo</span>
            {' '}Game Studio
          </h2>
          <p className="section-subtitle">
            A professional game development studio crafting immersive experiences
            with bleeding-edge technology and creative excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-1">
              <img
                src="/images/bannerss.png"
                alt="Game Development Team"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                    <div className="text-xl font-bold">2026</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-sm text-muted-foreground">Team Size</div>
                    <div className="text-xl font-bold gradient-text">20+</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-xl"
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 border border-secondary/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Crafting Worlds,
              <br />
              <span className="gradient-text">Building Legends</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              DevHyvo is a premier game development studio specializing in creating
              immersive, high-quality gaming experiences. With expertise spanning
              Unreal Engine 5, Unity, and cutting-edge multiplayer technologies,
              we bring ambitious gaming visions to life.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our team of talented artists, designers, and engineers work collaboratively
              to deliver games that push the boundaries of what's possible, combining
              stunning visuals with engaging gameplay mechanics.
            </p>

            {/* Specialties Grid */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-4">Our Specializations</h4>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-card flex items-center justify-center border border-border">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

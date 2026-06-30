'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO, Nexus Interactive',
    company: 'Nexus Interactive',
    content: 'DevHyvo delivered an exceptional multiplayer experience that exceeded all our expectations. Their UE5 expertise and attention to detail resulted in a game that genuinely rivals AAA titles.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
    project: 'Shadow Eclipse',
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'Creative Director, Pixel Dreams',
    company: 'Pixel Dreams',
    content: 'Working with DevHyvo was an absolute pleasure. They understood our vision from day one and brought creative solutions that elevated our game beyond what we imagined possible.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
    project: 'Lost Kingdom',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Head of Publishing, GameVerse',
    company: 'GameVerse',
    content: 'The technical excellence and professional approach of DevHyvo made them an ideal partner for our flagship title. They delivered on time, on budget, with outstanding quality.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
    project: 'Cyber Dominion',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Founder, IndieForge Studios',
    company: 'IndieForge Studios',
    content: 'DevHyvo transformed our indie concept into a polished, market-ready product. Their guidance on game design and optimization was invaluable for our first commercial release.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
    project: 'Echoes of Eternity',
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'VP Product, PlayMax Media',
    company: 'PlayMax Media',
    content: 'The multiplayer backend DevHyvo built for us handles millions of concurrent players without a hitch. Their expertise in scalable infrastructure is truly world-class.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
    project: 'Titan Protocol',
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Lead Producer, Stellar Games',
    company: 'Stellar Games',
    content: 'Outstanding art direction and technical implementation. DevHyvo delivered visuals that made our game a showcase title for next-gen consoles. Highly recommended.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
    project: 'Galactic Outlaws',
  },
];

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className={`glass-card rounded-2xl p-6 md:p-8 ${isActive ? 'border-primary/30' : ''} transition-all duration-300`}
    >
      <div className="flex flex-col h-full">
        {/* Quote Icon */}
        <Quote className="w-10 h-10 text-primary/30 mb-4" />

        {/* Content */}
        <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-6 flex-1">
          "{testimonial.content}"
        </p>

        {/* Project Badge */}
        <div className="mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
            Project: {testimonial.project}
          </span>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
          />
          <div>
            <div className="font-semibold text-foreground">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
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
            Client Testimonials
          </motion.span>
          <h2 className="section-title">
            What Our <span className="gradient-text text-glow-subtle">Clients</span> Say
          </h2>
          <p className="section-subtitle">
            Trusted by game studios, publishers, and indie developers worldwide
            to bring their visions to life.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} isActive={true} />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ duration: 0.5 }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} isActive={true} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading game studios</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[' studios', 'publishers', 'indies', 'startups', 'agencies'].map((type) => (
              <div key={type} className="text-muted-foreground font-medium">
                Game {type}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

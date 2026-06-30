'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Gamepad2, Monitor } from 'lucide-react';

const games = [
  {
    id: 1,
    title: 'Shadow Eclipse',
    genre: 'Action RPG',
    platform: 'PC, PS5, Xbox',
    engine: 'Unreal Engine 5',
    status: 'Released',
    description: 'An epic dark fantasy RPG featuring visceral combat, deep character progression, and a haunting narrative in a gothic open world.',
    image: 'https://images.pexels.com/photos/1670914/pexels-photo-1670914.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'from-purple-600/20 to-blue-600/20',
  },
  {
    id: 2,
    title: 'Cyber Dominion',
    genre: 'Sci-Fi Shooter',
    platform: 'PC, PS5',
    engine: 'Unreal Engine 5',
    status: 'In Development',
    description: 'High-octane multiplayer shooter set in a dystopian cyberpunk megacity with destructible environments and advanced AI.',
    image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'from-cyan-600/20 to-green-600/20',
  },
  {
    id: 3,
    title: 'Lost Kingdom',
    genre: 'Fantasy Adventure',
    platform: 'PC, Console',
    engine: 'Unreal Engine 5',
    status: 'Released',
    description: 'Explore ancient ruins and mystical lands in this breathtaking adventure featuring photorealistic graphics and dynamic storytelling.',
    image: 'https://images.pexels.com/photos/2166928/pexels-photo-2166928.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'from-amber-600/20 to-orange-600/20',
  },
  {
    id: 4,
    title: 'Titan Protocol',
    genre: 'Tactical Strategy',
    platform: 'PC',
    engine: 'Unreal Engine 5',
    status: 'Beta',
    description: 'Command massive armies in large-scale battles across alien worlds with advanced tactical AI and strategic depth.',
    image: 'https://images.pexels.com/photos/7915355/pexels-photo-7915355.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'from-red-600/20 to-orange-600/20',
  },
  {
    id: 5,
    title: 'Echoes of Eternity',
    genre: 'Narrative Adventure',
    platform: 'PC, PS5, Xbox',
    engine: 'Unreal Engine 5',
    status: 'In Development',
    description: 'A time-bending narrative experience where your choices ripple across centuries, featuring stunning visuals and emotional storytelling.',
    image: 'https://images.pexels.com/photos/36487/wide-angle-lens-macro-glass-photography.jpg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'from-blue-600/20 to-purple-600/20',
  },
  {
    id: 6,
    title: 'Galactic Outlaws',
    genre: 'Space Simulation',
    platform: 'PC, Console',
    engine: 'Unreal Engine 5',
    status: 'Announced',
    description: 'Explore a vast procedural galaxy as a space mercenary with realistic physics, trading, and epic space combat.',
    image: 'https://images.pexels.com/photos/73873/star-clusters-constellations-spiral-galaxy-spiral-73873.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    color: 'from-indigo-600/20 to-cyan-600/20',
  },
];

const statusColors: Record<string, string> = {
  'Released': 'bg-green-500/20 text-green-400 border-green-500/30',
  'In Development': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Beta': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Announced': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

function GameCard({ game, index }: { game: typeof games[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

      <div className="relative glass-card rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:transform group-hover:scale-[1.02]">
        {/* Image Container */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <motion.img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[game.status]}`}>
              {game.status}
            </span>
          </div>

          {/* Play Button Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
              {game.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
              {game.genre}
            </span>
            <span className="px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-xs font-medium">
              {game.engine}
            </span>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Monitor className="w-4 h-4" />
              <span className="text-sm">{game.platform}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Details
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Games() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="games" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 100, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{ x: [0, -100, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 20, repeat: Infinity }}
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
            Our Portfolio
          </motion.span>
          <h2 className="section-title">
            Featured <span className="gradient-text text-glow-subtle">Games</span>
          </h2>
          <p className="section-subtitle">
            Discover our collection of premium AAA-quality gaming experiences
            crafted with cutting-edge technology and creative passion.
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Projects
            <Gamepad2 className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

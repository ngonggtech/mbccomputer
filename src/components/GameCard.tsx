import { motion } from 'motion/react';
import { Plus, Star, Trophy } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  key?: string;
  game: Game;
  onSelect: (game: Game) => void;
  isSelected: boolean;
}

export default function GameCard({ game, onSelect, isSelected }: GameCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative bg-[#151515] overflow-hidden group border transition-all duration-300 ${
        isSelected ? 'border-cyber-blue bg-gradient-to-b from-cyber-blue/10 to-transparent' : 'border-white/5 hover:border-cyber-blue/50'
      }`}
    >
      <div className="h-48 bg-[#222] flex items-center justify-center relative">
        <img 
          src={game.image} 
          alt={game.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/50" />
        
        <div className="absolute top-3 left-3 flex items-center gap-1 text-[10px] uppercase font-mono font-bold text-cyber-blue">
          <Star className="w-3 h-3 fill-cyber-blue" />
          {game.rating}
        </div>
        
        <span className="font-black italic tracking-tighter text-5xl opacity-10 absolute bottom-6 z-0 uppercase pointer-events-none truncate w-full text-center px-4">
          {game.title}
        </span>

        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/80 z-10">
          {game.genre.toUpperCase()}
        </div>
      </div>

      <div className="p-4 relative z-10 border-t border-white/5 bg-[#1A1A1A]">
        <h4 className="text-lg font-bold tracking-tight uppercase mb-1 flex items-center justify-between">
          <span>{game.title}</span>
        </h4>
        
        <p className="text-[11px] opacity-60 line-clamp-2 italic mb-4">
          {game.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {game.tags.map(tag => (
            <span key={tag} className="text-[9px] uppercase px-1 py-0.5 border border-white/10 text-white/50 font-mono">
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => onSelect(game)}
          className={`w-full py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
            isSelected 
              ? 'border-cyber-pink bg-cyber-pink/10 text-cyber-pink hover:bg-cyber-pink hover:text-black' 
              : 'border-cyber-blue/30 text-white/80 hover:bg-cyber-blue hover:text-black hover:border-cyber-blue'
          }`}
        >
          {isSelected ? 'Selected For Pre-install' : 'Request Pre-install'}
        </button>
      </div>
    </motion.div>
  );
}

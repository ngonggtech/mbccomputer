import { motion } from 'motion/react';
import { Gamepad2, Search } from 'lucide-react';
import { Game } from '../types';
import { INDIE_GAMES } from '../constants';
import GameCard from './GameCard';

interface GameCatalogProps {
  selectedGames: Game[];
  onToggleGame: (game: Game) => void;
}

export default function GameCatalog({ selectedGames, onToggleGame }: GameCatalogProps) {
  return (
    <section id="catalog" className="py-16 px-6 max-w-7xl mx-auto flex gap-6 mt-12 flex-col lg:flex-row">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">
            Selected Indie Catalog <span className="text-xs not-italic font-mono opacity-40 ml-2">// Q3_2026</span>
          </h3>
          <div className="flex gap-2">
            <div className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/50 cursor-not-allowed">←</div>
            <div className="w-8 h-8 flex items-center justify-center border border-cyber-blue text-cyber-blue cursor-pointer hover:bg-cyber-blue hover:text-black transition-colors">→</div>
          </div>
        </div>

        <div className="relative group mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-blue transition-colors" />
          <input 
            type="text" 
            placeholder="SEARCH TITLES..."
            className="bg-[#111] border border-white/10 py-3 pl-12 pr-6 w-full focus:outline-none focus:border-cyber-blue transition-all font-mono text-[10px] uppercase tracking-widest"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {INDIE_GAMES.map((game) => (
            <GameCard 
              key={game.id} 
              game={game} 
              onSelect={onToggleGame}
              isSelected={selectedGames.some(sg => sg.id === game.id)}
            />
          ))}
        </div>

        <div className="mt-8 p-6 bg-[#111] border-l-2 border-cyber-pink flex items-center justify-between">
          <p className="text-[11px] opacity-80 uppercase tracking-widest">
            Don't see your favorite? Mention it in the request form and our technicians will check compatibility.
          </p>
        </div>
      </div>
    </section>
  );
}

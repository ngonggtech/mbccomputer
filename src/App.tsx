import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCatalog from './components/GameCatalog';
import TechShowcase from './components/TechShowcase';
import RequestPanel from './components/RequestPanel';
import ComponentBuilder from './components/ComponentBuilder';
import { Game } from './types';

export default function App() {
  const [selectedGames, setSelectedGames] = useState<Game[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleGame = (game: Game) => {
    setSelectedGames(prev => {
      const exists = prev.find(g => g.id === game.id);
      if (exists) {
        return prev.filter(g => g.id !== game.id);
      }
      return [...prev, game];
    });
  };

  const removeGame = (id: string) => {
    setSelectedGames(prev => prev.filter(g => g.id !== id));
  };

  const handleRequestSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setSelectedGames([]);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen bg-cyber-black text-white font-sans selection:bg-cyber-blue selection:text-black">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-4">
        <Hero />
        {/* Promotion Section and About sidebar */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
            
            {/* Left Sidebar: Company Info & Promos */}
            <aside className="w-full lg:w-1/4 flex flex-col gap-6">
              <div className="bg-[#111] p-6 border-l-2 border-cyber-pink flex flex-col gap-4 shadow-sm border-r border-y border-white/5">
                <h2 className="text-[10px] font-bold text-cyber-pink uppercase tracking-widest">About Us</h2>
                <p className="text-sm leading-relaxed opacity-80 font-sans">
                  MBC Computer is a boutique engineering firm specializing in high-performance computing. We deliver not just hardware, but the ultimate out-of-the-box experience.
                </p>
                <div className="mt-4 flex flex-col gap-2 font-mono">
                  <div className="flex justify-between text-[10px] border-b border-white/10 pb-1">
                    <span className="opacity-60">BUILD QUALITY</span>
                    <span className="text-cyber-blue">CERTIFIED</span>
                  </div>
                  <div className="flex justify-between text-[10px] border-b border-white/10 pb-1">
                    <span className="opacity-60">OS OPTIMIZATION</span>
                    <span className="text-cyber-blue">GAMER-READY</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#050505] p-6 border border-white/5 flex-1 flex flex-col gap-6">
                <h2 className="text-[10px] font-bold uppercase tracking-widest">Current Promos</h2>
                <div className="space-y-6">
                  <div className="group cursor-pointer border-l-2 border-transparent hover:border-cyber-blue pl-3 transition-all">
                    <div className="text-[10px] text-cyber-blue mb-1 font-mono">[ DEAL_01 ]</div>
                    <div className="text-base font-bold leading-none uppercase tracking-tight mb-2">CYBER-LUNAR SPECIAL</div>
                    <div className="text-[11px] opacity-60 font-sans">Buy any Premium Build, get 3 Indie Legends free & pre-installed.</div>
                  </div>
                  <div className="group cursor-pointer border-l-2 border-transparent hover:border-cyber-pink pl-3 transition-all">
                    <div className="text-[10px] text-cyber-pink mb-1 font-mono">[ DEAL_02 ]</div>
                    <div className="text-base font-bold leading-none uppercase tracking-tight mb-2">Monitor Bundle</div>
                    <div className="text-[11px] opacity-60 font-sans">Extra 10% off when buying with any high-end GPU system.</div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Center Catalog */}
            <div className="flex-1 overflow-hidden">
              <GameCatalog 
                selectedGames={selectedGames} 
                onToggleGame={toggleGame} 
              />

              {/* Tech Showcase Preview embedded after Catalog */}
              <div className="px-6 pb-12 w-full max-w-7xl mx-auto">
                <TechShowcase />
              </div>
            </div>
          </div>
        </section>

        <ComponentBuilder />
      </main>

      {/* Footer Status Bar */}
      <footer className="mt-auto bg-cyber-blue text-black h-10 flex items-center px-6 justify-between font-mono text-[10px] font-bold uppercase border-t border-cyber-blue">
        <div className="flex items-center gap-8 hidden sm:flex">
          <span>Status: Systems Online</span>
          <span>Shipping: Nationwide</span>
          <span>Support: 24/7 Priority</span>
        </div>
        <div className="animate-pulse tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black block"></span> DIRECT CONTACT: 1900-CYBER-TECH
        </div>
      </footer>

      <RequestPanel 
        selectedGames={selectedGames} 
        onRemove={removeGame}
        onSubmit={handleRequestSubmit}
      />

      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="glass-card p-12 rounded-[2rem] text-center max-w-md border-cyber-blue shadow-[0_0_50px_rgba(0,243,255,0.2)]"
            >
              <div className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  📡
                </motion.div>
              </div>
              <h2 className="text-3xl font-black mb-4">TRANSMISSION RECEIVED</h2>
              <p className="text-gray-400 mb-8 font-sans">
                Your build configuration and game library selection has been sent to our lab. An engineer will contact you shortly to finalize technical specs.
              </p>
              <button 
                onClick={() => setShowConfirmation(false)}
                className="w-full border border-cyber-blue text-cyber-blue font-bold uppercase tracking-widest text-[10px] hover:bg-cyber-blue hover:text-black mt-6 py-3 transition-colors"
              >
                Return to Port
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


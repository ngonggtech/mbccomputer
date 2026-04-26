import { motion } from 'motion/react';
import { ChevronRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-12 border-b border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-cyber-pink/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-pink/30 text-cyber-pink text-[10px] font-bold uppercase tracking-[0.4em] mb-8 bg-[#151515]">
            <Zap className="w-3 h-3" />
            Specialized Hardware Solutions
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter italic">
            ELEVATE YOUR <br />
            <span className="text-cyan-200">DIGITAL</span> REALITY.
          </h1>

          <p className="max-w-2xl text-white/70 text-sm mb-10 leading-relaxed font-sans border-l-2 border-cyber-pink pl-6 bg-gradient-to-r from-cyber-pink/5 to-transparent py-4">
            Premium custom-built PCs designed for technical excellence.<br className="hidden md:block" />
            Browse our curated indie library and have your world pre-installed before arrival.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-white/10 pt-8 mt-4">
            <button
              className="w-full sm:w-auto bg-transparent border border-cyber-blue text-cyber-blue px-8 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-cyber-blue hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              Configure Setup
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              className="w-full sm:w-auto bg-[#1A1A1A] border border-white/10 text-white px-8 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-colors"
            >
              Explore Catalog
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Info Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-[#111] border-y border-white/10 py-3 px-6 hidden sm:flex items-center justify-between text-[10px] font-mono uppercase text-white/50 tracking-widest">
        <div className="flex items-center gap-8">
          <span>// STATUS: ACTIVE</span>
          <span>// NODE: SE ASIA</span>
          <span className="text-cyber-green">// UPTIME: 99.99%</span>
        </div>
        <div>
          <span>NEON_GEARS_DB_CONNECT</span>
        </div>
      </div>
    </section>
  );
}

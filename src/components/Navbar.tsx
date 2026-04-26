import { motion } from 'motion/react';
import { Cpu, Gamepad2, Info, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-[#050505]/90 backdrop-blur-sm border-b border-cyber-blue/20">
      <div className="max-w-7xl mx-auto flex items-end justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="flex items-end gap-2">
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none m-0 p-0 drop-shadow-sm">NEON GEARS <span className="text-cyber-blue not-italic text-3xl">v1.2</span></h1>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-60 mt-2">Premium PC Builder & Indie Curator Service</p>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
          {[
            { name: 'Systems', icon: Cpu, href: '#systems' },
            { name: 'Indie Library', icon: Gamepad2, href: '#catalog' },
            { name: 'About', icon: Info, href: '#about' },
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="flex items-center gap-2 hover:text-cyber-blue transition-colors group"
            >
              <item.icon className="w-3 h-3 group-hover:scale-110 transition-transform text-cyber-blue opacity-80" />
              {item.name}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex bg-transparent border border-cyber-blue text-cyber-blue px-4 py-2 flex items-center gap-2 hover:bg-cyber-blue hover:text-black transition-all font-bold text-[10px] uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,255,209,0.2)] hover:shadow-none translate-x-0 group"
        >
          <ShoppingCart className="w-3 h-3" />
          Build PC
        </motion.button>
      </div>
    </nav>
  );
}

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, HardDrive, LayoutTemplate, MemoryStick, Power, Server, MonitorSmartphone, X, Check } from 'lucide-react';
import { Component } from '../types';
import { COMPONENTS } from '../constants';

const CATEGORIES: { id: Component['type'], label: string, icon: any }[] = [
  { id: 'CPU', label: 'Processor', icon: Cpu },
  { id: 'Motherboard', label: 'Motherboard', icon: LayoutTemplate },
  { id: 'GPU', label: 'Graphics Card', icon: MonitorSmartphone },
  { id: 'RAM', label: 'Memory', icon: MemoryStick },
  { id: 'Storage', label: 'Storage', icon: HardDrive },
  { id: 'PSU', label: 'Power Supply', icon: Power },
  { id: 'Case', label: 'Chassis', icon: Server }
];

export default function ComponentBuilder() {
  const [selectedParts, setSelectedParts] = useState<Record<string, Component>>({});
  const [activeCategory, setActiveCategory] = useState<Component['type']>('CPU');

  const handleSelect = (comp: Component) => {
    setSelectedParts(prev => ({
      ...prev,
      [comp.type]: comp
    }));
  };

  const currentOptions = useMemo(() => {
    return COMPONENTS.filter(c => c.type === activeCategory);
  }, [activeCategory]);

  const totalPrice = useMemo(() => {
    return (Object.values(selectedParts) as Component[]).reduce((sum, item) => sum + item.price, 0);
  }, [selectedParts]);

  return (
    <section id="builder" className="py-16 px-6 max-w-7xl mx-auto flex flex-col gap-6 w-full">
      <div className="flex justify-between items-end border-b border-white/10 pb-4">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">
          System Configurator <span className="text-xs not-italic font-mono opacity-40 ml-2">// REAL-TIME_ESTIMATE</span>
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Categories Sidebar */}
        <div className="w-full lg:w-1/4 flex flex-col gap-2">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            const hasSelected = !!selectedParts[cat.id];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center justify-between p-4 border text-left transition-all ${
                  isActive 
                    ? 'border-[#00FFD1] bg-[#00FFD1]/10' 
                    : 'border-white/5 bg-[#111] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <cat.icon className={`w-4 h-4 ${isActive ? 'text-[#00FFD1]' : 'text-white/50'}`} />
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-[#00FFD1]' : 'text-white/80'}`}>
                      {cat.id}
                    </div>
                    {hasSelected && (
                      <div className="text-[10px] opacity-60 font-mono truncate max-w-[120px]">
                        {selectedParts[cat.id].name}
                      </div>
                    )}
                  </div>
                </div>
                {hasSelected && <Check className="w-4 h-4 text-[#00FFD1]" />}
              </button>
            )
          })}
        </div>

        {/* Options Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {currentOptions.map(comp => {
                const isSelected = selectedParts[comp.type]?.id === comp.id;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    key={comp.id}
                    onClick={() => handleSelect(comp)}
                    className={`relative cursor-pointer group bg-[#151515] border p-1 transition-all duration-300 ${
                      isSelected 
                        ? 'border-[#FF007A] bg-gradient-to-b from-[#FF007A]/10 to-transparent' 
                        : 'border-white/5 hover:border-[#FF007A]/50'
                    }`}
                  >
                    <div className="h-32 bg-[#222] relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={comp.image} 
                        alt={comp.name} 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent/20" />
                      <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 border border-white/10 text-[10px] font-mono font-bold">
                        ${comp.price}
                      </div>
                    </div>
                    <div className="p-4 relative z-10 border-t border-white/5 bg-[#1A1A1A]">
                      <h4 className="text-sm font-bold tracking-tight uppercase mb-1">{comp.name}</h4>
                      <p className="text-[10px] text-white/50 font-mono line-clamp-1">{comp.specs}</p>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
          {currentOptions.length === 0 && (
            <div className="p-8 border border-white/5 border-dashed text-center bg-[#111]">
              <p className="text-[11px] uppercase tracking-widest text-white/40">Inventory syncing... Check back soon.</p>
            </div>
          )}
        </div>

        {/* Build Summary Right Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-[#111] border border-white/5 p-6 sticky top-24">
            <h4 className="text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-2 mb-4 flex justify-between">
              <span>Build Manifest</span>
              <span className="text-[#00FFD1] font-mono">[{Object.keys(selectedParts).length}/{CATEGORIES.length}]</span>
            </h4>
            
            <div className="flex flex-col gap-3 min-h-[200px]">
              {CATEGORIES.map(cat => {
                const part = selectedParts[cat.id];
                return part ? (
                  <div key={cat.id} className="flex justify-between items-start border-b border-white/5 pb-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[#FF007A] font-mono uppercase">{cat.id}</span>
                      <span className="text-xs uppercase font-bold tracking-tight">{part.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono">${part.price}</span>
                      <button 
                        onClick={() => setSelectedParts(prev => { 
                          const newParts = {...prev}; 
                          delete newParts[cat.id]; 
                          return newParts; 
                        })}
                        className="text-white/30 hover:text-red-500 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div key={cat.id} className="flex justify-between items-center border-b border-white/5 pb-2 opacity-30">
                    <span className="text-[9px] font-mono uppercase">{cat.id} Required...</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#00FFD1]/30">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest">Total Estimated</span>
                <span className="text-xl font-black font-mono text-[#00FFD1] leading-none">${totalPrice}</span>
              </div>
              <button 
                disabled={Object.keys(selectedParts).length === 0}
                className="w-full bg-[#00FFD1] text-black disabled:bg-white/5 disabled:text-white/20 px-4 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

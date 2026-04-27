import { Game, Component } from './types';

export const INDIE_GAMES: Game[] = [
  {
    id: 'hades',
    title: 'Hades',
    description: 'gay',
    genre: 'gay',
    rating: '10/10',
    image: './anh1.png',
    tags: ['Masterpiece', 'Replayability', 'Story Rich']
  },
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    description: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.',
    genre: 'Metroidvania',
    rating: '9.5/10',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252723f?q=80&w=800&auto=format&fit=crop',
    tags: ['Atmospheric', 'Difficult', 'Exploration']
  },
  {
    id: 'celeste',
    title: 'Celeste',
    description: 'Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer.',
    genre: 'Platformer',
    rating: '9.7/10',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    tags: ['Emotional', 'Precision', 'Great OST']
  },
  {
    id: 'dead-cells',
    title: 'Dead Cells',
    description: 'Explore a sprawling, ever-changing castle... assuming you\'re able to fight your way past its keepers in 2D souls-lite combat.',
    genre: 'Action Rogue-lite',
    rating: '9.2/10',
    image: 'https://images.unsplash.com/photo-1552824801-081ba798670d?q=80&w=800&auto=format&fit=crop',
    tags: ['Combat', 'Fast', 'Unlockables']
  },
  {
    id: 'stardew',
    title: 'Stardew Valley',
    description: 'You\'ve inherited your grandfather\'s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life.',
    genre: 'Simulation',
    rating: '9.9/10',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    tags: ['Relaxing', 'Farming', 'Classic']
  }
];

export const COMPONENTS: Component[] = [
  // CPUs
  {
    id: 'i9-14900k',
    name: 'Intel Core i9-14900K',
    type: 'CPU',
    specs: '24 Cores, 32 Threads, up to 6.0 GHz',
    price: 589,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7800x3d',
    name: 'AMD Ryzen 7 7800X3D',
    type: 'CPU',
    specs: '8 Cores, 16 Threads, 3D V-Cache',
    price: 399,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop'
  },
  // GPUs
  {
    id: 'rtx-4090',
    name: 'NVIDIA RTX 4090 FE',
    type: 'GPU',
    specs: '24GB GDDR6X, Ada Lovelace Architecture',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rx-7900-xtx',
    name: 'AMD Radeon RX 7900 XTX',
    type: 'GPU',
    specs: '24GB GDDR6, RDNA 3',
    price: 999,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop'
  },
  // Motherboards
  {
    id: 'z790-hero',
    name: 'ASUS ROG Maximus Z790 Hero',
    type: 'Motherboard',
    specs: 'LGA 1700, DDR5, PCIe 5.0, Wi-Fi 6E',
    price: 629,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'x670e-aorus',
    name: 'Gigabyte X670E AORUS Master',
    type: 'Motherboard',
    specs: 'AM5, DDR5, PCIe 5.0, Wi-Fi 6E',
    price: 499,
    image: 'https://images.unsplash.com/photo-1620283085068-5a2f81cedc9f?q=80&w=800&auto=format&fit=crop'
  },
  // RAM
  {
    id: 'dominator-titanium-64',
    name: 'Corsair Dominator Titanium 64GB',
    type: 'RAM',
    specs: '2x32GB, DDR5-6000, CL30',
    price: 299,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'trident-z5-32',
    name: 'G.Skill Trident Z5 RGB 32GB',
    type: 'RAM',
    specs: '2x16GB, DDR5-6400, CL32',
    price: 139,
    image: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=800&auto=format&fit=crop'
  },
  // Storage
  {
    id: '990-pro-4tb',
    name: 'Samsung 990 PRO 4TB',
    type: 'Storage',
    specs: 'NVMe M.2 PCIe 4.0, up to 7450 MB/s',
    price: 349,
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2636?q=80&w=800&auto=format&fit=crop'
  },
  // PSU
  {
    id: 'ax1600i',
    name: 'Corsair AX1600i',
    type: 'PSU',
    specs: '1600W, 80+ Titanium, Fully Modular',
    price: 609,
    image: 'https://images.unsplash.com/photo-1587202372585-cd278cc0a33c?q=80&w=800&auto=format&fit=crop'
  },
  // Case
  {
    id: 'o11-dynamic',
    name: 'Lian Li O11 Dynamic EVO XL',
    type: 'Case',
    specs: 'Full Tower, Dual Chamber, Tempered Glass',
    price: 245,
    image: 'https://images.unsplash.com/photo-1555617105-04e386ccf7d0?q=80&w=800&auto=format&fit=crop'
  }
];

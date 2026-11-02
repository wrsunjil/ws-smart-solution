export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  category:
    | 'Batteries & Power'
    | 'Storage & RAM'
    | 'Smart IoT & Routers'
    | 'Audio & Gadgets'
    | 'Software & OS Licenses';
  priceBDT: number;
  originalPriceBDT?: number;
  priceUSD: number;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  badge?: string;
  warranty: string;
  shortSpec: string;
  description: string;
  highlights: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-openwrt-hotspot-router',
    sku: 'WSSS-IOT-001',
    name: 'Pre-Flashed OpenWrt Automated Public WiFi Hotspot Router',
    category: 'Smart IoT & Routers',
    priceBDT: 3850,
    originalPriceBDT: 4500,
    priceUSD: 29,
    inStock: true,
    rating: 4.9,
    reviewsCount: 48,
    badge: 'Best Seller',
    warranty: '1 Year Service & Firmware Warranty',
    shortSpec: 'Dual-Band | OpenNDS Captive Portal | bKash Auto-Voucher Ready',
    description:
      'Plug-and-play commercial WiFi hotspot router pre-flashed with WS Smart Solution custom OpenWrt firmware. Automatically redirects connected users to a branded payment portal and unlocks internet access upon mobile payment.',
    highlights: [
      'Pre-configured OpenWrt + Captive Portal Engine',
      'Supports 40+ concurrent WiFi users smoothly',
      'Includes Reseller Admin Dashboard & Cloud Sync support',
      'Hardware Watchdog prevents freezes during 24/7 operation',
    ],
  },
  {
    id: 'prod-safeprint-linux-box',
    sku: 'WSSS-IOT-002',
    name: 'SafePrint Armbian Linux Cloud Print Server Box (Quad-Core)',
    category: 'Smart IoT & Routers',
    priceBDT: 4200,
    originalPriceBDT: 4800,
    priceUSD: 38,
    inStock: true,
    rating: 5.0,
    reviewsCount: 27,
    badge: 'WSSS Engineered',
    warranty: '6 Months Hardware & OS Support',
    shortSpec: 'Amlogic S905W | 2GB RAM / 16GB eMMC | Pre-installed CUPS & Cloud Agent',
    description:
      'Turn any standard USB printer (Canon, Epson, HP, Brother) into a smart wireless & cloud printer. Pre-flashed with optimized Armbian Linux, CUPS server, and SafePrint web/mobile printing agent.',
    highlights: [
      'Print directly from Android phones, laptops, or remote cloud portal',
      'Ultra-low power consumption (<5W) for 24/7 shop operation',
      'Dual USB 2.0 ports + 100Mbps Ethernet + Built-in WiFi',
      'Plug-and-play setup with zero PC required',
    ],
  },
  {
    id: 'prod-laptop-battery-oem',
    sku: 'WSSS-BAT-101',
    name: 'Grade-A Replacement Laptop Battery (HP / Dell / Lenovo / Asus)',
    category: 'Batteries & Power',
    priceBDT: 2850,
    originalPriceBDT: 3400,
    priceUSD: 26,
    inStock: true,
    rating: 4.8,
    reviewsCount: 94,
    badge: 'Free Fitting',
    warranty: '6 Months Replacement Guarantee',
    shortSpec: '100% True Capacity Cells | Smart TI BMS | Overcharge Protection',
    description:
      'High-density Lithium-Ion replacement battery engineered for stable voltage output and extended cycle life. Includes free diagnostic check and installation at our service desk.',
    highlights: [
      'Available for HP (HT03XL, HS04), Dell (WDX0R, M5Y1K), Lenovo & Asus models',
      'Smart BMS chip with temperature & short-circuit protection',
      '3 to 4.5 hours real-world backup depending on workload',
      'Free health calibration & charging circuit test included',
    ],
  },
  {
    id: 'prod-ups-battery-12v-7ah',
    sku: 'WSSS-BAT-102',
    name: 'Heavy-Duty 12V 7.5Ah Sealed Lead-Acid / LiFePO4 UPS Battery',
    category: 'Batteries & Power',
    priceBDT: 1950,
    originalPriceBDT: 2350,
    priceUSD: 18,
    inStock: true,
    rating: 4.9,
    reviewsCount: 63,
    warranty: '6 Months Warranty',
    shortSpec: '12V 7.5Ah | High Discharge Rate | Universal Offline UPS Fit',
    description:
      'Restore your desktop computer UPS backup instantly. Tested for low internal resistance and high surge load support during sudden power cuts.',
    highlights: [
      'Direct drop-in fit for 650VA, 800VA, and 1200VA Offline UPS units',
      '20–35 minutes backup time for standard desktop PC + monitor',
      'Spill-proof AGM / VRLA construction with low self-discharge',
      'Free old battery swap & charging voltage check at our shop',
    ],
  },
  {
    id: 'prod-mini-dc-router-ups',
    sku: 'WSSS-BAT-103',
    name: 'Smart 10400mAh Mini DC UPS for WiFi Router & ONU (9V/12V + PoE)',
    category: 'Batteries & Power',
    priceBDT: 2250,
    originalPriceBDT: 2700,
    priceUSD: 17,
    inStock: true,
    rating: 4.9,
    reviewsCount: 112,
    badge: 'Hot Item',
    warranty: '6 Months Warranty',
    shortSpec: '8800–10400mAh Li-Ion | Zero-Millisecond Switch | Dual 9V/12V + 5V USB',
    description:
      'Keep your broadband internet running non-stop for 6 to 8 hours during load-shedding. Powers both your WiFi Router and Fiber ONU simultaneously with zero-delay switching.',
    highlights: [
      '4x High-Capacity 18650 Lithium cells with replaceable pack design',
      'Outputs: 5V USB, 9V DC, 12V DC, and 15V/24V PoE port',
      'Includes Y-Splitter DC cable to power Router + ONU together',
      'Serviceable battery pack — cells can be upgraded anytime at WSSS',
    ],
  },
  {
    id: 'prod-nvme-ssd-512gb',
    sku: 'WSSS-STR-201',
    name: '512GB M.2 PCIe Gen3x4 NVMe High-Speed SSD (+ Free OS Install)',
    category: 'Storage & RAM',
    priceBDT: 6950,
    originalPriceBDT: 7800,
    priceUSD: 65,
    inStock: true,
    rating: 5.0,
    reviewsCount: 76,
    badge: 'Free Windows 11 Setup',
    warranty: '3 Years Official Warranty',
    shortSpec: 'Up to 3200 MB/s Read | 3D NAND Flash | M.2 2280 Form Factor',
    description:
      'Upgrade your slow laptop or desktop with blazing-fast NVMe storage. Boots Windows 11 in under 7 seconds. Every purchase from WS Smart Solution includes FREE OS installation and data migration!',
    highlights: [
      'Up to 6x faster than traditional SATA SSDs and 30x faster than HDDs',
      'Includes FREE Windows 10/11 Pro installation & driver setup (Worth ৳600)',
      'Low power consumption & graphene heat spreader included',
      'Compatible with all M.2 NVMe laptops and desktop motherboards',
    ],
  },
  {
    id: 'prod-sata-ssd-256gb',
    sku: 'WSSS-STR-202',
    name: '256GB 2.5-Inch SATA III Solid State Drive (+ Free OS Install)',
    category: 'Storage & RAM',
    priceBDT: 3950,
    originalPriceBDT: 4600,
    priceUSD: 36,
    inStock: true,
    rating: 4.8,
    reviewsCount: 89,
    badge: 'Best Budget Upgrade',
    warranty: '3 Years Official Warranty',
    shortSpec: '550 MB/s Read | 2.5" SATA III | Revives Older Laptops & PCs',
    description:
      'The most cost-effective way to breathe new life into any older laptop or desktop PC. Replaces mechanical hard drives directly and comes with complimentary OS setup at our shop.',
    highlights: [
      'Universal 2.5-inch SATA III fit for all laptops & desktops',
      'Shock-resistant solid-state architecture protects your files',
      'Complimentary Windows 10/11 installation included',
      'Optional DVD-Caddy available for dual SSD + HDD laptop setup',
    ],
  },
  {
    id: 'prod-ddr4-ram-8gb',
    sku: 'WSSS-STR-203',
    name: '8GB DDR4 3200MHz High-Performance RAM (Laptop SO-DIMM / Desktop)',
    category: 'Storage & RAM',
    priceBDT: 3450,
    originalPriceBDT: 4200,
    priceUSD: 32,
    inStock: true,
    rating: 4.9,
    reviewsCount: 54,
    warranty: 'Lifetime Official Warranty',
    shortSpec: '8GB DDR4 3200MHz | CL22 | 1.2V Low Voltage | Dual-Channel Ready',
    description:
      'Eliminate browser tab freezes and multitasking lag. Available in both Laptop SO-DIMM and Desktop U-DIMM variants with free compatibility testing before purchase.',
    highlights: [
      'Tested compatibility with Intel (6th–14th Gen) and AMD Ryzen systems',
      'Down-clocks automatically to 2666MHz / 2400MHz on older boards',
      'Free slot installation and MemTest86 stability verification',
      'Backed by official lifetime replacement warranty',
    ],
  },
  {
    id: 'prod-tws-anc-earbuds',
    sku: 'WSSS-GAD-301',
    name: 'Pro ANC Wireless TWS Earbuds with Quad-Mic ENC & 36H Playtime',
    category: 'Audio & Gadgets',
    priceBDT: 1750,
    originalPriceBDT: 2250,
    priceUSD: 16,
    inStock: true,
    rating: 4.7,
    reviewsCount: 68,
    warranty: '3 Months Shop Warranty',
    shortSpec: 'Bluetooth 5.3 | Active Noise Cancellation | 45ms Low Latency Gaming Mode',
    description:
      'Crystal-clear voice calls and deep bass audio powered by 13mm titanium drivers. Features digital battery percentage display on the charging case and Type-C fast charging.',
    highlights: [
      'Bluetooth 5.3 instant auto-pairing with Android, iOS & Windows',
      '45ms ultra-low latency mode for gaming and video editing',
      'IPX5 sweat & splash resistance for daily commute',
      '10 minutes Type-C charge delivers 2 hours of playback',
    ],
  },
  {
    id: 'prod-windows-office-license',
    sku: 'WSSS-SW-401',
    name: 'Genuine Windows 11 Pro + Office 2021 Pro Plus Lifetime Digital License',
    category: 'Software & OS Licenses',
    priceBDT: 1250,
    originalPriceBDT: 1800,
    priceUSD: 12,
    inStock: true,
    rating: 5.0,
    reviewsCount: 140,
    badge: 'Instant Delivery',
    warranty: 'Lifetime Motherboard Bind Guarantee',
    shortSpec: 'Retail/OEM Digital Key | Official Microsoft Updates | Instant WhatsApp Delivery',
    description:
      'Activate your Windows 10/11 Pro and Microsoft Office suite permanently with genuine digital retail keys linked directly to your motherboard hardware ID.',
    highlights: [
      'Instant digital delivery via WhatsApp & Email within 10 minutes',
      'Supports full official Windows Update and Microsoft Defender features',
      'Remains active even after formatting and reinstalling Windows',
      'Free remote activation support via AnyDesk / TeamViewer if needed',
    ],
  },
];


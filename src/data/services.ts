export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: 'OS & Software' | 'Battery & Power' | 'Hardware & Firmware' | 'PC Maintenance';
  shortDescription: string;
  fullDescription: string;
  priceBDT: number;
  priceUSD: number;
  priceLabel: string;
  turnaroundTime: string;
  warranty: string;
  badge?: string;
  features: string[];
  supportedDevices: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'os-installation-pro',
    title: 'Computer OS Installation & System Optimization',
    slug: 'os-installation-optimization',
    category: 'OS & Software',
    shortDescription:
      'Clean installation of Windows 10/11 Pro or Linux distros with full driver calibration, UEFI/GPT tuning, and essential productivity software.',
    fullDescription:
      'Give your desktop or laptop a brand-new, ultra-responsive feel. We perform a clean UEFI/GPT operating system installation without losing your personal partition data, install genuine OEM hardware drivers, optimize background telemetry for maximum FPS and battery life, and bundle essential daily software.',
    priceBDT: 500,
    priceUSD: 5,
    priceLabel: 'Starts from',
    turnaroundTime: '45 – 90 Minutes',
    warranty: '30 Days Free Re-check Support',
    badge: 'Most Popular Service',
    features: [
      'Windows 10 Pro / Windows 11 Pro (24H2) / Ubuntu / Linux Mint / Armbian Setup',
      'Safe Data Backup from C: Drive (Desktop, Documents, Downloads) before formatting',
      'Complete Official Chipset, GPU, Audio, WiFi & Bluetooth Driver Installation',
      'Microsoft Office Suite, PDF Reader, Fonts (Bijoy/Avro), Browser & Media Codecs',
      'BIOS/UEFI Firmware Update, SSD Trim Optimization & Startup Speed Tuning',
      'Dual-Boot Configuration (Windows + Linux) available on request',
    ],
    supportedDevices: ['All Brand Laptops (HP, Dell, Lenovo, Asus, Acer, MSI)', 'Custom Desktop PCs', 'Mini PCs & Workstations'],
  },
  {
    id: 'battery-diagnostics-service',
    title: 'Laptop, UPS & Lithium Battery Servicing & Rebuilding',
    slug: 'battery-diagnostics-replacement',
    category: 'Battery & Power',
    shortDescription:
      'Expert laptop battery replacement, Lithium-Ion / LiFePO4 pack cell balancing, BMS repair, and UPS/IPS battery restoration.',
    fullDescription:
      'Experiencing sudden power drops, "Plugged in, not charging" errors, or degraded backup time? Our battery lab diagnoses individual cell internal resistance (IR), repairs faulty BMS boards, replaces worn-out 18650/Li-Polymer cells, and supplies brand-new OEM laptop and UPS batteries.',
    priceBDT: 400,
    priceUSD: 4,
    priceLabel: 'Diagnostics & Servicing from',
    turnaroundTime: '1 – 3 Hours',
    warranty: 'Up to 6 Months Replacement Warranty on New Cells',
    badge: 'Specialized Lab',
    features: [
      'Laptop Battery Replacement (Original & High-Grade OEM for all major brands)',
      'Custom 18650 / LiFePO4 Battery Pack Spot-Welding & BMS Protection Setup',
      'Cell Balancing, Deep-Discharge Revival & Internal Resistance Testing',
      'Offline/Online UPS & Router Mini-UPS Battery Replacement & Load Testing',
      'Charging Port, Adapter & Power IC Diagnostics for Laptops',
      'Calibration for accurate battery percentage reporting in Windows/Linux',
    ],
    supportedDevices: ['Laptop Batteries', 'Router Mini DC UPS', 'Desktop Offline/Online UPS', 'Custom IoT & E-Bike Packs'],
  },
  {
    id: 'custom-firmware-router-tvbox',
    title: 'OpenWrt Router & Linux TV-Box Firmware Flashing',
    slug: 'custom-firmware-flashing',
    category: 'Hardware & Firmware',
    shortDescription:
      'Transform standard routers into automated Public WiFi hotspots or convert Android TV Boxes into Armbian Linux print/cloud servers.',
    fullDescription:
      'Leverage our deep embedded-systems expertise. Whether you want to unbrick an Amlogic S905W/TX3 Mini TV box, flash Armbian Linux to run a 24/7 CUPS Print Server, or install custom OpenWrt captive-portal firmware on your router, we handle UART/SPI/USB flashing safely.',
    priceBDT: 800,
    priceUSD: 8,
    priceLabel: 'Per Device Setup',
    turnaroundTime: '1 – 2 Hours',
    warranty: 'Guaranteed Stable Boot & Config',
    badge: 'Pro Engineering',
    features: [
      'OpenWrt Custom Firmware Flashing & Captive Portal Hotspot Setup',
      'Amlogic S905W / TX3 Mini Full Partition Backup, Unbrick & Custom ROM Flash',
      'Armbian Linux Server Installation on TV Boxes (CUPS Print Server / AdGuard / Docker)',
      'MikroTik & Enterprise Router Bandwidth Management & VLAN Configuration',
      'USB Hardware Programmer (CH341A) BIOS Chip Recovery for Dead Motherboards',
    ],
    supportedDevices: ['OpenWrt Supported Routers', 'TX3 Mini / S905W Android TV Boxes', 'Laptop/Desktop BIOS Chips'],
  },
  {
    id: 'pc-hardware-upgrade-servicing',
    title: 'PC & Laptop Deep Servicing, Thermal & SSD/RAM Upgrade',
    slug: 'pc-hardware-upgrade-servicing',
    category: 'PC Maintenance',
    shortDescription:
      'High-conductivity thermal paste application, cooling fan restoration, NVMe SSD migration, and full motherboard diagnostics.',
    fullDescription:
      'Overheating laptops throttle CPU speed by up to 60% and damage battery longevity. We disassemble your cooling module, ultrasonic-clean dust buildup, apply high-performance thermal compound, and upgrade old HDDs to blazing-fast NVMe/SATA SSDs.',
    priceBDT: 600,
    priceUSD: 6,
    priceLabel: 'Full Servicing Package',
    turnaroundTime: '1 Hour',
    warranty: '15 Days Service Guarantee',
    features: [
      'Complete Dust Removal & Heatsink Fin Deep Cleaning',
      'Arctic / High-Conductivity Thermal Paste & Thermal Pad Replacement',
      'NVMe M.2 / SATA SSD Upgrade with OS Cloning (Zero Data Loss)',
      'DDR3 / DDR4 / DDR5 Dual-Channel RAM Upgrade & XMP Profile Tuning',
      'No-Display, Boot-Loop, Hinge Repair & Keyboard Replacement',
    ],
    supportedDevices: ['Gaming Laptops', 'Office Ultrabooks', 'Desktop Gaming & Editing Rigs'],
  },
];


export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  category:
    | 'IoT & Embedded Systems'
    | 'AI & Cloud SaaS'
    | 'E-Commerce & Web'
    | 'System & Mobile Tools';
  tagline: string;
  description: string;
  keyAchievements: string[];
  techStack: string[];
  liveUrl?: string;
  status: 'Production Live' | 'Commercial Hardware' | 'Open Utility';
  featured: boolean;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'publicwifi-zone-system',
    title: 'PublicWiFi Automated Hotspot & Reseller Ecosystem',
    slug: 'publicwifi-openwrt-bkash-hotspot',
    category: 'IoT & Embedded Systems',
    tagline: 'OpenWrt Captive Portal + Automated bKash Payment + Flutter Reseller App',
    description:
      'A complete plug-and-play commercial WiFi monetization platform. Custom OpenWrt router firmware intercepts connected users via OpenNDS captive portal, processes instant bKash mobile payments via Supabase Edge Functions, and unlocks high-speed internet access automatically—managed remotely via a Flutter Android Admin App.',
    keyAchievements: [
      'Built custom `.bin` OpenWrt firmware images requiring zero manual coding by router owners',
      'Integrated real-time bKash payment verification and automated MAC/voucher authentication',
      'Developed the PublicWiFi Admin Flutter app for live router telemetry, daily earnings, and instant payouts',
    ],
    techStack: ['OpenWrt Linux', 'OpenNDS', 'Supabase Edge Functions', 'Flutter', 'bKash API', 'Shell Scripting'],
    status: 'Commercial Hardware',
    featured: true,
  },
  {
    id: 'safeprint-cloud-print-server',
    title: 'SafePrint — Armbian Linux Cloud & Wireless Print Server',
    slug: 'safeprint-linux-cups-print-server',
    category: 'IoT & Embedded Systems',
    tagline: 'TV-Box Linux Print Appliance + Android Agent + Cloudflare Edge Portal',
    description:
      'Engineered an ultra-low-cost hardware print server by converting Amlogic quad-core TV boxes into dedicated Armbian Linux CUPS appliances. Users can upload documents from a web portal or Android agent and print directly to any legacy USB printer securely.',
    keyAchievements: [
      'Engineered automated Armbian Linux + CUPS + Node.js agent setup for 24/7 headless printing',
      'Built a serverless Cloudflare Worker & Next.js Web Portal for remote print queue dispatching',
      'Developed companion Android Print Agent for seamless one-tap mobile document printing',
    ],
    techStack: ['Armbian Linux', 'CUPS', 'Cloudflare Workers', 'Next.js', 'Android Agent', 'Supabase'],
    status: 'Commercial Hardware',
    featured: true,
  },
  {
    id: 'okkhorica-ai-document-studio',
    title: 'Okkhorica — AI Bangla OCR, Converter & Document Studio',
    slug: 'okkhorica-ai-bangla-ocr-studio',
    category: 'AI & Cloud SaaS',
    tagline: 'Gemini AI-Powered Bangla OCR, PDF-to-Word & Bijoy-Unicode Engine',
    description:
      'An all-in-one Bengali document processing SaaS platform featuring high-accuracy AI Optical Character Recognition (OCR) for scanned Bengali PDFs and images, instant Bijoy-to-Unicode bidirectional conversion, and a rich cloud document editor.',
    keyAchievements: [
      'Integrated Google Gemini multimodal AI (`@google/genai`) for complex Bangla ligature OCR extraction',
      'Built lossless PDF-to-editable-Word pipeline and real-time Bijoy/Unicode font converter',
      'Cloudflare R2 / AWS S3 presigned storage architecture with serial-key licensing system',
    ],
    techStack: ['Next.js', 'Google Gemini AI', 'TypeScript', 'Tailwind CSS', 'AWS S3 / R2', 'Radix UI'],
    status: 'Production Live',
    featured: true,
  },
  {
    id: 'geminisub-cloudflare-platform',
    title: 'GeminiSub — Serverless Subscription Store & Telegram Bot',
    slug: 'geminisub-cloudflare-edge-platform',
    category: 'AI & Cloud SaaS',
    tagline: '100% Serverless E-Commerce on Cloudflare Pages, Workers & D1 SQLite',
    description:
      'A high-speed digital subscription and reseller platform running entirely on Cloudflare Edge infrastructure. Combines a modern Next.js web storefront with a full-featured Telegram Bot webhook backend for 1-tap deposit approvals and instant order fulfillment.',
    keyAchievements: [
      'Engineered zero-cost lifetime edge architecture using Cloudflare D1 SQLite database and Workers',
      'Implemented 1-click Telegram authentication and automated real-time admin order notifications',
      'Sub-20ms global API response times across 300+ Cloudflare edge locations',
    ],
    techStack: ['Cloudflare Pages', 'Cloudflare Workers', 'Cloudflare D1 (SQLite)', 'Next.js', 'Telegram Bot API'],
    liveUrl: 'https://geminisub.pages.dev',
    status: 'Production Live',
    featured: true,
  },
  {
    id: 'subflow-ai-voiceover-studio',
    title: 'SubFlow AI — Neural TTS Voiceover & Video Sync Pipeline',
    slug: 'subflow-ai-voiceover-studio',
    category: 'AI & Cloud SaaS',
    tagline: 'Automated Gemini Neural Speech Generation & EBU R128 Audio Mastering',
    description:
      'A specialized media production suite that synthesizes expressive, studio-grade voiceovers using Google Gemini Speech Generation (`gemini-3.8-flash-tts`), performs automated 48kHz WAV concatenation, EBU R128 loudness normalization, and frame-accurate video remuxing.',
    keyAchievements: [
      'Dynamic emotion & style prompting per scene for natural human-like narration',
      'Automated FFmpeg EBU R128 mastering and subtitle/video synchronization pipeline',
      'Interactive React 19 dark-mode studio interface for script timing and preview',
    ],
    techStack: ['React 19', 'Google GenAI SDK', 'FFmpeg Audio Mastering', 'TypeScript', 'Tailwind v4'],
    status: 'Production Live',
    featured: false,
  },
  {
    id: 'eferiola-tech-ecommerce',
    title: 'Eferiola — Full-Stack Tech Gadgets & Software Marketplace',
    slug: 'eferiola-tech-gadgets-ecommerce',
    category: 'E-Commerce & Web',
    tagline: 'Multi-Category Retail Platform for Smart Gadgets & Digital Downloads',
    description:
      'A comprehensive e-commerce storefront built for Bangladesh’s tech market, retailing TWS earbuds, smartwatches, power banks, Android apps, and Windows software with real-time cart synchronization, multi-currency support, and instant digital delivery.',
    keyAchievements: [
      'Server-rendered Next.js catalog with persistent cross-device shopping cart sync via Supabase SSR',
      'Automated serial number & digital license delivery for software purchases',
      'Full Google Tag Manager (GTM) & conversion tracking integration for search and social ads',
    ],
    techStack: ['Next.js', 'Supabase SSR', 'Tailwind CSS', 'Shadcn/Radix UI', 'Google Tag Manager'],
    liveUrl: 'https://eferiola.com',
    status: 'Production Live',
    featured: true,
  },
  {
    id: 'charucloset-retail-suite',
    title: 'Charu Closet — Fashion E-Commerce & Flutter Admin Suite',
    slug: 'charucloset-ecommerce-flutter-admin',
    category: 'E-Commerce & Web',
    tagline: 'Bilingual Next.js Storefront Paired with Dedicated Flutter Admin App',
    description:
      'A complete retail ecosystem featuring a high-converting bilingual (English & Bengali) Next.js web store and a dedicated cross-platform Flutter Admin mobile app (`charu_admin`) for inventory control, QR code order scanning, and dispatch management.',
    keyAchievements: [
      'Seamless real-time sync between the customer web storefront and mobile merchant app',
      'Built-in QR code generation for invoices and rapid parcel verification',
      'Google OAuth 2.0 one-tap customer login and automated order status tracking',
    ],
    techStack: ['Next.js', 'Flutter (Android/iOS)', 'Supabase', 'QR Code Engine', 'Tailwind CSS'],
    liveUrl: 'https://charucloset.com',
    status: 'Production Live',
    featured: false,
  },
  {
    id: 'universal-android-otp-tool',
    title: 'Universal Android OTP Auto-Filler & ADB Automation Tool',
    slug: 'universal-android-otp-autofiller',
    category: 'System & Mobile Tools',
    tagline: 'Portable Windows + Python UIAutomator2 Utility for Restricted Apps',
    description:
      'A plug-and-play Windows automation utility that bridges Android phones over USB Debugging to automatically extract incoming SMS OTP codes and populate multi-box PIN/OTP fields in apps that block clipboard pasting or fail to auto-read SMS.',
    keyAchievements: [
      'Bundled portable ADB with zero Android Studio installation required on host PC',
      'Intelligent UI hierarchy inspection via `uiautomator2` supporting 6-digit split boxes and standard inputs',
      'Safe human-in-the-loop verification: populates digits automatically while leaving final confirmation to the user',
    ],
    techStack: ['Python', 'UIAutomator2', 'Portable ADB', 'Windows Batch Automation'],
    status: 'Open Utility',
    featured: false,
  },
  {
    id: 'typetales-utility-tools-hub',
    title: 'TypeTales & Utility Tools Hub (Web + Android Capacitor)',
    slug: 'typetales-utility-tools-hub',
    category: 'E-Commerce & Web',
    tagline: 'Interactive Gamified Keyboard Learning & Cross-Platform Utility Suite',
    description:
      'A dual-project suite featuring TypeTales—an interactive gamified typing tutor for students—and Utility Tools Hub, a multi-tool productivity platform packaged as both a responsive web app and a native Android app via Capacitor 7.',
    keyAchievements: [
      'Real-time WPM, accuracy tracking, and interactive finger-placement lessons in TypeTales',
      'Hybrid Capacitor 7 Android build pipeline with native filesystem, preferences, and AdMob integration',
      'Lightweight, zero-latency client-side execution for daily developer and student utilities',
    ],
    techStack: ['Next.js', 'Capacitor 7', 'Android Native Bridge', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://typetales.utilitytoolshub.com',
    status: 'Production Live',
    featured: false,
  },
];


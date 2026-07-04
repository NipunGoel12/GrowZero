export const BRAND = {
  name: "GrowZero",
  tagline: "From Zero To Growth.",
  headline: "Every Business Starts At Zero.",
  subheadline:
    "GrowZero helps local businesses attract more customers through websites, social media, content creation, branding, and digital growth strategies.",
  email: "hello@growzero.com",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  calendly: "https://calendly.com/growzero/consultation",
} as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Businesses Helped" },
  { value: 10, suffix: "M+", label: "Views Generated" },
] as const;

export const SERVICES = [
  {
    title: "Website Development",
    description: "Premium, conversion-focused websites that turn visitors into customers.",
    icon: "Globe",
    gradient: "from-violet-500/20 to-purple-600/5",
  },
  {
    title: "Social Media Management",
    description: "Consistent content, community growth, and brand visibility across platforms.",
    icon: "Share2",
    gradient: "from-cyan-500/20 to-blue-600/5",
  },
  {
    title: "Reel Creation",
    description: "Scroll-stopping short-form video that drives engagement and reach.",
    icon: "Clapperboard",
    gradient: "from-pink-500/20 to-rose-600/5",
  },
  {
    title: "Branding",
    description: "Memorable visual identity that makes your business stand out locally.",
    icon: "Palette",
    gradient: "from-amber-500/20 to-orange-600/5",
  },
  {
    title: "SEO Optimization",
    description: "Rank higher on Google and get discovered by customers searching for you.",
    icon: "Search",
    gradient: "from-green-500/20 to-emerald-600/5",
  },
  {
    title: "Lead Generation",
    description: "Targeted campaigns that fill your pipeline with qualified prospects.",
    icon: "Target",
    gradient: "from-red-500/20 to-orange-600/5",
  },
  {
    title: "Google Business Profile",
    description: "Dominate local search with an optimized Google Business presence.",
    icon: "MapPin",
    gradient: "from-blue-500/20 to-indigo-600/5",
  },
  {
    title: "Content Strategy",
    description: "Data-driven content plans aligned with your growth goals.",
    icon: "LineChart",
    gradient: "from-violet-500/20 to-fuchsia-600/5",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Discover",
    description: "We learn your business, audience, and goals to build the right foundation.",
  },
  {
    title: "Plan",
    description: "A tailored growth roadmap with clear milestones and deliverables.",
  },
  {
    title: "Create",
    description: "Premium design, content, and campaigns crafted for your brand.",
  },
  {
    title: "Launch",
    description: "Flawless deployment with tracking, analytics, and optimization.",
  },
  {
    title: "Scale",
    description: "Continuous improvement to maximize ROI and long-term growth.",
  },
] as const;

export const PORTFOLIO = [
  {
    title: "IronPulse Gym",
    category: "Gym Website",
    metric: "+240% member inquiries",
    gradient: "from-violet-600 to-purple-900",
    accent: "#7C3AED",
  },
  {
    title: "Spice Route Kitchen",
    category: "Restaurant Website",
    metric: "+180% online orders",
    gradient: "from-cyan-600 to-blue-900",
    accent: "#06B6D4",
  },
  {
    title: "CareFirst Clinic",
    category: "Clinic Website",
    metric: "+320% appointment bookings",
    gradient: "from-emerald-600 to-green-900",
    accent: "#22C55E",
  },
  {
    title: "LaunchPad Startup",
    category: "Startup Website",
    metric: "+500% investor interest",
    gradient: "from-fuchsia-600 to-violet-900",
    accent: "#A855F7",
  },
] as const;

export const RESULTS = [
  { label: "Engagement Growth", value: 285, suffix: "%", color: "#7C3AED" },
  { label: "Traffic Growth", value: 412, suffix: "%", color: "#06B6D4" },
  { label: "Lead Generation", value: 156, suffix: "%", color: "#22C55E" },
  { label: "Follower Growth", value: 340, suffix: "%", color: "#F59E0B" },
  { label: "Revenue Increase", value: 198, suffix: "%", color: "#EC4899" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Owner, IronPulse Gym",
    quote:
      "GrowZero transformed our online presence. We went from zero digital leads to 40+ inquiries per month.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, Spice Route Kitchen",
    quote:
      "Their reels and website brought us customers we never reached before. Best investment we've made.",
    rating: 5,
  },
  {
    name: "Dr. Anil Mehta",
    role: "Director, CareFirst Clinic",
    quote:
      "Professional, fast, and growth-focused. Our appointment bookings tripled within 3 months.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "CEO, LaunchPad",
    quote:
      "GrowZero understood our startup vision and delivered a website that impressed investors instantly.",
    rating: 5,
  },
] as const;

export const PRICING = [
  {
    name: "Starter",
    price: "₹29,999",
    period: "one-time",
    description: "Perfect for businesses starting their digital journey.",
    features: ["Premium Website", "Basic Branding", "Mobile Responsive", "1 Month Support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹49,999",
    period: "/month",
    description: "Our most popular plan for consistent online growth.",
    features: [
      "Everything in Starter",
      "Social Media Management",
      "8 Reels / Month",
      "Content Calendar",
      "Monthly Analytics",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹89,999",
    period: "/month",
    description: "Full-service growth for ambitious businesses.",
    features: [
      "Everything in Growth",
      "SEO Optimization",
      "Lead Generation",
      "Growth Strategy",
      "Priority Support",
      "Dedicated Manager",
    ],
    popular: false,
  },
] as const;

export const FAQS = [
  {
    question: "How long does a website take?",
    answer:
      "Most websites are delivered within 2–4 weeks depending on complexity. We prioritize quality and speed without compromising on premium design.",
  },
  {
    question: "Do you manage Instagram?",
    answer:
      "Yes! We handle full Instagram management including content creation, posting schedules, engagement, and growth strategies tailored to your brand.",
  },
  {
    question: "Can you create reels?",
    answer:
      "Absolutely. Our team creates scroll-stopping reels optimized for Instagram, Facebook, and YouTube Shorts to maximize reach and engagement.",
  },
  {
    question: "Do you offer SEO?",
    answer:
      "Yes, SEO is included in our Premium plan and available as an add-on. We optimize on-page SEO, local search, and Google Business profiles.",
  },
  {
    question: "Do you work with local businesses?",
    answer:
      "Local businesses are our specialty. We help gyms, restaurants, clinics, shops, and service providers dominate their local market online.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve gyms, restaurants, startups, clinics, retail shops, salons, coaching centers, and any business ready to grow from zero.",
  },
] as const;

export const TRUSTED_LOGOS = [
  "IronPulse Gym",
  "Spice Route",
  "CareFirst",
  "LaunchPad",
  "FitZone",
  "Urban Bites",
  "HealthPlus",
  "NovaTech",
  "Glow Salon",
  "Peak Fitness",
] as const;

export const NAV_LINKS = [
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

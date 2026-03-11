// import { MapPin, Phone, Mail } from "lucide-react";
// import logo from "@/assets/logo_transparent_fixed.png";

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-[#0f3b63] text-primary-foreground">
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="md:col-span-1">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
//                 <img
//                   src={logo}
//                   alt="Sri Chaitanya logo"
//                   className="w-25 h-25 object-contain"
//                 />
//               </div>
//               <div>
//                 <span className="font-serif text-xl font-bold block">Sri Chaitanya</span>
//                 <span className="text-primary-foreground/70 text-sm">Madhapur, Hyderabad</span>
//               </div>
//             </div>
//             <p className="text-primary-foreground/60 text-sm leading-relaxed">
//               Shaping future leaders with world-class education for over 40 years.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-3 text-sm text-primary-foreground/60">
//               <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
//               <li><a href="#achievements" className="hover:text-accent transition-colors">Achievements</a></li>
//               <li><a href="#" className="hover:text-accent transition-colors">Student Life</a></li>
//               <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
//             </ul>
//           </div>

//           {/* Boards */}
//           <div>
//             <h4 className="font-serif font-bold text-lg mb-4">Boards Offered</h4>
//             <ul className="space-y-3 text-sm text-primary-foreground/60">
//               <li>CBSE</li>
//               <li>ICSE</li>
//               <li>IGCSE</li>
//               <li>State Board</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
//             <ul className="space-y-3 text-sm text-primary-foreground/60">
//               <li className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
//                 Plot No: 80, Sri Sai Plaza, Ayyappa Society, Madhapur, Hyderabad, Telangana - 500081
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="w-4 h-4 shrink-0" />
//                 1800-123-4567
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 shrink-0" />
//                 info@srichaitanyaschool.net
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12">
//           <h4 className="font-serif font-bold text-lg mb-4">Find Us</h4>
//           <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white/5">
//             <iframe
//               title="Sri Chaitanya Techno School Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74941.26307236507!2d78.38932912343273!3d17.433833063097143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9169d65d473f%3A0x7eef9356821e063e!2sSri%20Chaitanya%20Techno%20School!5e1!3m2!1sen!2sin!4v1771563535342!5m2!1sen!2sin"
//               className="w-full h-64 md:h-72"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
//           (c) 2026 Sri Chaitanya Schools. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




"use client"; // Removed – not needed in Vite/React
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
  ChevronRight,
  Award,
  Globe,
  BookOpen,
  Users,
  Sparkles,
  GraduationCap,
  Navigation,
  Clock,
  Building2,
  Locate,
  School,
  Bus,
  Library,
  ExternalLink,
  Heart,
  Star,
  Calendar,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";

// Removed: import Image from "next/image";
// Removed: import Link from "next/link";

type FooterProps = {
  onNavigate?: (section: string) => void;
};

// Enhanced Corporate Office Data
const CORPORATE_OFFICE = {
  name: "Sri Chaitanya School Corporate Office",
  address: "Sri Sai Plaza, Plot No. 80, Ayyappa Society Main Rd, Guttala_Begumpet, Kavuri Hills, Madhapur",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500081",
  landmark: "Near Kavuri Hills Junction",
  coordinates: { lat: 17.446156294852543, lng: 78.39222245770425 },
  phone: "+91 1800-123-4567",
  email: "corporate@srichaitanya.edu",
  hours: "Mon-Sat: 9:00 AM - 6:00 PM",
  established: "1986",
  employees: "8,200+",
  students: "1,25,000+",
  campuses: "156",
};

// Enhanced Nearby Branches with real data
const NEARBY_BRANCHES = [
  {
    name: "Madhapur Main Campus",
    area: "Kavuri Hills",
    address: "Plot 80, Kavuri Hills, Madhapur",
    phone: "+91 1800-123-1122",
    distance: "0.5",
    students: "3,200",
    rating: 4.8,
    facilities: ["Smart Class", "Sports Complex", "Library"],
    coordinates: { lat: 17.4461, lng: 78.3922 },
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=200&h=150&fit=crop"
  },
  {
    name: "Hitech City Campus",
    area: "Hitech City",
    address: "Cyber Pearl, Hitech City",
    phone: "+91 1800-123-1133",
    distance: "1.2",
    students: "2,800",
    rating: 4.7,
    facilities: ["Robotics Lab", "Swimming Pool", "IIT Academy"],
    coordinates: { lat: 17.4435, lng: 78.3772 },
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=200&h=150&fit=crop"
  },
  {
    name: "Jubilee Hills Campus",
    area: "Jubilee Hills",
    address: "Road No. 36, Jubilee Hills",
    phone: "+91 1800-123-1144",
    distance: "2.3",
    students: "2,500",
    rating: 4.9,
    facilities: ["NEET Center", "Auditorium", "Science Park"],
    coordinates: { lat: 17.4294, lng: 78.4090 },
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&h=150&fit=crop"
  },
  {
    name: "Banjara Hills Campus",
    area: "Banjara Hills",
    address: "Road No. 12, Banjara Hills",
    phone: "+91 1800-123-1155",
    distance: "3.1",
    students: "2,100",
    rating: 4.6,
    facilities: ["Commerce Hub", "Moot Court", "CA Center"],
    coordinates: { lat: 17.4156, lng: 78.4340 },
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=150&fit=crop"
  },
  {
    name: "Gachibowli Campus",
    area: "Gachibowli",
    address: "Near DLF, Gachibowli",
    phone: "+91 1800-123-1166",
    distance: "4.5",
    students: "1,900",
    rating: 4.7,
    facilities: ["Sports Ground", "Hostel", "Research Lab"],
    coordinates: { lat: 17.4391, lng: 78.3578 },
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=200&h=150&fit=crop"
  },
  {
    name: "Kukatpally Campus",
    area: "Kukatpally",
    address: "JNTU Road, Kukatpally",
    phone: "+91 1800-123-1177",
    distance: "5.2",
    students: "1,800",
    rating: 4.5,
    facilities: ["Digital Library", "Olympiad Center", "Sports"],
    coordinates: { lat: 17.4947, lng: 78.3991 },
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200&h=150&fit=crop"
  }
];

// Quick Links with icons
const QUICK_LINKS = [
  { name: "Home", section: "home", icon: School },
  { name: "About Us", section: "about", icon: Award },
  { name: "Academics", section: "academics", icon: BookOpen },
  { name: "Admissions", section: "admissions", icon: GraduationCap },
  { name: "Campuses", section: "campuses", icon: Building2 },
  { name: "Results", section: "results", icon: TrendingUp },
  { name: "Careers", section: "careers", icon: Users },
];

// Programs Links
const PROGRAMS = [
  { name: "CBSE Curriculum", href: "/programs/cbse", icon: BookOpen },
  { name: "IIT-JEE Advanced", href: "/programs/iit-jee", icon: TrendingUp },
  { name: "NEET/Medical", href: "/programs/neet", icon: Heart },
  { name: "Foundation", href: "/programs/foundation", icon: Shield },
  { name: "Commerce", href: "/programs/commerce", icon: Building2 },
  { name: "Olympiad", href: "/programs/olympiad", icon: Star },
];

// Social Links with enhanced data
const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", color: "hover:bg-[#1877F2]", href: "https://facebook.com/srichaitanya", followers: "250K+" },
  { icon: Instagram, label: "Instagram", color: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F56040]", href: "https://instagram.com/srichaitanya", followers: "180K+" },
  { icon: Twitter, label: "Twitter", color: "hover:bg-[#1DA1F2]", href: "https://twitter.com/srichaitanya", followers: "120K+" },
  { icon: Youtube, label: "YouTube", color: "hover:bg-[#FF0000]", href: "https://youtube.com/srichaitanya", followers: "500K+" },
  { icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0A66C2]", href: "https://linkedin.com/school/srichaitanya", followers: "95K+" },
];

const getDistanceInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [showNearby, setShowNearby] = useState(false);
  const [detectedCity, setDetectedCity] = useState("Hyderabad");
  const [locationError, setLocationError] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<typeof NEARBY_BRANCHES[0] | null>(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Detect user location
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setLocationError(null);
        if (latitude > 17.3 && latitude < 17.6 && longitude > 78.3 && longitude < 78.6) {
          setDetectedCity("Hyderabad");
        } else {
          setDetectedCity("Your Area");
        }
      },
      (error) => {
        console.log("Location error:", error);
        setLocationError("Location access denied");
        setDetectedCity("Select City");
      }
    );
  }, []);

  const goTo = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
      return;
    }
    const target = document.getElementById(section);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Calculate nearby branches with distances
  const nearbyBranches = userLocation
    ? NEARBY_BRANCHES.map((branch) => ({
        ...branch,
        distance: getDistanceInKm(
          userLocation.lat,
          userLocation.lng,
          branch.coordinates.lat,
          branch.coordinates.lng
        ).toFixed(1),
      }))
        .sort((a, b) => Number(a.distance) - Number(b.distance))
        .slice(0, 4)
    : NEARBY_BRANCHES.slice(0, 4).map(b => ({ ...b, distance: "2.5" }));

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const openGoogleMaps = (address?: string) => {
    const searchAddress = address || `${CORPORATE_OFFICE.address}, ${CORPORATE_OFFICE.city}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchAddress)}`;
    window.open(url, '_blank');
  };

  const getDirections = (branch: typeof NEARBY_BRANCHES[0]) => {
    if (userLocation) {
      const url = `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${branch.coordinates.lat},${branch.coordinates.lng}`;
      window.open(url, '_blank');
    } else {
      openGoogleMaps(branch.address);
    }
  };

  const [particles, setParticles] = useState<
    { left: string; top: string; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#002856] via-[#003366] to-[#0d3a6c] text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffd166] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffd166] to-transparent" />
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative w-full px-4 py-16 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Column - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="flex items-center gap-4 group cursor-pointer">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="bg-white rounded-2xl p-3 shadow-lg transition-all duration-300 group-hover:shadow-xl"
              >
                <img
                  src="/logo-scs.svg"
                  alt="Sri Chaitanya Crest"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ffd166] to-white bg-clip-text text-transparent">
                  Sri Chaitanya
                </h2>
                <p className="text-xs font-medium text-[#ffd166]/80 tracking-wider">
                  SCHOOL OF EXCELLENCE
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="w-3 h-3 text-green-400" />
                  <span className="text-[10px] text-white/60">ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Transforming education since 1986. Shaping future leaders through innovation, excellence, and holistic development across 156+ campuses nationwide.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-xl font-bold text-[#ffd166]">38+</div>
                <div className="text-xs text-white/50">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#ffd166]">156+</div>
                <div className="text-xs text-white/50">Campuses</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#ffd166]">1.25L+</div>
                <div className="text-xs text-white/50">Students</div>
              </div>
            </div>
            {/* Social Links with followers */}
            <div className="space-y-3">
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20 ${social.color}`}
                  >
                    <social.icon className="size-4 transition-transform group-hover:scale-110" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.followers} followers
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="h-6 w-1.5 bg-gradient-to-b from-[#ffd166] to-[#a41f2a] rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <button
                      onClick={() => goTo(link.section)}
                      className="group flex items-center gap-3 text-sm text-white/70 hover:text-white transition-all w-full"
                    >
                      <Icon className="size-4 text-[#ffd166] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {/* Programs Mini List */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white/80 mb-3">Programs</h4>
              <div className="grid grid-cols-2 gap-2">
                {PROGRAMS.slice(0, 4).map((program) => {
                  const Icon = program.icon;
                  return (
                    <a
                      key={program.name}
                      href={program.href}
                      className="flex items-center gap-2 text-xs text-white/60 hover:text-[#ffd166] transition-colors"
                    >
                      <Icon className="size-3" />
                      {program.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Corporate Office with Enhanced Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="h-6 w-1.5 bg-gradient-to-b from-[#ffd166] to-[#a41f2a] rounded-full" />
              Corporate Office
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-[#a41f2a]/20 to-[#c62834]/20 flex items-center justify-center border border-[#a41f2a]/30"
                >
                  <Building2 className="size-6 text-[#ffd166]" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-white text-base">{CORPORATE_OFFICE.name}</h4>
                  <p className="text-xs text-white/60 mt-0.5 flex items-center gap-1">
                    <Calendar className="size-3" />
                    Est. {CORPORATE_OFFICE.established} • ISO 9001:2015
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-3 group cursor-pointer" onClick={() => navigator.clipboard.writeText(CORPORATE_OFFICE.address)}>
                <MapPin className="size-4 text-[#ffd166] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-white/80 leading-relaxed group-hover:text-white transition-colors">
                    {CORPORATE_OFFICE.address}
                  </p>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {CORPORATE_OFFICE.city}, {CORPORATE_OFFICE.state} - {CORPORATE_OFFICE.pincode}
                  </p>
                  <p className="text-xs text-white/50 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {CORPORATE_OFFICE.landmark}
                  </p>
                  <span className="text-[10px] text-white/30 mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to copy address
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                  <Phone className="size-3.5 text-[#ffd166]" />
                  <div>
                    <span className="text-[10px] text-white/40 block">Phone</span>
                    <span className="text-xs text-white/80">{CORPORATE_OFFICE.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                  <Mail className="size-3.5 text-[#ffd166]" />
                  <div>
                    <span className="text-[10px] text-white/40 block">Email</span>
                    <span className="text-xs text-white/80 truncate">{CORPORATE_OFFICE.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2 col-span-2">
                  <Clock className="size-3.5 text-[#ffd166]" />
                  <div>
                    <span className="text-[10px] text-white/40 block">Hours</span>
                    <span className="text-xs text-white/80">{CORPORATE_OFFICE.hours}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openGoogleMaps()}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#a41f2a] to-[#c62834] text-white rounded-lg px-4 py-3 text-sm font-semibold hover:shadow-lg transition-all"
                >
                  <Navigation className="size-4" />
                  Get Directions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowNearby(!showNearby)}
                  className="flex items-center justify-center gap-2 bg-white/10 text-white rounded-lg px-4 py-3 text-sm font-semibold hover:bg-white/20 transition-all border border-white/10"
                >
                  <Locate className="size-4" />
                  {showNearby ? 'Hide' : 'Nearby'}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Nearby Branches & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-[#a41f2a]/10 to-transparent">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <Locate className="size-4 text-[#ffd166]" />
                    Near {detectedCity}
                  </h4>
                  {locationError ? (
                    <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                      {locationError}
                    </span>
                  ) : (
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-full animate-pulse">
                      Live Location
                    </span>
                  )}
                </div>
              </div>
              <AnimatePresence mode="wait">
                {showNearby ? (
                  <motion.div
                    key="branches"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="divide-y divide-white/10"
                  >
                    {nearbyBranches.map((branch, index) => (
                      <motion.div
                        key={branch.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 hover:bg-white/5 transition-all cursor-pointer group"
                        onClick={() => setSelectedBranch(branch)}
                      >
                        <div className="flex gap-3">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={branch.image}
                              alt={branch.name}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h5 className="font-medium text-white text-sm group-hover:text-[#ffd166] transition-colors">
                                  {branch.name}
                                </h5>
                                <p className="text-xs text-white/50">{branch.area}</p>
                              </div>
                              <div className="text-right">
                                <span className="text-sm font-bold text-[#ffd166]">
                                  {branch.distance} km
                                </span>
                                <div className="flex items-center gap-1 mt-1">
                                  <Star className="size-3 fill-yellow-400 text-yellow-400" />
                                  <span className="text-xs text-white/80">{branch.rating}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {branch.facilities.slice(0, 2).map((facility) => (
                                <span key={facility} className="text-[8px] bg-white/10 px-2 py-0.5 rounded-full text-white/60">
                                  {facility}
                                </span>
                              ))}
                              <span className="text-[8px] bg-[#ffd166]/20 text-[#ffd166] px-2 py-0.5 rounded-full">
                                {branch.students} students
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.location.href = `tel:${branch.phone}`;
                                }}
                                className="p-1 hover:bg-white/10 rounded transition-colors"
                              >
                                <Phone className="size-3 text-[#ffd166]" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  getDirections(branch);
                                }}
                                className="p-1 hover:bg-white/10 rounded transition-colors"
                              >
                                <Navigation className="size-3 text-[#ffd166]" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedBranch(branch);
                                }}
                                className="p-1 hover:bg-white/10 rounded transition-colors"
                              >
                                <ExternalLink className="size-3 text-[#ffd166]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <div className="p-3 text-center">
                      <button className="text-xs text-[#ffd166] hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto">
                        View all 25+ branches in Hyderabad
                        <ChevronRight className="size-3" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4"
                  >
                    <p className="text-sm text-white/80">
                      <span className="font-bold text-[#ffd166]">{NEARBY_BRANCHES.length}+</span> Sri Chaitanya branches near you
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex -space-x-2">
                        {NEARBY_BRANCHES.slice(0, 3).map((branch, i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-[#a41f2a] to-[#c62834] border-2 border-white/20 flex items-center justify-center text-[8px] font-bold">
                            {branch.name[0]}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-white/50">+ more</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Enhanced Newsletter */}
            <form onSubmit={handleSubscribe} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="size-5 text-[#ffd166]" />
                <h4 className="font-semibold text-white">Stay Updated</h4>
              </div>
              <p className="text-xs text-white/60 mb-3">
                Get latest updates on admissions, results, and events
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#ffd166] focus:outline-none transition-all"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-[#a41f2a] to-[#c62834] text-white rounded-lg px-5 py-3 hover:shadow-lg transition-all"
                >
                  <Send className="size-4" />
                </motion.button>
              </div>
              <AnimatePresence>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs text-green-400 mt-2 flex items-center gap-1"
                  >
                    <Sparkles className="size-3" />
                    Thanks for subscribing! Check your inbox.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar with Enhanced Info */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
              <span>© {currentYear} Sri Chaitanya Schools</span>
              <span className="hidden lg:inline">•</span>
              <span>All rights reserved</span>
              <span className="hidden lg:inline">•</span>
              <span className="flex items-center gap-1">
                <Shield className="size-3" />
                ISO 9001:2015 Certified
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs">
              {["Privacy Policy", "Terms of Use", "Sitemap", "Contact", "Careers"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white/50 hover:text-[#ffd166] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Branch Detail Modal */}
      <AnimatePresence>
        {selectedBranch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBranch(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-[#002856] to-[#0d3a6c] rounded-2xl max-w-2xl w-full p-6 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{selectedBranch.name}</h3>
                <button
                  onClick={() => setSelectedBranch(null)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <ChevronRight className="size-5 rotate-90 text-white/60" />
                </button>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src={selectedBranch.image}
                  alt={selectedBranch.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40">Distance</div>
                  <div className="text-lg font-bold text-[#ffd166]">{selectedBranch.distance} km</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40">Students</div>
                  <div className="text-lg font-bold text-[#ffd166]">{selectedBranch.students}</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40">Rating</div>
                  <div className="text-lg font-bold text-[#ffd166] flex items-center gap-1">
                    {selectedBranch.rating} <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40">Phone</div>
                  <div className="text-sm font-medium text-white">{selectedBranch.phone}</div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-white/80 flex items-start gap-2">
                  <MapPin className="size-4 text-[#ffd166] flex-shrink-0 mt-0.5" />
                  {selectedBranch.address}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedBranch.facilities.map((facility) => (
                    <span key={facility} className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/80">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => getDirections(selectedBranch)}
                  className="flex-1 bg-gradient-to-r from-[#a41f2a] to-[#c62834] text-white rounded-lg px-4 py-3 font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="size-4" />
                  Get Directions
                </button>
                <button
                  onClick={() => window.location.href = `tel:${selectedBranch.phone}`}
                  className="flex-1 bg-white/10 text-white rounded-lg px-4 py-3 font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="size-4" />
                  Call Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#a41f2a] to-[#c62834] shadow-lg hover:shadow-xl transition-all"
        aria-label="Back to top"
      >
        <ChevronRight className="size-5 -rotate-90 text-white" />
      </motion.button>
    </footer>
  );
}
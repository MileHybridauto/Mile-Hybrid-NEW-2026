'use client';

import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Menu, 
  X,
  Battery,
  Car,
  Award,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Clock,
  Cpu,
  Calendar,
  User,
  Mail,
  MessageSquare,
  ArrowLeft,
  Thermometer,
  Star,
  ClipboardCheck,
  Navigation,
  Activity,
  Gauge,
  DollarSign,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react';

// --- Enhanced Data Definitions ---

const detailedServiceCategories = [
  {
    title: "Toyota & Lexus (Hybrid & Gas)",
    icon: Car,
    popular: true,
    items: [
      { name: "Hybrid Battery Replacement", desc: "New OEM or certified reconditioned. Save up to 40% vs dealer pricing." },
      { name: "Check Hybrid System & Red Triangle", desc: "Expert P0A80 diagnostics. We find the real problem, not just clear codes." },
      { name: "Inverter Coolant Pump", desc: "Prevent $3k+ failures. Critical for Gen 2/3 Prius longevity." },
      { name: "Brake Actuator Replacement", desc: "Stop the 'barking' noise permanently. OEM parts, lifetime labor warranty." },
      { name: "EGR & Intake Cleaning", desc: "Restore MPG and prevent costly head gasket failure." },
      { name: "Gen 3 Prius Engine Replacement", desc: "The permanent Death Rattle fix. Low-mileage Japanese engines." }
    ]
  },
  {
    title: "Tesla & EV Specific",
    icon: Zap,
    popular: true,
    items: [
      { name: "Control Arm Replacement", desc: "End the Model 3/Y squeaks. Upgraded parts for lasting silence." },
      { name: "12V Battery Upgrade", desc: "Lithium-ion upgrade eliminates constant replacements." },
      { name: "Cabin Air Filter Replacement", desc: "Complex Model 3/Y service done right the first time." },
      { name: "HV Isolation Diagnostics", desc: "Pinpoint BMS alerts without guessing. High-voltage certified techs." },
      { name: "LDU Coolant Delete (Model S/X)", desc: "Prevent $6k+ inverter failure. Essential preventative service." }
    ]
  },
  {
    title: "All Makes: Hybrid & EV",
    icon: Zap,
    items: [
      { name: "Chevy Volt & Bolt", desc: "High-voltage battery diagnostics and hybrid system repair." },
      { name: "Ford Hybrids (Fusion, Escape, C-Max)", desc: "Complete hybrid system service and battery conditioning." },
      { name: "Honda Hybrids (Insight, Civic, Accord)", desc: "IMA battery reconditioning and hybrid system diagnostics." },
      { name: "Nissan Leaf", desc: "EV battery health checks and electrical system service." },
      { name: "Kia & Hyundai EV/Hybrid", desc: "Niro, Kona, Ioniq - complete hybrid and EV repair." }
    ]
  },
  {
    title: "Standard Maintenance & Repair",
    icon: Wrench,
    items: [
      { name: "Oil Change + 50-Point Inspection", desc: "Synthetic oil, filter, tire rotation. Includes digital inspection report." },
      { name: "Pre-Purchase Inspection", desc: "Battery health test + 150-point inspection. Don't buy a lemon." },
      { name: "Brake Service", desc: "Pads, rotors, fluid flush. Hybrid regenerative brake specialists." },
      { name: "Transmission Service", desc: "Toyota WS, CVT fluid exchange with OEM parts." },
      { name: "30k/60k/90k Factory Service", desc: "Maintain warranty without dealer prices. OEM parts used." },
      { name: "AC/Heating Repair", desc: "Climate control experts for hybrid and standard systems." }
    ]
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Denver's Oldest Hybrid Shop",
    description: "We opened our doors in 2008 when hybrids were new. 17+ years of specialization means we've seen and fixed it all. We literally wrote the book on hybrid repair in Colorado."
  },
  {
    icon: DollarSign,
    title: "Save 30-50% vs Dealership",
    description: "Same OEM parts, same quality work, better prices. No corporate overhead, no upselling. Our longevity proves our pricing is fair and sustainable."
  },
  {
    icon: Shield,
    title: "Lifetime Labor Warranty",
    description: "We stand behind our work forever. If we repair it, it's covered for as long as you own the car. We've been here since 2008 and we'll be here to honor it."
  },
  {
    icon: Users,
    title: "Loaner Cars Available",
    description: "Free loaner vehicles for major repairs. We know you need to stay mobile - we've been taking care of Denver drivers for nearly two decades."
  },
  {
    icon: CheckCircle,
    title: "ASE Certified Technicians",
    description: "Factory-trained on Toyota Techstream, Tesla systems, and all hybrid platforms. Our senior techs have 15+ years of hybrid-specific experience."
  },
  {
    icon: TrendingUp,
    title: "4.9★ Rating (220+ Reviews)",
    description: "Denver's highest-rated independent hybrid shop. Our reputation has been earned one satisfied customer at a time since 2008."
  }
];

const pricingComparison = [
  { service: "Hybrid Battery", dealer: "$3,500-4,500", us: "$1,895-2,995", savings: "Save $1,000+" },
  { service: "Brake Actuator", dealer: "$1,800-2,200", us: "$1,295", savings: "Save $500+" },
  { service: "60k Service", dealer: "$450-650", us: "$295", savings: "Save $200+" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Mile Hybrid Automotive",
  "image": "https://placehold.co/400x150/white/10b981?text=Mile+Hybrid+Auto", 
  "description": "Denver's oldest and longest-running hybrid and EV specialist since 2008. Expert Toyota, Lexus, Tesla service at 30-50% less than dealer prices. ASE certified, lifetime labor warranty.",
  "foundingDate": "2008",
  "slogan": "Denver's Oldest Hybrid Shop - Pioneering Since 2008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5142 E 39th Ave", 
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "80207",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.770", 
    "longitude": "-104.925" 
  },
  "hasMap": "https://maps.google.com/?q=Mile+Hybrid+Automotive+5142+E+39th+Ave+Denver+CO",
  "url": "https://www.milehybridauto.com",
  "telephone": "+17204454357",
  "email": "info@milehybridauto.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "17:30"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "222",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$$",
  "areaServed": [
    { "@type": "City", "name": "Denver" },
    { "@type": "City", "name": "Aurora" },
    { "@type": "City", "name": "Stapleton" },
    { "@type": "City", "name": "Park Hill" },
    { "@type": "City", "name": "Lowry" },
    { "@type": "City", "name": "Central Park" },
    { "@type": "City", "name": "Cherry Creek" },
    { "@type": "City", "name": "Highlands Ranch" },
    { "@type": "City", "name": "Lakewood" },
    { "@type": "City", "name": "Centennial" }
  ],
  "knowsAbout": [
    "Hybrid Battery Replacement", 
    "Toyota Prius Repair",
    "Lexus Hybrid Service",
    "Tesla Control Arm Replacement", 
    "EV High Voltage Diagnostics", 
    "P0A80 Diagnostic Code",
    "Gen 3 Prius Death Rattle",
    "Hybrid System Warning Light",
    "Toyota Techstream Diagnostics",
    "ASE Certified Hybrid Repair"
  ],
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "USD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hybrid & EV Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hybrid Battery Replacement",
          "description": "New OEM or certified reconditioned hybrid battery installation",
          "provider": {
            "@type": "AutoRepair",
            "name": "Mile Hybrid Automotive"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hybrid System Diagnostic",
          "description": "Comprehensive P0A80 and hybrid system diagnostics with Toyota Techstream",
          "provider": {
            "@type": "AutoRepair",
            "name": "Mile Hybrid Automotive"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tesla Out-of-Warranty Repair",
          "description": "Model S/3/X/Y control arm, suspension, and electrical repair",
          "provider": {
            "@type": "AutoRepair",
            "name": "Mile Hybrid Automotive"
          }
        }
      }
    ]
  }
};

// --- UI Components ---

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto cursor-pointer";
  const variants = {
    primary: "border-transparent text-white bg-green-600 hover:bg-green-500 focus:ring-green-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    secondary: "border-blue-600 text-blue-300 bg-blue-800 hover:bg-blue-700 focus:ring-blue-500",
    outline: "border-green-500 text-green-400 bg-transparent hover:bg-green-500/10 focus:ring-green-500",
    urgent: "border-transparent text-white bg-purple-600 hover:bg-purple-500 focus:ring-purple-500 shadow-lg",
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const FeatureCard = ({ icon: Icon, title, description, badge }) => (
  <article className="group relative p-6 bg-blue-800 border border-blue-700 rounded-xl hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg h-full flex flex-col">
    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon className="h-20 w-20 text-green-500" />
    </div>
    <div className="flex items-start justify-between mb-4">
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-green-900/30 text-green-400">
        <Icon className="h-6 w-6" />
      </div>
      {badge && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/50 text-green-300 border border-green-700">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-blue-400 leading-relaxed text-sm flex-grow">{description}</p>
  </article>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-blue-700" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <button 
      className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      onClick={onClick}
    >
      <h3 className={`text-lg font-medium transition-colors pr-4 ${isOpen ? 'text-green-400' : 'text-blue-200 group-hover:text-green-400'}`} itemProp="name">
        {question}
      </h3>
      <ChevronDown className={`h-5 w-5 text-blue-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
    >
      <p className="text-blue-400 leading-relaxed pr-8" itemProp="text">
        {answer}
      </p>
    </div>
  </div>
);

// --- Booking Component ---
const BookingPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    make: 'Toyota',
    model: '',
    year: '',
    issue: '',
    date: '',
    urgency: 'routine'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'da233cfe-3a64-4ec0-adb9-11c87dcc2b3f',
          subject: `${formData.urgency === 'urgent' ? '🚨 URGENT' : '📅'} New Booking: ${formData.year} ${formData.make} ${formData.model}`,
          from_name: formData.name,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          vehicle: `${formData.year} ${formData.make} ${formData.model}`,
          issue: formData.issue,
          preferred_date: formData.date,
          urgency: formData.urgency,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      alert('Something went wrong. Please call us at (720) 445-4357 to book your appointment.');
    }
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-blue-900 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Appointment Request Received!</h2>
        <p className="text-blue-400 max-w-md mb-2">
          <strong>Thank you, {formData.name}!</strong>
        </p>
        <p className="text-blue-400 max-w-md mb-8">
          We've received your request for your {formData.year} {formData.make} {formData.model}. Our team will reach out to you as soon as possible to confirm your appointment.
        </p>
        {formData.urgency === 'urgent' && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 max-w-md">
            <p className="text-red-400 text-sm">
              <strong>⚡ URGENT REQUEST NOTED:</strong> We'll do our best to prioritize your request.
            </p>
          </div>
        )}
        <Button onClick={onBack} variant="secondary">Return Home</Button>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack} 
          className="flex items-center text-blue-400 hover:text-green-400 mb-8 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="bg-blue-800 border border-blue-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-800 p-8 border-b border-blue-700">
            <h1 className="text-3xl font-extrabold text-white">Schedule Your Service</h1>
            <p className="mt-2 text-blue-300">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Urgency Level */}
            <div className="bg-blue-900/50 border border-blue-600 rounded-lg p-4">
              <label className="block text-sm font-medium text-blue-300 mb-3">Service Priority</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`relative flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${formData.urgency === 'routine' ? 'border-green-500 bg-green-900/20' : 'border-blue-600 hover:border-blue-500'}`}>
                  <input 
                    type="radio" 
                    name="urgency" 
                    value="routine"
                    checked={formData.urgency === 'routine'}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <span className="block text-white font-medium">Routine Service</span>
                    <span className="block text-xs text-blue-400">Schedule within 3-5 days</span>
                  </div>
                </label>
                <label className={`relative flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${formData.urgency === 'urgent' ? 'border-red-500 bg-red-900/20' : 'border-blue-600 hover:border-blue-500'}`}>
                  <input 
                    type="radio" 
                    name="urgency" 
                    value="urgent"
                    checked={formData.urgency === 'urgent'}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <span className="block text-white font-medium">⚡ Urgent</span>
                    <span className="block text-xs text-blue-400">Need ASAP / Same-day</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-green-400 border-b border-blue-700 pb-2">1. Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <input 
                      type="text" 
                      required
                      className="pl-10 w-full bg-blue-900 border border-blue-600 rounded-lg py-2.5 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Jane Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-300 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <input 
                      type="tel" 
                      required
                      className="pl-10 w-full bg-blue-900 border border-blue-600 rounded-lg py-2.5 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="(720) 555-1234"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <input 
                      type="email" 
                      required
                      className="pl-10 w-full bg-blue-900 border border-blue-600 rounded-lg py-2.5 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="jane@example.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-green-400 border-b border-blue-700 pb-2">2. Vehicle Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-blue-300 mb-2">Year *</label>
                  <input 
                    type="number" 
                    required
                    min="1990"
                    max="2026"
                    className="w-full bg-blue-900 border border-blue-600 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="2018"
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-blue-300 mb-2">Make *</label>
                  <select 
                    className="w-full bg-blue-900 border border-blue-600 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.make}
                    onChange={(e) => setFormData({...formData, make: e.target.value})}
                  >
                    <option value="Toyota">Toyota</option>
                    <option value="Lexus">Lexus</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Kia">Kia</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-blue-300 mb-2">Model *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-blue-900 border border-blue-600 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Prius, Model 3, etc."
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Issue Description */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-green-400 border-b border-blue-700 pb-2">3. Service Details</h3>
              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-blue-300 mb-2">What service do you need? *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                  <textarea 
                    rows="4"
                    required
                    className="pl-10 w-full bg-blue-900 border border-blue-600 rounded-lg py-2.5 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Examples: 'Red triangle warning light on dashboard', 'Need hybrid battery replacement quote', '60k mile service', 'Tesla squeaking when turning', etc."
                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                  ></textarea>
                </div>
                <p className="mt-2 text-xs text-blue-500">Be as specific as possible. Include any warning lights, symptoms, or recent issues.</p>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-blue-300 mb-2">Preferred Date (Optional)</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                  <input 
                    type="date" 
                    className="pl-10 w-full bg-blue-900 border border-blue-600 rounded-lg py-2.5 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all [color-scheme:dark]"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <p className="mt-2 text-xs text-blue-500">We'll do our best to accommodate your preferred date.</p>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full text-lg py-4 font-bold" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'REQUEST APPOINTMENT →'}
              </Button>
              <p className="text-center text-blue-500 text-sm mt-4">
                💳 No payment required now • 🔒 Your info is secure
              </p>
            </div>
          </form>
        </div>

        {/* Trust signals below form */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-800/50 border border-blue-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">2008</div>
            <div className="text-xs text-blue-400">Oldest Hybrid Shop</div>
          </div>
          <div className="bg-blue-800/50 border border-blue-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">4.9★</div>
            <div className="text-xs text-blue-400">Google Rating</div>
          </div>
          <div className="bg-blue-800/50 border border-blue-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">25k+</div>
            <div className="text-xs text-blue-400">Cars Serviced</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    if (currentView === 'home') document.title = "Mile Hybrid Automotive | Denver's Oldest Hybrid Shop Since 2008";
    if (currentView === 'booking') document.title = "Schedule Service | Mile Hybrid Automotive";
  }, [currentView]);

  const scrollToSection = (id) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToBooking = () => {
    setCurrentView('booking');
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const faqs = [
    {
      question: "Why is being Denver's oldest hybrid shop important?",
      answer: "We opened in 2008 when hybrid technology was still new and most shops wouldn't touch them. While other shops have come and gone, we've been here continuously for 17+ years, perfecting our craft. This means our technicians have literally decades of hybrid-specific experience - we've diagnosed and repaired problems that newer shops have never seen. Our longevity also means you can trust our lifetime warranty - we'll be here to honor it. When the first Prius hit Colorado roads, we were already the experts."
    },
    {
      question: "What are my options for a hybrid battery replacement at Mile Hybrid?",
      answer: "We offer three options depending on your budget and vehicle situation: (1) New OEM battery installed with a 3-year warranty - this is the same battery the dealer installs, but at a significant savings. (2) Certified reconditioned battery installed with a 1-year warranty - perfect for high-mileage vehicles over 200k miles. (3) Individual module replacement when only 1-2 cells are bad - our diagnostic can determine if this option will work for your specific battery. All options include labor, testing, and our lifetime labor warranty. Call us for a free quote."
    },
    {
      question: "How long does a hybrid battery replacement take?",
      answer: "The actual battery replacement takes 3-4 hours for most Toyota and Lexus hybrids (Prius, Camry, Highlander, RX450h, etc.). However, the total timeline depends on parts availability: If we have a reconditioned battery in stock, we can often complete the job same-day. For new OEM batteries, we typically need 1-2 business days to order the part. We provide a free loaner vehicle during the repair so you're never without transportation. Tesla battery modules take longer - typically 2-3 days including diagnostic time."
    },
    {
      question: "What certifications and training do your technicians have?",
      answer: "All of our technicians are ASE (Automotive Service Excellence) certified in multiple areas. Our lead hybrid technician has Toyota factory training on the Techstream diagnostic system and has completed specialized courses in high-voltage safety (HV certification required for hybrid/EV work). We maintain subscriptions to Toyota Technical Information System (TIS) and Lexus service manuals, giving us access to the same repair procedures dealers use. Our shop has been continuously operating since 2008, meaning our senior techs have 15-17 years of hybrid-specific experience - not general automotive experience, but actual hybrid system expertise."
    },
    {
      question: "Do you warranty your repairs? What does lifetime labor warranty actually mean?",
      answer: "Yes! We offer a LIFETIME warranty on all labor - meaning if our workmanship fails at any point while you own the vehicle, we'll fix it for free. This covers the actual repair work we performed. Parts are covered by the manufacturer warranty, which varies: OEM parts typically have 1-3 year warranties, aftermarket parts have 1-2 years. Our lifetime labor warranty is transferable if you sell the vehicle - the new owner can use our service too. We've been able to offer this since 2008 because our repair quality is high and failure rates are very low (under 2%)."
    },
    {
      question: "Will servicing my car at Mile Hybrid void my factory warranty?",
      answer: "No, absolutely not. Under the Magnuson-Moss Warranty Act (federal law passed in 1975), manufacturers cannot void your warranty just because you used an independent shop. The dealership must prove that our repair caused the failure - and we use OEM parts and follow factory procedures, so that's not possible. We can perform all scheduled maintenance (30k, 60k, 90k services) using OEM fluids and parts, which keeps your warranty 100% valid. We've been doing this since 2008 and have never had a customer lose their warranty. In fact, we service many vehicles still under the original 3-year/36k mile warranty."
    },
    {
      question: "How soon can you see my car? Do you have same-day service?",
      answer: "For routine maintenance (oil changes, brake service, inspections), we can usually get you in within 3-5 business days, sometimes sooner. For urgent issues involving warning lights, the hybrid system, or drivability problems, we prioritize same-day or next-day appointments - call us at (720) 445-4357 and we'll assess your situation. About 40% of our diagnostics are completed same-day. If we're booked, we'll give you a realistic timeline and offer to put you on a cancellation list. For hybrid battery replacements and major repairs that require parts ordering, expect 2-5 business days from diagnosis to completion."
    },
    {
      question: "What's the difference between your shop and a general mechanic who says they work on hybrids?",
      answer: "The main differences are specialization, equipment, and experience. (1) Equipment: We own Toyota Techstream, a professional dealer-level diagnostic system. Most general shops use generic code readers that can't diagnose hybrid-specific issues. (2) Training: Our technicians have hybrid-specific training and HV safety certification - working on 300+ volt systems requires specialized knowledge. (3) Experience: We've done thousands of hybrid repairs since 2008. A general mechanic might see 5-10 hybrid issues per year - we see 5-10 per week. (4) Parts sourcing: We have relationships with hybrid battery suppliers and know which reconditioned batteries are reliable vs. junk. This specialization means we diagnose problems faster and get repairs right the first time."
    },
    {
      question: "Can you fix the 'death rattle' sound on Gen 3 Prius (2010-2015)?",
      answer: "Yes. The 'death rattle' is caused by a defective piston ring design in the 2010-2015 Prius that allows oil to burn and carbon to build up, eventually damaging the head gasket. Toyota issued a warranty extension to 150k miles for this issue, but many cars are now beyond that. We offer two solutions: (1) EGR cleaning + head gasket replacement works if the engine block isn't damaged yet - this buys you 30-50k more miles. (2) Complete engine replacement with a low-mileage Japanese import engine (40k-60k miles) is the permanent fix - essentially a new engine with Toyota reliability. We've done over 150 of these engine replacements since 2015 and the failure rate is under 1%. Contact us for a quote on either option."
    },
    {
      question: "What should I do if my Prius red triangle warning light comes on?",
      answer: "Don't panic, but don't ignore it. The red triangle (Master Warning Light) indicates a hybrid system issue that needs diagnosis. Here's what to do: (1) Immediate: Safely pull over and turn off the car. Wait 5 minutes, then restart - sometimes it's a temporary glitch. (2) If it stays on: You can usually still drive the car, but avoid long trips. The car may have reduced power or poor fuel economy. (3) Within 48 hours: Get it diagnosed - continuing to drive with the light on can cause additional damage. For example, a small fix like a failing 12V battery can damage the hybrid battery if you keep driving. (4) Call us: We can often give you guidance over the phone about whether it's safe to drive. Our diagnostic will identify the exact cause so we can get you back on the road quickly."
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900 font-sans text-blue-100 selection:bg-green-500/30">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Sticky Top Banner */}
      <div className="bg-purple-600 text-white py-2 text-center text-sm font-medium sticky top-0 z-50">
        ⚡ DENVER'S OLDEST HYBRID SHOP - SERVING YOU SINCE 2008 • Same-Day Emergency Service: <a href="tel:7204454357" className="underline font-bold">(720) 445-4357</a>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-900/95 backdrop-blur-md sticky top-8 z-40 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={navigateToHome}>
                <img src="/logo.svg" alt="Mile Hybrid Automotive" className="h-20 w-auto" />
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {currentView === 'home' && (
                <>
                  <button onClick={() => scrollToSection('services')} className="text-blue-300 hover:text-white text-sm font-medium transition-colors">Services</button>
                  <button onClick={() => scrollToSection('why-us')} className="text-blue-300 hover:text-white text-sm font-medium transition-colors">Why Us</button>
                  <button onClick={() => scrollToSection('pricing')} className="text-blue-300 hover:text-white text-sm font-medium transition-colors">Pricing</button>
                  <button onClick={() => scrollToSection('faq')} className="text-blue-300 hover:text-white text-sm font-medium transition-colors">FAQ</button>
                </>
              )}
              <div className="flex items-center gap-4 pl-4 border-l border-blue-800">
                <div className="text-right hidden lg:block">
                  <div className="text-xs text-blue-400">Mon-Fri 7:30-5:30</div>
                  <a href="tel:7204454357" className="text-sm font-bold text-white hover:text-green-400 transition-colors block">
                    (720) 445-4357
                  </a>
                </div>
                {currentView !== 'booking' && (
                  <Button variant="primary" className="py-2 px-4 text-sm font-bold" onClick={navigateToBooking}>
                    BOOK NOW
                  </Button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <a href="tel:7204454357" className="inline-flex items-center px-5 py-3 bg-purple-600 text-white text-base font-bold rounded-lg">
                <Phone className="h-4 w-4 mr-1" />
                CALL/TEXT
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-800"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-900 border-t border-blue-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {currentView === 'home' ? (
                <>
                  <button onClick={() => scrollToSection('services')} className="block px-3 py-3 text-lg font-medium text-blue-300 hover:text-white w-full text-left">Services</button>
                  <button onClick={() => scrollToSection('why-us')} className="block px-3 py-3 text-lg font-medium text-blue-300 hover:text-white w-full text-left">Why Us</button>
                  <button onClick={() => scrollToSection('pricing')} className="block px-3 py-3 text-lg font-medium text-blue-300 hover:text-white w-full text-left">Pricing</button>
                  <button onClick={() => scrollToSection('faq')} className="block px-3 py-3 text-lg font-medium text-blue-300 hover:text-white w-full text-left">FAQ</button>
                  <div className="pt-4">
                    <Button className="w-full" onClick={navigateToBooking}>BOOK APPOINTMENT</Button>
                  </div>
                </>
              ) : (
                <button onClick={navigateToHome} className="block px-3 py-3 text-lg font-medium text-blue-300 hover:text-white w-full text-left">← Back to Home</button>
              )}
            </div>
          </div>
        )}
      </nav>

      {currentView === 'booking' && (
        <BookingPage onBack={navigateToHome} />
      )}

      {currentView === 'home' && (
        <>
          {/* Hero Section - ENHANCED */}
          <main>
            <header className="relative bg-gradient-to-b from-blue-900 via-blue-900 to-blue-800 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:gap-12">
                  <div className="lg:w-1/2 mb-10 lg:mb-0">
                    
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <img src="/carfax-badge.webp" alt="Carfax 2025 Top-Rated Service Center" className="h-36 w-auto" />
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm font-bold uppercase tracking-wide">
                        <Award className="h-5 w-5" />
                        Denver's Oldest Hybrid Shop
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wide">
                        <Star className="h-4 w-4 fill-current" />
                        4.9★ Rating
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wide">
                        <Clock className="h-4 w-4" />
                        Since 2008
                      </span>
                    </div>

                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 leading-tight">
                      Denver's Longest-Running <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-400">
                        Hybrid & EV Specialists
                      </span>
                    </h1>
                    
                    <p className="mt-4 text-xl text-blue-300 sm:max-w-xl font-medium leading-relaxed">
                      <strong className="text-green-400">Pioneering hybrid repair since 2008.</strong> Save 30-50% vs dealership pricing on Toyota, Lexus, Tesla & all hybrid/EV service. Same quality, better price, faster service.
                    </p>
                    
                    {/* Key Benefits */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <span className="text-blue-300">Lifetime Warranty on All Labor</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <span className="text-blue-300">Loaner Vehicles Available for Qualifying Repairs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <span className="text-blue-300">Colorado's Most Experienced Hybrid Team</span>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="h-14 text-lg font-bold px-8 shadow-2xl hover:scale-105 transition-transform" 
                        onClick={navigateToBooking}
                      >
                        SCHEDULE ONLINE →
                      </Button>
                      <Button 
                        variant="urgent"
                        className="h-14 text-lg font-bold px-6" 
                        href="tel:7204454357"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        CALL OR TEXT (720) 445-4357
                      </Button>
                    </div>
                    
                    <p className="mt-4 text-sm text-blue-500 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Mon-Fri: 7:30 AM - 5:30 PM • Same-day service often available
                    </p>
                  </div>
                  
                  <div className="lg:w-1/2">
                     <div className="relative rounded-2xl bg-blue-800 border border-blue-700 p-2 shadow-2xl">
                       <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-600 rounded-2xl blur opacity-20"></div>
                       <div className="relative rounded-xl overflow-hidden aspect-video">
                          <img
                            src="/hero-shop.jpg"
                            alt="Mile Hybrid Automotive technicians working on a hybrid battery replacement"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                             <div className="flex items-center justify-between">
                               <div>
                                 <h3 className="text-white font-bold text-xl">17+ Years of Excellence</h3>
                                 <p className="text-green-300 text-sm">Denver's oldest hybrid shop</p>
                               </div>
                               <div className="text-right">
                                 <div className="text-3xl font-bold text-white">25k+</div>
                                 <div className="text-xs text-blue-300">Cars Serviced</div>
                               </div>
                             </div>
                          </div>
                       </div>
                     </div>
                     
                     {/* Social Proof Banner */}
                     <div className="mt-4 flex items-center justify-center gap-6 bg-blue-800/50 border border-blue-700 rounded-lg p-4">
                       <img src="/carfax-badge.webp" alt="Carfax 2025 Top-Rated Service Center" className="h-16 w-auto" />
                       <div className="h-8 w-px bg-blue-700"></div>
                       <div className="text-center">
                         <div className="text-yellow-400 flex justify-center gap-1 mb-1">
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                         </div>
                         <div className="text-xs text-blue-400">220+ Google Reviews</div>
                       </div>
                       <div className="h-8 w-px bg-blue-700"></div>
                       <div className="text-center">
                         <div className="text-2xl font-bold text-green-400">4.9</div>
                         <div className="text-xs text-blue-400">Average Rating</div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Transparent Pricing Section */}
            <section id="pricing" className="py-24 bg-blue-800 border-y border-blue-700">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wide mb-6">
                    <DollarSign className="h-4 w-4" />
                    Transparent Pricing
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Save 30-50% vs Dealer Pricing</h2>
                  <p className="text-blue-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                    Same OEM parts, same quality standards, significantly lower prices. No corporate overhead means real savings for you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-blue-900 border border-blue-700 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-extrabold text-green-400 mb-2">30-50%</div>
                    <div className="text-blue-300 text-sm">Less Than Dealer Pricing</div>
                  </div>
                  <div className="bg-blue-900 border border-blue-700 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-extrabold text-green-400 mb-2">100%</div>
                    <div className="text-blue-300 text-sm">Upfront Written Estimates</div>
                  </div>
                  <div className="bg-blue-900 border border-blue-700 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-extrabold text-green-400 mb-2">$0</div>
                    <div className="text-blue-300 text-sm">Surprise Charges, Ever</div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-blue-400 mb-6">Get a detailed written estimate before any work begins.</p>
                  <Button onClick={navigateToBooking} className="text-lg px-10 py-4 font-bold">Get Your Free Quote</Button>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section - ENHANCED */}
            <section id="why-us" className="py-20 bg-blue-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Why Denver Has Trusted Us Since 2008</h2>
                  <p className="text-blue-400 max-w-2xl mx-auto">
                    As Denver's oldest and longest-running hybrid specialist, we've built our reputation on expertise, honesty, and exceptional service. When hybrids were new, we were already the experts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {whyChooseUs.map((item, idx) => (
                    <FeatureCard key={idx} {...item} />
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <div className="bg-gradient-to-r from-green-900/30 to-blue-800 border border-green-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-3">Ready to Save Money & Get Expert Service?</h3>
                    <p className="text-blue-300 mb-6">
                      Join 25,000+ Denver drivers who've trusted us since 2008. As Denver's oldest hybrid shop, we've been perfecting hybrid repair longer than anyone else. Schedule online in 60 seconds or call now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button onClick={navigateToBooking} className="font-bold">
                        SCHEDULE ONLINE →
                      </Button>
                      <Button variant="outline" href="tel:7204454357" className="font-bold">
                        <Phone className="mr-2 h-5 w-5" />
                        (720) 445-4357
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Expertise & Credentials Section - NEW FOR AI SEARCH */}
            <section className="py-20 bg-blue-800 border-y border-blue-700">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Our Qualifications & Equipment</h2>
                  <p className="text-blue-400">Why Mile Hybrid is trusted with Colorado's most advanced vehicles</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-blue-900 border border-blue-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                      <ShieldCheck className="h-6 w-6" /> Certifications & Training
                    </h3>
                    <ul className="space-y-3 text-blue-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>ASE Certified</strong> - All technicians hold Automotive Service Excellence certifications in multiple specialties including Engine Repair, Electrical Systems, and Hybrid/EV (L3)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>High-Voltage Safety Certified</strong> - Required certification for working on 300+ volt hybrid and EV systems. All techs recertify annually.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Toyota Factory Training</strong> - Our lead technician completed Toyota's official Techstream diagnostic training in 2009 and updates training every 2 years</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Tesla EV Specialist</strong> - Completed third-party Tesla repair training covering Model S/3/X/Y systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>17+ Years Hands-On Experience</strong> - Our senior technicians have been diagnosing hybrid systems since the Gen 2 Prius (2004-2009)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-900 border border-blue-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                      <Wrench className="h-6 w-6" /> Professional Equipment & Software
                    </h3>
                    <ul className="space-y-3 text-blue-300">
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Toyota Techstream</strong> - Official dealer-level diagnostic software ($5,000+ annual subscription). Reads all control modules, performs calibrations, updates software</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Midtronics Battery Tester</strong> - Professional-grade tool for testing hybrid battery health at the individual cell level</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Toyota TIS Subscription</strong> - Access to complete Toyota Technical Information System with wiring diagrams, repair procedures, TSBs (Technical Service Bulletins)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>High-Voltage Testing Equipment</strong> - Specialized tools for safely diagnosing 300V+ hybrid and EV electrical systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>OEM Parts Network</strong> - Direct relationships with Toyota, Lexus, and certified hybrid battery suppliers ensuring fast parts availability</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-900/30 to-blue-900 border border-green-700/50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">25,000+</div>
                    <div className="text-blue-300 font-medium mb-1">Hybrid Vehicles Serviced</div>
                    <div className="text-blue-500 text-sm">Since 2008</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-900/30 to-blue-900 border border-green-700/50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">2,400+</div>
                    <div className="text-blue-300 font-medium mb-1">Hybrid Batteries Replaced</div>
                    <div className="text-blue-500 text-sm">More than any shop in Colorado</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-900/30 to-blue-900 border border-green-700/50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">98%+</div>
                    <div className="text-blue-300 font-medium mb-1">First-Time Fix Rate</div>
                    <div className="text-blue-500 text-sm">Diagnosed correctly the first time</div>
                  </div>
                </div>

                <div className="mt-10 bg-blue-900 border border-blue-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Industry Affiliations & Compliance</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-blue-300 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Member of Automotive Service Association (ASA) since 2010</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Colorado Emissions Testing & Repair facility (certified station)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>EPA-certified for proper HV battery disposal and recycling</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Licensed and insured in the State of Colorado (#12345)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Work Section - NEW FOR AI SEARCH */}
            <section id="how-we-work" className="py-20 bg-blue-900 border-y border-blue-700">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Our Diagnostic & Repair Process</h2>
                  <p className="text-blue-400">Transparent, thorough, and designed to save you money</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-800 border-l-4 border-green-500 rounded-r-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Free Initial Consultation (15 minutes)</h3>
                        <p className="text-blue-300 mb-2">When you call or book online, we discuss your symptoms over the phone. About 30% of the time, we can identify the issue and give you a ballpark estimate before you even come in. This saves you the diagnostic fee if it's something simple.</p>
                        <p className="text-blue-400 text-sm"><strong>Average time:</strong> 15 minutes • <strong>Cost:</strong> FREE</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-800 border-l-4 border-green-500 rounded-r-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Comprehensive Diagnostic</h3>
                        <p className="text-blue-300 mb-2">For hybrid systems, we use Toyota Techstream (dealer-level software) to read all control modules, not just the engine. We test hybrid battery cell voltages individually, check inverter coolant flow, scan for isolation faults, and road test with live data monitoring. You get a detailed written report with photos.</p>
                        <p className="text-blue-400 text-sm"><strong>Average time:</strong> 1.5-2 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-800 border-l-4 border-green-500 rounded-r-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Written Estimate With Options</h3>
                        <p className="text-blue-300 mb-2">We provide a detailed written estimate explaining exactly what's wrong and why. For expensive repairs like hybrid batteries, we always present multiple options: new OEM, certified reconditioned, or individual module repair. You decide what makes sense for your budget and how long you plan to keep the car.</p>
                        <p className="text-blue-400 text-sm"><strong>Typical options provided:</strong> 2-3 repair paths with pros/cons of each</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-800 border-l-4 border-green-500 rounded-r-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Repair With Lifetime Labor Warranty</h3>
                        <p className="text-blue-300 mb-2">Once you approve the estimate, we order OEM or OE-quality parts (typically arrive next day) and schedule your repair. All work is performed by ASE-certified technicians with hybrid-specific training. We road test every vehicle after repairs and provide a final inspection report. Every repair includes our lifetime labor warranty - if our workmanship fails, we fix it free forever.</p>
                        <p className="text-blue-400 text-sm"><strong>Typical repair time:</strong> Same day to 2 days depending on parts • <strong>Warranty:</strong> Lifetime on labor, 1-3 years on parts</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 bg-green-900/20 border border-green-500/30 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Why This Process Works</h3>
                  <p className="text-blue-300 text-sm max-w-2xl mx-auto">
                    Most shops just clear the code and hope it doesn't come back. We invest time in proper diagnosis because it's actually cheaper for you - fixing the right problem the first time saves you from repeat visits and unnecessary parts. Our diagnostic fee is lower than dealers, so you get better service for less.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Section - ENHANCED */}
            <section id="services" className="py-20 bg-blue-800 border-y border-blue-700">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Complete Service Menu</h2>
                  <p className="text-blue-400 max-w-2xl mx-auto">
                    From routine oil changes to complex hybrid battery replacements, we do it all with factory-level precision at independent shop pricing.
                  </p>
                </div>

                <div className="space-y-8">
                  {detailedServiceCategories.map((cat, idx) => (
                    <div key={idx} className="bg-blue-900 border border-blue-700 rounded-2xl overflow-hidden">
                      <div className="p-6 border-b border-blue-700 flex items-center justify-between bg-blue-800">
                        <div className="flex items-center gap-3">
                          <cat.icon className="h-6 w-6 text-green-400" />
                          <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                        </div>
                        {cat.popular && (
                          <span className="px-3 py-1 rounded-full bg-green-900/50 text-green-300 text-xs font-bold border border-green-700">
                            MOST POPULAR
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-blue-700">
                        {cat.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="bg-blue-900 p-6 hover:bg-blue-800 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-lg font-bold text-white">{item.name}</h4>
                              {item.pricing && (
                                <span className="text-green-400 font-bold text-sm whitespace-nowrap ml-2">
                                  {item.pricing}
                                </span>
                              )}
                            </div>
                            <p className="text-blue-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                            <button 
                              onClick={navigateToBooking}
                              className="text-sm font-medium text-green-500 hover:text-green-400 flex items-center group"
                            >
                              Get Quote <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Don't See Your Service Listed?</h3>
                  <p className="text-blue-300 mb-6">
                    We handle almost all automotive repairs for Toyota, Lexus, Tesla, and most other makes. Just ask!
                  </p>
                  <Button onClick={navigateToBooking}>Request Custom Quote</Button>
                </div>
              </div>
            </section>

            {/* Common Search Queries Section - FOR AI SEARCH OPTIMIZATION */}
            <section className="py-16 bg-blue-900 border-y border-blue-700">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Quick Answers: What Denver Drivers Ask</h2>
                  <p className="text-blue-400">Common questions about hybrid and EV service</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">How much is a Prius battery?</h3>
                    <p className="text-blue-300 text-sm">We offer new OEM and certified reconditioned options. Save 30-50% vs dealer pricing on the same battery. Call us for a free quote.</p>
                  </div>

                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">P0A80 code - bad battery?</h3>
                    <p className="text-blue-300 text-sm">Not always! 60% of P0A80 codes we see are NOT the battery - could be a 12V battery, cooling fan, or connections. Proper diagnosis first saves you from unnecessary repairs.</p>
                  </div>

                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">How long do hybrid batteries last?</h3>
                    <p className="text-blue-300 text-sm">Toyota/Lexus: 8-10 years or 150k-200k miles typically. With proper maintenance (keep battery cooling system clean), some reach 300k+ miles.</p>
                  </div>

                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Tesla squeaking noise?</h3>
                    <p className="text-blue-300 text-sm">Model 3/Y control arm issue. Common problem - worn bushings cause squeaking when turning. We fix it for significantly less than Tesla Service Center.</p>
                  </div>

                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Can I drive with red triangle?</h3>
                    <p className="text-blue-300 text-sm">Usually yes, but get it checked within 48 hours. Continuing to drive risks turning a simple 12V battery problem into a much more expensive hybrid battery failure.</p>
                  </div>

                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Hybrid repair near me Denver?</h3>
                    <p className="text-blue-300 text-sm">Mile Hybrid at 5142 E 39th Ave (near I-70). Denver's oldest hybrid shop since 2008. ASE certified, lifetime warranty, loaner cars available.</p>
                  </div>

                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Hybrid oil change different?</h3>
                    <p className="text-blue-300 text-sm">Yes - we also inspect hybrid-specific systems: battery cooling fans, inverter coolant, HV isolation. Takes 45 min vs 20 min for a regular car. Call for current pricing.</p>
                  </div>

                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Gen 3 Prius head gasket?</h3>
                    <p className="text-blue-300 text-sm">The "death rattle" - defective piston rings. Options: head gasket replacement or complete engine swap. Engine swap is the permanent fix. Contact us for a quote.</p>
                  </div>

                  <div className="bg-blue-800 border border-blue-700 rounded-lg p-5 hover:border-green-500/50 transition-colors">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Do I need Toyota dealership?</h3>
                    <p className="text-blue-300 text-sm">No - federal law (Magnuson-Moss Act) protects your warranty. We use same OEM parts and Techstream software as dealer. Save 30-50%.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Section - NEW FOR AI SEARCH */}
            <section className="py-20 bg-blue-900 border-b border-blue-700">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Common Questions: What's The Difference?</h2>
                  <p className="text-blue-400">We answer the questions most hybrid owners ask</p>
                </div>

                <div className="space-y-8">
                  {/* Comparison 1 */}
                  <div className="bg-blue-800 border border-blue-700 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-green-900/30 to-blue-800 p-6 border-b border-blue-700">
                      <h3 className="text-2xl font-bold text-white">OEM vs Reconditioned Hybrid Battery: Which Should I Choose?</h3>
                    </div>
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" /> New OEM Battery
                          </h4>
                          <ul className="space-y-2 text-blue-300">
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span><strong>Lifespan:</strong> 8-10 years or 150,000+ miles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span><strong>Warranty:</strong> 3 years / 36,000 miles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span><strong>Best for:</strong> Vehicles under 150k miles that you plan to keep 5+ years</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span><strong>Performance:</strong> Factory-new capacity, maximum fuel economy</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                            <DollarSign className="h-5 w-5" /> Reconditioned Battery
                          </h4>
                          <ul className="space-y-2 text-blue-300">
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span><strong>Lifespan:</strong> 3-5 years or 50,000-80,000 miles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span><strong>Warranty:</strong> 1 year / 12,000 miles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span><strong>Best for:</strong> High-mileage vehicles (200k+) or if selling within 2-3 years</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              <span><strong>Performance:</strong> 80-90% of new battery capacity, good MPG restoration</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-blue-900 rounded-lg border border-blue-700">
                        <p className="text-blue-300 text-sm">
                          <strong className="text-white">Our recommendation:</strong> For most customers with under 200,000 miles, the new OEM battery is the better value because the longer lifespan means a lower cost per year of ownership. But if your car has 250k miles or you're selling soon, reconditioned makes more financial sense. Call us for current pricing on both options.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comparison 2 */}
                  <div className="bg-blue-800 border border-blue-700 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-green-900/30 to-blue-800 p-6 border-b border-blue-700">
                      <h3 className="text-2xl font-bold text-white">Dealership vs Mile Hybrid: What's Actually Different?</h3>
                    </div>
                    <div className="p-8">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b border-blue-700">
                              <th className="pb-4 text-blue-300 font-medium">Factor</th>
                              <th className="pb-4 text-blue-300 font-medium">Toyota Dealership</th>
                              <th className="pb-4 text-green-400 font-bold">Mile Hybrid Automotive</th>
                            </tr>
                          </thead>
                          <tbody className="text-blue-300">
                            <tr className="border-b border-blue-700/50">
                              <td className="py-4 font-medium">Diagnostic Software</td>
                              <td className="py-4">Toyota Techstream (OEM)</td>
                              <td className="py-4 text-green-400">Toyota Techstream (same OEM software)</td>
                            </tr>
                            <tr className="border-b border-blue-700/50">
                              <td className="py-4 font-medium">Technician Training</td>
                              <td className="py-4">Factory-trained</td>
                              <td className="py-4 text-green-400">Factory-trained + ASE Certified + 17 years hybrid focus</td>
                            </tr>
                            <tr className="border-b border-blue-700/50">
                              <td className="py-4 font-medium">Parts Used</td>
                              <td className="py-4">100% OEM Toyota/Lexus</td>
                              <td className="py-4 text-green-400">OEM preferred, OE-quality alternatives available (you choose)</td>
                            </tr>
                            <tr className="border-b border-blue-700/50">
                              <td className="py-4 font-medium">Hybrid Battery Cost</td>
                              <td className="py-4">Full dealer markup</td>
                              <td className="py-4 text-green-400 font-bold">Save 30-50% vs dealer</td>
                            </tr>
                            <tr className="border-b border-blue-700/50">
                              <td className="py-4 font-medium">Diagnostic Fee</td>
                              <td className="py-4">Higher fee, never waived</td>
                              <td className="py-4 text-green-400 font-bold">Lower fee, competitive pricing</td>
                            </tr>
                            <tr className="border-b border-blue-700/50">
                              <td className="py-4 font-medium">Wait Time</td>
                              <td className="py-4">1-2 weeks for appointment</td>
                              <td className="py-4 text-green-400">3-5 days (often same-day for urgent)</td>
                            </tr>
                            <tr className="border-b border-blue-700/50">
                              <td className="py-4 font-medium">Loaner Vehicle</td>
                              <td className="py-4">Rental fee charged</td>
                              <td className="py-4 text-green-400 font-bold">Available for qualifying repairs</td>
                            </tr>
                            <tr className="border-b border-blue-700/50">
                              <td className="py-4 font-medium">Labor Warranty</td>
                              <td className="py-4">12 months / 12,000 miles</td>
                              <td className="py-4 text-green-400 font-bold">LIFETIME (as long as you own the car)</td>
                            </tr>
                            <tr>
                              <td className="py-4 font-medium">Who You Talk To</td>
                              <td className="py-4">Service advisor (not a technician)</td>
                              <td className="py-4 text-green-400">Actual technician who worked on your car</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-6 p-4 bg-blue-900 rounded-lg border border-blue-700">
                        <p className="text-blue-300 text-sm">
                          <strong className="text-white">The bottom line:</strong> Dealers are excellent for warranty work and recalls. But for out-of-warranty hybrid repairs, Mile Hybrid offers the same technical expertise and quality, with significantly better pricing, faster service, and more personal attention. We're both using the same diagnostic tools and following the same repair procedures.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comparison 3 */}
                  <div className="bg-blue-800 border border-blue-700 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-green-900/30 to-blue-800 p-6 border-b border-blue-700">
                      <h3 className="text-2xl font-bold text-white">P0A80 Code: What Does It Actually Mean?</h3>
                    </div>
                    <div className="p-8">
                      <p className="text-blue-300 mb-4">
                        P0A80 is the most common hybrid system code - it means "Replace Hybrid Battery Pack." But that's misleading because the code appears for many different problems:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-900 rounded-lg p-5 border border-blue-700">
                          <h4 className="font-bold text-white mb-3">Causes of P0A80 Code:</h4>
                          <ul className="space-y-2 text-blue-300 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">1.</span>
                              <span><strong>Failing hybrid battery</strong> (40% of cases) - Actual battery failure, requires replacement</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">2.</span>
                              <span><strong>Dead 12V auxiliary battery</strong> (25% of cases) - simple, affordable fix</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">3.</span>
                              <span><strong>Faulty battery cooling fan</strong> (15% of cases) - moderate repair</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">4.</span>
                              <span><strong>Corroded battery connections</strong> (10% of cases) - quick cleaning service</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">5.</span>
                              <span><strong>Single bad cell in battery</strong> (10% of cases) - individual module replacement</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-blue-900 rounded-lg p-5 border border-blue-700">
                          <h4 className="font-bold text-white mb-3">Our Diagnostic Process:</h4>
                          <ol className="space-y-2 text-blue-300 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">1.</span>
                              <span>Test 12V battery first (often the culprit)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">2.</span>
                              <span>Check all 28 individual hybrid battery cells with voltage testing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">3.</span>
                              <span>Inspect battery cooling system and fans</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">4.</span>
                              <span>Load test battery under real driving conditions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">5.</span>
                              <span>Present you with options based on what we actually find</span>
                            </li>
                          </ol>
                          <div className="mt-4 p-3 bg-green-900/20 rounded border border-green-700">
                            <p className="text-sm text-green-300">
                              <strong>Result:</strong> About 60% of P0A80 codes we see don't actually need a full battery replacement. Proper diagnosis saves customers $2,000-3,000.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews Section - ENHANCED */}
            <section className="py-20 bg-blue-900 border-b border-blue-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                    </span>
                    <span className="text-white font-bold text-lg">4.9 out of 5 stars</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-white mb-2">What Our Customers Say</h2>
                  <p className="text-blue-400">Real reviews from real Denver drivers</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-blue-800 p-8 rounded-2xl border border-blue-700 relative">
                    <div className="absolute -top-4 left-8 bg-green-600 p-2 rounded-lg">
                      <Star className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div className="flex gap-1 text-yellow-400 mb-4 pt-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
                    </div>
                    <p className="text-blue-300 italic mb-6 leading-relaxed">
                      "Eric and the team at MileHybrid are the best! They keep me and my little blue Prius on the road (at <strong>311,000 miles</strong>). They are professional and I trust their guidance... I never feel like I am being 'sold', they do what is needed at a reasonable price."
                    </p>
                    <div className="flex items-center justify-between border-t border-blue-700 pt-4">
                      <span className="font-bold text-white">Verified Customer</span>
                      <span className="text-xs text-blue-500 uppercase tracking-wide">Google Review</span>
                    </div>
                  </div>

                  <div className="bg-blue-800 p-8 rounded-2xl border border-blue-700 relative">
                    <div className="absolute -top-4 left-8 bg-green-600 p-2 rounded-lg">
                      <Star className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div className="flex gap-1 text-yellow-400 mb-4 pt-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
                    </div>
                    <p className="text-blue-300 italic mb-6 leading-relaxed">
                      "Mile Hybrid <strong>saved me over $1,000</strong> on what the dealer quoted for a hybrid battery. Same OEM part, but Eric explained all my options clearly. They even had a loaner car ready for me. This is how car service should be."
                    </p>
                    <div className="flex items-center justify-between border-t border-blue-700 pt-4">
                      <span className="font-bold text-white">Prius Owner</span>
                      <span className="text-xs text-blue-500 uppercase tracking-wide">Google Review</span>
                    </div>
                  </div>

                  <div className="bg-blue-800 p-8 rounded-2xl border border-blue-700 relative">
                    <div className="absolute -top-4 left-8 bg-green-600 p-2 rounded-lg">
                      <Star className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div className="flex gap-1 text-yellow-400 mb-4 pt-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
                    </div>
                    <p className="text-blue-300 italic mb-6 leading-relaxed">
                      "Honest and friendly. The mechanic told me that while they could verify the codes... he was sure they would not bring my trip to a screeching halt. <strong>Peace of mind</strong> that Mile Hybrid team is looking out for me, not trying to upsell unnecessary repairs."
                    </p>
                    <div className="flex items-center justify-between border-t border-blue-700 pt-4">
                      <span className="font-bold text-white">Kia Niro Owner</span>
                      <span className="text-xs text-blue-500 uppercase tracking-wide">Google Review</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-center">
                  <Button 
                    variant="outline"
                    href="https://g.page/r/CYAAvRr1oV2mEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Star className="w-4 h-4" /> Leave Us a Review
                  </Button>
                </div>
              </div>
            </section>

            {/* FAQ Section - ENHANCED */}
            <section id="faq" className="py-20 bg-blue-800 border-t border-blue-700" itemScope itemType="https://schema.org/FAQPage">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Frequently Asked Questions</h2>
                  <p className="text-blue-400">Everything you need to know about our service</p>
                </div>

                <div className="space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaqIndex === index}
                      onClick={() => setOpenFaqIndex(index === openFaqIndex ? -1 : index)}
                    />
                  ))}
                </div>

                <div className="mt-12 text-center bg-blue-900 border border-blue-700 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-white mb-2">Still Have Questions?</h3>
                  <p className="text-blue-400 mb-6">Give us a call - we're happy to answer any questions about your specific vehicle or situation.</p>
                  <Button variant="outline" href="tel:7204454357">
                    <Phone className="mr-2 h-4 w-4" /> Call (720) 445-4357
                  </Button>
                </div>
              </div>
            </section>
            
            {/* Location Section - ENHANCED */}
            <section className="py-20 bg-blue-900 border-t border-blue-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-8">Visit Our Shop in Denver</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-green-500 mt-1 mr-4 shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">Address</h3>
                          <p className="text-blue-400">
                            5142 E 39th Ave<br/>
                            Denver, CO 80207
                          </p>
                          <a 
                            href="https://maps.google.com/?q=Mile+Hybrid+Automotive+5142+E+39th+Ave+Denver+CO" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 text-sm mt-2 inline-flex items-center group"
                          >
                            Get Directions <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </a>
                          <p className="text-blue-500 text-sm mt-2">
                            Convenient location near I-70. Serving Park Hill, Stapleton, Lowry, Aurora, and all of Denver Metro.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-6 w-6 text-green-500 mt-1 mr-4 shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">Hours</h3>
                          <p className="text-blue-400">Monday - Friday: 7:30 AM - 5:30 PM</p>
                          <p className="text-blue-400">Saturday - Sunday: Closed</p>
                          <p className="text-green-400 text-sm mt-2">
                            ⚡ Emergency/urgent service: Call for availability
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-green-500 mt-1 mr-4 shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">Contact</h3>
                          <p className="text-blue-400">
                            Phone: <a href="tel:7204454357" className="hover:text-green-400 font-bold">(720) 445-4357</a>
                          </p>
                          <p className="text-blue-400">
                            Email: info@milehybridauto.com
                          </p>
                        </div>
                      </div>

                      <div className="pt-6">
                        <Button onClick={navigateToBooking} className="w-full sm:w-auto font-bold">
                          SCHEDULE APPOINTMENT →
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-96 w-full rounded-2xl overflow-hidden border-2 border-blue-700 shadow-2xl">
                    <iframe 
                      title="Mile Hybrid Automotive Location"
                      width="100%" 
                      height="100%" 
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5142%20E%2039th%20Ave%2C%20Denver%2C%20CO%2080207+(Mile%20Hybrid%20Automotive)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                      frameBorder="0" 
                      scrolling="no"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA Section - ENHANCED */}
            <section className="relative py-24 overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=2000" 
                  alt="Auto repair" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/95"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-blue-900/40"></div>
              </div>

              <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 border border-red-500/40 text-red-400 text-sm font-bold uppercase tracking-wide mb-6">
                  <AlertTriangle className="h-5 w-5" />
                  Don't Wait Until It's Too Late
                </div>
                
                <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                  Warning Light On? Strange Noise? <br/>
                  Get Expert Diagnosis Today.
                </h2>
                
                <p className="text-xl text-blue-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Ignoring hybrid system warnings can lead to expensive failures. Our $139 diagnostic finds the real problem so you can make informed decisions.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                   <Button 
                     className="h-16 text-xl font-bold px-10 shadow-2xl"
                     onClick={navigateToBooking}
                   >
                      SCHEDULE ONLINE NOW →
                   </Button>
                   <Button 
                     variant="urgent"
                     className="h-16 text-xl font-bold px-10"
                     href="tel:7204454357"
                   >
                      <Phone className="mr-2 h-6 w-6" />
                      CALL (720) 445-4357
                   </Button>
                </div>
                
                <p className="text-blue-400 text-sm">
                  ✓ Confirmed within 2 hours • ✓ Same-day service available • ✓ Free loaner cars
                </p>
              </div>
            </section>
          </main>
        </>
      )}

      {/* Footer - ENHANCED */}
      <footer className="bg-blue-950 text-blue-400 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Car className="h-6 w-6" />
                <span className="text-xl font-bold">MILE HYBRID Automotive</span>
              </div>
              <p className="text-blue-500 max-w-sm mb-6 leading-relaxed">
                <strong className="text-blue-400">Denver's oldest hybrid and EV specialist - pioneering since 2008.</strong> When the first Prius hybrids hit Colorado roads, we were already the experts. ASE certified technicians, lifetime labor warranty, and honest service you can count on.
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-bold text-sm mb-2">Service Areas</h4>
                <p className="text-xs text-blue-500 leading-relaxed">
                  Proudly serving Denver, Aurora, Stapleton, Park Hill, Lowry, Cherry Creek, Highlands Ranch, Lakewood, Centennial, and all of the Denver Metro area.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-green-400">Services</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-green-400">Pricing</button></li>
                <li><button onClick={() => scrollToSection('why-us')} className="hover:text-green-400">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-green-400">FAQ</button></li>
                <li><button onClick={navigateToBooking} className="hover:text-green-400">Schedule Appointment</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <address className="not-italic space-y-3 text-sm">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>5142 E 39th Ave<br/>Denver, CO 80207</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <a href="tel:7204454357" className="hover:text-green-400 font-bold">(720) 445-4357</a>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>Mon-Fri: 7:30 AM - 5:30 PM</span>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://maps.google.com/?q=Mile+Hybrid+Automotive+5142+E+39th+Ave+Denver+CO" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Directions
                  </a>
                </div>
              </address>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Mile Hybrid Automotive. All rights reserved.</p>
            <p className="mt-4 md:mt-0 text-blue-600">
              Built for hybrid and EV owners who demand expertise and value.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

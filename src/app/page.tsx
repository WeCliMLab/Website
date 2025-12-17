'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CloudRain, 
  Globe, 
  Cpu,
  Layers,
  ThermometerSun,
  TrendingUp,
  Calendar,
  Award,
  BookOpen,
  Newspaper,
  Mic,
  GraduationCap,
  X,
  Info,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- ANIMATED CHART COMPONENT ---
// A reusable component to show a dummy data trend line
const AnimatedTrendChart = () => {
  return (
    <div className="absolute top-1/3 left-0 w-full h-64 pointer-events-none opacity-30 mix-blend-screen">
       {/* Dummy Data SVG Line Chart */}
       <svg viewBox="0 0 1000 200" className="w-full h-full" preserveAspectRatio="none">
          {/* Grid Lines */}
          <line x1="0" y1="50" x2="1000" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="0" y1="100" x2="1000" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="0" y1="150" x2="1000" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          {/* Animated Trend Line (Path) */}
          <path 
            d="M0,180 Q100,160 200,170 T400,150 T600,100 T800,60 T1000,20" 
            fill="none" 
            stroke="url(#gradientLine)" 
            strokeWidth="3"
            className="animate-[draw_5s_ease-out_forwards]"
            strokeDasharray="1200"
            strokeDashoffset="1200"
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#34d399" /> {/* emerald-400 */}
              <stop offset="100%" stopColor="#f87171" /> {/* red-400 */}
            </linearGradient>
          </defs>
       </svg>
       
       {/* Tailwind Custom Animation for Drawing Line */}
       <style jsx>{`
         @keyframes draw {
           to { stroke-dashoffset: 0; }
         }
       `}</style>
    </div>
  );
};

export default function Home() {
  
  // --- STATE ---
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset slider when opening new modal
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedNews]);

  // Navigation Handlers
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedNews) return;
    setCurrentImageIndex((prev) => (prev === selectedNews.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedNews) return;
    setCurrentImageIndex((prev) => (prev === 0 ? selectedNews.images.length - 1 : prev - 1));
  };

  // --- DATA: LATEST NEWS ---
  const latestNews = [
    {
      id: 1,
      date: "Sep 2025",
      title: "Scientific Reports Editorial Board",
      desc: "Dr. Raju Attada joined the Scientific Reports Editorial board.",
      details: "This is a significant recognition of Dr. Attada's expertise in climate science. As an editorial board member, he will oversee the peer-review process for manuscripts related to atmospheric sciences and monsoon dynamics.",
      category: "Achievement",
      icon: <Award className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 2,
      date: "24 Aug 2025",
      title: "Featured in Chandigarh Bhaskar",
      desc: "Study on Himalayan Disasters by Dr. Rohtash & Dr. Raju Attada featured in the news.",
      details: "The widely circulated daily covered our recent findings on the increasing frequency of cloudbursts in the Western Himalayas. The article highlighted the need for denser observation networks in high-altitude regions.",
      category: "Media",
      icon: <Newspaper className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 3,
      date: "14 Aug 2025",
      title: "PhD Defense: Dr. Rohtash",
      desc: "Hearty congratulations to Dr. Rohtash on successfully defending his Ph.D.",
      details: "Dr. Rohtash successfully defended his thesis titled 'Precipitation Variability over the Western Himalayas'. His work provides crucial insights into the orographic controls on rainfall.",
      category: "Defense",
      icon: <GraduationCap className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 4,
      date: "24 Mar 2025",
      title: "PhD Defense: Dr. Nischal Sharma",
      desc: "Hearty congratulations to Dr. Nischal Sharma on successfully defending her Ph.D.",
      details: "Dr. Sharma's thesis focused on 'Winter Precipitation Extremes'. She utilized high-resolution WRF simulations to understand Western Disturbance interactions.",
      category: "Defense",
      icon: <GraduationCap className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 5,
      date: "28 Feb 2025",
      title: "India-UK Climate Action Summit",
      desc: "Ms. Ankita represented our lab as a panelist in 'Turning the Tide' session.",
      details: "Ankita spoke about the role of youth in climate advocacy and the importance of bridging the gap between scientific modelling and policy making.",
      category: "Event",
      icon: <Mic className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 6,
      date: "Dec 2024",
      title: "Paper in Weather Forecasting",
      desc: "Nischal's research paper published in the journal Weather Forecasting.",
      details: "The paper, titled 'Multi-Physics Ensemble Framework for Representing Western Himalayan Precipitation', evaluates various WRF physics schemes.",
      category: "Publication",
      icon: <BookOpen className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 7,
      date: "14-20 Oct 2024",
      title: "SURE-ALERT Training Programme",
      desc: "One week training on Rainfall-induced Landslide Early Warning Techniques.",
      details: "The SURE-ALERT workshop trained 30 participants from across India on using satellite data and hydrological models to predict landslide triggers.",
      category: "Workshop",
      icon: <Layers className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 8,
      date: "Oct 2024",
      title: "Paper in JGR Atmospheres",
      desc: "Rohtash's research paper published in Journal of Geophysical Research.",
      details: "This study provides a comprehensive climatology of precipitation extremes over the Himalayas using a newly developed high-resolution reanalysis dataset.",
      category: "Publication",
      icon: <BookOpen className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 9,
      date: "June 2024",
      title: "Best Poster Award",
      desc: "Athira K S received Best Poster Award at STIPMEX International workshop, IITM Pune.",
      details: "Athira presented her work on 'Synoptic drivers of Cold Waves' and was awarded the best poster among 150+ participants.",
      category: "Award",
      icon: <Award className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    },
    {
      id: 10,
      date: "Mar 2024",
      title: "Young Scientist Award",
      desc: "Nischal Sharma (PMRF) received Dr. S.K. Ghosh Memorial Young Scientist Award 2024.",
      details: "The award recognized her groundbreaking research on winter precipitation mechanisms. Presented by the Indian Meteorological Society, Kolkata Chapter.",
      category: "Award",
      icon: <Award className="h-4 w-4" />,
      images: ["/images/highlights/highlights.jpg", "/images/highlights/highlights.jpg"]
    }
  ];

  // --- DATA: RESEARCH AREAS ---
  const researchAreas = [
    {
      title: "Regional Climate & Extremes",
      icon: <Globe className="h-6 w-6" />,
      colorClass: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
      description: "Analyzing and predicting regional weather aspects over India using high-resolution regional climate models."
    },
    {
      title: "Cloud Dynamics & Mesoscale",
      icon: <CloudRain className="h-6 w-6" />,
      colorClass: "bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white",
      description: "Developing cloud-resolving modelling systems for mesoscale convective systems and future projections of local extremes."
    },
    {
      title: "Impacts & Mitigation",
      icon: <ThermometerSun className="h-6 w-6" />,
      colorClass: "bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white",
      description: "Providing high-resolution information for climate assessments to study impacts on human and natural systems."
    },
    {
      title: "AI/ML & Data Assimilation",
      icon: <Cpu className="h-6 w-6" />,
      colorClass: "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white",
      description: "Applying advanced data assimilation and AI/ML techniques to improve the simulations of regional weather extremes."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* ================= HERO SECTION (UPDATED) ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* 1. Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
            <Image 
                src="/images/homepage.gif" 
                alt="WCMG Lab Research" 
                fill 
                className="object-cover"
                priority
                quality={100}
            />
            {/* Dark Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
        </div>

        {/* 2. Animated Chart Overlay (Background) */}
        <AnimatedTrendChart />

        {/* 3. Content Container (Centered for Cinematic Feel) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            
            <div className="animate-fade-in-up space-y-8">
                
                {/* Lab Branding */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 font-bold uppercase tracking-widest text-xs mb-4">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Weather & Climate Modelling Group
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-lg">
                    Simulating <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-100">
                        Earth's Complex Systems
                    </span>
                </h1>
                
                {/* Sub-headline */}
                <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
                    Bridging high-resolution modelling, satellite observations, and AI to decode weather extremes and climate variability over the Indian subcontinent.
                </p>

                {/* Animated Stat Bar (New Addition for "Trends & Mitigation") */}
                <div className="flex justify-center gap-8 py-6 opacity-80">
                    <div className="flex flex-col items-center">
                        <div className="h-16 w-1 bg-emerald-500/30 rounded-full overflow-hidden relative">
                            <div className="absolute bottom-0 w-full bg-emerald-400 animate-[grow_2s_ease-out_forwards]" style={{ height: '70%' }}></div>
                        </div>
                        <span className="text-xs text-emerald-200 mt-2 font-mono">Mitigation</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-16 w-1 bg-red-500/30 rounded-full overflow-hidden relative">
                            <div className="absolute bottom-0 w-full bg-red-400 animate-[grow_2s_ease-out_forwards_0.5s]" style={{ height: '90%' }}></div>
                        </div>
                        <span className="text-xs text-red-200 mt-2 font-mono">Warming</span>
                    </div>
                    <style jsx>{`
                        @keyframes grow { from { height: 0; } }
                    `}</style>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link 
                        href="/research" 
                        className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center"
                    >
                        Explore Research
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                        href="/contact" 
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all backdrop-blur-sm"
                    >
                        Join Our Group
                    </Link>
                </div>

                {/* Affiliation Badges */}
                <div className="pt-12 flex justify-center items-center opacity-90 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                        <div className="relative h-10 w-10">
                            <Image src="/images/iiserm.png" alt="IISER" fill className="object-contain" />
                        </div>
                        <div className="h-8 w-px bg-white/20"></div>
                        <div className="text-left">
                            <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Affiliated with</p>
                            <p className="text-sm font-bold text-white">IISER Mohali</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* ================= LATEST NEWS SCROLLER ================= */}
      <section className="bg-white border-b border-slate-200 py-12 overflow-hidden relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">
              Latest News & Events
            </h3>
          </div>
        </div>

        <div className="relative w-full overflow-hidden mask-gradient-sides">
          <div 
            className={`flex w-max animate-scroll-left hover:paused gap-6 pl-4 ${selectedNews ? '[animation-play-state:paused]' : ''}`}
            style={{ animationDuration: '80s' }}
          >
            {[...latestNews, ...latestNews].map((item, index) => {
               const showDetails = ['Publication', 'Workshop', 'Achievement', 'Media', 'Defense', 'Event', 'Award'].includes(item.category);

               return (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
                  >
                    <div className="relative h-48 w-full bg-slate-200">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-sm">
                          {item.icon} {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-slate-500 font-medium mb-2 gap-2">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {item.desc}
                      </p>
                      {showDetails && (
                        <div className="mt-auto pt-4 border-t border-slate-100">
                          <button 
                            onClick={() => setSelectedNews(item)}
                            className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all outline-none"
                          >
                            View Details <Info className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONDITIONAL POPUP MODAL ================= */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-all"
            onClick={() => setSelectedNews(null)}
          ></div>

          {/* --- LOGIC: DEFENSE (Vertical Landscape) vs OTHER (Horizontal Split) --- */}
          {selectedNews.category === 'Defense' ? (
            
            // === LAYOUT A: VERTICAL (Landscape Image Top, Text Bottom) ===
            <div className="relative bg-white rounded-2xl w-full max-w-3xl h-[85vh] md:h-[90vh] flex flex-col overflow-hidden shadow-2xl z-10 animate-fade-in-up">
                
                {/* Close Button */}
                <button onClick={() => setSelectedNews(null)} className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"><X className="h-5 w-5" /></button>

                {/* TOP: Image Slider (Landscape 60%) */}
                <div className="relative w-full h-[60%] bg-slate-100 flex-shrink-0 group">
                   <Image src={selectedNews.images[currentImageIndex]} alt={selectedNews.title} fill className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   
                   {/* SLIDER CONTROLS */}
                   {selectedNews.images.length > 1 && (
                      <>
                          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100"><ChevronLeft className="h-6 w-6" /></button>
                          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100"><ChevronRight className="h-6 w-6" /></button>
                          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
                              {selectedNews.images.map((_: any, idx: number) => (
                                  <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}></div>
                              ))}
                          </div>
                      </>
                   )}
                   <div className="absolute bottom-4 left-6 text-white">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-600 rounded text-[10px] font-bold uppercase tracking-wider mb-2 shadow-sm">
                          {selectedNews.icon} {selectedNews.category}
                      </span>
                   </div>
                </div>

                {/* BOTTOM: Content (40%) */}
                <div className="w-full h-[40%] p-6 md:p-8 overflow-y-auto bg-white flex flex-col">
                   <div className="mb-4">
                      <span className="text-slate-400 text-xs font-medium flex items-center gap-1 mb-2"><Calendar className="h-3 w-3" /> {selectedNews.date}</span>
                      <h2 className="text-2xl font-bold text-slate-900 leading-tight">{selectedNews.title}</h2>
                   </div>
                   <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed flex-grow">
                      <p className="font-medium text-slate-800 mb-2">{selectedNews.desc}</p>
                      <p>{selectedNews.details}</p>
                   </div>
                </div>
            </div>

          ) : (

            // === LAYOUT B: SPLIT SCREEN (Image Left, Text Right) ===
            <div className="relative bg-white rounded-2xl w-full max-w-5xl h-[85vh] md:h-[600px] flex flex-col md:flex-row overflow-hidden shadow-2xl z-10 animate-fade-in-up">
                
                {/* Close Button */}
                <button onClick={() => setSelectedNews(null)} className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"><X className="h-5 w-5" /></button>

                {/* LEFT: Image Slider */}
                <div className="relative w-full md:w-1/2 h-64 md:h-full bg-slate-100 flex-shrink-0 group">
                   <Image src={selectedNews.images[currentImageIndex]} alt={selectedNews.title} fill className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
                   
                   {/* SLIDER CONTROLS */}
                   {selectedNews.images.length > 1 && (
                      <>
                          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100"><ChevronLeft className="h-6 w-6" /></button>
                          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100"><ChevronRight className="h-6 w-6" /></button>
                          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                              {selectedNews.images.map((_: any, idx: number) => (
                                  <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}></div>
                              ))}
                          </div>
                      </>
                   )}
                </div>

                {/* RIGHT: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                   <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">{selectedNews.icon} {selectedNews.category}</span>
                          <span className="text-slate-400 text-xs font-medium flex items-center gap-1"><Calendar className="h-3 w-3" /> {selectedNews.date}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4">{selectedNews.title}</h2>
                      <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6"></div>
                   </div>
                   <div className="prose prose-slate prose-sm md:prose-base text-slate-600 leading-relaxed flex-grow">
                      <p className="font-medium text-slate-800 text-lg mb-4">{selectedNews.desc}</p>
                      <p>{selectedNews.details}</p>
                   </div>
                   <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                      {selectedNews.category === 'Publication' && (
                          <Link href="/publications" className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2">Read Publication <ArrowRight className="h-4 w-4" /></Link>
                      )}
                   </div>
                </div>
            </div>
          )}

        </div>
      )}

      {/* ================= METHODOLOGY GRID ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-3">Our Research Focus</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Bridging Spatial Scales</h3>
            <p className="text-lg text-slate-600">
              We navigate the complexity of the Earth system by integrating high-resolution dynamics, observational analysis, and computational intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${area.colorClass}`}>
                  {area.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{area.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {area.description}
                </p>
                <Link href="/research" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-emerald-600 transition-colors mt-auto">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 bg-white text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Interested in Climate Science?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We are always looking for motivated students and researchers to join our team at IISER Mohali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/oppurtunities" className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
              Open Positions
            </Link>
            <Link href="/people" className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
              View Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
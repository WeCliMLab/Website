import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CloudRain, 
  Database, 
  Globe, 
  Wind, 
  TrendingUp, 
  Map, 
  Cpu,
  Layers,
  ThermometerSun
} from 'lucide-react';

export default function Home() {
  
  // We define the features here so it's easy to add more in the future.
  // Just add another object to this array, and the grid will auto-adjust!
  const researchAreas = [
    {
      title: "Regional Climate & Extremes",
      icon: <Globe className="h-6 w-6" />,
      colorClass: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
      description: "Analyzing and predicting regional weather aspects over India using high-resolution regional climate models. We focus on dynamical downscaling to understand variability and extremes."
    },
    {
      title: "Cloud Dynamics & Mesoscale",
      icon: <CloudRain className="h-6 w-6" />,
      colorClass: "bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white",
      description: "Developing cloud-resolving modelling systems for mesoscale convective systems. We study predictions at sub-seasonal scales and future projections of local extremes."
    },
    {
      title: "Impacts & Mitigation",
      icon: <ThermometerSun className="h-6 w-6" />,
      colorClass: "bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white",
      description: "Providing high-resolution information for climate assessments to study impacts on human and natural systems, aiding in the development of national adaptation strategies."
    },
    {
      title: "AI/ML & Data Assimilation",
      icon: <Cpu className="h-6 w-6" />,
      colorClass: "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white",
      description: "Applying advanced data assimilation and AI/ML techniques to improve the simulations and forecasts of regional weather extremes beyond traditional modelling limits."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      {/* Background: Deep Atmospheric Gradient */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        
        {/* Animated Background Layers */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            {/* A subtle green/teal aurora effect */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-20%] w-[800px] h-[800px] bg-teal-900/30 rounded-full blur-[120px] mix-blend-screen"></div>
            {/* Grain overlay for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in-up flex flex-col justify-center">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center space-x-2">
                <span className="h-px w-8 bg-emerald-400"></span>
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                  Atmospheric & Climate Sciences
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Simulating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-200">
                  Earth's Systems.
                </span>
              </h1>
              
              {/* Sub-headline based on your text */}
              <p className="text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed">
                From global circulation to local cloud dynamics. <br/>
                We integrate <b>high-resolution modelling</b>, <b>observation</b>, and <b>AI</b> to predict weather extremes and assess climate impacts for a resilient future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/research" 
                  className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center"
                >
                  Explore Research
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
                >
                  Join the Group
                </Link>
              </div>

              {/* LOGOS / AFFILIATION STRIP (Better Placement) */}
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6">
                 <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                   Affiliated with:
                 </p>
                 <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                    {/* IISER Logo */}
                    <div className="relative h-12 w-12 bg-white rounded-full p-0.5">
                        <Image 
                            src="/images/iiserm.png" 
                            alt="IISER Mohali" 
                            fill 
                            className="object-cover rounded-full"
                        />
                    </div>
                    {/* Lab Logo */}
                    <div className="relative h-12 w-12 bg-white rounded-full p-0.5">
                        <Image 
                            src="/images/weclimb.png" 
                            alt="WeClimb Lab" 
                            fill 
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-white leading-tight">IISER Mohali</span>
                        <span className="text-xs text-emerald-400">Dept. of Earth & Environmental Sciences</span>
                    </div>
                 </div>
              </div>

            </div>

            {/* Right: Visual Abstract / Dynamic Data Visualization */}
            <div className="hidden lg:block relative h-[600px] w-full">
                
                {/* Abstract Atmosphere Spheres */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-emerald-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                
                {/* Floating Glass Card: The "Model Output" Metaphor */}
                <div className="absolute top-20 right-0 w-80 bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl animate-float">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                        <Layers className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs font-mono text-emerald-100">WRF_MODEL_V4.0_OUTPUT</span>
                    </div>
                    {/* Simulated contour lines */}
                    <div className="relative h-32 w-full overflow-hidden rounded bg-slate-900/50 mb-3">
                         <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.8),transparent)]"></div>
                         <div className="absolute top-1/2 left-0 right-0 h-px bg-emerald-500/30"></div>
                         <div className="absolute top-1/3 left-0 right-0 h-px bg-emerald-500/20"></div>
                         <div className="absolute top-2/3 left-0 right-0 h-px bg-emerald-500/20"></div>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                        <span>Res: 3km</span>
                        <span>Domain: Western Himalayas</span>
                    </div>
                </div>

                {/* Floating Glass Card: The "AI" Metaphor */}
                <div className="absolute bottom-20 left-10 w-72 bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl animate-float-delayed">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                        <Cpu className="h-4 w-4 text-teal-400" />
                        <span className="text-xs font-mono text-teal-100">DEEP_LEARNING_DOWNSCALE</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 mb-2">
                        {[...Array(15)].map((_, i) => (
                             <div key={i} className={`h-1.5 rounded-full ${Math.random() > 0.6 ? 'bg-teal-400' : 'bg-slate-600'}`}></div>
                        ))}
                    </div>
                    <div className="text-xs font-mono text-slate-400 mt-2">
                         Optimizing Weights... <span className="text-green-400">98%</span>
                    </div>
                </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= NEWS TICKER (Subtle & Professional) ================= */}
      <div className="bg-white border-b border-slate-200 py-3 overflow-hidden">
        <div className="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="flex items-center text-emerald-700 text-xs font-bold uppercase tracking-widest mr-8 whitespace-nowrap">
                <TrendingUp className="h-3 w-3 mr-2" /> Highlights
            </span>
            <div className="relative flex overflow-hidden w-full mask-gradient-sides">
                <div className="animate-scroll-left flex whitespace-nowrap gap-12 hover:paused text-slate-600 text-sm font-medium">
                     {[1, 2].map((i) => (
                        <div key={i} className="flex gap-12">
                            <span className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                                Paper accepted in Journal of Climate regarding Himalayan precipitation.
                            </span>
                            <span className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                                New project funded: "Mesoscale Convective Systems in Changing Climate".
                            </span>
                            <span className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                                Dr. PI invited for a talk at the National Climate Conference.
                            </span>
                        </div>
                     ))}
                </div>
            </div>
        </div>
      </div>

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

            {/* The Grid - Now dynamically mapped from the array at the top */}
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

      {/* ================= STATS / IMPACT ================= */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                <div>
                    <div className="text-4xl font-bold text-emerald-400">1901-2020</div>
                    <div className="text-xs text-slate-400 mt-2 uppercase tracking-wider">IMD Data Analyzed</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-emerald-400">High-Res</div>
                    <div className="text-xs text-slate-400 mt-2 uppercase tracking-wider">Climate Models</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-emerald-400">AI + Physics</div>
                    <div className="text-xs text-slate-400 mt-2 uppercase tracking-wider">Hybrid Approach</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-emerald-400">India</div>
                    <div className="text-xs text-slate-400 mt-2 uppercase tracking-wider">Regional Focus</div>
                </div>
            </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 bg-white text-center">
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
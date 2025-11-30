import React from 'react';
import Image from 'next/image';
import { 
  CloudRain, 
  ThermometerSun, 
  Snowflake, 
  Wind, 
  Mountain, 
  Layers, 
  Server, 
  Activity, 
  HardDrive, 
  Cpu
} from 'lucide-react';

export default function ResearchPage() {

  // Data structure: Now includes an 'image' field and a 'gradient' fallback
  const researchTopics = [
    {
      title: "Himalayan Monsoon Rainfall",
      subtitle: "Variability, Trends, Simulation and Predictability",
      icon: <Mountain className="h-5 w-5" />,
      image: "/images/himalaya-precip.jpg",
      placeholderColor: "from-emerald-200 via-teal-100 to-white",
      content: "The Himalayas are a high mountain terrain with a complex interaction between atmosphere and topography. Due to a warming world, changes in atmospheric conditions cause extreme precipitation events, cloud bursts, and landslides. We aim to understand and predict the summer monsoon rainfall and extreme rainfall events over the Himalayan mountains."
    },
    {
      title: "Cold Waves",
      subtitle: "Trends & Predictability",
      icon: <Wind className="h-5 w-5" />,
      image: "/images/coldwave-chart.png",
      placeholderColor: "from-cyan-200 via-sky-100 to-white",
      content: "Cold waves are extreme weather events prominent during the winter season (Nov-Feb). Characterized by a sharp drop of air temperature and strengthening of winds, they have detrimental effects on health, agriculture, and livestock. We investigate factors like Western Disturbances and the Siberian High to predict their influence."
    },
    {
      title: "Indian Summer Monsoon",
      subtitle: "Dynamics & Thermodynamics",
      icon: <CloudRain className="h-5 w-5" />,
      image: "/images/ism-vorticity.gif",
      placeholderColor: "from-teal-200 via-emerald-100 to-white",
      content: "The ISM brings heavy rainfall to the subcontinent, providing over 70% of annual rainfall. Climate change is expected to lead to more extreme rainfall events and longer dry spells. We focus on studying the dynamic characteristics of ISM extremes and aim to simulate them using advanced modelling (WRF) and data assimilation."
    },
    {
      title: "Indian Winter Monsoon",
      subtitle: "Variability, Drivers & Simulation",
      icon: <Snowflake className="h-5 w-5" />,
      // When you have a real image/gif, put it in public/images/ and reference it here:
      image: "/images/winter-monsoon-sim.gif", 
      // This gradient acts as a dummy placeholder until you have the image
      placeholderColor: "from-blue-200 via-blue-100 to-white",
      content: "Winter precipitation is observed in the northern parts of Indian subcontinent through December to March due to the passage of western disturbances. This precipitation is a primary irrigational source for agriculture and maintains the snow cover of Himalayan glaciers. We aim to understand and simulate the winter precipitation dynamics and its key mechanisms over the Himalayas."
    },
    {
      title: "Data Assimilation",
      subtitle: "3D and 4D vars",
    }, 
    {
      title: "Aerosols & Dust Storms",
      subtitle: "Investigation of Variability",
      icon: <Layers className="h-5 w-5" />,
      image: "/images/aerosol-optical-depth.jpg",
      placeholderColor: "from-amber-200 via-orange-100 to-white",
      content: "Atmospheric aerosols demonstrate spatial heterogeneity across India due to urbanization. Abundances in aerosol concentrations impact the ecosystem, visibility, and health. Using state-of-the-art atmospheric modelling and remote sensing, we aim to understand the physical processes responsible for Dust Storms and develop regional early warning systems."
    },
    {
      title: "Heat Waves",
      subtitle: "Impacts & Mitigation",
      icon: <ThermometerSun className="h-5 w-5" />,
      image: "/images/heat-stress-map.png",
      placeholderColor: "from-red-200 via-orange-100 to-white",
      content: "Global warming is increasing heat stress, where the body cannot maintain core temperature. This has detrimental impacts such as heat cramps and strokes. We study heat stress to predict its future intensity, identify hotspot regions, and help formulate mitigation policies to tackle this rising threat."
    }
  ];

  const hardware = [
    { name: "Fusionstor Invento i712 (Primary)", specs: "96 Cores, 256GB RAM", gpu: "NVIDIA Quadro RTX400" },
    { name: "Supermicro SuperWorkstation", specs: "64 Cores, 128GB RAM", gpu: "NVIDIA Quadro P2000" },
    { name: "Fusionstor Invento i712 (Gold)", specs: "80 Cores, 128GB RAM", gpu: "NVIDIA Quadro P1000" },
    { name: "Fusionstor Invento i712 (Silver)", specs: "40 Cores, 96GB RAM", gpu: "NVIDIA Quadro P400" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Research Areas
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We focus on understanding regional weather phenomena through 
              <span className="text-emerald-600 font-semibold"> dynamical downscaling</span> and 
              <span className="text-emerald-600 font-semibold"> observational analysis</span>. 
            </p>
          </div>
        </div>
      </div>

      {/* ================= RESEARCH GRID (Masonry Style) ================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {researchTopics.map((topic, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              
              {/* --- IMAGE / VISUAL AREA --- */}
              {/* This container mimics a scientific figure window */}
              <div className={`relative h-56 w-full bg-gradient-to-br ${topic.placeholderColor} overflow-hidden`}>
                
                {/* IMPORTANT: 
                   1. Uncomment the <Image> block below when you have real files.
                   2. The 'opacity-0' logic ensures the placeholder shows if image fails to load, 
                      or you can just remove the gradient div above and keep only Image.
                */}
                
                {/* <Image 
                  src={topic.image} 
                  alt={topic.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                /> 
                */}

                {/* Placeholder Overlay to make it look 'sci-fi' while empty */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                   {/* Abstract Grid Pattern */}
                   <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)_100%)] bg-[size:20px_20px]"></div>
                </div>

                {/* Topic Label Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                   <span className="text-slate-900">{topic.icon}</span>
                   <span className="text-xs font-bold uppercase tracking-wider text-slate-800">{topic.subtitle}</span>
                </div>
              </div>

              {/* --- TEXT CONTENT AREA --- */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base flex-grow">
                  {topic.content}
                </p>
                
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-sm font-semibold text-emerald-600 cursor-pointer">
                  See Visualizations &rarr;
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= COMPUTATIONAL FACILITIES ================= */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Server className="text-emerald-400" />
                Computational Facilities
              </h2>
              <p className="text-slate-400">High-performance computing clusters for complex atmospheric simulations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {hardware.map((item, idx) => (
               <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors group">
                  <Activity className="h-5 w-5 text-emerald-500 mb-4 opacity-50 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg text-emerald-100 mb-3">{item.name}</h3>
                  <div className="space-y-2 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-3 w-3" /> {item.specs}
                    </div>
                     <div className="flex items-center gap-2 text-emerald-400/80">
                        <span className="w-3 h-3 block text-center font-bold">G</span> {item.gpu}
                    </div>
                  </div>
               </div>
             ))}
             
             {/* Unified Storage Card */}
             <div className="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-emerald-900/20 to-slate-800 border border-emerald-500/30 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                        <HardDrive className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white">Unified NAS Storage System</h4>
                        <p className="text-sm text-slate-400 font-mono">36 Hot-swap SAS HDD bays • 100Gbps InfiniBand Low Latency</p>
                    </div>
                </div>
                <div className="text-right">
                    <span className="inline-block px-4 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                        ACTIVE STATUS
                    </span>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import { 
  Newspaper, 
  ExternalLink, 
  Award, 
  Mic, 
  Radio, 
  Globe, 
  Megaphone
} from 'lucide-react';

// --- DATA STRUCTURE ---
// You can easily add more items here.
// If you don't have an image yet, just leave the 'image' field empty or commented out.

const mediaItems = [
  {
    title: "Himalayan Disasters Study Featured in News",
    description: "Research by Dr. Rohtash and Dr. Raju Attada on Himalayan disasters was widely covered by various news outlets, highlighting the vulnerability of the region.",
    type: "News Feature",
    source: "Multiple Outlets",
    icon: <Newspaper className="h-6 w-6" />,
    // image: "/images/media/himalaya-news.jpg", 
    link: "#"
  },
  {
    title: "Summer Human Thermal Discomfort Study",
    description: "Dr. Krishna Kumar Shukla and Dr. Raju Attada's work on rising thermal discomfort levels in India received significant media attention.",
    type: "Press Release",
    source: "National Media",
    icon: <Newspaper className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "Athira's Work on Cold Waves",
    description: "PhD scholar Athira K.S.'s research on the mechanisms of Cold Waves over North India was featured in various reports.",
    type: "Research Feature",
    source: "Science News",
    icon: <Newspaper className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "Elected Member of Royal Meteorological Society",
    description: "Dr. Raju Attada has been elected as a member of the prestigious Royal Meteorological Society (RMetS), recognizing his contributions to the field.",
    type: "Achievement",
    source: "RMetS",
    icon: <Award className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "ENSO-ISMR Linkages Featured in Hindustan Times",
    description: "Athira's work understanding the connection between ENSO and Indian Summer Monsoon Rainfall was highlighted by the Hindustan Times.",
    type: "News Feature",
    source: "Hindustan Times",
    icon: <Newspaper className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "Rohtash's Work Featured in Current Science",
    description: "Research on regional climate modelling and extremes was highlighted in the Current Science journal's news section.",
    type: "Journal Feature",
    source: "Current Science",
    icon: <Globe className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "Coverage in Hindi Daily 'Dainik Bhaskar'",
    description: "Dr. Krishna's research on climate impacts reached a wider audience through coverage in the prominent Hindi daily Dainik Bhaskar.",
    type: "Regional News",
    source: "Dainik Bhaskar",
    icon: <Newspaper className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "Featured in KAUST Discovery",
    description: "Dr. Raju Attada's research collaborations and findings have been highlighted multiple times in KAUST Discovery magazine.",
    type: "International Feature",
    source: "KAUST Discovery",
    icon: <Globe className="h-6 w-6" />,
    link: "#"
  },
  {
    title: "Research Featured in EOS (AGU)",
    description: "Dr. Raju's work was featured in EOS, the science news publication by the American Geophysical Union (AGU).",
    type: "Global Science News",
    source: "EOS - AGU",
    icon: <Globe className="h-6 w-6" />,
    link: "#"
  }
];

export default function OutreachPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Media & Outreach
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Our research doesn't just stay in the lab. We actively engage with the public and media to communicate the science of climate change and extreme weather.
          </p>
        </div>
      </div>

      {/* ================= MEDIA GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {mediaItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              
              {/* --- IMAGE AREA (Placeholder or Real Image) --- */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                {/* IF you have an image, uncomment lines below:
                   <Image src={item.image} alt={item.title} fill className="object-cover" />
                */}
                
                {/* Default Placeholder: Cool Gradient with Icon */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-white flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <div className="p-4 bg-white rounded-full shadow-sm text-slate-400 group-hover:text-emerald-600 transition-colors">
                        {item.icon}
                    </div>
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                        {item.type}
                    </span>
                </div>
              </div>

              {/* --- CONTENT --- */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold text-emerald-600 uppercase tracking-wide">
                    <Megaphone className="h-3 w-3" /> {item.source}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                    {item.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100">
                    <a href={item.link} className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors">
                        Read Coverage <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ================= PRESS INQUIRIES CTA ================= */}
      <section className="bg-slate-900 py-16">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Journalist or Media House?</h2>
            <p className="text-slate-400 mb-8">
                We are available for comments on extreme weather events, climate change projections, and atmospheric science in India.
            </p>
            <div className="flex justify-center gap-4">
                 <a href="/contact" className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors">
                    Contact for Comment
                 </a>
                 <a href="/publications" className="px-6 py-3 bg-transparent border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                    Access Publications
                 </a>
            </div>
         </div>
      </section>

    </div>
  );
}
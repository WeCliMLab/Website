import React from 'react';
import { 
  Database, 
  Github, 
  FileText, 
  Download, 
  Lock, 
  ExternalLink, 
  Terminal,
  AlertCircle,
  HardDrive
} from 'lucide-react';

// --- DATA: RESOURCES ---
const resources = [
  // DATASETS
  {
    category: "Dataset",
    title: "High-Res Himalayan Precipitation Reanalysis (1980-2020)",
    description: "A bias-corrected, dynamically downscaled precipitation dataset for the Western Himalayas at 3km resolution using WRF v4.0.",
    format: "NetCDF",
    size: "450 GB",
    access: "Open Access",
    link: "#", // Replace with Google Drive/Server link
    citation: "Saini, R., & Attada, R. (2024). JGR: Atmospheres.",
    icon: <Database className="h-6 w-6" />
  },
  {
    category: "Dataset",
    title: "Indian Summer Monsoon Extremes Catalogue",
    description: "A curated list of extreme rainfall events identified using IMD gridded data and ERA5 reanalysis, categorized by synoptic drivers.",
    format: ".CSV / .XLSX",
    size: "25 MB",
    access: "Open Access",
    link: "#",
    citation: "Bajrang, C., Attada, R. et al. (2023). npj Clim Atmos Sci.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    category: "Dataset",
    title: "Future Projections of Cold Waves (CMIP6 Downscaled)",
    description: "Projected cold wave duration and intensity indices over North India for near-future (2030-2060) under SSP2-4.5 and SSP5-8.5 scenarios.",
    format: "NetCDF",
    size: "120 GB",
    access: "Request Access", // Example of restricted data
    link: "mailto:rajuattada@iisermohali.ac.in",
    citation: "Athira, K. S., & Attada, R. (2024). Weather and Climate Extremes.",
    icon: <Lock className="h-6 w-6" />
  },

  // CODE / TOOLS
  {
    category: "Code",
    title: "Deep Learning Downscaling Model (U-Net)",
    description: "Python implementation (PyTorch) of the U-Net architecture used for downscaling GCM temperature data, including pre-trained weights.",
    format: "GitHub Repo",
    size: "Repo",
    access: "Open Source",
    link: "https://github.com",
    citation: "Govande, A., Attada, R. et al (2025). Theor Appl Climatol.",
    icon: <Github className="h-6 w-6" />
  },
  {
    category: "Code",
    title: "WRF Namelist Configurations (Indian Monsoon)",
    description: "Optimized namelist.input files for simulating the Indian Summer Monsoon, tuned for convection-permitting scales (3km & 1km).",
    format: "Config File",
    size: "10 KB",
    access: "Open Access",
    link: "#",
    citation: "Nischal et al. (2022). J. Appl. Meteor. Climatol.",
    icon: <Terminal className="h-6 w-6" />
  },
  {
    category: "Tool",
    title: "Ventilation Coefficient Calculator",
    description: "A standalone Python script to calculate ventilation coefficients using boundary layer height and wind speed data.",
    format: "Python Script",
    size: "5 KB",
    access: "Open Access",
    link: "#",
    citation: "Internal Lab Tool",
    icon: <Terminal className="h-6 w-6" />
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <div className="bg-slate-900 text-white pt-24 pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
                    <HardDrive className="h-10 w-10 text-emerald-400" />
                    Resources & Data
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                    We believe in Open Science. Access our datasets, model configurations, and code repositories to support your own research.
                </p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex gap-4 text-sm font-mono text-slate-400">
                <div className="px-4 py-2 bg-slate-800 rounded border border-slate-700">
                    <span className="block text-xl font-bold text-white">500+ GB</span>
                    Climate Data
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded border border-slate-700">
                    <span className="block text-xl font-bold text-white">3+</span>
                    Open Models
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CITATION POLICY ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
         <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800">
                <strong>Data Usage Policy:</strong> If you use these datasets or codes in your publications, please cite the associated reference listed on the card. This helps us continue securing funding to maintain these resources.
            </div>
         </div>
      </div>

      {/* ================= RESOURCES GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {resources.map((res, idx) => (
            <div 
                key={idx} 
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group flex flex-col"
            >
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${
                            res.category === 'Dataset' ? 'bg-blue-100 text-blue-700' : 
                            res.category === 'Code' ? 'bg-purple-100 text-purple-700' :
                            'bg-slate-100 text-slate-700'
                        }`}>
                            {res.icon}
                        </div>
                        <div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                res.category === 'Dataset' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                                res.category === 'Code' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                'bg-slate-50 text-slate-700 border-slate-100'
                            }`}>
                                {res.category}
                            </span>
                        </div>
                    </div>
                    
                    {/* Meta Info Badge */}
                    <div className="text-right">
                        <span className="block text-xs font-bold text-slate-900">{res.format}</span>
                        <span className="block text-xs text-slate-500">{res.size}</span>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {res.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                    {res.description}
                </p>

                {/* Citation Box */}
                <div className="bg-slate-50 p-3 rounded border border-slate-100 mb-4 text-xs font-mono text-slate-500">
                    <span className="font-bold text-slate-700 select-none">Cite: </span>
                    {res.citation}
                </div>

                {/* Action Button */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                    {res.access === 'Request Access' ? (
                        <a href={res.link} className="flex items-center justify-center gap-2 w-full py-2 bg-slate-100 text-slate-700 font-semibold rounded hover:bg-slate-200 transition-colors text-sm">
                            <Lock className="h-4 w-4" /> Request Access
                        </a>
                    ) : (
                        <a href={res.link} className="flex items-center justify-center gap-2 w-full py-2 bg-emerald-600 text-white font-semibold rounded hover:bg-emerald-500 transition-colors text-sm shadow-sm hover:shadow">
                            {res.category === 'Code' ? <Github className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                            {res.category === 'Code' ? 'View on GitHub' : 'Download Data'}
                        </a>
                    )}
                </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
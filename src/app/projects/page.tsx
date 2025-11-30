import React from 'react';
import { 
  Calendar, 
  Award, 
  Users, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  ArrowRight,
  Zap
} from 'lucide-react';

// --- DATA STRUCTURE ---

type ProjectStatus = 'Active' | 'Upcoming' | 'Completed' | 'Infrastructure';

interface Project {
  title: string;
  agency: string;
  agencyShort: string;
  tenure: string;
  role: string;
  copi?: string;
  status: ProjectStatus;
  description?: string; // Optional tagline for flavor
  highlight?: boolean; // To mark the AI/ML project
}

const projects: Project[] = [
  // --- UPCOMING / NEW ---
  {
    title: "To be Updated",
    agency: "National Centre For Medium Range Weather Forecasting (NCMRWF)",
    agencyShort: "NCMRWF",
    tenure: "Dec 2025 – Dec 2028",
    role: "Principal Investigator",
    status: "Upcoming",
    // description: " integrating Deep Learning with traditional physical models to improve forecast accuracy.",
    highlight: true
  },
  {
    title: "Advances in Numerical Weather Prediction (NWP) Modelling using AI/ML Techniques",
    agency: "RESPOND, SAC, Indian Space Research Organization (ISRO)",
    agencyShort: "ISRO - SAC",
    tenure: "Dec 2025 – Dec 2028",
    role: "Co-Principal Investigator",
    copi: "Collaborating with IIT BBS",
    status: "Upcoming",
    description: " integrating Deep Learning with traditional physical models to improve forecast accuracy.",
    highlight: true
  },
  {
    title: "Indian Summer Monsoon Variability: Role of tropical & extratropical interactions",
    agency: "Ministry of Earth Sciences (MoES), Govt. of India",
    agencyShort: "MoES",
    tenure: "Sept 2025 – Sep 2028",
    role: "Co-Principal Investigator",
    status: "Upcoming",
    description: "Deciphering the teleconnections driving monsoon variability."
  },
  {
    title: "Deciphering Extreme Weather Events over the Himalayas using INSAT-3D & K-scale simulations",
    agency: "NICES, NRSC, Indian Space Research Organization (ISRO)",
    agencyShort: "ISRO - NRSC",
    tenure: "Oct 2025 – Oct 2027",
    role: "Principal Investigator",
    status: "Active",
    description: "Utilizing satellite data for high-resolution mountain weather modelling."
  },

  // --- ACTIVE ---
  {
    title: "Modelling and Predicting Hydro-Meteorological Disasters in Indian Himalayas",
    agency: "STARS, Ministry of Education, Govt. of India",
    agencyShort: "MoE - STARS",
    tenure: "2024 – 2027",
    role: "Principal Investigator",
    copi: "Dr. Yunus Ali Pulpadan",
    status: "Active"
  },
  {
    title: "Evaluation of DWR observations on prediction of extreme rainfall events using WRF Data Assimilation",
    agency: "Ministry of Earth Sciences (MoES), Govt. of India",
    agencyShort: "MoES",
    tenure: "2022 – 2026",
    role: "Principal Investigator",
    status: "Active"
  },
  {
    title: "Impact of moist and thermodynamics profiles on prediction of extreme rainfall events",
    agency: "Disaster Management Support Program, IIRS, ISRO",
    agencyShort: "ISRO - IIRS",
    tenure: "2022 – 2025",
    role: "Principal Investigator",
    status: "Active"
  },

  // --- COMPLETED / INFRASTRUCTURE ---
  {
    title: "SURE-ALERT: System for Unprecedented Rainfall-inducEd lAndsLide Early Warning Techniques",
    agency: "Disaster Management Support Program, IIRS, ISRO",
    agencyShort: "ISRO - IIRS",
    tenure: "2024 (Capacity Building)",
    role: "Principal Investigator",
    copi: "Dr. Yunus Ali Pulpadan",
    status: "Completed"
  },
  {
    title: "Analysis of winter seasonal means and extreme rainfall events over Northern India",
    agency: "DST-SERB",
    agencyShort: "DST-SERB",
    tenure: "2020 – 2023",
    role: "Principal Investigator",
    status: "Completed"
  },
  {
    title: "Development of Weather and Climate Modeling Research Lab at IISER Mohali",
    agency: "IISER Mohali",
    agencyShort: "IISERM Seed Grant",
    tenure: "Infrastructure",
    role: "Principal Investigator",
    status: "Infrastructure"
  }
];

export default function ProjectsPage() {
  
  const activeProjects = projects.filter(p => p.status === 'Active' || p.status === 'Upcoming');
  const completedProjects = projects.filter(p => p.status === 'Completed' || p.status === 'Infrastructure');

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HEADER ================= */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Grants & Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Our research is supported by competitive grants from India's leading scientific agencies. 
            We actively work on funded projects ranging from <span className="text-emerald-600 font-semibold">AI/ML integration</span> to <span className="text-emerald-600 font-semibold">satellite data assimilation</span>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ================= ACTIVE & UPCOMING SECTION ================= */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
               <TrendingUp className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Current & Upcoming Grants</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* ================= COMPLETED SECTION ================= */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
               <CheckCircle2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Completed Projects</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {completedProjects.map((project, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row gap-4 hover:border-slate-300 transition-colors">
                 <div className="flex-shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                      {project.agencyShort}
                    </span>
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-800 leading-snug mb-2">{project.title}</h3>
                    <div className="text-sm text-slate-500 space-y-1">
                        <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" /> {project.tenure}
                        </div>
                        <div className="flex items-center gap-2">
                             <Users className="h-3 w-3" /> {project.role}
                        </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
           {/* Background Deco */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Interested in working on these projects?</h3>
                <p className="text-slate-400">
                    We frequently have openings for JRFs and PhD positions funded by these grants.
                </p>
              </div>
              <a href="/oppurtunities" className="flex-shrink-0 inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-900/50">
                View Openings <ArrowRight className="ml-2 h-5 w-5" />
              </a>
           </div>
        </section>

      </div>
    </div>
  );
}

// --- CARD COMPONENT ---

function ProjectCard({ project }: { project: Project }) {
  const isUpcoming = project.status === 'Upcoming';
  const isHighPriority = project.highlight;

  return (
    <div className={`relative bg-white rounded-xl p-6 md:p-8 border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full
      ${isHighPriority ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'}
    `}>
      
      {/* Highlight Badge for AI/ML */}
      {isHighPriority && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
            <Zap className="h-3 w-3 fill-white" /> New Grant
        </div>
      )}

      {/* Header: Agency & Status */}
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-md text-xs font-bold border ${
            project.agency.includes("ISRO") ? "bg-orange-50 text-orange-700 border-orange-100" :
            project.agency.includes("MoES") ? "bg-blue-50 text-blue-700 border-blue-100" :
            "bg-slate-100 text-slate-700 border-slate-200"
        }`}>
            {project.agencyShort}
        </span>

        {isUpcoming && (
            <span className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                <Clock className="h-3 w-3" /> Starting 2025
            </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
        {project.title}
      </h3>

      {/* Optional Description */}
      {project.description && (
        <p className="text-slate-600 text-sm mb-6 flex-grow">
            {project.description}
        </p>
      )}

      {/* Details Footer */}
      <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
        
        {/* Tenure */}
        <div className="flex items-center gap-3 text-sm text-slate-600">
            <div className="p-1.5 bg-slate-50 rounded text-slate-400">
                <Calendar className="h-4 w-4" />
            </div>
            <span className="font-medium">{project.tenure}</span>
        </div>

        {/* Agency Full Name */}
        <div className="flex items-start gap-3 text-sm text-slate-600">
            <div className="p-1.5 bg-slate-50 rounded text-slate-400 mt-0.5">
                <Award className="h-4 w-4" />
            </div>
            <span className="text-xs leading-relaxed">{project.agency}</span>
        </div>

        {/* Personnel */}
        <div className="flex items-start gap-3 text-sm text-slate-600">
            <div className="p-1.5 bg-slate-50 rounded text-slate-400 mt-0.5">
                <Users className="h-4 w-4" />
            </div>
            <div className="flex flex-col text-xs">
                <span className="font-semibold text-slate-800">{project.role}</span>
                {project.copi && <span className="text-slate-500">Co-PI: {project.copi}</span>}
            </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { 
  BookOpen, 
  CloudSun, 
  Code2, 
  BarChart3, 
  Wind, 
  Presentation, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';

// --- DATA STRUCTURE ---
const courses = [
  {
    code: "EES 202",
    title: "Introduction to Atmospheric & Climate Sciences",
    level: "Core Course",
    icon: <CloudSun className="h-8 w-8 text-white" />,
    color: "from-blue-400 to-sky-300",
    description: "A foundational course exploring the Earth's atmosphere, climate system components, and the physical principles governing weather patterns and climate change."
  },
  {
    code: "EES 404",
    title: "Basic Meteorology",
    level: "Advanced Elective",
    icon: <Wind className="h-8 w-8 text-white" />,
    color: "from-teal-400 to-emerald-300",
    description: "Fundamental concepts of atmospheric thermodynamics, hydrostatics, and dynamics. Understanding the forces that drive atmospheric motion and weather systems."
  },
  {
    code: "EES 405",
    title: "Climate Data Analysis and Visualization",
    level: "Skill Development",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: "from-indigo-400 to-purple-300",
    description: "Hands-on training in handling large climate datasets (NetCDF, GRIB). Techniques for statistical analysis, time-series processing, and high-quality scientific visualization."
  },
  {
    code: "EES 416",
    title: "Physics of Monsoon",
    level: "Specialized",
    icon: <CloudSun className="h-8 w-8 text-white" />, // Reusing icon or finding a better one
    color: "from-cyan-500 to-blue-400",
    description: "An in-depth study of the Indian Summer Monsoon. Topics include onset mechanisms, intra-seasonal oscillations, teleconnections (ENSO/IOD), and monsoon variability."
  },
  {
    code: "EES 411",
    title: "Computational Geosciences Lab",
    level: "Lab / Practical",
    icon: <Code2 className="h-8 w-8 text-white" />,
    color: "from-slate-600 to-slate-400",
    description: "Practical application of numerical methods in Earth Sciences. Introduction to coding (Python/Fortran) for solving differential equations and modeling atmospheric flows."
  },
  {
    code: "EES 409",
    title: "Tropical Weather and Climate",
    level: "Advanced Elective",
    icon: <BookOpen className="h-8 w-8 text-white" />,
    color: "from-orange-400 to-amber-300",
    description: "Focuses on weather systems unique to the tropics, including tropical cyclones, easterly waves, the ITCZ, and the El Niño-Southern Oscillation (ENSO)."
  },
  {
    code: "IDC 602",
    title: "Seminar Delivery and Attending Course",
    level: "Graduate Seminar",
    icon: <Presentation className="h-8 w-8 text-white" />,
    color: "from-rose-400 to-pink-300",
    description: "Developing essential scientific communication skills. Students learn to present research findings effectively, critique scientific literature, and engage in academic discourse."
  }
];

export default function TeachingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
             <div className="p-3 bg-emerald-100 rounded-xl text-emerald-700">
                <GraduationCap className="h-8 w-8" />
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Teaching
             </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Training the next generation of climate scientists. Our curriculum bridges theoretical physics with modern computational techniques and data analysis.
          </p>
        </div>
      </div>

      {/* ================= COURSES GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              
              {/* --- CARD VISUAL HEADER --- */}
              {/* This acts as the "Cover Art" for the course */}
              <div className={`h-32 w-full bg-gradient-to-br ${course.color} relative p-6 flex flex-col justify-between`}>
                 <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                 
                 <div className="relative z-10 flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/20">
                        {course.icon}
                    </div>
                    <span className="bg-black/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded backdrop-blur-sm">
                        {course.level}
                    </span>
                 </div>
                 
                 <div className="relative z-10 text-white/90 font-mono text-sm font-bold tracking-wider">
                    {course.code}
                 </div>
              </div>

              {/* --- CARD CONTENT --- */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                    {course.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {course.description}
                </p>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                    <span className="inline-flex items-center text-sm font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors cursor-pointer">
                        View Syllabus <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ================= RESOURCES CTA ================= */}
      <section className="bg-slate-900 py-16 mt-8">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Student Resources</h2>
            <p className="text-slate-400 mb-8">
                Access lecture notes, datasets, and python notebooks for these courses on our internal portal.
            </p>
            <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
                Student Login
            </button>
         </div>
      </section>

    </div>
  );
}
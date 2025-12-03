'use client'; // Needed for interactivity (useState)

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  BookOpen, 
  CloudSun, 
  Code2, 
  BarChart3, 
  Wind, 
  Presentation, 
  GraduationCap,
  ArrowRight,
  X,
  Calendar,
  Clock
} from 'lucide-react';

// --- DATA STRUCTURE ---
const courses = [
  {
    code: "EES 202",
    title: "Introduction to Atmospheric & Climate Sciences",
    level: "Core Course",
    credits: "4 Credits",
    semester: "Monsoon Semester",
    icon: <CloudSun className="h-8 w-8 text-white" />,
    image: "/images/teaching/ees404.png", 
    description: "A foundational course exploring the Earth's atmosphere, climate system components, and the physical principles governing weather patterns and climate change.",
    details: "This course covers the structure of the atmosphere, radiative transfer, thermodynamics, and the fundamental equations of motion. Students will gain a holistic understanding of how the climate system operates."
  },
  {
    code: "EES 404",
    title: "Basic Meteorology",
    level: "Advanced Elective",
    credits: "4 Credits",
    semester: "Spring Semester",
    icon: <Wind className="h-8 w-8 text-white" />,
    image: "/images/teaching/ees404.png",
    description: "Fundamental concepts of atmospheric thermodynamics, hydrostatics, and dynamics. Understanding the forces that drive atmospheric motion and weather systems.",
    details: "Topics include the First Law of Thermodynamics applied to the atmosphere, adiabatic processes, stability, cloud formation, and the geostrophic approximation."
  },
  {
    code: "EES 405",
    title: "Climate Data Analysis and Visualization",
    level: "Skill Development",
    credits: "4 Credits",
    semester: "Spring Semester",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    image: "/images/teaching/ees405.png",
    description: "Hands-on training in handling large climate datasets (NetCDF, GRIB). Techniques for statistical analysis, time-series processing, and high-quality scientific visualization.",
    details: "Students will learn Python (xarray, matplotlib, cartopy) and CDO/NCO tools. The course culminates in a project reproducing plots from IPCC reports."
  },
  {
    code: "EES 416",
    title: "Physics of Monsoon",
    level: "Specialized",
    credits: "3 Credits",
    semester: "Monsoon Semester",
    icon: <CloudSun className="h-8 w-8 text-white" />, 
    image: "/images/teaching/ees404.png",
    description: "An in-depth study of the Indian Summer Monsoon. Topics include onset mechanisms, intra-seasonal oscillations, teleconnections (ENSO/IOD), and monsoon variability.",
    details: "We explore the heat source/sink hypothesis, the role of the Himalayas, and the dynamics of the Somali Jet. Assessment includes a literature review of recent monsoon research."
  },
  {
    code: "EES 411",
    title: "Computational Geosciences Lab",
    level: "Lab / Practical",
    credits: "4 Credits",
    semester: "Spring Semester",
    icon: <Code2 className="h-8 w-8 text-white" />,
    image: "/images/teaching/ees404.png",
    description: "Practical application of numerical methods in Earth Sciences. Introduction to coding (Python/Fortran) for solving differential equations and modeling atmospheric flows.",
    details: "Focuses on finite difference methods, time-stepping schemes, and stability analysis. Students will build a simple 1D advection-diffusion model from scratch."
  },
  {
    code: "EES 409",
    title: "Tropical Weather and Climate",
    level: "Advanced Elective",
    credits: "3 Credits",
    semester: "Monsoon Semester",
    icon: <BookOpen className="h-8 w-8 text-white" />,
    image: "/images/teaching/ees404.png",
    description: "Focuses on weather systems unique to the tropics, including tropical cyclones, easterly waves, the ITCZ, and the El Niño-Southern Oscillation (ENSO).",
    details: "Understanding the scale interactions in the tropics, from cumulus convection to the Madden-Julian Oscillation (MJO) and planetary waves."
  },
  {
    code: "IDC 602",
    title: "Seminar Delivery and Attending Course",
    level: "Graduate Seminar",
    credits: "2 Credits",
    semester: "Both Semesters",
    icon: <Presentation className="h-8 w-8 text-white" />,
    image: "/images/teaching/ees404.png",
    description: "Developing essential scientific communication skills. Students learn to present research findings effectively, critique scientific literature, and engage in academic discourse.",
    details: "Weekly sessions where students present papers or their own research. Feedback is provided on slide design, clarity of speech, and handling Q&A."
  }
];

export default function TeachingPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

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
              onClick={() => setSelectedCourse(course)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
            >
              
              {/* --- CARD VISUAL HEADER --- */}
              <div className={`relative h-48 w-full p-6 flex flex-col justify-between overflow-hidden`}>
                 {/* Image with overlay */}
                 <div className="absolute inset-0 bg-slate-800 z-0">
                    <Image 
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20 z-5"></div>
                 
                 {/* Icons & Badges */}
                 <div className="relative z-10 flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/20">
                        {course.icon}
                    </div>
                    <span className="bg-black/40 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded backdrop-blur-sm">
                        {course.level}
                    </span>
                 </div>
                 
                 <div className="relative z-10 text-white/90 font-mono text-sm font-bold tracking-wider mt-auto pt-4">
                    {course.code}
                 </div>
              </div>

              {/* --- CARD CONTENT --- */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                    {course.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {course.description}
                </p>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                    <span className="inline-flex items-center text-sm font-semibold text-emerald-600 transition-colors">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= MODAL / POPUP ================= */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop (Click to close) */}
            <div 
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedCourse(null)}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl z-10 animate-fade-in-up flex flex-col max-h-[90vh]">
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedCourse(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* --- FULL IMAGE SECTION --- */}
                {/* using object-contain with black background ensures NO cropping */}
                <div className="relative h-64 md:h-96 w-full bg-slate-950 flex-shrink-0">
                    <Image 
                        src={selectedCourse.image}
                        alt={selectedCourse.title}
                        fill
                        className="object-contain" 
                        priority
                    />
                </div>

                {/* --- DETAILS SECTION --- */}
                <div className="p-8 overflow-y-auto">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium text-slate-500">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                            {selectedCourse.level}
                        </span>
                        <div className="flex items-center gap-2">
                             <Clock className="h-4 w-4" /> {selectedCourse.credits}
                        </div>
                        <div className="flex items-center gap-2">
                             <Calendar className="h-4 w-4" /> {selectedCourse.semester}
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedCourse.title}</h2>
                    <p className="text-emerald-700 font-mono text-lg mb-6">{selectedCourse.code}</p>
                    
                    <div className="space-y-4">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                             <h4 className="font-bold text-slate-900 mb-2">Overview</h4>
                             <p className="text-slate-700 leading-relaxed">
                                {selectedCourse.description}
                             </p>
                        </div>
                        
                        <div>
                             <h4 className="font-bold text-slate-900 mb-2">Syllabus Highlights</h4>
                             <p className="text-slate-600 leading-relaxed">
                                {selectedCourse.details || "Detailed syllabus information is available on the internal portal."}
                             </p>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                    <button 
                        onClick={() => setSelectedCourse(null)}
                        className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-colors"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
      )}


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
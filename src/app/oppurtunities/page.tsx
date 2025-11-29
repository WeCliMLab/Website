import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Clock, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Cpu,
  Globe
} from 'lucide-react';

export default function OpportunitiesPage() {
  
  // --- DATA: Disciplines (Tag Cloud) ---
  const disciplines = [
    "Atmospheric Sciences", "Oceanic Sciences", "Physics", "Geophysics", "Mathematics", "Computer Science", "Data Sciences", "Remote Sensing", "Artificial Intelligence"  
       
      
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold uppercase tracking-wider text-xs mb-6">
            <Sparkles className="h-4 w-4" /> We are Hiring
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Join the Next Generation of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Climate Scientists
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            If you have a strong academic background and a passion for solving climate challenges using Physics, AI, or Data Science, we are looking for you.
          </p>
          
          {/* Email CTA */}
          <a 
            href="mailto:rajuattada@iisermohali.ac.in" 
            className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Mail className="mr-2 h-5 w-5 text-emerald-600" />
            Contact Dr. Raju Attada
          </a>
        </div>
      </section>

      {/* ================= WHO WE ARE LOOKING FOR ================= */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                Interdisciplinary Backgrounds Welcome
            </p>
            <div className="flex flex-wrap justify-center gap-3">
                {disciplines.map((d, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-default">
                        {d}
                    </span>
                ))}
            </div>
        </div>
      </div>

      {/* ================= POSITIONS GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* --- PHD CARD --- */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-16 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10 mb-6">
                    <div className="h-14 w-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
                        <GraduationCap className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">PhD Program</h2>
                    <p className="text-emerald-600 font-medium">Graduate Researchers</p>
                </div>

                <div className="space-y-6 flex-grow relative z-10">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Eligibility</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>Masters/M.Tech in relevant discipline.</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>Valid <b>CSIR/UGC-JRF</b>, <b>GATE</b> or <b>DST-Inspire</b> fellowship.</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">How to Apply</h4>
                        <p className="text-sm text-slate-600 mb-3">
                            Applications are invited twice a year through the IISER Mohali Institute Advertisement.
                        </p>
                        <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                            <p className="text-xs text-amber-800 font-semibold">
                                🌟 We strongly encourage candidates to apply for the <span className="underline">Prime Minister's Research Fellows (PMRF)</span> Scheme.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- POSTDOC CARD --- */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10 mb-6">
                    <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                        <Briefcase className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Post-Doctoral</h2>
                    <p className="text-blue-600 font-medium">Research Fellows</p>
                </div>

                <div className="space-y-6 flex-grow relative z-10">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Eligibility</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>PhD Degree (or thesis submitted).</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Strong publication record in relevant fields.</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">How to Apply</h4>
                        <p className="text-sm text-slate-600 mb-4">
                            Email your resume (with 1-page research summary) and a brief research proposal ({'<'}1000 words) to Dr. Raju Attada.
                        </p>
                        <a href="mailto:rajuattada@iisermohali.ac.in" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800">
                            Send Email Application <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* --- Project */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-16 bg-purple-50 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10 mb-6">
                    <div className="h-14 w-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-4">
                        <Clock className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Short-Term</h2>
                    <p className="text-purple-600 font-medium">Project Positions </p>
                </div>

                <div className="space-y-6 flex-grow relative z-10">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Eligibility</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span> JRF/Lecturership or GATE .</span>
                            </li>
                            {/* <li className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>IISER Mohali Summer Research Program.</span>
                            </li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">How to Apply</h4>
                        <p className="text-sm text-slate-600 mb-4">
                            Interested students may email their resume directly to the PI.
                        </p>
                        <a href="mailto:rajuattada@iisermohali.ac.in" className="inline-flex items-center text-sm font-bold text-purple-600 hover:text-purple-800">
                            Contact for Projects <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

          
            {/* ---  INTERN CARD --- */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-16 bg-purple-50 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10 mb-6">
                    <div className="h-14 w-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-4">
                        <Clock className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Short-Term</h2>
                    <p className="text-purple-600 font-medium"> Interns</p>
                </div>

                <div className="space-y-6 flex-grow relative z-10">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Eligibility</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span> Final year Masters or M.Tech students  .</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>IISER Mohali Summer Research Program.</span>
                            </li>
                          
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">How to Apply</h4>
                        <p className="text-sm text-slate-600 mb-4">
                            Interested students may email their resume directly to the PI.
                        </p>
                        <a href="mailto:rajuattada@iisermohali.ac.in" className="inline-flex items-center text-sm font-bold text-purple-600 hover:text-purple-800">
                            Contact for Projects <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* ================= LOCATION / CONTACT ================= */}
      <section className="bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
             <div className="flex flex-col md:flex-row gap-12 items-start">
                
                {/* Text Info */}
                <div className="flex-1 space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Us</h2>
                        <p className="text-slate-600">
                            We are located within the scenic campus of IISER Mohali in the Knowledge City, Sector 81.
                        </p>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-3 rounded-lg text-slate-700">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">Office Address</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Weather and Climate Modelling Lab,<br/>
                                5C, Academic Block-2,<br/>
                                Department of Earth and Environmental Sciences,<br/>
                                IISER Mohali, Sector 81, S.A.S. Nagar,<br/>
                                PO-Manauli Mohali, Punjab 140306, INDIA.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-3 rounded-lg text-slate-700">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">General Inquiries</h4>
                            <p className="text-slate-600 text-sm mb-2">
                                For any query regarding our research work, collaborations, or joining our group:
                            </p>
                            <a href="mailto:rajuattada@iisermohali.ac.in" className="text-emerald-600 font-bold hover:underline">
                                rajuattada@iisermohali.ac.in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="flex-1 w-full h-80 bg-slate-200 rounded-2xl overflow-hidden relative">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.502096783852!2d76.72688027622813!3d30.66465498967964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe954dc3d3b73%3A0x7d6560965d1b7f0!2sIndian%20Institute%20of%20Science%20Education%20and%20Research%20Mohali!5e0!3m2!1sen!2sin!4v1708890000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>

             </div>
          </div>
      </section>

    </div>
  );
}

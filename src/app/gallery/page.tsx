'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Users, 
  Mic, 
  Globe, 
  PartyPopper,
  Presentation
} from 'lucide-react';

// --- DATA: CONFERENCES ---
const conferences = [
  {
    title: "INTROMET 2025",
    location: "IITM, Pune, Maharastra",
    date: "November 18 – 20, 2025",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "AOGS 2025 (22nd Annual Meeting)",
    location: "Sands Expo & Convention Centre, Singapore",
    date: "July 27 – August 1, 2025",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Indo-German School on SLESS",
    location: "IIT Roorkee",
    date: "March 3 – 7, 2025",
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "India - UK Climate Action Summit",
    location: "ISB, Mohali",
    date: "Feburary 2025",
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "EGU General Assembly 2024",
    location: "Vienna, Austria",
    date: "April 2024",
    color: "from-orange-400 to-red-400"
  },
  {
    title: "ICRC - CORDEX 2023",
    location: "IITM, Pune",
    date: "September 2023",
    color: "from-slate-600 to-slate-400"
  },
  {
    title: "AOGS 2023",
    location: "Singapore",
    date: "July-August 2023",
    color: "from-blue-500 to-blue-300"
  },
  {
    title: "EGU General Assembly 2023",
    location: "Vienna, Austria",
    date: "April 2023",
    color: "from-orange-400 to-amber-300"
  },
  {
    title: "FORESEED 2023",
    location: "IIT Roorkee",
    date: "January 2023",
    color: "from-emerald-600 to-green-500"
  },
  {
    title: "TROPMET 2022",
    location: "IISER Bhopal",
    date: "November 29-December 02 2022",
    color: "from-sky-500 to-indigo-500"
  }
];

// --- DATA: LAB VISITS ---
const labVisits = [
  {
    visitor: "Dr. Madhavan Nair Rajeevan",
    role: "Former Secretary, Ministry of Earth Sciences",
    date: "21 June 2023",
    topic: "Lab interaction and group discussion on Indian Monsoon",
    imagePlaceholder: "MR"
  },
  {
    visitor: "Dr. Kieran M. R. Hunt",
    role: "Research Scientist, University of Reading, UK",
    date: "27 July 2023",
    topic: "Talk on 'Western Disturbances and Climate Variability'",
    imagePlaceholder: "KH"
  },
  {
    visitor: "Dr. Chandan Sarangi",
    role: "Assistant Professor, IIT Madras",
    date: "2023",
    topic: "Visit and Interaction regarding Aerosols",
    imagePlaceholder: "CS"
  },
  {
    visitor: "Dr. Rajesh Kumar",
    role: "Scientist, NCAR, Boulder, US",
    date: "2023",
    topic: "Interaction on Air Quality Modelling",
    imagePlaceholder: "RK"
  }
];

// --- DATA: GROUP ACTIVITIES ---
const activities = [
  {
    title: "Dinner & Party",
    desc: "Celebrating lab milestones and festivals together.",
    icon: <PartyPopper className="h-8 w-8 text-white" />,
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Farewells",
    desc: "Bidding adieu to our graduating scholars and fellows.",
    icon: <Users className="h-8 w-8 text-white" />,
    color: "from-amber-400 to-orange-400"
  },
  {
    title: "Teachers' Day",
    desc: "A day of gratitude and celebration with our mentors.",
    icon: <Calendar className="h-8 w-8 text-white" />,
    color: "from-teal-400 to-emerald-400"
  },
  {
    title: "Weekly Presentations",
    desc: "Journal clubs and research updates every Friday.",
    icon: <Presentation className="h-8 w-8 text-white" />,
    color: "from-blue-500 to-indigo-500"
  }
  {
    title: "Lab Trips",
    desc: "Enjoying the Nature.",
    icon: <Calendar className="h-8 w-8 text-white" />,
    color: "from-blue-500 to-indigo-500"
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'conferences' | 'visits' | 'activities'>('conferences');

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <div className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Camera className="h-10 w-10 text-emerald-400" />
            Gallery & Events
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A glimpse into our academic journey, from international conferences to lab community life.
          </p>
        </div>
      </div>

      {/* ================= TABS NAVIGATION ================= */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-2 md:space-x-8 py-4 overflow-x-auto">
                {['conferences', 'visits', 'activities'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all whitespace-nowrap ${
                            activeTab === tab 
                            ? 'bg-emerald-600 text-white shadow-md transform scale-105' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        {tab === 'conferences' && "Conferences"}
                        {tab === 'visits' && "Lab Visits"}
                        {tab === 'activities' && "Group Activities"}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* ================= CONTENT AREA ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* --- TAB 1: CONFERENCES --- */}
        {activeTab === 'conferences' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {conferences.map((conf, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-slate-200">
                        {/* Visual Header (Placeholder for photo) */}
                        <div className={`h-40 w-full bg-gradient-to-r ${conf.color} relative p-6 flex items-center justify-center`}>
                            {/* Uncomment below when you have images */}
                            {/* <Image src={`/images/conferences/${idx}.jpg`} fill className="object-cover opacity-50" /> */}
                            
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                                <Globe className="h-8 w-8 text-white" />
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 rounded-full w-fit">
                                {conf.date}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                                {conf.title}
                            </h3>
                            <div className="mt-auto flex items-center gap-2 text-slate-500 text-sm">
                                <MapPin className="h-4 w-4" />
                                {conf.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* --- TAB 2: LAB VISITS --- */}
        {activeTab === 'visits' && (
            <div className="space-y-6 animate-fade-in">
                {labVisits.map((visit, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-8">
                        
                        {/* Avatar / Photo Area */}
                        <div className="flex-shrink-0">
                             <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-3xl font-bold text-slate-400 shadow-inner">
                                {/* Uncomment below for real photo */}
                                {/* <Image src="/path/to/visitor.jpg" width={128} height={128} className="rounded-full object-cover" /> */}
                                {visit.imagePlaceholder}
                             </div>
                        </div>

                        {/* Details */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-900">{visit.visitor}</h3>
                            <p className="text-emerald-600 font-medium mb-4">{visit.role}</p>
                            
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 inline-block md:block w-full">
                                <div className="flex items-start justify-center md:justify-start gap-3">
                                    <Mic className="h-5 w-5 text-slate-400 mt-0.5" />
                                    <div>
                                        <p className="text-slate-700 font-medium">{visit.topic}</p>
                                        <p className="text-slate-400 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                                            <Calendar className="h-3 w-3" /> {visit.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        )}

        {/* --- TAB 3: GROUP ACTIVITIES --- */}
        {activeTab === 'activities' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                {activities.map((act, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-video bg-slate-100 shadow-md hover:shadow-xl transition-all">
                        
                        {/* Background Placeholder Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${act.color}`}></div>
                        
                        {/* Uncomment for Real Image */}
                        {/* <Image src="/path/to/party.jpg" fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-center p-6">
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                                {act.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                                {act.title}
                            </h3>
                            <p className="text-white/90 text-sm max-w-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {act.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )}

      </div>

    </div>
  );
}

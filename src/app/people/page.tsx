import React from 'react';
import { 
  Mail, 
  GraduationCap, 
  Award, 
  MapPin, 
  User, 
  Users, 
  Briefcase, 
  Globe
} from 'lucide-react';

// --- HELPER COMPONENTS ---

// 1. The Avatar Placeholder (Generates initials from name)
const AvatarPlaceholder = ({ name, size = "md", color = "blue" }: { name: string, size?: "lg" | "md" | "sm", color?: string }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const sizeClasses = {
    lg: "w-32 h-32 text-3xl",
    md: "w-20 h-20 text-xl",
    sm: "w-12 h-12 text-sm"
  };

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    emerald: "bg-emerald-100 text-emerald-700",
    indigo: "bg-indigo-100 text-indigo-700",
    slate: "bg-slate-200 text-slate-600",
    amber: "bg-amber-100 text-amber-700"
  };

  return (
    <div className={`rounded-full flex items-center justify-center font-bold tracking-widest shadow-inner ${sizeClasses[size]} ${colorClasses[color] || colorClasses.slate}`}>
      {initials}
    </div>
  );
};

// 2. Social/Contact Button
const ContactLink = ({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) => (
  <a 
    href={href} 
    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default function PeoplePage() {

  // --- DATA ---
  
  const pi = {
    name: "Dr. Raju Attada",
    role: "Principal Investigator",
    area: "Indian Monsoons, Weather and Climate Extremes, Climate Modelling and Data Assimilation",
    email: "rajuattada@iisermohali.ac.in",
    memberships: [
      "Royal Meteorological Society (RMetS)", "AGU", "IMS", "Ocean Society of India", "AOGS", "SAMA", "JpGU", "AMS"
    ]
  };

  const phdStudents = [
    {
      name: "Athira K S",
      role: "PhD Scholar",
      period: "Jan 2021 - Present",
      badge: "Institute Research Fellow",
      interests: "Winter Weather Extremes, Cold waves, Arctic-midlatitude Teleconnections, WRF",
      email: "ph20044@iisermohali.ac.in"
    },
    {
      name: "Adil Muhammed K",
      role: "PhD Scholar",
      period: "Jan 2025 - Present",
      interests: "Data Assimilation",
      email: "ph24087@iisermohali.ac.in"
    },
    {
      name: "Himanshu Pandey",
      role: "PhD Scholar",
      period: "August 2025 - Present",
      interests: "Extreme Events",
      email: "ph25058@iisermohali.ac.in"
    }
    
  ];

  const jrfs = [
    {
      name: "Akash Shit",
      role: "JRF",
      period: "Aug 2024 - Present",
      interests: "Atmospheric Convection, Extreme Events Prediction",
      email: "akashshet.dgp@gmail.com"
    },
    {
      name: "Nikhil Hale",
      role: "JRF",
      period: "Aug 2024 - Present",
      interests: "Climate Modelling, Climate extremes, Polar climate",
      email: "nikhilhale4@gmail.com"
    },
    {
      name: "Shiv Shankar Singh",
      role: "JRF",
      period: "June 2025 - Present",
      interests: "Climate Modelling, AI/ML",
      email: "shivshankar3679@gmail.com"
    },
    {
      name: "Gopika V Gopal",
      role: "JRF",
      period: "November 2025 - Present",
      interests: "Himalayan Extreme Weather Events, Climate Projections, Climate Modelling, South Asian Summer Monsoon",
      email: "gopikavgopal99@gmail.com"
    }
  ];

    const postDocs = [
    {
      name: "Dr. Singuru Madhusai",
      role: "Institute Post-Doctoral Fellow",
      period: "May 2025 - Present",
      interests: "NWP, Indian Monsoons, Tropical Cyclones, Climate Variability",
      email: "madhusai@iisermohali.ac.in"
    }
  ];

  const masters = [
    {
      name: "Deepak Singh",
      role: "MS Student",
      period: "May 2025 - Present",
      project: "Spatio-temporal variability of cloud cover over indian regions",
      email: "ms21268@iisermohali.ac.in"
    }
  ];

  const alumni = [
    {
      name: "Nischal Sharma",
      role: "PhD Scholar (2020-2025)",
      badge: "PMRF",
      current: "Post-Doctoral Fellow, University of Reading, UK"
    },
    {
      name: "Rohtash",
      role: "PhD Scholar (2020-2025)",
      // period: "Aug 2020 - Present",
      badge: "PMRF", 
      current: "Post-Doctoral Fellow"
      // interests: "Himalayan climate, Indian summer monsoon, Regional climate modelling",
      // email: "ph20017@iisermohali.ac.in"
    {
      name: "Dr. Krishna Kumar Shukla",
      role: "Post-Doc (2020-2022)",
      current: "Project Scientist D, IMD New Delhi"
    },
    {
      name: "Dr. Amita Kumari",
      role: "Post-Doc (2023)",
      current: "Post Doctoral Researcher, Hebrew University of Jerusalem"
    },
    {
      name: "Dr. Pawan Kumar Chaubey",
      role: "Post-Doc (2023-2024)",
      current: "Research Fellow, NTU Singapore"
    },
    {
      name: "Akash P.",
      role: "JRF (2021)",
      current: "PhD, POSTECH, South Korea"
    },
    {
      name: "Pravin Punde",
      role: "JRF (2021-2022)",
      current: "PhD, UiT The Arctic University of Norway"
    },
    {
      name: "Debasish Mahapatra",
      role: "JRF (2023)",
      current: "PhD, Ghent University, Belgium"
    },
    {
      name: "Sreehari K",
      role: "JRF (2022-2023)",
      current: "PhD, Wageningen University & Research, Netherlands"
    },
    {
      name: "Deepak P",
      role: "JRF (2022-2023)",
      current: "PhD, IIT Roorkee"
    },
    {
      name: "Nirvan Abhilash",
      role: "JRF (2024)",
      current: "PhD, University of Houston, USA"
    },
    {
      name: "Sanjeev Singh",
      role: "JRF (2023-2025)",
      current: "PhD, NIT Rourkela"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HERO / HEADER ================= */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            A diverse group of researchers, students, and scientists working together to decode the complexities of regional climate and weather extremes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* ================= PI SECTION ================= */}
        <section>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 items-start">
            
            {/* PI Avatar */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
               {/* Change size to "lg" for bigger circle */}
               <AvatarPlaceholder name={pi.name} size="lg" color="emerald" />
            </div>

            {/* PI Content */}
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{pi.name}</h2>
                <p className="text-emerald-700 font-semibold text-lg">{pi.role}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-slate-400 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Research Areas</p>
                      <p className="text-slate-600">{pi.area}</p>
                    </div>
                  </div>
                  <ContactLink 
                    icon={<Mail className="h-4 w-4" />} 
                    text={pi.email} 
                    href={`mailto:${pi.email}`} 
                  />
                </div>

                <div className="space-y-2">
                   <p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                     <Award className="h-4 w-4" /> Memberships
                   </p>
                   <div className="flex flex-wrap gap-2">
                     {pi.memberships.map((m) => (
                       <span key={m} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">
                         {m}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CURRENT RESEARCHERS ================= */}
        
        {/* Post-Docs */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-emerald-500 pl-4">Post-Doctoral Fellows</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {postDocs.map((person, idx) => (
                <TeamCard key={idx} person={person} color="teal" />
             ))}
          </div>
        </section>

        {/* PhD Students */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-500 pl-4">Graduate Students (PhD)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {phdStudents.map((person, idx) => (
                <TeamCard key={idx} person={person} color="indigo" />
             ))}
          </div>
        </section>

        {/* JRFs & Masters - Combined Row logic or Separate Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-amber-500 pl-4">Junior Research Fellows</h3>
                <div className="space-y-6">
                    {jrfs.map((person, idx) => (
                        <TeamCard key={idx} person={person} color="amber" compact />
                    ))}
                </div>
            </section>
            
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-slate-500 pl-4">Masters Students</h3>
                <div className="space-y-6">
                    {masters.map((person, idx) => (
                        <TeamCard key={idx} person={person} color="slate" compact />
                    ))}
                </div>
            </section>

            {/* <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-amber-500 pl-4">Junior Research Fellows</h3>
                <div className="space-y-6">
                    {jrfs.map((person, idx) => (
                        <TeamCard key={idx} person={person} color="amber" compact />
                    ))}
                </div>
            </section>
            
            <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-amber-500 pl-4">Junior Research Fellows</h3>
                <div className="space-y-6">
                    {jrfs.map((person, idx) => (
                        <TeamCard key={idx} person={person} color="amber" compact />
                    ))}
                </div>
            </section> */}
            
        </div>


        {/* ================= ALUMNI SECTION ================= */}
        <section className="pt-12 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-slate-400" />
            <h3 className="text-2xl font-bold text-slate-900">Alumni & Past Members</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {alumni.map((alum, idx) => (
               <div key={idx} className="bg-white p-4 rounded-lg border border-slate-100 hover:border-slate-300 transition-colors flex items-start gap-4">
                  <div className="mt-1">
                    <AvatarPlaceholder name={alum.name} size="sm" color="slate" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{alum.name}</h4>
                    <p className="text-xs text-slate-500 mb-2">{alum.role}</p>
                    {alum.badge && (
                       <span className="inline-block px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] uppercase font-bold rounded mb-2">
                         {alum.badge}
                       </span>
                    )}
                    <div className="flex items-start gap-1.5 text-xs text-emerald-700 font-medium">
                        <Briefcase className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>{alum.current}</span>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
}


// --- Reusable Card Component for Grid ---
function TeamCard({ person, color, compact = false }: { person: any, color: string, compact?: boolean }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
       
       <div className="flex items-start justify-between mb-4">
          <AvatarPlaceholder name={person.name} size="md" color={color} />
          {person.badge && (
            <span className="px-2 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-bold uppercase tracking-wide border border-yellow-100 rounded-full">
                {person.badge}
            </span>
          )}
       </div>

       <div>
          <h4 className="text-xl font-bold text-slate-900">{person.name}</h4>
          <p className={`text-slate-500 font-medium mb-4 ${compact ? 'text-xs' : 'text-sm'}`}>
            {person.role} • {person.period}
          </p>

          {/* Interests / Project */}
          <div className="mb-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                {person.project ? 'Project' : 'Research Interests'}
            </p>
            <p className="text-sm text-slate-700 leading-snug">
                {person.project || person.interests}
            </p>
          </div>
       </div>

       <div className="mt-auto pt-4 border-t border-slate-100">
         <a href={`mailto:${person.email}`} className="text-sm text-slate-500 hover:text-emerald-600 flex items-center gap-2 transition-colors">
            <Mail className="h-4 w-4" />
            <span className="truncate">{person.email}</span>
         </a>
       </div>
    </div>
  );
}

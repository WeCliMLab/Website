import React from 'react';
import Image from 'next/image';
import {
  Mail,
  GraduationCap,
  Award,
  Users,
  Briefcase,
  BookOpen,
  FileText,
  PenTool
} from 'lucide-react';

// --- HELPER COMPONENTS ---

// 1. The Avatar Placeholder
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
    amber: "bg-amber-100 text-amber-700",
    teal: "bg-teal-100 text-teal-700",
    rose: "bg-rose-100 text-rose-700"
  };

  return (
    <div className={`rounded-full flex items-center justify-center font-bold tracking-widest shadow-inner flex-shrink-0 ${sizeClasses[size]} ${colorClasses[color] || colorClasses.slate}`}>
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
      "Royal Meteorological Society (RMetS)", "American Geophysical Union (AGU)", "Indian Meteorological Society (IMS)", "Ocean Society of India (OSI)", "Asia Oceania Geosciences Society (AOGS)", "South Asian Meteorological Association (SAMA)", "Japan Geoscience Union (JpGU)", "American Meteorological Society (AMS)"
    ],
    // --- SOCIAL MEDIA CONFIGURATION ---
    // STEP 1: Create a folder in your project: /public/images/icons/
    // STEP 2: Add your PNG/JPG/SVG files there (e.g., google-scholar.png)
    // STEP 3: Update the 'imageSrc' paths below to match your filenames.
    socials: [
      {
        name: "Google Scholar",
        imageSrc: "/images/icons/google-scholar.png",
        href: "https://scholar.google.co.in/citations?user=rajuattada"
      },
      {
        name: "ResearchGate",
        imageSrc: "/images/icons/research-gate.png",
        href: "https://www.researchgate.net/profile/Raju-Attada"
      },
      {
        name: "ORCID",
        imageSrc: "/images/icons/orcid.png",
        href: "https://orcid.org/"
      },
      {
        name: "LinkedIn",
        imageSrc: "/images/icons/linkedin.png",
        href: "https://www.linkedin.com/"
      },
      {
        name: "X (Twitter)",
        imageSrc: "/images/icons/twitter.png",
        href: "https://x.com/"
      }
    ]
  };

  const phdStudents = [
    {
      name: "Athira K S",
      role: "PhD Scholar",
      period: "January 2021 - Present",
      badge: "Institute Research Fellow",
      interests: "Winter Weather Extremes, Cold waves, Arctic-midlatitude Teleconnections, WRF",
      email: "ph20044@iisermohali.ac.in"
    },
    {
      name: "Adil Muhammed I K",
      role: "PhD Scholar",
      period: "January 2025 - Present",
      interests: "Extreme Rainfall Events, Data Assimilation",
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

  const postDocs = [
    {
      name: "Dr. Singuru Madhusai",
      role: "Institute Post-Doctoral Fellow",
      period: "May 2025 - Present",
      interests: "NWP, Indian Monsoons, Tropical Cyclones, Climate Modelling and Climate Variability",
      email: "madhusai@iisermohali.ac.in"
    }
  ];

  const jrfs = [
    {
      name: "Akash Shit",
      role: "JRF",
      period: "August 2024 - Present",
      interests: "Atmospheric Convection, Extreme Events Prediction",
      email: "akashshet.dgp@gmail.com"
    },
    {
      name: "Nikhil Hale",
      role: "JRF",
      period: "August 2024 - Present",
      interests: "Climate Modelling, Climate Extremes, Polar climate",
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

  const masters = [
    {
      name: "Deepak Singh",
      role: "MS Student",
      period: "May 2025 - Present",
      project: "Spatio-temporal variability of Cloud Cover over Indian Regions",
      email: "ms21268@iisermohali.ac.in"
    }
  ];

  const Interns = [
    {
      name: "Pranay Chakraborty",
      role: "Intern Student",
      period: "June - Present",
      project: "Precipitation-Convective vs Large-Scale."
    },

  ];

  // --- ALUMNI DATA ---

  const alumniPhD = [
    {
      name: "Dr. Nischal Sharma",
      role: "PhD Scholar (2020-2025)",
      badge: "Prime Minister's Research Fellow (PMRF)",
      interests: "Regional Climate Modelling, Indian Winter Monsoon, Extreme Events",
      current: "Post-Doctoral Fellow, University of Reading, UK",
      email: "ph19061@iisermohali.ac.in"
    },
    {
      name: "Dr. Rohtash Saini",
      role: "PhD Scholar (2020-2025)",
      badge: "Prime Minister's Research Fellow (PMRF)",
      interests: "Himalayan Climate, Indian Summer Monsoon, Regional Climate Modelling",
      current: "Post-Doctoral Fellow",
      email: "ph20017@iisermohali.ac.in "
    }
  ];

  const alumniPostDoc = [
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
    }
  ];

  const alumniJRF = [
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
    },
  ];

  const previousMasters = [
    {
      name: "Malavika M",
      role: "MS Student",
      period: "July 2024 - June 2025",
      thesis: "Indian cold waves inferred from Indian highest resolution datasets"
    },
    {
      name: "Himanshu Jain",
      role: "MS Student",
      period: "July 2023 - June 2024",
      thesis: "Federated Learning on non-iid data"
    },
    {
      name: "Ayush Kumar",
      role: "MS Student",
      period: "July 2023 - June 2024",
      thesis: "Enhancement of Data assimilation process using Neural networks"
    },
    {
      name: "Amitabha Satyajeet Govande",
      role: "MS Student",
      period: "August 2022 - August 2023",
      thesis: "Air pollution potential characteristics over India using reanalyses and machine learning approaches",
      current: "PhD, Institute of Risk Assessment Sciences, Utrecht University, the Netherlands",
      publication: "Govande, A., Attada, R. & Shukla, K.K. Predicting PM2.5 levels over Indian metropolitan cities using Recurrent Neural Networks. Earth Sci Inform 18, 1 (2024). https://doi.org/10.1007/s12145-024-01491-4."
    },
    {
      name: "Bajrang C.",
      role: "MS Student",
      period: "August 2021 - May 2022",
      interests: "Physical oceanography, Extreme Events",
      thesis: "Understanding the Monsoonal Extreme Rainfall events in Central India: Dynamics, Thermodynamics and Long-Term Climate Drivers",
      current: "PhD, University of Melbourne, Australia",
      publication: "Bajrang, C., Attada, R. & Goswami, B.N. Possible factors for the recent changes in frequency of central Indian Summer Monsoon precipitation extremes during 2005–2020. npj Climate and Atmospheric Science 6, 120 (2023). https://doi.org/10.1038/s41612-023-00450-y"
    },
    {
      name: "Meher Sanjana",
      role: "MS Student",
      period: "January 2021 - December 2021",
      interests: "Data science, Machine learning",
      thesis: "Prediction of winter rainfall over North-Western India using Artificial Neural Network approach"
    },
    {
      name: "Deepanshu Aggarwal",
      role: "MS Student",
      period: "August 2020 - May 2021",
      thesis: "Seasonal Mean and Extreme rainfall events over India during Indian Summer Monsoon in an Indian Regional Reanalaysis Framework",
      current: "Probationary Officer, State Bank of India",
      publications: [
        "Aggarwal, D., Attada, R., Shukla, K. K., Chakraborty, R., & Kunchala, R. K. (2022). Monsoon precipitation characteristics and extreme precipitation events over Northwest India using Indian high resolution regional reanalysis. Atmospheric Research, 105993. https://doi.org/10.1016/j.atmosres.2021.105993",
        "Aggarwal, D., Chakraborty, R. & Attada, R. Investigating bi-decadal precipitation changes over the Northwest Himalayas during the pre-monsoon: role of Pacific decadal oscillations. Clim Dyn (2023). https://doi.org/10.1007/s00382-023-06969-3"
      ]
    },
    {
      name: "Abhishek Kumar",
      role: "MS Student",
      period: "August 2020 - May 2021",
      thesis: "Thermal Stress over north-western India: Climatology, Trends and Extremes",
      current: "MBA, Indian Institute of Management Udaipur",
      publication: "K.K. Shukla, Attada, R., Abhishek Kumar, Kunchala, R. K., Sanikommu Sivareddy, (2022). Comprehensive analysis of thermal stress over northwest India: Climatology, trends and extremes, 44, Urban Climate. https://doi.org/10.1016/j.uclim.2022.101188"
    },
    {
      name: "K Lakshman",
      role: "M. Tech Student",
      period: "2020-2021",
      thesis: "Study of Heat Wave Characteristics Over East Coast of India using High-Resolution IMDAA Reanalysis",
      current: "PhD, National Institute of Technology Rourkela",
      publication: "Lakshman, K., Nadimpalli, R., Srivastava, A., Osuri, K.K., Attada, R. and Parekh, A. (2025), High-Resolution Analysis of Severe Heat Wave Dynamics and Thermal Discomfort Across India. Int J Climatol. https://doi.org/10.1002/joc.8753."
    }
  ];

  // --- PREVIOUS INTERNS ---
  const prevInterns = [
    {
      name: "Rishikesh Katakam",
      role: "Summer Intern",
      period: "June - August 2025",
      project: "Application of Neural Networks on Predicting Air Pollutants in Arid Regions."
    },
    {
      name: "Ksheetij Pandey",
      role: "Summer Intern",
      period: "June - August 2025",
      project: "Assessment of ENSO and IOD Impacts on Rainfall Variability over Northwest India"
    },
    {
      name: "Shrirang Bhale",
      role: "Summer Intern",
      period: "May - July 2024",
      project: "Vertical moist and thermodynamic structures from INSAT 3D remote sensing observation during extreme rainfall cases"
    },
    {
      name: "Sidharth S S",
      role: "Summer Intern",
      period: "May - July 2024",
      project: "AI/ML Frameworks for extreme rainfall events in Himachal Pradesh"
    },
    {
      name: "Sulekha Komeravelli",
      role: "Summer Intern",
      period: "May - July 2023",
      project: "Deaths due to coldwave conditions in northern states of India",
      email: "ms22259@iisermohali.ac.in"
    },
    {
      name: "Kartik Dixit",
      role: "Summer Intern",
      period: "May - July 2023",
      project: "Extreme Weather conditions induced mortality in India",
      email: "ms22230@iisermohali.ac.in"
    },
    {
      name: "Joyjit Mandal",
      role: "Summer Intern",
      period: "May - July 2023",
      project: "Rainfall prediction using Deep Learning",
      email: "joyjitmandal1@gmail.com"
    },
    {
      name: "Swastik Mishra",
      role: "Summer Intern",
      period: "May - July 2023",
      project: "Rainfall prediction over the Himalayan Region using Deep Learning",
      email: "swastikm26@gmail.com"
    },
    {
      name: "Mohamed Junaid",
      role: "Summer Intern",
      period: "May - July 2023",
      project: "Evaluation of HRRR forecasts on Extreme rainfall Events",
      email: "mohamed.junaid@niser.ac.in"
    },
    {
      name: "Manjima Mahesh",
      role: "MS Student",
      project: "Impact of aerosols transported from tropics to arctic on climate and monsoon",
      email: "ms19082@iisermohali.ac.in"
    },
    {
      name: "Nitu",
      role: "MS Student",
      project: "To explore importance and significance of weather and climate over Himalayan region",
      email: "ms20086@iisermohali.ac.in"
    },
    {
      name: "Ayush Kumar",
      role: "MS Student",
      project: "Downscaling of ocean fields by fusion of heterogeneous observations using Deep Learning algorithms",
      email: "ms19038@iisermohali.ac.in"
    },
    {
      name: "Abhirami",
      role: "MS Student",
      email: "ms18119@iisermohali.ac.in"
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

        {/* ================= 1. PI SECTION ================= */}
        <section>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 items-start">

            {/* PI Avatar */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
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

                  {/* Research Areas */}
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-slate-400 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Research Areas</p>
                      <p className="text-slate-600">{pi.area}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <ContactLink
                    icon={<Mail className="h-4 w-4" />}
                    text={pi.email}
                    href={`mailto:${pi.email}`}
                  />

                  {/* --- SOCIAL MEDIA SECTION (MOVED HERE) --- */}
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Connect</p>
                    <div className="flex flex-wrap gap-3">
                      {pi.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity bg-slate-100 border border-slate-200"
                          title={social.name}
                        >
                          {/* Image Component for Custom Icons */}
                          {/* Uses a fallback to gray if image missing, but user can upload to /public/images/icons/ */}
                          <Image
                            src={social.imageSrc}
                            alt={social.name}
                            fill
                            className="object-cover p-1"
                          />
                        </a>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Memberships Column */}
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

        {/* ================= 2. GRADUATE (PHD) STUDENTS ================= */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-500 pl-4">Graduate Students (PhD)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdStudents.map((person, idx) => (
              <TeamCard key={idx} person={person} color="indigo" />
            ))}
          </div>
        </section>

        {/* ================= 3. POST-DOCTORAL FELLOWS ================= */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-emerald-500 pl-4">Post-Doctoral Fellows</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postDocs.map((person, idx) => (
              <TeamCard key={idx} person={person} color="teal" />
            ))}
          </div>
        </section>

        {/* ================= 4. JUNIOR RESEARCH FELLOWS ================= */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-amber-500 pl-4">Junior Research Fellows</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jrfs.map((person, idx) => (
              <TeamCard key={idx} person={person} color="amber" />
            ))}
          </div>
        </section>


        {/* ================= 5. MASTERS STUDENTS ================= */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-slate-500 pl-4">Masters Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masters.map((person, idx) => (
              <TeamCard key={idx} person={person} color="slate" />
            ))}
          </div>
        </section>

        {/* ================= 6. INTERN STUDENTS ================= */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-rose-500 pl-4">Current Intern Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Interns.map((person, idx) => (
              <TeamCard key={idx} person={person} color="rose" />
            ))}
          </div>
        </section>

        {/* ================= 7. ALUMNI & PAST MEMBERS SECTION ================= */}
        <section className="pt-12 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-10">
            <Users className="h-6 w-6 text-slate-400" />
            <h3 className="text-3xl font-bold text-slate-900">Alumni & Past Members</h3>
          </div>

          <div className="space-y-12">

            {/* 7.1 PhD Graduates */}
            <AlumniGroup title="PhD Graduates" members={alumniPhD} />

            {/* 7.2 Post-Doctoral Fellows */}
            <AlumniGroup title="Post-Doctoral Fellows" members={alumniPostDoc} />

            {/* 7.3 Junior Research Fellows */}
            <AlumniGroup title="Junior Research Fellows" members={alumniJRF} />

            {/* 7.4 Previous Masters Students */}
            {previousMasters.length > 0 && (
              <AlumniGroup
                title="Masters Students"
                members={previousMasters}
                showAvatar={false}
              />
            )}

            {/* 7.5 Previous Intern Students */}
            {prevInterns.length > 0 && (
              <AlumniGroup
                title="Intern Students"
                members={prevInterns}
                showAvatar={false} // 
              />
            )}

          </div>
        </section>

      </div>
    </div>
  );
}


// --- Reusable Team Card (Grid) ---
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
          {person.role} {person.period ? `• ${person.period}` : ''}
        </p>
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
        {person.email ? (
          <a href={`mailto:${person.email}`} className="text-sm text-slate-500 hover:text-emerald-600 flex items-center gap-2 transition-colors">
            <Mail className="h-4 w-4" />
            <span className="truncate">{person.email}</span>
          </a>
        ) : <span className="h-4 block"></span>}
      </div>
    </div>
  );
}

// --- Reusable Alumni Group Section ---
function AlumniGroup({
  title,
  members,
  color = "slate",
  showAvatar = true // Default to showing avatar
}: {
  title: string,
  members: any[],
  color?: string,
  showAvatar?: boolean
}) {
  if (!members || members.length === 0) return null;

  return (
    <div>
      <h4 className="text-lg font-bold text-slate-700 mb-4 pl-3 border-l-4 border-slate-300">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((person, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg border border-slate-100 hover:border-slate-300 transition-colors flex items-start gap-4 h-full">

            {/* Only render Avatar if showAvatar is true */}
            {showAvatar && (
              <div className="mt-1">
                <AvatarPlaceholder name={person.name} size="sm" color={color} />
              </div>
            )}

            <div className="flex-1 space-y-2">
              <div>
                <h4 className="font-bold text-slate-900">{person.name}</h4>
                <p className="text-xs text-slate-500 mb-1">
                  {person.role} {person.period && `(${person.period})`}
                </p>

                {person.badge && (
                  <span className="inline-block px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] uppercase font-bold rounded mb-2">
                    {person.badge}
                  </span>
                )}
              </div>

              {/* --- Research Interests --- */}
              {person.interests && (
                <p className="text-xs text-slate-600">
                  <strong className="text-slate-700">Research Interests:</strong> {person.interests}
                </p>
              )}

              {/* --- Thesis Title --- */}
              {person.thesis && (
                <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                  <FileText className="h-3 w-3 mt-0.5 text-slate-400 flex-shrink-0" />
                  <span className="leading-tight"><strong>Thesis:</strong> {person.thesis}</span>
                </div>
              )}

              {/* --- Current Affiliation --- */}
              {person.current && (
                <div className="flex items-start gap-1.5 text-xs text-emerald-700 font-medium mt-1">
                  <Briefcase className="h-3 w-3 mt-0.5 flex-shrink-0" />
                  <span>{person.current}</span>
                </div>
              )}

              {/* --- Project (General) --- */}
              {person.project && (
                <div className="flex items-start gap-1.5 text-xs text-slate-600 mt-2 bg-slate-50 p-2 rounded">
                  <BookOpen className="h-3 w-3 mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">Project: {person.project}</span>
                </div>
              )}

              {/* --- Email (Added Support) --- */}
              {person.email && (
                <a href={`mailto:${person.email}`} className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-600 mt-2 transition-colors">
                  <Mail className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{person.email}</span>
                </a>
              )}

              {/* --- Publications (Single String) --- */}
              {person.publication && (
                <div className="text-[10px] text-slate-500 leading-normal border-t border-slate-100 pt-2 mt-2">
                  <div className="flex gap-1.5">
                    <PenTool className="h-3 w-3 flex-shrink-0 text-slate-400" />
                    <span>{person.publication}</span>
                  </div>
                </div>
              )}

              {/* --- Publications (Array) --- */}
              {person.publications && person.publications.map((pub: string, pIdx: number) => (
                <div key={pIdx} className="text-[10px] text-slate-500 leading-normal border-t border-slate-100 pt-2 mt-2">
                  <div className="flex gap-1.5">
                    <PenTool className="h-3 w-3 flex-shrink-0 text-slate-400" />
                    <span>{pub}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
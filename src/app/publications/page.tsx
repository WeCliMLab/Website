'use client';

import React, { useState } from 'react';
import { BookOpen, Search, ExternalLink, Calendar, Filter } from 'lucide-react';

// --- DATA: Full List of Publications ---
const publicationsData = [
  // === 2025 ===
  {
    year: 2025,
    title: "Analyzing and predicting ventilation coefficient over India using long-term reanalysis datasets and hybrid machine learning approach",
    authors: "Govande, A., Attada, R., Shukla, K.K. et al",
    journal: "Theoretical and Applied Climatology",
    doi: "https://doi.org/10.1007/s00704-025-05845-w"
  },
  {
    year: 2025,
    title: "Sudden stratospheric warming linked to extreme cold weather in North India: Physical processes and impacts",
    authors: "Athira, K. S., Attada, R., Barlow, M., & Brahmananda Rao, V.",
    journal: "Quarterly Journal of the Royal Meteorological Society",
    doi: "https://doi.org/10.1002/qj.70020"
  },
  {
    year: 2025,
    title: "Inter-annual variability of the Indian summer monsoon: A comparative study of the mid-Pliocene and pre-industrial eras",
    authors: "Dahiya, K., Chilukoti, N., & Attada, R.",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-025-07775-9"
  },
  {
    year: 2025,
    title: "Rainfall climatology and predictability over the Kingdom of Saudi Arabia at subseasonal scale",
    authors: "Luong, T.M., Dasari, H.P., Attada, R., Chang, H.-I. et al.",
    journal: "Quarterly Journal of the Royal Meteorological Society",
    doi: "https://doi.org/10.1002/qj.5015"
  },
  {
    year: 2025,
    title: "Declining summer circulation over the Eastern Mediterranean and Middle East",
    authors: "Gandham, H., Dasari, H.P., Luong, T.M., Attada, R. et al.",
    journal: "npj Clim Atmos Sci",
    doi: "https://doi.org/10.1038/s41612-025-01072-2"
  },
  {
    year: 2025,
    title: "Indian summer monsoon precipitation and extremes over the Indian Himalayas in WRF dynamically downscaled (HARv2) reanalysis",
    authors: "Saini, R., Attada, R.",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-025-07648-1"
  },
  {
    year: 2025,
    title: "Widespread monsoon extreme rainfall events over the central Indian region: Influence of dynamics and thermodynamics",
    authors: "Pandidurai, D., Attada, R., Chakraborty, R., Kumari, A. and Kumar, P.",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-025-07641-8"
  },
  {
    year: 2025,
    title: "Recent decades witness a strong east-west gradient of monsoon precipitation changes over Northern India",
    authors: "Kumari, A., Attada, R., Chowdary, J.S., Mahendra, N., Chilukoti, N. and Karumuri, R.K.",
    journal: "Atmospheric Research",
    doi: "https://doi.org/10.1016/j.atmosres.2025.108014"
  },
  {
    year: 2025,
    title: "Multi-Physics Ensemble Framework for Representing Western Himalayan Precipitation Climatology and Extremes: An Assessment from WRF Model",
    authors: "Nischal, S., & R. Attada",
    journal: "Wea. Forecasting",
    doi: "https://doi.org/10.1175/WAF-D-24-0057.1"
  },
  {
    year: 2025,
    title: "Surface air temperature variability over India in CMIP6 models during spring and early summer: after effect of El Niño",
    authors: "Velivelli, S., Satyanarayana, G.C., Chowdary, J.S., Srinivas G., Patekar D., Konda G., Attada, R., Parekh, A. & Gnanaseelan, C.",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-025-07654-3"
  },
  {
    year: 2025,
    title: "Strengthening of Indian Ocean Dipole-Rainfall Relationship in Sri Lanka After the 1980s",
    authors: "Kajakokulan, P., Jayawardena, S. & R. Attada",
    journal: "Earth Syst Environ",
    doi: "https://doi.org/10.1007/s41748-025-00572-8"
  },
  {
    year: 2025,
    title: "High-Resolution Analysis of Severe Heat Wave Dynamics and Thermal Discomfort Across India",
    authors: "Lakshman, K., Nadimpalli, R., Srivastava, A., Osuri, K.K., Attada, R. and Parekh, A.",
    journal: "Int J Climatol",
    doi: "https://doi.org/10.1002/joc.8753"
  },

  // === 2024 ===
  {
    year: 2024,
    title: "Deciphering the characteristics and drivers of the summer monsoon precipitation extremes over the Indian Himalayas",
    authors: "Saini, R., & Attada, R.",
    journal: "Journal of Geophysical Research: Atmospheres",
    doi: "https://doi.org/10.1029/2024JD042226"
  },
  {
    year: 2024,
    title: "Underlying physical mechanisms of winter precipitation extremes over India’s high mountain region",
    authors: "Nischal., Attada, R., Hunt, K.M.R. & Barlow, M.",
    journal: "Quarterly Journal of the Royal Meteorological Society",
    doi: "https://doi.org/10.1002/qj.4661"
  },
  {
    year: 2024,
    title: "Synoptic dynamics of cold waves over north India: Underlying mechanisms of distinct cold wave conditions",
    authors: "Athira, K.S., Attada, R. and Rao, V.B.",
    journal: "Weather and Climate Extremes",
    doi: "https://doi.org/10.1016/j.wace.2024.100641"
  },
  {
    year: 2024,
    title: "Investigation of dust‐induced direct radiative forcing over the Arabian Peninsula based on high-resolution WRF‐Chem simulations",
    authors: "Karumuri, R. K., Dasari, H. P., Gandham, H., Kunchala, R. K., Attada, R., Ashok, K., & Hoteit, I.",
    journal: "Journal of Geophysical Research: Atmospheres",
    doi: "https://doi.org/10.1029/2024JD040963"
  },
  {
    year: 2024,
    title: "Predicting PM2.5 levels over Indian metropolitan cities using Recurrent Neural Networks",
    authors: "Govande, A., Attada, R. & Shukla, K.K.",
    journal: "Earth Sci Inform",
    doi: "https://doi.org/10.1007/s12145-024-01491-4"
  },
  {
    year: 2024,
    title: "Climatology, trends, and future projections of aerosol optical depth over the Middle East and North Africa region in CMIP6 models",
    authors: "Kunchala RK, Attada, R., Karumuri RK, Seelanki V, Singh BB, Ashok K and Hoteit I",
    journal: "Front. Clim.",
    doi: "https://doi.org/10.3389/fclim.2024.1384202"
  },
  {
    year: 2024,
    title: "Exploring the factors responsible for aerosol asymmetric trends over indo-gangetic plain using remote sensing observations",
    authors: "Shukla, K.K., Attada, R., Sarangi, C., Kunchala, R.K., Devulapalli, V.P.",
    journal: "Journal of Atmospheric and Solar-Terrestrial Physics",
    doi: "https://doi.org/10.1016/j.jastp.2024.106220"
  },
  {
    year: 2024,
    title: "Long-term variability of the low level clouds across Indo-Gangetic Plain",
    authors: "Shukla, K.K., Kumar, G., Tomar, C.S., Attada, R., Niranjan Kumar, K., Mishra, A.K.",
    journal: "Dynamics of Atmospheres and Oceans",
    doi: "https://doi.org/10.1016/j.dynatmoce.2024.101521"
  },
  {
    year: 2024,
    title: "Contrasting influence of the 1997 and 2015 El Niño on the Indian Summer Monsoon Rainfall: Role of the Southern Hemisphere",
    authors: "Mahendra, N., Chilukoti, N., Chowdary, J. S., Attada, R., Kunchala, R. K., & Bhaskaran, P. K.",
    journal: "Global and Planetary Change",
    doi: "https://doi.org/10.1016/j.gloplacha.2024.104601"
  },
  {
    year: 2024,
    title: "Aerosol Climatology, Variability, and Trends over the Indo-Gangetic Plain in CMIP6 Models",
    authors: "Shukla, K.K., Kunchala R.K., Attada, R., Karumuri, R.K., Kondapalli, N.K., Seelanki, V., Singh. B.B.",
    journal: "Physics and Chemistry of the Earth",
    doi: "https://doi.org/10.1016/j.pce.2024.103693"
  },
  {
    year: 2024,
    title: "Impacts of two types of El Niño events on Spring Surface Air Temperature over Sri Lanka",
    authors: "Pathmarasa K., Attada, R., Dzung Nguyen-Le, Jasti S. Chowdary",
    journal: "Dynamics of Atmospheres and Oceans",
    doi: "https://doi.org/10.1016/j.dynatmoce.2024.101517"
  },
  {
    year: 2024,
    title: "Climatology, trends, and variability of planetary boundary layer height over India using high-resolution Indian reanalysis",
    authors: "Shukla, K.K., Attada, R., Pathaikara, A.",
    journal: "Theoretical and Applied Climatology",
    doi: "https://doi.org/10.1007/s00704-024-05102-6"
  },
  {
    year: 2024,
    title: "Evaluating the climatic state of Indian Summer Monsoon during the mid-Pliocene period using CMIP6 model simulations",
    authors: "Karishma D, N Chilukoti, Attada, R.",
    journal: "Dynamics of Atmospheres and Oceans",
    doi: "https://doi.org/10.1016/j.dynatmoce.2024.101455"
  },

  // === 2023 ===
  {
    year: 2023,
    title: "Characterization of a Regional Dust Storm Using RAMAN Lidar Over the Western Indian Region",
    authors: "Shukla, K. K., Sharma, S. K., Kumar, K. N., Kumar, P., Kamat, D. K., Attada, R., & Saha, S.",
    journal: " Journal of the Indian Society of Remote Sensing",
    doi: "https://doi.org/10.1007/s12524-023-01778-x"
  },
  {
    year: 2023,
    title: "Modeling and Monitoring Weather and Climate Characteristics of the Red Sea Region",
    authors: "Hoteit, I., ..Attada,R...and Coauthors",
    journal: "Bull. Amer. Meteor. Soc.",
    doi: "https://doi.org/10.1175/BAMS-D-19-0005.A"
  },
  {
    year: 2023,
    title: "Investigating bi-decadal precipitation changes over the Northwest Himalayas during the pre-monsoon: role of Pacific decadal oscillations",
    authors: "Aggarwal, D., Chakraborty, R. & Attada, R.",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-023-06969-3"
  },
  {
    year: 2023,
    title: "Possible factors for the recent changes in frequency of central Indian Summer Monsoon precipitation extremes during 2005–2020",
    authors: "Bajrang, C., Attada, R. & Goswami, B.N.",
    journal: "npj Climate and Atmospheric Science",
    doi: "https://doi.org/10.1038/s41612-023-00450-y"
  },
  {
    year: 2023,
    title: "Regional and temporal variability of Indian summer monsoon rainfall in relation to El Niño southern oscillation",
    authors: "Athira, K. S., Roxy, M. K., Dasgupta, P., Saranya, J. S., Singh, V. K., & Attada, R.",
    journal: "Scientific Reports",
    doi: "https://doi.org/10.1038/s41598-023-38730-5"
  },
  {
    year: 2023,
    title: "CMIP6 models informed summer human thermal discomfort conditions in Indian regional hotspot",
    authors: "Shukla, K. K., & Attada, R.",
    journal: "Scientific Reports",
    doi: "https://doi.org/10.1038/s41598-023-38602-y"
  },
  {
    year: 2023,
    title: "Analysis of Himalayan summer monsoon rainfall characteristics using Indian High-Resolution Regional Reanalysis",
    authors: "Rohtash, & Attada, R.",
    journal: "International Journal of Climatology",
    doi: "https://doi.org/10.1002/joc.8087"
  },
  {
    year: 2023,
    title: "Delving into Recent Changes in Precipitation Patterns over the Western Himalayas in a Global Warming Era",
    authors: "Saini, R., Sharma, N., & Attada, R.",
    journal: "Global Warming-A Concerning Component of Climate Change. IntechOpen.",
    doi: "https://doi.org/10.5772/intechopen.1002028"
  },
  {
    year: 2023,
    title: "Dust storm induced severe cooling in the northern Arabian Sea during winter 2022",
    authors: "Nukapothula, S., Yunus, A. P., Chen, C., Attada, R., & Narayana, A. C.",
    journal: "Deep Sea Research Part I",
    doi: "https://doi.org/10.1016/j.dsr.2023.104047"
  },
  {
    year: 2023,
    title: "Hydrological Extremes in Western Himalayas-Trends and Their Physical Factors",
    authors: "Nischal, Rohtash, Sreehari, K., Akash, P., Pravin, P., Attada, R.",
    journal: "Natural Hazards - New Insights",
    doi: "http://dx.doi.org/10.5772/intechopen.109445"
  },

  // === 2022 ===
  {
    year: 2022,
    title: "Diagnostic evaluation of extreme winter rainfall events over the Arabian Peninsula using high-resolution weather research and forecasting simulations",
    authors: "Attada, R., Dasari, H. P., Ghostine, R. et al.",
    journal: "Meteorological Applications",
    doi: "https://doi.org/10.1002/met.2095"
  },
  {
    year: 2022,
    title: "Evaluation of Potential Predictability of Indian Summer Monsoon Rainfall in ECMWF's Fifth-Generation Seasonal Forecast System (SEAS5)",
    authors: "Attada, R., Ehsan, M.A. & Pillai, P.A.",
    journal: "Pure Appl. Geophys.",
    doi: "https://doi.org/10.1007/s00024-022-03184-9"
  },
  {
    year: 2022,
    title: "Evaluating winter precipitation over the western Himalayas in a high-resolution Indian regional reanalysis using multi-source climate datasets",
    authors: "Nischal., Attada, R., and Hunt, K. M. R.",
    journal: "Journal of Applied Meteorology and Climatology",
    doi: "https://doi.org/10.1175/JAMC-D-21-0172.1"
  },
  {
    year: 2022,
    title: "Vertical Changes in the Storm Tracks and Dynamics of Western Disturbances.",
    authors: "Rao, V. B., Pinheiro, H., Attada, R., Bhargavi, V. L., Ramakrishna, S. S. V. S., Govardhan, D., ... & KJ, Ramesh. ",
    journal: "VayuMandal",
    doi: "#"
  },
  {
    year: 2022,
    title: "Numerical Simulation of Winter Precipitation over the Western Himalayas Using a Weather Research and Forecasting Model during 2001–2016",
    authors: "Punde P, Nischal, Attada R, Aggarwal D, Radhakrishnan C.",
    journal: "Climate",
    doi: "https://doi.org/10.3390/cli10110160"
  },
  {
    year: 2022,
    title: "Evaluation of extreme dust storm over the northwest Indo-Gangetic plain using WRF-Chem model",
    authors: "Shukla, K.K., Attada, R., Khan, A.W. et al",
    journal: "Natural Hazards",
    doi: "https://doi.org/10.1007/s11069-021-05017-9"
  },
  {
    year: 2022,
    title: "Comprehensive analysis of thermal stress over northwest India: Climatology, trends and extremes",
    authors: "K.K. Shukla, Attada, R., Abhishek Kumar, Kunchala, R. K., Sanikommu Sivareddy",
    journal: "Urban Climate",
    doi: "https://doi.org/10.1016/j.uclim.2022.101188"
  },
  {
    year: 2022,
    title: "Retrospective sub-seasonal forecasts of extreme precipitation events in the Arabian Peninsula using convective-permitting modeling",
    authors: "Risanto, C. B., Chang, H. I., Luong, T. M., Dasari, H. P., Attada, R., Castro, C. L., & Hoteit, I.",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-022-06336-8"
  },
  {
    year: 2022,
    title: "Enhanced Simulation of the Indian Summer Monsoon Rainfall Using Regional Climate Modeling and Continuous Data Assimilation",
    authors: "Desamsetti, S., H. P. Dasari... R. Attada ...",
    journal: "Frontiers in Climate",
    doi: "https://doi.org/10.3389/fclim.2022.817076"
  },
  {
    year: 2022,
    title: "Understanding the spatiotemporal variability and trends of surface ozone over India",
    authors: "Kunchala, R. K., Singh, B. B., Karumuri, R. K., Attada, R., Seelanki, V., & Kumar, K. N.",
    journal: " Environmental Science and Pollution Research",
    doi: "https://doi.org/10.1007/s11356-021-16011-w"
  },
  {
    year: 2022,
    title: "How reliable are Coupled Model Intercomparison Project Phase 6 models in representing the Asian summer monsoon anticyclone?",
    authors: "Singh, B. B., Kondapalli, N. K., Seelanki, V., Karumuri, R. K., Attada, R., & Kunchala, R. K.",
    journal: "International Journal of Climatology",
    doi: " https://doi.org/10.1002/joc.7646"
  },
  {
    year: 2022,
    title: "Spatio-temporal variability of XCO2 over Indian region inferred from Orbiting Carbon Observatory (OCO-2) satellite and Chemistry Transport Model",
    authors: "Kunchala, R. K., Patra, P. K., Kumar, K. N., Chandra, N., Attada, R., & Karumuri, R. K.",
    journal: "Atmospheric Research",
    doi: "https://doi.org/10.1016/j.atmosres.2022.106044"
  },
  {
    year: 2022,
    title: "Monsoon precipitation characteristics and extreme precipitation events over Northwest India using Indian high resolution regional reanalysis",
    authors: "Aggarwal, D., Attada, R., Shukla, K. K., Chakraborty, R., & Kunchala, R. K.",
    journal: "Atmospheric Research",
    doi: "https://doi.org/10.1016/j.atmosres.2021.105993"
  },
  {
    year: 2022,
    title: "Meridional displacement of the Asian jet and its impact on Indian summer monsoon rainfall in observations and CFSv2 hindcast",
    authors: "Chowdary, J. S., Vibhute, A. S., Darshana, P., Parekh, A., Gnanaseelan, C., & Attada, R.",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-021-05935-1"
  },
  {
    year: 2022,
    title: "Characteristic dissimilarities during high aerosol loading days between western and eastern Indo-Gangetic Plain",
    authors: "Shukla, K. K., Sarangi, C., Attada, R., & Kumar, P.",
    journal: "Atmospheric Environment",
    doi: "https://doi.org/10.1016/j.atmosenv.2021.118837"
  },
  {
    year: 2022,
    title: "Long-term changes in the Arabian Peninsula rainfall and their relationship with the ENSO signals in the tropical Indo-Pacific",
    authors: "Dasari, H. P., Desamsetti, S., Langodan, S., Attada, R., Ashok, K., & Hoteit, I.",
    journal: " Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-021-06062-7"
  },

  // === 2021 (Selected) ===
 
  {
    year: 2021,
    title: "Representation of Arabian Peninsula Summer Climate in a Regional Atmospheric Model using Spectral Nudging",
    authors: "Attada et al.",
    journal: "Theoretical and Applied Climatology",
    doi: "https://doi.org/10.1007/s00704-021-03617-w"
  },
  {
    year: 2021,
    title: "Cloud resolving simulation of extremely heavy rainfall event over Kerala in August 2018 – Sensitivity to microphysics and aerosol feedback",
    authors: "Biyo Thomas ... Raju Attada ...",
    journal: "Atmospheric Research",
    doi: "https://doi.org/10.1016/j.atmosres.2021.105613"
  },
  {
    year: 2021,
    title: "Seasonal simulations of summer aerosol optical depth over the Arabian Peninsula using WRF-Chem: Validation, climatology, and variability",
    authors: "Karumuri, R. K., Kunchala, R. K., Attada, R., Dasari, H. P., & Hoteit, I.",
    journal: "International Journal of Climatology",
    doi: " https://doi.org/10.1002/joc.7396"
  },
  {
    year: 2021,
    title: "On the understanding of surface ozone variability, its precursors and their associations with atmospheric conditions over the Delhi region",
    authors: "Kunchala, R. K., Attada, R., Vellore, R. K., Soni, V. K., Mohan, M., & Chilukoti, N.",
    journal: "Atmospheric Research",
    doi: "https://doi.org/10.1016/j.atmosres.2021.105653"
  },
  {
    year: 2021,
    title: "Micro-Pulse Lidar observations of elevated aerosol layers over the Himalayan region",
    authors: "Shukla, K. K., Phanikumar, D. V., Kumar, K. N., Kumar, A., Naja, M., Sharma, S., & Attada, R.",
    journal: "Journal of Atmospheric and Solar-Terrestrial Physics",
    doi: "https://doi.org/10.1016/j.jastp.2020.105526"
  },
  

  // === 2020 ===
  {
    year: 2020,
    title: "Evaluating Cumulus Parameterization Schemes for the Simulation of Arabian Peninsula Winter Rainfall",
    authors: "Raju Attada, Hari Prasad Dasari, Ravi Kumar Kunchala et al.",
    journal: "J. Hydrometeor.",
    doi: "https://doi.org/10.1175/JHM-D-19-0114.1"
  },

  // === 2019 ===
  {
    year: 2019,
    title: "On the Recent Amplification of Dust over the Arabian Peninsula during 2002-2012",
    authors: "K. Ravi Kumar, Raju Attada, Hari Prasad Dasari et al.",
    journal: "Journal of Geophys. Res. Atmos.",
    doi: "https://doi.org/10.1029/2019JD030623"
  },
  {
    year: 2019,
    title: "Evaluation of Upper Tropospheric Humidity in WRF Model during Indian Summer Monsoon",
    authors: "Raju Attada, Prashant Kumar, Anant Parekh et al.",
    journal: "Asia-Pacific Journal of Atmospheric Sciences",
    doi: "https://doi.org/10.1007/s13143-018-0090-3"
  },

  // === 2018 ===
  {
    year: 2018,
    title: "The Role of the Indian Summer Monsoon Variability on Arabian Peninsula Summer Climate",
    authors: "Raju Attada, Hari Prasad Dasari, Anant Parekh et al.",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-018-4333-x"
  },
  {
    year: 2018,
    title: "Reanalysis of the Indian Summer Monsoon: Four-dimensional data assimilation of AIRS retrievals in a regional data assimilation and modeling framework",
    authors: "Raju Attada, Anant Parekh, J. S. Chowdary and C.Gnanaseelan",
    journal: "Climate Dynamics",
    doi: "https://doi.org/10.1007/s00382-017-3781-z"
  }
];

// --- HELPER: Detect Lab Members ---
// List of names to highlight. These must match substrings in the authors string.
const labMembers = [
  "Attada, R.", "R. Attada", "Raju Attada", "Attada R", "Attada, R", "Attada",
  "Shukla, K.K.", "K.K. Shukla", "Shukla, K. K.", "Shukla, K. K",
  "Govande, A.",
  "Athira, K. S.", "Athira, K.S.", "Athira,K.S.",
  "Saini, R.", "Saini, R", "Rohtash",
  "Kumari, A.",
  "Nischal, S.", "Nischal", "Nischal.","Sharma, N.",
  "Aggarwal, D.","Aggarwal D",
  "Bajrang, C.",
  "Abhishek Kumar",
  "Pathaikara, A.", "Akash, P.", "Akash P",
  "Sreehari, K.",
  "Pandidurai, D.",
  "Pravin, P.", "Punde P",
  "Mahapatra, D.", 
  "Singh, S.", 
  "Abhilash, N.", 
  "Hale, N.", "Nikhil Hale",
  "Shit, A.", "Akash Shit.",
  "Pandey, H.", 
  "Adil, M.", 
  "Madhusai, S.", 
  "Singh, D.", 
  "Malavika, M.",
  "Jain, H.",
  "Kumar, A.", 
   
];

// Enhanced component to render authors with bold highlighting using Regex
const AuthorList = ({ authors }: { authors: string }) => {
  // Sort lab members by length descending to match longest possible names first
  const sortedMembers = [...labMembers].sort((a, b) => b.length - a.length);
  
  // Escape special characters for regex
  const escapedMembers = sortedMembers.map(member => member.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  
  // Create a single regex pattern to match any of the lab members
  const pattern = new RegExp(`(${escapedMembers.join('|')})`, 'g');
  
  // Split the authors string by the pattern
  const parts = authors.split(pattern);

  return (
    <span className="text-slate-600 text-sm">
      {parts.map((part, i) => {
        // Check if the part matches any lab member string
        const isMember = labMembers.includes(part);
        
        return (
          <span 
            key={i} 
            className={isMember ? "font-bold text-blue-700" : ""} // Applied brick-red color here
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "All">("All");

  // Get unique years for the filter dropdown
  const years = Array.from(new Set(publicationsData.map(p => p.year))).sort((a, b) => b - a);

  // Filter logic
  const filteredPubs = publicationsData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "All" || pub.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HEADER ================= */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Publications
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                A collection of our peer-reviewed research in leading atmospheric and climate science journals.
              </p>
            </div>
            
            {/* Stats Badge - UPDATED TO BE DYNAMIC */}
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700 font-bold">
               <BookOpen className="h-5 w-5" />
               {/* This automatically updates when you add new items to the array */}
               <span>{publicationsData.length} Papers</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TOOLBAR ================= */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4">
            
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search papers, authors, or journals..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Year Filter */}
            <div className="relative min-w-[150px]">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <select 
                className="w-full pl-10 pr-8 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === "All" ? "All" : Number(e.target.value))}
              >
                <option value="All">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
        </div>
      </div>

      {/* ================= LIST ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          
          {filteredPubs.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
               No publications found matching your search.
            </div>
          ) : (
            filteredPubs.map((pub, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                  
                  <div className="flex-grow space-y-2">
                    {/* Title & Link */}
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                      <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-emerald-500 underline-offset-4">
                        {pub.title}
                      </a>
                    </h3>
                    
                    {/* Authors (Highlighed) */}
                    <div>
                      <AuthorList authors={pub.authors} />
                    </div>

                    {/* Meta Info (Journal & Year) */}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          {pub.journal}
                        </span>
                        <span className="flex items-center text-sm text-slate-500">
                           <Calendar className="h-3 w-3 mr-1" /> {pub.year}
                        </span>
                    </div>
                  </div>

                  {/* DOI Button (Desktop) */}
                  <div className="flex-shrink-0 pt-1">
                    <a 
                      href={pub.doi} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold transition-colors border border-slate-200"
                    >
                      View Paper <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                </div>
              </div>
            ))
          )}

        </div>
      </div>

    </div>
  );
}

export interface TeamMember {
  id: string;
  name: string;
  roleShort: string;
  roleFull: string;
  designation: string;
  tenure: string;
  tenureDate: string;
  isFounder?: boolean;
  linkedin: string;
  initials: string;
  badgeColor: string;
  description: string;
}

export const ATS_PDZ_COMPANY_LINKEDIN = "https://www.linkedin.com/company/ats-pdz/";

export const ATS_PDZ_DETAILS = {
  name: "ATS_PDZ",
  tagline: "Creative Technology Initiative & Umbrella Organization",
  foundedDate: "February 2023",
  location: "Thrissur, Kerala, India",
  founder: "Aaron Thalakkottor Sooraj",
  linkedin: "https://www.linkedin.com/company/ats-pdz/",
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "aaron-sooraj",
    name: "Aaron Thalakkottor Sooraj",
    roleShort: "CEO",
    roleFull: "Chief Executive Officer",
    designation: "CEO (Chief Executive Officer)",
    tenure: "Created February 2023",
    tenureDate: "February 2023",
    isFounder: true,
    linkedin: "https://www.linkedin.com/in/aaronts127pdz/",
    initials: "ATS",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    description: "Founder & Chief Executive Officer leading organizational strategy, core initiatives, and architectural vision across ATS_PDZ since its founding in February 2023."
  },
  {
    id: "adithya-binesh",
    name: "Adithya Binesh",
    roleShort: "CVCO",
    roleFull: "Chief Visionary & Creative Officer",
    designation: "CVCO (Chief Visionary & Creative Officer)",
    tenure: "Joined December 2025",
    tenureDate: "December 2025",
    linkedin: "https://www.linkedin.com/in/adithya-binesh-631270388/",
    initials: "AB",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    description: "Spearheading creative direction, visionary planning, brand storytelling, and strategic aesthetic identity."
  },
  {
    id: "abhinav-n",
    name: "Abhinav N",
    roleShort: "CTO",
    roleFull: "Chief Technology Officer",
    designation: "CTO (Chief Technology Officer)",
    tenure: "Joined December 2025",
    tenureDate: "December 2025",
    linkedin: "https://www.linkedin.com/in/abhinav-n-713a84383/",
    initials: "AN",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    description: "Directing core technical architecture, engineering standards, infrastructure pipelines, and software systems."
  },
  {
    id: "alwin-thomas-v",
    name: "Alwin Thomas V",
    roleShort: "CXO",
    roleFull: "Chief Experience Officer",
    designation: "CXO (Chief Experience Officer)",
    tenure: "Joined December 2025",
    tenureDate: "December 2025",
    linkedin: "https://www.linkedin.com/in/alwin-thomas-v-033057384/",
    initials: "AT",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    description: "Overseeing end-to-end user satisfaction, product experience strategy, and user engagement touchpoints."
  },
  {
    id: "adhin-seby",
    name: "Adhin Seby",
    roleShort: "A-CXO (UX)",
    roleFull: "Assistant Chief Experience Officer, User Experience",
    designation: "A-CXO (UX) (Assistant Chief Experience Officer, User Experience)",
    tenure: "Joined December 2025",
    tenureDate: "December 2025",
    linkedin: "https://www.linkedin.com/in/adhin-seby-4b6b45384/",
    initials: "AS",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    description: "Focusing on UX research, interaction flows, usability testing, and seamless human-centered interfaces."
  },
  {
    id: "akshay-t-s",
    name: "Akshay T S",
    roleShort: "A-CXO (UI)",
    roleFull: "Assistant Chief Experience Officer, User Interface",
    designation: "A-CXO (UI) (Assistant Chief Experience Officer, User Interface)",
    tenure: "Joined December 2025",
    tenureDate: "December 2025",
    linkedin: "https://www.linkedin.com/in/akshay-t-s-487b90382/",
    initials: "AK",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    description: "Crafting visual UI layouts, typography pairing, responsive design components, and graphic consistency."
  }
];

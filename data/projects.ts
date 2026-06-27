export type ProjectStatus = "Completed" | "Ongoing" | "Under Development" | "Active Development" | "Completed (Archived)";

export type Project = {
  id: string;
  title: string;
  type?: string;
  description: string;
  longDescription?: string;
  contributors?: string[];
  organization?: string;
  techStack: string[];
  status: ProjectStatus;
  github?: string;
  live?: string;
  categories: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "project-hospital-readmit-model",
    title: "Project Pulse: Readmission Risk Console",
    type: "Machine Learning Web App",
    description: "Day 2 of Projectathon conducted by μLearn LBSITW, AI x DS {24th June 2026} An end-to-end Machine Learning web application designed as a research-prototype decision support tool to assist clinical discharge planners in assessing 30-day hospital readmission risk.",
    techStack: ["UI/UX", "Jupyter Notebook", "Python", "Streamlit", "CSV", "Google Colab"],
    status: "Completed",
    github: "https://github.com/ATS-001/project-hospital-readmit-model/",
    live: "https://project-hospital-readmit-model-ats001.streamlit.app/",
    categories: ["AI/ML", "Data Science", "Web Development", "Healthcare"]
  },
  {
    id: "cat-detector-ats",
    title: "Cat-Detector-ats",
    description: "Day 1 of Projectathon conducted by μLearn LBSITW, AI x DS {23th June 2026} A secure, cloud-powered web application that detects cats in real-time from uploaded images using a custom-trained object detection model. Built with Streamlit, OpenCV, and the Roboflow Inference API.",
    techStack: ["UI/UX", "Python", "Streamlit", "OpenCV", "Roboflow"],
    status: "Completed",
    github: "https://github.com/ATS-001/Cat-Detector-ats",
    live: "https://cat-detector-ats001.streamlit.app/",
    categories: ["AI/ML", "Web Development", "Computer Vision"]
  },
  {
    id: "vaazhas",
    title: "Vaazhas",
    type: "Digital Souvenir Website",
    description: "Built an interactive digital souvenir for the 12th grade batch using Google Sites.",
    contributors: ["https://sites.google.com/view/vaazhas-23-25/about"],
    techStack: ["Google Sites", "Media Tools"],
    status: "Completed",
    live: "https://sites.google.com/view/vaazhas-23-25/",
    categories: ["Web Development", "Creative Media"]
  },
  {
    id: "ecca",
    title: "Energy Consumption and Conservation App (ECCA)",
    description: "Designed a rural-focused energy tracking and conservation app concept; presented at Tachyon360’s Stogo Fest 2025.",
    contributors: ["Aaron", "Joel Jojan", "Ashvin Manoj"],
    techStack: ["Google Sites", "Basic UI Planning", "Websim.ai"],
    status: "Completed (Archived)",
    live: "https://sites.google.com/view/aja-ecca/",
    categories: ["Web Development", "Experimental Project"]
  },
  {
    id: "search-call",
    title: "Search&Call",
    description: "Built a functional business listing platform using Google Sites with category navigation, tag search, and SEO optimization.",
    contributors: ["Aaron", "Sooraj TS"],
    techStack: ["Google Sites", "Google Sheets", "JavaScript", "Google Apps Script"],
    status: "Active Development",
    live: "https://sites.google.com/view/searchandcall",
    categories: ["Search Systems", "Web Development", "Experimental Platform"]
  },
  {
    id: "t-dodecology",
    title: "T – Dodecology Series",
    type: "Novel & World-Building Series",
    description: "Writing a multi-title novel series with interconnected timelines, complex character arcs, and deep world-building.",
    techStack: ["Google Sites", "Creative Planning", "Websim.ai"],
    status: "Ongoing",
    live: "https://sites.google.com/view/t-dodecology-series",
    categories: ["Literature", "Creative Media", "Experimental Narrative"]
  },
  {
    id: "studyai",
    title: "StudyAI",
    description: "AI-generated personalized study timetable platform based on subjects and available study hours.",
    contributors: ["Aaron", "Alwin Thomas"],
    organization: "Part of HexnicAI",
    techStack: ["UI/UX", "Lovable", "Vercel", "Prompt Engineering"],
    status: "Completed",
    github: "https://github.com/ATS-001/studyai-2026",
    live: "https://studyai-2026.vercel.app/",
    categories: ["AI Tools", "Educational Technology", "Web Development"]
  },
  {
    id: "hexnicai",
    title: "HexnicAI",
    description: "AI-based personalized and inclusive learning platform.",
    contributors: ["Aaron", "Alwin Thomas", "Adithya Binesh", "Abhinav N", "Adhin Seby", "Akshay TS"],
    organization: "Part of ATS_PDZ | Brother organization to CommunityWATS",
    techStack: ["UI/UX", "V0 by Vercel", "Prompt Engineering", "Vercel Deployment"],
    status: "Completed",
    github: "https://github.com/ATS-001/HexnicAI",
    live: "https://hexnicai.vercel.app/",
    categories: ["AI Platform", "Educational Technology", "Experimental Tech"]
  },
  {
    id: "community-wats",
    title: "CommunityWATS (C-WATS)",
    description: "AI-based personalized and inclusive learning ecosystem covering multiple subjects.",
    organization: "Brother organization to HexnicAI",
    techStack: ["UI/UX", "Google AI Studio", "Prompt Engineering", "Vercel Deployment"],
    status: "Under Development",
    categories: ["Educational Technology", "AI Tools", "Experimental Platform"]
  },
  {
    id: "portfolio",
    title: "ATS_Portfolio_Resume_site",
    description: "Next-gen portfolio with a glassmorphism futuristic interface featuring dynamic AI tools integration and structured navigation.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel", "V0 by Vercel", "lovable", "websim.ai", "Google AI Studio"],
    status: "Ongoing",
    github: "https://github.com/ATS-001/ATS_Portfolio_Resume_site",
    live: "https://ats-pdz.vercel.app/",
    categories: ["Web Development", "Creative Media", "Portfolio"]
  }
];

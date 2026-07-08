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
  figma?: string;
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
    id: "premium-culinary-demo",
    title: "Premium Culinary {food app demo}",
    description: "Welcome to The Ember Classic burger details screen project. This high-fidelity mobile application interface was designed as part of the UI/UX Design Challenge (24hrs) for the \"Introduction to UI/UX\" workshop hosted by Muhammed Farseen (SWE @TCS) and MuLearn TLY, held on June 28, 2026.",
    techStack: ["UI/UX", "Google aistudio", "figma"],
    status: "Completed",
    github: "https://github.com/ATS-001/food-uiuxmulearnatsdemo",
    live: "https://oracvlvm-ats.streamlit.app/",
    figma: "https://www.figma.com/design/tpPX0CRzQi6Rzg3RW810Iu/food-uiuxmulearnatsdemo?node-id=0-1&t=BDEebVbMyfEsnbHL-1",
    categories: ["UI/UX", "Design", "Mobile App Interface"]
  },
  {
    id: "oracvlvm-ats",
    title: "ORACVLVM",
    description: "Day 6 of Projectathon conducted by μLearn LBSITW, AI x DS {3rd July 2026} An end-to-end Machine Learning web application designed as an interactive decision support tool to simulate and predict the statistical probability of national football squads reaching the tournament Quarter-Finals. By leveraging a trained Random Forest Classifier Ensemble, the system evaluates core team dynamics, squad valuations, and historical metrics to generate predictive analytics instantly.",
    techStack: ["UI/UX", "Python", "Streamlit", "langchain"],
    status: "Completed",
    github: "https://github.com/ATS-001/ORACVLVM-ats",
    live: "https://oracvlvm-ats.streamlit.app/",
    categories: ["AI/ML", "Predictive Analytics", "Web Development", "Sports Analytics"]
  },
  {
    id: "tutoscript-ats",
    title: "TutoScript",
    description: "Day 5 of Projectathon conducted by μLearn LBSITW, AI x DS {1st July 2026} An efficient, modular Retrieval-Augmented Generation (RAG) dashboard designed to parse YouTube video transcripts, index text segments into a local vector storage unit, and generate real-time contextual question-answering streams alongside synchronized video playback.",
    techStack: ["UI/UX", "Python", "Streamlit", "langchain"],
    status: "Completed",
    github: "https://github.com/ATS-001/TutoScript-ats/",
    live: "Local Deployment Model",
    categories: ["AI/ML", "NLP", "Educational Technology", "Web Development"]
  },
  {
    id: "mental-health-screening-survey-mhss",
    title: "Mental-Health-Screening-Survey-MHSS",
    description: "Day 4 of Projectathon conducted by μLearn LBSITW, AI x DS {29th June 2026} An efficient, lightweight machine learning classification dashboard designed to process multi-dimensional wellness metrics, vectorize natural language text representations, and evaluate potential indicators of emotional distress with live probabilistic confidence tracking.",
    techStack: ["UI/UX", "Jupyter Notebook", "Python", "Streamlit", "CSV", "Google Colab"],
    status: "Completed",
    github: "https://github.com/ATS-001/Mental-Health-Screening-Survey-MHSS-",
    live: "https://mhss-ats001.streamlit.app/",
    categories: ["AI/ML", "Healthcare", "Data Science", "Web Development"]
  },
  {
    id: "edu-rag-terminalexe",
    title: "Edu-RAG-Terminal.exe",
    description: "Day 3 of Projectathon conducted by μLearn LBSITW, AI x DS {26th June 2026} An efficient, modular RAG dashboard designed to parse dense PDF documents, index text segments into a local vector storage unit, and generate contextual study summaries and interactive evaluation quizzes seamlessly.",
    techStack: ["UI/UX", "Python", "Streamlit", "langchain"],
    status: "Completed",
    github: "https://github.com/ATS-001/Edu-RAG-Terminal.exe/",
    live: "https://edu-rag-terminalexe-ats001.streamlit.app/",
    categories: ["AI/ML", "NLP", "Web Development", "Educational Technology"]
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

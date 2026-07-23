with open("components/sections/Skills.tsx", "r") as f:
    content = f.read()

new_categories = """export const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'C', 'HTML', 'XHTML', 'CSS', 'JavaScript', 'C#', 'Java', 'Linux Shell Script', 'Scratch'],
    color: 'text-blue-500 dark:text-blue-400'
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    skills: ['ChatGPT', 'Gemini', 'Groq', 'Copilot', 'Vibe Coding', 'Suno', 'Websim.ai', 'AI Studio', 'V0', 'Lovable', 'Antigravity', 'Flow'],
    color: 'text-zinc-600 dark:text-zinc-400'
  },
  {
    title: 'Web & Design',
    icon: Globe,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Google Sites', 'Figma (Basics)', 'Google Stitch', 'Canva', 'Clipchamp', 'BandLab', 'Quillbot'],
    color: 'text-red-500 dark:text-red-400'
  },
  {
    title: 'Data & Database',
    icon: Database,
    skills: ['MySQL', 'Google Sheets', 'Excel'],
    color: 'text-green-500 dark:text-green-400'
  },
  {
    title: 'Software Suite',
    icon: Briefcase,
    skills: ['Microsoft Office', 'Google Workspace'],
    color: 'text-yellow-600 dark:text-yellow-500'
  },
  {
    title: 'Deployments & Tools',
    icon: Globe,
    skills: ['Vercel', 'Streamlit', 'GitHub', 'VS Code', 'Google Search Console', 'Google Analytics'],
    color: 'text-purple-500 dark:text-purple-400'
  },
  {
    title: 'Professional Skills',
    icon: PenTool,
    skills: ['Prompt Engineering', 'Project Structuring', 'Creative Thinking', 'UI Planning', 'SEO Optimization', 'Research', 'Digital Branding', 'Teamwork', 'Typing'],
    color: 'text-blue-500 dark:text-blue-400'
  }
];"""

import re
content = re.sub(r'export const SKILL_CATEGORIES = \[.*?\];', new_categories, content, flags=re.DOTALL)

with open("components/sections/Skills.tsx", "w") as f:
    f.write(content)

print("Skills updated successfully")

with open("components/sections/Skills.tsx", "r") as f:
    content = f.read()

import re

old_categories = """export const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'C', 'HTML', 'CSS', 'JavaScript', 'C#'],
    color: 'text-blue-500 dark:text-blue-400'
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    skills: ['ChatGPT', 'Gemini', 'Suno', 'Websim.ai', 'AI Studio', 'V0', 'Lovable'],
    color: 'text-zinc-600 dark:text-zinc-400'
  },
  {
    title: 'Web & Design',
    icon: Globe,
    skills: ['Google Sites', 'Figma (Basics)', 'Google Stitch', 'Canva', 'Clipchamp', 'BandLab', 'Quillbot'],
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
    title: 'Professional Skills',
    icon: PenTool,
    skills: ['Prompt Engineering', 'Project Structuring', 'Creative Thinking', 'UI Planning', 'SEO Optimization', 'Research', 'Digital Branding', 'Teamwork', 'Typing'],
    color: 'text-blue-500 dark:text-blue-400'
  }
];"""

new_categories = """export const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'C', 'HTML', 'CSS', 'JavaScript', 'C#', 'Java', 'Linux Shell Script'],
    color: 'text-blue-500 dark:text-blue-400'
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    skills: ['ChatGPT', 'Gemini', 'Suno', 'Websim.ai', 'AI Studio', 'V0', 'Lovable', 'Antigravity', 'Flow'],
    color: 'text-zinc-600 dark:text-zinc-400'
  },
  {
    title: 'Web & Design',
    icon: Globe,
    skills: ['Google Sites', 'Figma (Basics)', 'Google Stitch', 'Canva', 'Clipchamp', 'BandLab', 'Quillbot'],
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
    skills: ['Vercel', 'Streamlit', 'GitHub', 'VS Code'],
    color: 'text-purple-500 dark:text-purple-400'
  },
  {
    title: 'Professional Skills',
    icon: PenTool,
    skills: ['Prompt Engineering', 'Project Structuring', 'Creative Thinking', 'UI Planning', 'SEO Optimization', 'Research', 'Digital Branding', 'Teamwork', 'Typing'],
    color: 'text-blue-500 dark:text-blue-400'
  }
];"""

if old_categories in content:
    content = content.replace(old_categories, new_categories)
    with open("components/sections/Skills.tsx", "w") as f:
        f.write(content)
    print("Success")
else:
    print("Not found exactly, using regex")
    content = re.sub(r'export const SKILL_CATEGORIES = \[.*?\];', new_categories, content, flags=re.DOTALL)
    with open("components/sections/Skills.tsx", "w") as f:
        f.write(content)
    print("Replaced with regex")


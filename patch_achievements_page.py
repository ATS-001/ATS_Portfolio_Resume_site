with open("app/achievements/page.tsx", "r") as f:
    content = f.read()

if "import { certificatesData }" not in content:
    content = content.replace('import { Award, Sparkles', 'import { certificatesData } from "@/data/certificates";\nimport { Award, Sparkles')

target = '<span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">\n              Track Record\n            </span>\n          </div>'
replacement = '<span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">\n              Track Record\n            </span>\n          </div>\n          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6 shadow-sm">\n            <Award className="w-4 h-4 text-blue-500" />\n            <span>Total Achievements & Certifications: <strong className="text-zinc-900 dark:text-white font-bold">{certificatesData.length}</strong></span>\n          </div>'

content = content.replace(target, replacement)

with open("app/achievements/page.tsx", "w") as f:
    f.write(content)

print("Achievements page updated")

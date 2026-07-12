with open("app/page.tsx", "r") as f:
    content = f.read()

if "import Image from 'next/image';" not in content:
    content = content.replace("import React from 'react';", "import React from 'react';\nimport Image from 'next/image';")

# 1
p1_old = """<div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative group">
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>"""
p1_new = """<div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative group">
                <Image src="/search_call.jpg" alt="Search&Call" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>"""

# 2
p2_old = p1_old
p2_new = """<div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative group">
                <Image src="/vaazhas.jpg" alt="Vaazhas" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>"""

# 3
p3_old = p1_old
p3_new = """<div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative group">
                <Image src="/study_ai.jpg" alt="StudyAI" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>"""

content = content.replace(p1_old, p1_new, 1)
content = content.replace(p2_old, p2_new, 1)
content = content.replace(p3_old, p3_new, 1)

with open("app/page.tsx", "w") as f:
    f.write(content)

with open("components/sections/Skills.tsx", "r") as f:
    content = f.read()

old_str = 'className="p-6 rounded-3xl bg-card border border-border backdrop-blur-md shadow-sm dark:shadow-none hover:border-black/20 dark:hover:border-white/20 transition-colors group"'
new_str = 'className={`p-6 rounded-3xl bg-card border border-border backdrop-blur-md shadow-sm dark:shadow-none hover:border-black/20 dark:hover:border-white/20 transition-colors group ${category.title === "Professional Skills" ? "md:col-span-2 lg:col-span-3" : ""}`}'

if old_str in content:
    content = content.replace(old_str, new_str)
    with open("components/sections/Skills.tsx", "w") as f:
        f.write(content)
    print("Success")
else:
    print("Not found")

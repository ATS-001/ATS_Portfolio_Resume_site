with open("data/projects.ts", "r") as f:
    content = f.read()

# Update ProjectStatus type
old_status_type = 'export type ProjectStatus = "Completed" | "Ongoing" | "Under Development" | "Active Development" | "Completed (Archived)";'
new_status_type = 'export type ProjectStatus = "Completed" | "Ongoing" | "Under Development" | "Active Development" | "Completed (Archived)" | "Continuous Integration / Continuous Deployment (CI/CD)";'

if old_status_type in content:
    content = content.replace(old_status_type, new_status_type)

old_cwats = """  {
    id: "community-wats",
    title: "CommunityWATS (C-WATS)",
    description: "AI-based personalized and inclusive learning ecosystem covering multiple subjects.",
    organization: "Brother organization to HexnicAI",
    techStack: ["UI/UX", "Google AI Studio", "Prompt Engineering", "Vercel Deployment"],
    status: "Under Development",
    categories: ["Educational Technology", "AI Tools", "Experimental Platform"]
  },"""

new_cwats = """  {
    id: "community-wats",
    title: "CommunityWATS (C-WATS)",
    description: "AI-based personalized and inclusive learning ecosystem covering multiple subjects.",
    organization: "Brother organization to HexnicAI",
    techStack: ["UI/UX", "Google AI Studio", "Prompt Engineering", "Vercel Deployment"],
    status: "Continuous Integration / Continuous Deployment (CI/CD)",
    github: "https://github.com/ATS-001/Community-WebsiteATS",
    live: "https://c-wats.vercel.app/",
    categories: ["Educational Technology", "AI Tools", "Experimental Platform"]
  },"""

if old_cwats in content:
    content = content.replace(old_cwats, new_cwats)
    print("Replaced CWATS accurately")
else:
    print("CWATS exact block not found, using regex replace")
    import re
    pattern = r'\{\s*id:\s*"community-wats",.*?\}'
    content = re.sub(pattern, new_cwats.strip(), content, flags=re.DOTALL)

with open("data/projects.ts", "w") as f:
    f.write(content)

print("data/projects.ts updated")

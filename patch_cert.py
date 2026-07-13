with open("data/certificates.ts", "r") as f:
    content = f.read()

new_cert = """  {
    id: "intro-ui-ux-workshop",
    title: "Introduction to UI/UX Workshop",
    organization: "Mulearn TLY",
    issueDate: "Jun 2026",
    skills: ["UIX", "Web Design"],
    category: "Workshops & Webinars",
  },
"""
content = content.replace("export const certificatesData: Certificate[] = [\n", "export const certificatesData: Certificate[] = [\n" + new_cert)

with open("data/certificates.ts", "w") as f:
    f.write(content)

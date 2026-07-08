with open("data/certificates.ts", "r") as f:
    content = f.read()

new_cert = """  {
    id: "inclusive-societies-stride",
    title: "Inclusive Societies Through Strategic Innovation",
    organization: "STRIDE FORWARD",
    issueDate: "Jun 2026",
    credentialId: "STRIDE-26-0626",
    skills: ["Strategic Innovation"],
    category: "Workshops & Webinars",
  },
"""
content = content.replace("export const certificatesData: Certificate[] = [\n", "export const certificatesData: Certificate[] = [\n" + new_cert)

with open("data/certificates.ts", "w") as f:
    f.write(content)

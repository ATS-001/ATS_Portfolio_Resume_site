with open("data/certificates.ts", "r") as f:
    content = f.read()

new_certs = """  {
    id: "html-training-spoken-tutorial",
    title: "HTML Training",
    organization: "Spoken Tutorial, EduPyramids, SINE, IIT Bombay",
    issueDate: "Jul 2026",
    skills: ["HTML", "Web Development"],
    category: "Courses & Certifications",
    description: "Training in HTML web development certified by Spoken Tutorial, EduPyramids, SINE, and IIT Bombay.",
  },
  {
    id: "delnet-webinar",
    title: "DELNET Webinar",
    organization: "DELNET",
    issueDate: "Apr 2026",
    skills: ["Webinar", "Digital Resources", "Research"],
    category: "Workshops & Webinars",
    description: "Participated in the specialized DELNET webinar on digital network resources and knowledge management.",
  },
  {
    id: "5-day-web-dev-bootcamp-mulearn",
    title: "5-Day Web Development Bootcamp",
    organization: "μLearn IDK",
    issueDate: "Jun 2026",
    skills: ["Web Development", "HTML", "CSS", "JavaScript"],
    category: "Workshops & Webinars",
    description: "Completed intensive 5-day web development bootcamp organized by μLearn IDK.",
  },
"""

content = content.replace("export const certificatesData: Certificate[] = [\n", "export const certificatesData: Certificate[] = [\n" + new_certs)

with open("data/certificates.ts", "w") as f:
    f.write(content)

print("Certificates data updated successfully")

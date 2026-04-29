const base = import.meta.env.BASE_URL

export const contactInfo = {
  email: "ydv321ritik@gmail.com",
  phone: "9306533908",
  linkedin: "https://www.linkedin.com/in/ritik0385/",
  github: "https://github.com/Ritik-rao8",
  resume: "https://drive.google.com/file/d/1ayOjkNwV2cKutZAMME8peDT8tMdasAz3/view?usp=drive_link"
}

export const profileInfo = {
  name: "Ritik",
  username: "Ritik-rao8",
  avatar: "https://github.com/Ritik-rao8.png",
  bio: "Data analytics enthusiast with strong skills in Python, Excel, Tableau, Looker Studio, and Google Sheets, focused on extracting insights, building dashboards, and solving real-world problems using data.",
  location: "Newton School of Technology, Rishihood University"
}

export const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "MySQL",
  "Next JS",
  "React",
  "Node.js",
  "Express JS",
  "Prisma ORM",
  "PostgreSQL",
  "GenAI",
  "LangChain",
  "LangGraph",
  "Matplotlib",
  "NumPy",
  "Pandas",
  "Excel",
  "Git and Github",
  "MongoDB",
  "Tailwind CSS",
]

const projects = [
  {
    name: "OpenSky Network Analysis",
    description: "Analysis of flight data from OpenSky Network, exploring aviation patterns and air traffic insights.",
    image: `${base}Dashboard 1.png`,
    tags: ["Python", "Data Analytics"],
    github: "https://github.com/Ritik-rao8/SectionE_G-8_opensky_analysis",
    live: "#" // Placeholder - update with live link when available
  },
  {
    name: "COVID-19 Case Analysis",
    description: "Analysis of COVID-19 case data, exploring trends and insights.",
    image: `${base}COVID19.png`,
    tags: ["Excel", "Data Analytics"],
    github: "https://github.com/Ritik-rao8/DVA_CAPSTONE_G18",
    live: "https://docs.google.com/spreadsheets/d/1Ohjya1lOHC5GPMMfjLEkgw0JAaoDfKhKcU3QG1sEaPY/edit?gid=1326381783#gid=1326381783"
  },
]

export default projects

// All site copy lives here so it can be edited without touching layout code.

export const profile = {
  name: "Charlotte Demas",
  role: "Software Engineer",
  location: "New York, NY",
  email: "demascharlotte7@gmail.com",
  resume: "/Charlotte-Demas-Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/charlotte-demas",
    github: "https://github.com/chardemas",
    etsy: "https://cldneedlepoint.etsy.com",
  },
};

// About summary. **bold** spans are highlighted.
export const summary = [
  "Software engineer at **Bank of America** on the Application and Database Services team: automating cloud provisioning with Terraform and Ansible, moving apps from VMs to containers on OpenShift, and owning incident response for **5 production applications**.",
  "Computer science and economics graduate of **Wake Forest**, with earlier work in data pipelines at Swiss Re, NLP research, and full-stack side projects built with Next.js, TypeScript, and Postgres.",
  "Open to a wide range of opportunities. A **quick learner** who picks up new tools and skills on the job.",
];

export type Experience = {
  role: string;
  org: string;
  team?: string;
  location: string;
  dates: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer I",
    org: "Bank of America",
    team: "Application and Database Services",
    location: "Jersey City, NJ",
    dates: "Jul 2025 — Present",
    points: [
      "Drove a proof of concept deploying IBM Application Modernization Accelerator on **OpenShift**, securing restricted namespaces, cluster-policy exceptions, and privileged access so app teams across the bank can move from VMs to containers.",
      "Automate provisioning and configuration of Java application and web servers across AWS and private cloud with **Terraform** and **Ansible**, cutting environment setup from **2+ hours to under 15 minutes**.",
      "Own incident response for **5 production applications**: resolved **400+ incidents** and cut repeat issues by **35%**.",
      "Migrated middleware provisioning from a legacy internal tool to **Terraform Enterprise**, consolidating 3 products onto one provisioning platform for all app teams.",
      "Lead release testing for platform upgrades across containerized and legacy Java middleware (WebSphere, JBoss, Tomcat, Apache, IHS).",
      "Technical onboarding lead for **5 new engineers**; wrote the documentation for procedures that previously had none.",
    ],
    tags: ["Terraform", "Ansible", "OpenShift", "AWS", "Splunk", "Linux"],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Wake Forest University",
    team: "Department of Economics",
    location: "Winston-Salem, NC",
    dates: "Aug 2024 — May 2025",
    points: [
      "Built an NLP pipeline linking **50k+ patent descriptions** to O*NET occupational tasks, using **SBERT** sentence embeddings to score how closely new inventions relate to specific job functions.",
    ],
    tags: ["Python", "SBERT", "NLP", "pandas"],
  },
  {
    role: "Global Technology Summer Analyst",
    org: "Bank of America",
    location: "Jersey City, NJ",
    dates: "Jun — Aug 2024",
    points: [
      "Designed and built an incident-reporting dashboard with **Grafana** and **MongoDB**, used by 3 engineering teams.",
      "Hackathon: built a **Python backend that summarized unread email and ranked it by urgency** with NLP classification over message content and sender metadata.",
    ],
    tags: ["Python", "NLP", "Grafana", "MongoDB"],
  },
  {
    role: "Portfolio Analytics Engineering Intern",
    org: "Swiss Re Insurance-Linked Investment Advisors",
    location: "New York, NY",
    dates: "May — Aug 2023",
    points: [
      "Built **Python and SQL pipelines** to ingest, transform, and integrate catastrophe-bond exposure data into source systems.",
      "Powered an exposure-monitoring tool for the portfolio team: a Tableau heat map of US cat-bond exposure by location.",
    ],
    tags: ["Python", "SQL", "Tableau"],
  },
  {
    role: "CS Teaching Assistant",
    org: "Girls Who Code",
    team: "Summer Immersion Program",
    location: "Remote",
    dates: "Jun — Aug 2022",
    points: [
      "Taught HTML, CSS, and JavaScript fundamentals to **120+ high school girls**; led semi-weekly office hours and advised a group of 12 students.",
    ],
    tags: ["Teaching", "JavaScript"],
  },
];

export type ProjectArt = "kiki" | "needlepoint" | "nightcap" | "patents" | "email";

export type Project = {
  title: string;
  kind: string;
  status: string;
  blurb: string;
  stack: string[];
  art: ProjectArt;
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "kiki",
    kind: "Full-stack web app",
    status: "In progress",
    blurb:
      "Low-effort plans with your people: crews, weekly plans with RSVPs, a “who’s free” heatmap, and expense splitting. Typed end to end, from React to Postgres.",
    stack: ["Next.js", "TypeScript", "oRPC", "Drizzle", "Postgres"],
    art: "kiki",
    href: "https://github.com/chardemas/friend-planner",
    linkLabel: "View code",
  },
  {
    title: "Canvas Chart Maker",
    kind: "Web app",
    status: "In progress",
    blurb:
      "Turns any picture into a needlepoint chart: in-browser subject cut-out, k-means color reduction matched to DMC threads, a symbol chart with a marked center, a print version sized in inches, and a stitch-by-stitch checklist.",
    stack: ["React", "TypeScript", "Vite", "ONNX", "Web Workers"],
    art: "needlepoint",
    href: "https://github.com/chardemas/canvas-chart-maker",
    linkLabel: "View code",
  },
  {
    title: "Nightcap",
    kind: "iOS app",
    status: "In progress",
    blurb:
      "Puts your phone into a protective mode while you’re out drinking: shields your ex, shopping, money, and social apps (rides home stay open) and makes you pass a sobriety challenge to end early.",
    stack: ["Swift", "SwiftUI", "Screen Time API", "DeviceActivity"],
    art: "nightcap",
    href: "https://github.com/chardemas/nightcap_app",
    linkLabel: "View code",
  },
  {
    title: "Patents ↔ Occupations",
    kind: "NLP research",
    status: "Wake Forest Economics",
    blurb:
      "Measures which jobs new technologies touch by embedding 50k+ patent descriptions and O*NET task statements with SBERT and scoring their semantic similarity.",
    stack: ["Python", "SBERT", "pandas"],
    art: "patents",
  },
  {
    title: "Inbox Urgency Ranker",
    kind: "Hackathon",
    status: "Bank of America",
    blurb:
      "A Python backend that summarizes unread email and ranks it by urgency, classifying message content and sender metadata.",
    stack: ["Python", "NLP"],
    art: "email",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "HTML", "CSS"] },
  { group: "Web & product", items: ["Next.js", "React", "Vite", "Vitest", "oRPC", "Drizzle", "Postgres", "Supabase", "MongoDB", "REST APIs", "Git", "Tailwind"] },
  { group: "ML & data", items: ["SBERT", "TensorFlow", "NLP", "pandas", "pgvector", "Semantic search", "ONNX Runtime", "Hugging Face", "Stata", "Tableau", "Pipeline design"] },
  {
    group: "Infrastructure",
    items: ["Linux (RHEL)", "Terraform", "Ansible", "Kubernetes", "OpenShift", "Docker", "AWS EC2", "Splunk", "Grafana", "Artifactory", "CI/CD", "YAML"],
  },
  { group: "Enterprise", items: ["WebSphere", "JBoss", "Tomcat", "Apache", "IHS", "Venafi", "TDI"] },
];

export const education = {
  school: "Wake Forest University",
  degree: "B.S. Computer Science & B.A. Economics",
  year: "Class of 2025",
  gpa: "3.6",
  abroad: {
    title: "DIS Copenhagen · Spring 2024",
    detail: "Artificial Neural Networks and Deep Learning",
  },
  coursework: [
    "Machine Learning",
    "Mobile & Pervasive Computing",
    "Computer Systems II",
    "Programming Languages",
    "Discrete Mathematics",
    "Linear Algebra",
    "Statistics",
    "Econometrics",
    "Microeconomics",
    "Macroeconomics",
  ],
  favorites: [
    "Sports Economics",
    "Economics of Crime",
    "Nordic Mythology",
    "Danish",
    "Game Theory",
    "German 210: East German History",
  ],
  involvement: [
    { name: "Alpha Delta Pi", role: "VP of Event Management", dates: "2022–2023" },
    { name: "Women in Economics" },
    { name: "Women in Computer Science" },
  ],
};

export const offClock: { label: string; detail?: string; href?: string; icon: InterestIcon; color: string }[] = [
  {
    label: "Sports",
    detail: "NHL hockey, equestrian, NCAA basketball",
    icon: "sports",
    color: "var(--color-blue)",
  },
  { label: "Needlepoint", detail: "hand-painted canvases on Etsy", icon: "needle", color: "var(--color-pink)" },
  { label: "Mahjong", icon: "mahjong", color: "var(--color-green)" },
  { label: "Reading & film", icon: "film", color: "var(--color-purple)" },
];

export type InterestIcon = "sports" | "needle" | "mahjong" | "film" | "taxi";

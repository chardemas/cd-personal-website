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
  status: "Looking for in-person SWE roles in NYC",
};

export const quickFacts = [
  { label: "Now", value: "SWE I @ Bank of America" },
  { label: "Studied", value: "CS + Economics, Wake Forest ’25" },
  { label: "Looking for", value: "In-person SWE roles" },
  { label: "Based in", value: "New York City" },
];

export const lookingFor = [
  { title: "Room to grow", detail: "A role where I can use my full potential across backend, full-stack, and AI/ML." },
  { title: "In person, in NYC", detail: "I do my best work in the room with my team." },
  { title: "A young, collaborative team", detail: "People I can build with and learn from every day." },
  { title: "Purpose", detail: "Products with a clear point, used by real people." },
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
    team: "Core Technology Infrastructure",
    location: "Jersey City, NJ",
    dates: "Jul 2025 — Present",
    points: [
      "Own incident management for **5 production applications**, using Splunk and Ansible Tower logs to drive root-cause analysis and remediation.",
      "Automate server configuration and provisioning across public and private cloud with **Terraform** and **Ansible**.",
      "Containerized and deployed IBM Application Modernization Accelerator on **OpenShift** as a proof of concept for moving applications from VMs to containers.",
      "Lead release testing for platform upgrades across containerized and legacy Java middleware (WebSphere, JBoss, Tomcat, Apache, IHS).",
      "Technical onboarding lead for **5 new engineers**; wrote the documentation for procedures that previously had none.",
    ],
    tags: ["Terraform", "Ansible", "OpenShift", "Splunk", "Linux"],
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
      "Designed and built an incident-reporting dashboard used for monitoring by multiple engineering teams.",
      "Hackathon: built a **Python backend that summarized unread email and ranked it by urgency** with NLP classification over message content and sender metadata.",
    ],
    tags: ["Python", "NLP", "Dashboards"],
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

export type ProjectArt = "kiki" | "needlepoint" | "outfits" | "patents" | "email";

export type Project = {
  title: string;
  kind: string;
  status: string;
  blurb: string;
  stack: string[];
  art: ProjectArt;
  href?: string;
  linkLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "kiki",
    kind: "Full-stack web app",
    status: "Heading to production",
    blurb:
      "Low-effort plans with your people. Crews, weekly plans with RSVPs, a “who’s free” heatmap that ranks the best time windows, and expense splitting that settles balances in the fewest transfers. Typed end to end, from React to Postgres, with hashed sessions, rate limits, and row-level security.",
    stack: ["Next.js", "TypeScript", "oRPC", "Drizzle", "Postgres", "TanStack Query", "Vitest"],
    art: "kiki",
    href: "https://github.com/chardemas/friend-planner",
    linkLabel: "View code",
    featured: true,
  },
  {
    title: "Needlepoint Chart Converter",
    kind: "Computer vision",
    status: "In progress",
    blurb:
      "A model that turns inspiration photos into stitchable needlepoint charts: simple shapes and a sensible thread palette, the part auto-pixelation tools get wrong. Trained on my own charts paired with their source photos, plus canvases sold online.",
    stack: ["Python", "Computer vision", "Data collection"],
    art: "needlepoint",
    href: "https://github.com/chardemas/ndlpt-chart-converter",
    linkLabel: "View code",
  },
  {
    title: "Rental Outfit Planner",
    kind: "AI product",
    status: "In progress",
    blurb:
      "Enter an event, date, city, size, and budget, and get back complete rental outfits. Built on semantic search over rental inventory.",
    stack: ["Next.js", "TypeScript", "Supabase", "pgvector"],
    art: "outfits",
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
  { group: "Web & product", items: ["Next.js", "React", "Tailwind", "Supabase", "Postgres", "Drizzle"] },
  { group: "ML & data", items: ["SBERT", "TensorFlow", "NLP", "pandas", "pgvector", "Semantic search", "Pipeline design"] },
  {
    group: "Infrastructure",
    items: ["Linux (RHEL)", "Terraform", "Ansible", "Kubernetes", "OpenShift", "Docker", "AWS EC2", "Splunk", "Artifactory"],
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
    { name: "Sports Economics", note: "Copenhagen" },
    { name: "Economics of Crime", note: "Copenhagen" },
    { name: "Nordic Mythology", note: "Copenhagen" },
    { name: "Danish", note: "Copenhagen" },
    { name: "Game Theory" },
    { name: "German 210", note: "East German history" },
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
    detail: "NHL hockey, equestrian, college basketball, and the game theory behind them",
    icon: "sports",
    color: "var(--color-blue)",
  },
  { label: "Needlepoint", detail: "I paint and sell canvases on Etsy", href: profile.links.etsy, icon: "needle", color: "var(--color-pink)" },
  { label: "Mahjong", icon: "mahjong", color: "var(--color-green)" },
  { label: "Reading & film", icon: "film", color: "var(--color-purple)" },
  { label: "Travel, fashion & NYC", detail: "always exploring", icon: "taxi", color: "var(--color-red)" },
];

export type InterestIcon = "sports" | "needle" | "mahjong" | "film" | "taxi";

export const ticker = [
  "Software Engineer",
  "New York, NY",
  "Full-stack",
  "AI / ML",
  "Wake Forest ’25",
  "Needlepoint",
  "NHL Hockey",
  "Mahjong",
  "Open to in-person roles",
];

export type ProfessionalProject = {
  slug: "lumitrade" | "whatever" | "msdirect" | "arthur" | "intelligize" | "bitmovio" | "itboost";
  featured: boolean;
  category: string;
  name: string;
  employer: string;
  former?: string;
  description: string;
  involvement: string;
  tags: readonly string[];
  href: string;
  linkLabel: string;
  linkAriaLabel: string;
};

export const navigation = [
  ["About", "#about"],
  ["Professional work", "#professional-work"],
  ["Experience", "#experience"],
  ["Independent", "#projects"],
  ["Expertise", "#expertise"],
  ["Contact", "#contact"],
] as const;

export const professionalProjects: readonly ProfessionalProject[] = [
  {
    slug: "lumitrade", featured: true, category: "Financial technology · AI", name: "Lumitrade.ai",
    employer: "Lumitrade · United States", former: "Formerly Traidify",
    description: "A financial wellness and trading assistant platform bringing together market insights, guided education, portfolio exploration and trading tools.",
    involvement: "Contributed to financial charting and dashboard experiences using React, TypeScript and D3.js, with reusable UI components, API-backed data, theming and performance improvements.",
    tags: ["React", "TypeScript", "D3.js", "REST APIs"], href: "https://lumitrade.ai/",
    linkLabel: "Explore product", linkAriaLabel: "Explore product for Lumitrade.ai (opens in new tab)",
  },
  {
    slug: "whatever", featured: true, category: "HR technology · Workations", name: "whatever.works",
    employer: "MVP Factory · Germany", former: "Formerly jobbaticGo",
    description: "A workation and employee time-out management product designed to simplify complex requests, approvals and company policies.",
    involvement: "Developed multi-level workation approval journeys and conditional business rules using React, TypeScript and REST APIs during my time at MVP Factory.",
    tags: ["React", "TypeScript", "REST APIs"], href: "https://www.mvpfactory.co/en/case-studies/whatever-works",
    linkLabel: "View MVP Factory case study", linkAriaLabel: "View MVP Factory case study for whatever.works (opens in new tab)",
  },
  {
    slug: "msdirect", featured: true, category: "E-commerce · Logistics", name: "MS Direct", employer: "MVP Factory · Germany",
    description: "A European e-commerce fulfillment and cross-border logistics provider connecting online retailers with warehousing, shipping and international delivery.",
    involvement: "Built onboarding experiences with approximately 70–80 configurable fields, validation and conditional UI logic for fulfillment operations.",
    tags: ["React", "TypeScript", "Dynamic forms", "REST APIs"], href: "https://www.ms-direct.com/en/",
    linkLabel: "Visit product", linkAriaLabel: "Visit product for MS Direct (opens in new tab)",
  },
  {
    slug: "arthur", featured: true, category: "Spatial computing · Collaboration", name: "Arthur Digital", employer: "Arthur · Germany",
    description: "An immersive enterprise collaboration platform bringing distributed teams together through virtual spaces, shared content and workflows.",
    involvement: "Worked across React, TypeScript, Node.js and MongoDB on real-time collaboration, document sharing, attachments and approval workflows, supported by AWS and automated testing.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "AWS", "Jest", "Cypress"], href: "https://arthur.digital/",
    linkLabel: "Explore product", linkAriaLabel: "Explore product for Arthur Digital (opens in new tab)",
  },
  {
    slug: "intelligize", featured: false, category: "Legal technology · RegTech", name: "Intelligize", employer: "NorthBay Solutions",
    description: "An enterprise research and analytics platform for SEC filings, regulatory disclosures, financial reporting and compliance workflows.",
    involvement: "Contributed to enterprise document workflows and full-stack initiatives at NorthBay Solutions.",
    tags: ["React", "Node.js", "AWS", "REST APIs"], href: "https://www.intelligize.com/",
    linkLabel: "Explore product", linkAriaLabel: "Explore product for Intelligize (opens in new tab)",
  },
  {
    slug: "bitmovio", featured: false, category: "Entertainment · Video", name: "BitMovio", employer: "NorthBay Solutions",
    description: "A gamified video entertainment platform connecting digital content creators and audiences through interactive experiences.",
    involvement: "Contributed to a gamified consumer video platform during my time at NorthBay Solutions.",
    tags: ["React", "Node.js", "AWS", "REST APIs"], href: "https://www.certik.com/blog/client-spotlight-bitmovio",
    linkLabel: "Read product background", linkAriaLabel: "Read product background for BitMovio (opens in new tab)",
  },
  {
    slug: "itboost", featured: false, category: "IT operations · SaaS", name: "ITBoost", employer: "ITBoost", former: "Now ConnectWise Documentation",
    description: "A cloud-based IT documentation and knowledge management platform for managed service providers and IT teams.",
    involvement: "Built AngularJS components, integrated third-party APIs and worked on MongoDB document versioning in customer-facing features.",
    tags: ["AngularJS", "API integration", "Document versioning"], href: "https://www.connectwise.com/platform/itboost",
    linkLabel: "View product", linkAriaLabel: "View product for ITBoost (opens in new tab)",
  },
];

export const experience = [
  { year: "2024 to present", company: "Lumitrade", role: "Frontend Developer / USA, remote", description: "Built financial charting and trading dashboard features using React and D3.js. Improved application load times by approximately 40% and worked on reusable components, global theming and performance improvements." },
  { year: "2023", company: "MVP Factory", role: "Frontend Developer / Germany, remote", description: "Worked on whatever.works (formerly jobbaticGo) and MS Direct. Built multi-level workation approval flows for whatever.works and MS Direct onboarding with approximately 70–80 configurable fields, validation and conditional UI logic." },
  { year: "2020 to 2022", company: "Arthur", role: "Full Stack Developer / Germany, remote", description: "Worked on a VR collaboration platform using React, TypeScript, Node.js, MongoDB and AWS, including document sharing, attachments, approvals and collaborative workflows, with Jest and Cypress for automated testing." },
  { year: "2019 to 2020", company: "NorthBay Solutions", role: "Full Stack Developer", description: "Contributed to Intelligize and BitMovio, including enterprise document workflows, full-stack engineering and Node.js and AWS initiatives." },
  { year: "2018 to 2019", company: "ITBoost", role: "Frontend Developer", description: "Built reusable AngularJS modules, integrated third-party APIs and implemented MongoDB document versioning for customer-facing application features." },
] as const;

export const independentProjects = [
  { nodes: ["School", "Lesson", "Sync"], category: "Education platform", name: "TalkMate", state: "Working prototype", description: "An offline-first language practice platform for schools, with lesson assignments, teacher and student roles, downloaded lessons and attempt synchronization.", tags: ["Offline-first", "IndexedDB", "Full stack"], details: "Designed for organization, school, teacher and student roles. Lesson content can be accessed offline, and attempts are queued in IndexedDB for synchronization after connectivity returns." },
  { nodes: ["Order", "Worker", "Ready"], category: "Operations software", name: "TailorShop", state: "In development", description: "A configurable tailoring management application covering measurements, customer orders, worker workflows, inventory and role-based operations.", tags: ["Next.js", "Prisma", "Workflow design"], details: "Configurable measurement fields, customer orders and worker-stage workflows are modeled around tailoring operations. The architecture includes role-aware access and inventory planning." },
  { nodes: ["Dish", "Visit", "Review"], category: "Consumer mobile concept", name: "Menu", state: "Product concept", description: "A dish-first restaurant discovery concept focused on individual menu-item reviews, branch visits and tracking repeat orders.", tags: ["Mobile", "Consumer UX", "Data modeling"], details: "Designed around individual dish reviews per restaurant branch, with a single editable review per user and separate historical events for check-ins and repeat dish consumption." },
  { nodes: ["Query", "Retrieve", "Answer"], category: "Technical exploration", name: "Applied AI work", state: "Technical explorations", description: "Experiments with retrieval-augmented generation, LLM integrations and workflow automation using Python, LangChain and OpenAI APIs.", tags: ["Python", "RAG", "LLMs"], details: "Hands-on experiments with retrieval-augmented generation, language-model APIs and automation workflows using Python and LangChain. These are technical explorations, not claimed client deployments." },
] as const;

export const capabilities = [
  { mark: "F", category: "Frontend", title: "Interfaces built to last", description: "Modern, accessible frontend applications with considered architecture, responsive design, data visualization and performance in mind.", skills: ["React", "Next.js", "TypeScript", "D3.js", "Zustand", "TanStack Query"] },
  { mark: "B", category: "Full stack", title: "Product thinking, end to end", description: "Business workflows, API integrations and backend services that make complex requirements easier to manage.", skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"] },
  { mark: "A", category: "AI & Cloud", title: "Practical tools, real use cases", description: "Applying LLM APIs, retrieval workflows and cloud engineering where they make a product more capable.", skills: ["Python", "RAG", "LangChain", "AWS", "Docker", "CI/CD"] },
] as const;

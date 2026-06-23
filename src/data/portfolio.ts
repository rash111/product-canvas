import profileAsset from "@/assets/profile.png.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import zomatoAsset from "@/assets/zomato.pdf.asset.json";
import uxAsset from "@/assets/ux-eval.pdf.asset.json";
import findmyrideAsset from "@/assets/findmyride.pdf.asset.json";
import swiggyAsset from "@/assets/swiggy.pdf.asset.json";
import twitterAsset from "@/assets/twitter.pdf.asset.json";
import tech101Asset from "@/assets/tech101.pdf.asset.json";
import zeptoAsset from "@/assets/zepto.pdf.asset.json";
import vitafitAsset from "@/assets/vitafit.pdf.asset.json";

export const profile = {
  name: "Sarath Chandar Balakrishnan",
  title: "Aspiring Product Manager | SDET | Quality Engineering Professional",
  intro:
    "7+ years building enterprise SaaS at Tekion - reading PRDs, pushing back on requirements, and shipping quality across the Automotive Retail Cloud platform. Now translating that product judgment into a full-time PM role.",
  email: "sarathchandarb@gmail.com",
  phone: "+91 96550 09981",
  location: "Coimbatore / Bengaluru, India",
  photo: profileAsset.url,
  resume: resumeAsset.url,
  socials: {
    linkedin: "",
    github: "",
    medium: "",
  },
};

export type Project = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  tags: string[];
  pdf: string;
  gradient: string;
  overview: string;
  problem: string;
  solution: string;
  frameworks: string[];
  outcomes: string;
};

export const projects: Project[] = [
  {
    slug: "zomato-engagement",
    title: "Zomato - Engagement & Retention Strategy",
    brand: "Zomato",
    category: "Growth & Retention",
    description:
      "Engagement and retention strategy for Tier-1 city users, focused on habit formation and reducing churn.",
    tags: ["Retention", "Growth", "Food Tech", "Tier-1"],
    pdf: zomatoAsset.url,
    gradient: "from-red-500 via-rose-500 to-orange-500",
    overview:
      "Built a retention playbook for Zomato's Tier-1 user base - identifying churn signals, segmenting power users, and proposing interventions across the lifecycle.",
    problem:
      "Tier-1 users were showing declining order frequency after the initial honeymoon period, with rising acquisition costs and weakening LTV.",
    solution:
      "Lifecycle-based interventions: personalized streaks, smart bundles, geo-aware offers, and a Zomato Gold habit-loop redesign.",
    frameworks: ["AARRR Funnel", "RFM Segmentation", "Hook Model", "Jobs-To-Be-Done"],
    outcomes:
      "Recommendations projected to lift 30-day retention by ~8-12% and increase average order frequency among the dormant cohort.",
  },
  {
    slug: "swiggy-scheduled",
    title: "Driving Adoption of Swiggy Scheduled Orders",
    brand: "Swiggy",
    category: "Feature Adoption",
    description:
      "Adoption strategy for the Scheduled Orders feature - discovery, awareness gaps, and behavioural nudges.",
    tags: ["Adoption", "Food Tech", "UX", "Nudges"],
    pdf: swiggyAsset.url,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    overview:
      "Diagnosed why Scheduled Orders had low adoption despite clear user need, and proposed a roadmap to make the feature top-of-mind during the right moments.",
    problem:
      "Users discovered Scheduled Orders late in the flow, post-decision, leading to low feature awareness and adoption.",
    solution:
      "Move discovery upstream - contextual prompts on cart, weekly planner card on home, and office-hour notification nudges.",
    frameworks: ["Fogg Behavior Model", "Discovery → Consideration → Action funnel", "North-Star Metric"],
    outcomes:
      "Proposed funnel improvements estimated to grow scheduled-order share from <2% to 6-8% of weekly orders.",
  },
  {
    slug: "twitter-aarrr",
    title: "AARRR Funnel - Twitter / X",
    brand: "Twitter / X",
    category: "Analytics & Metrics",
    description:
      "AARRR funnel breakdown for Twitter/X with metric instrumentation and intervention hypotheses at each stage.",
    tags: ["AARRR", "Metrics", "Social", "Analytics"],
    pdf: twitterAsset.url,
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    overview:
      "Mapped Twitter/X across Acquisition, Activation, Retention, Referral and Revenue with concrete metrics and leverage points.",
    problem:
      "Activation drop-off between sign-up and first meaningful interaction (follow + engage) was the largest funnel leak.",
    solution:
      "Interest-led onboarding, accelerated first-follow flow, and creator-side referral loops to compound graph density.",
    frameworks: ["AARRR (Pirate Metrics)", "North-Star Metric", "Aha-Moment Analysis"],
    outcomes:
      "Activation improvements projected to raise D1 retention by ~15% and shorten time-to-aha to under 90 seconds.",
  },
  {
    slug: "zepto-aov",
    title: "Increasing AOV at Zepto",
    brand: "Zepto",
    category: "Monetisation",
    description:
      "Group case study on lifting Average Order Value at Zepto through bundling, threshold nudges and category expansion.",
    tags: ["AOV", "Quick Commerce", "Monetisation"],
    pdf: zeptoAsset.url,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    overview:
      "Examined Zepto's basket composition and proposed levers to lift AOV without hurting conversion or 10-minute promise.",
    problem:
      "AOV plateaued around impulse SKUs; users weren't crossing the free-delivery threshold consistently.",
    solution:
      "Smart bundles, threshold-aware nudges, complementary cross-sell at cart, and a curated 'weekly essentials' lane.",
    frameworks: ["Price Anchoring", "Decoy Effect", "RFM Analysis", "Cohort Basket Analysis"],
    outcomes:
      "Projected AOV uplift of 12-18% with neutral impact on conversion and delivery SLA.",
  },
  {
    slug: "findmyride",
    title: "FindMyRide Spot",
    brand: "FindMyRide",
    category: "0 → 1 Product",
    description:
      "A 0→1 product concept for finding and reserving parking spots in dense urban areas.",
    tags: ["0 to 1", "Urban Mobility", "Marketplace"],
    pdf: findmyrideAsset.url,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    overview:
      "Defined the problem, target user, and MVP scope for a parking discovery and reservation product for Indian metros.",
    problem:
      "Urban drivers waste 20+ minutes per trip looking for parking, with no reliable real-time inventory.",
    solution:
      "Two-sided marketplace - lot operators list inventory, drivers reserve a slot and pay in-app; phased rollout starting with malls and offices.",
    frameworks: ["Lean Canvas", "JTBD", "MVP Cuts", "Two-Sided Marketplace Loops"],
    outcomes:
      "Validated problem with 12 user interviews; defined a 3-phase GTM and the success metrics for each phase.",
  },
  {
    slug: "ux-redesign",
    title: "UX Evaluation & Redesign",
    brand: "UX Audit",
    category: "UX & Design",
    description:
      "Heuristic evaluation and redesign of a digital flow to remove friction and reduce drop-off.",
    tags: ["UX", "Heuristics", "Redesign"],
    pdf: uxAsset.url,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    overview:
      "Audited a real-world digital flow using Nielsen heuristics, identified friction, and proposed a redesigned flow with reduced cognitive load.",
    problem:
      "Multi-step flow with unclear progress, hidden errors, and inconsistent CTAs created confusion and abandonment.",
    solution:
      "Linear stepper, inline validation, clearer hierarchy, and a single primary CTA per screen.",
    frameworks: ["Nielsen's 10 Heuristics", "Cognitive Walkthrough", "Information Architecture"],
    outcomes:
      "Redesign projected to reduce flow drop-off by ~25% with a clearer error-recovery path.",
  },
  {
    slug: "vitafit",
    title: "VitaFit - Effective Communication",
    brand: "VitaFit",
    category: "PM Communication",
    description:
      "Assignment on framing PM communication - clear narrative, stakeholder alignment, and decision write-ups.",
    tags: ["Communication", "Stakeholders", "Writing"],
    pdf: vitafitAsset.url,
    gradient: "from-lime-500 via-green-500 to-emerald-500",
    overview:
      "Practiced PM communication via a VitaFit scenario - writing decisions, framing trade-offs, and aligning cross-functional stakeholders.",
    problem:
      "PMs often lose stakeholder buy-in not because of weak ideas but because of weak framing and missing context.",
    solution:
      "Used the SCQA and BLUF frameworks to restructure decision documents and pre-reads.",
    frameworks: ["SCQA", "BLUF", "Pyramid Principle"],
    outcomes:
      "Produced a reusable PM-comms template for decisions, escalations, and post-launch updates.",
  },
  {
    slug: "tech-101",
    title: "Tech 101 for Product Managers",
    brand: "Tech 101",
    category: "PM Foundations",
    description:
      "Assignment covering the technical foundations PMs need - APIs, data, systems, and how to work with engineering.",
    tags: ["APIs", "Systems", "PM Fundamentals"],
    pdf: tech101Asset.url,
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    overview:
      "Worked through core technical concepts every PM should command - APIs, databases, system design basics, and engineering workflows.",
    problem:
      "Many PMs struggle to scope or trade-off because they lack a working model of how their product is actually built.",
    solution:
      "A mental model + glossary covering REST, payloads, latency, caching, and where PM decisions hit engineering cost.",
    frameworks: ["System Design Basics", "API Contracts", "Scoping Heuristics"],
    outcomes:
      "Personal cheat-sheet PMs can use during scoping and design reviews to ask sharper questions.",
  },
];

export const experience = [
  {
    company: "Tekion Corp",
    role: "Senior SDET",
    duration: "Jan 2019 – Present",
    bullets: [
      "Review PRDs with PMs, engineers and designers before each release on the Automotive Retail Cloud (ARC) platform.",
      "Own test strategy for Service module releases - flag risky scope early and push back on requirements that don't hold up.",
      "Use Claude Code, Augment and Lovable to prototype automation and test ideas before committing engineering time.",
      "Built and maintain the regression suite (Selenium, Java, TypeScript) covering business-critical workflows.",
      "Promoted from Associate QA Engineer → Senior SDET across the journey.",
    ],
    tech: ["Selenium", "Java", "TypeScript", "TestNG", "Postman", "Jira", "Figma", "Amplitude"],
    impact: "5 releases per quarter on ARC Service · 100% regression ownership · 2 promotions",
  },
  {
    company: "LetzConnect Technologies",
    role: "Software Engineer",
    duration: "Aug 2017 – Dec 2018",
    bullets: [
      "Tested web application functionality end to end and worked with devs to track down and fix defects.",
      "Wrote automation scripts to pull and process website content, cutting manual testing time.",
    ],
    tech: ["Web Testing", "Automation Scripts"],
    impact: "Reduced manual regression time across releases",
  },
  {
    company: "CSS Corp / Slash Support",
    role: "Technical Support Engineer",
    duration: "Aug 2016 – Apr 2017",
    bullets: [
      "Supported Roku and Belkin customers on connectivity, setup and configuration issues.",
      "Early exposure to where products actually break for real users in the wild.",
    ],
    tech: ["Roku", "Belkin", "Customer Support"],
    impact: "Frontline customer empathy that still shapes product thinking",
  },
];

export const skills = {
  "Product Management": [
    "Product Discovery",
    "User Research",
    "Product Strategy",
    "Prioritization",
    "Roadmapping",
    "Analytics",
    "Stakeholder Management",
    "Product Metrics",
    "PRD Writing",
    "Launch & Adoption",
  ],
  "Quality Engineering": [
    "Manual Testing",
    "Test Automation",
    "API Testing",
    "Regression Testing",
    "SaaS Validation",
    "Test Planning",
    "Root Cause Analysis",
    "Defect & Risk Management",
  ],
  "Technical Skills": [
    "SQL",
    "REST APIs",
    "Selenium",
    "Java",
    "TypeScript",
    "Agile / Scrum",
    "Jira",
    "Confluence",
    "SDLC / STLC",
    "Data Analysis",
  ],
  "AI-Assisted Product": [
    "Claude Code",
    "Augment",
    "Lovable",
    "Rapid Prototyping",
    "LLMs & RAGs for PMs",
    "Vibe Coding",
  ],
};

export const certifications = [
  {
    name: "AI-First Product Manager Program",
    org: "Airtribe",
    date: "Final Stage · 2025",
    detail:
      "Product Strategy, User Research, Product Metrics, PRDs, AI Product Development, Rapid Prototyping.",
    link: "https://www.airtribe.live/",
  },
  {
    name: "B.E., Electronics & Communication Engineering",
    org: "INFO Institute of Engineering, Coimbatore",
    date: "2012 – 2016",
    detail: "Bachelor's degree with leadership as Football Team Captain (2014–2016).",
    link: "",
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));
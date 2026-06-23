import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Sparkles,
  Briefcase,
  GraduationCap,
  Layers,
  FolderKanban,
  Award,
  User as UserIcon,
  Home as HomeIcon,
  MessageSquare,
} from "lucide-react";
import { profile, projects, experience, skills, certifications, categories } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarath Chandar Balakrishnan - Aspiring Product Manager" },
      {
        name: "description",
        content:
          "Portfolio of Sarath Chandar Balakrishnan, 8+ years in enterprise SaaS QA & SDET, transitioning into Product Management. PM case studies, certifications and experience.",
      },
      { property: "og:title", content: "Sarath Chandar Balakrishnan - Aspiring Product Manager" },
      {
        property: "og:description",
        content: "Product Management portfolio: case studies, projects, certifications, and PM-grade thinking.",
      },
      { property: "og:image", content: profile.photo },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCat === "All" || p.category === activeCat;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [query, activeCat]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects
        projects={filtered}
        query={query}
        setQuery={setQuery}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const items = [
    { href: "#home", label: "Home", icon: HomeIcon },
    { href: "#about", label: "About", icon: UserIcon },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#skills", label: "Skills", icon: Layers },
    { href: "#projects", label: "Projects", icon: FolderKanban },
    { href: "#certifications", label: "Certifications", icon: Award },
    { href: "#contact", label: "Contact", icon: MessageSquare },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-glow">
            SC
          </span>
          <span className="hidden sm:inline">Sarath Chandar</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {it.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3 text-xs text-muted-foreground">
          <a href={`mailto:${profile.email}`} className="hover:text-primary inline-flex items-center gap-1">
            <Mail className="h-3.5 w-3.5" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-primary inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" /> {profile.phone}
          </a>
        </div>
      </div>
      <nav className="md:hidden border-t border-border overflow-x-auto">
        <div className="flex gap-1 px-3 py-2 min-w-max">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="px-3 py-1.5 text-xs rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary whitespace-nowrap">
              {it.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for Product Manager roles
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>.
            <br />I build products with empathy, validate with data.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">{profile.intro}</p>
          <p className="mt-4 text-sm font-medium text-primary">{profile.title}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-medium shadow-glow hover:-translate-y-0.5 transition-transform"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border font-medium hover:bg-secondary transition-colors"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> {profile.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 bg-gradient-hero opacity-30 blur-3xl rounded-full" />
          <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-glow border-4 border-card">
            <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl shadow-card px-4 py-3 hidden sm:block">
            <div className="text-2xl font-bold text-gradient">8+ yrs</div>
            <div className="text-xs text-muted-foreground">SaaS · QA · SDET</div>
          </div>
          <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl shadow-card px-4 py-3 hidden sm:block">
            <div className="text-2xl font-bold text-gradient">{projects.length}</div>
            <div className="text-xs text-muted-foreground">PM case studies</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">{eyebrow}</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  const highlights = [
    "9+ years in enterprise SaaS QA & SDET - embedded with Product, Engineering and Design",
    "Owned regression and test strategy for Tekion's Automotive Retail Cloud (ARC) Service module",
    "Strong product instinct: PRD reviews, edge-case hunting, user-workflow mapping",
    "AI-First PM training at Airtribe - strategy, research, metrics, PRDs, prototyping",
    "Use Claude Code, Augment & Lovable to ship prototypes alongside the day job",
  ];
  return (
    <Section id="about" eyebrow="About" title="From breaking products to building them.">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I've spent 8+ years at <span className="text-foreground font-medium">Tekion</span> on the ARC platform,
            reading PRDs, pushing back on requirements that don't hold up, and mapping how dealerships actually use the
            product before features ship.
          </p>
          <p>
            That QA lens taught me to think in <span className="text-foreground font-medium">edge cases, user
            workflows and risk</span>. Working shoulder-to-shoulder with PMs and engineers, I picked up the muscle for
            product strategy, prioritization and stakeholder management.
          </p>
          <p>
            I'm in the final stage of Airtribe's <span className="text-foreground font-medium">AI-First Product
            Manager</span> program, where I've shipped the case studies on this page - from growth and retention to 0→1
            product, AARRR funnels and PM communication.
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-3">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex gap-3 p-4 rounded-xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className="h-6 w-6 shrink-0 rounded-md bg-gradient-hero text-primary-foreground flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <div className="text-sm">{h}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="A timeline through SaaS, QA & SDET." subtitle="Each role expanded the product surface area I work on and the people I work with.">
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <div className="space-y-8">
          {experience.map((e) => (
            <div key={e.company} className="relative pl-12 sm:pl-16">
              <div className="absolute left-0 top-2 h-8 w-8 sm:h-12 sm:w-12 rounded-xl bg-gradient-hero text-primary-foreground flex items-center justify-center shadow-glow">
                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover:-translate-y-0.5 transition-transform">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <div className="text-sm text-primary font-medium">{e.company}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{e.duration}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-xs font-medium text-accent-foreground/80">Impact · {e.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const palette = [
    "from-violet-500 to-fuchsia-500",
    "from-sky-500 to-emerald-500",
    "from-amber-500 to-rose-500",
    "from-indigo-500 to-cyan-500",
  ];
  return (
    <Section id="skills" eyebrow="Skills" title="A toolkit built across product, quality & tech.">
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items], idx) => (
          <div key={group} className="rounded-2xl p-6 bg-card border border-border shadow-card">
            <div className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${palette[idx % palette.length]} text-white`}>
              {group}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects({
  projects: list,
  query,
  setQuery,
  activeCat,
  setActiveCat,
}: {
  projects: typeof projects;
  query: string;
  setQuery: (s: string) => void;
  activeCat: string;
  setActiveCat: (s: string) => void;
}) {
  const cats = ["All", ...categories];
  return (
    <Section id="projects" eyebrow="Projects" title="Product Management case studies." subtitle="Case studies from Airtribe's AI-First PM program - covering growth, retention, 0→1, analytics and PM communication. Click any card to read the full PDF in-app.">
      <div className="flex flex-wrap gap-3 mb-8 items-center">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeCat === c
                  ? "bg-gradient-hero text-primary-foreground border-transparent shadow-soft"
                  : "bg-card text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <Link
            key={p.slug}
            to="/project/$slug"
            params={{ slug: p.slug }}
            className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-glow transition-all"
          >
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} p-6 flex flex-col justify-between text-white overflow-hidden`}>
              <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.6), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,.4), transparent 40%)" }} />
              <div className="relative">
                <div className="text-xs font-medium uppercase tracking-wider opacity-90">{p.category}</div>
                <div className="mt-1 text-3xl font-bold leading-tight">{p.brand}</div>
              </div>
              <div className="relative text-sm font-medium opacity-90 group-hover:opacity-100">
                Open case study →
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">No projects match that search.</div>
      )}
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications & Education" title="Always learning.">
      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((c) => (
          <div key={c.name} className="rounded-2xl p-6 bg-card border border-border shadow-card hover:-translate-y-0.5 transition-transform">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground flex items-center justify-center shadow-glow shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{c.name}</h3>
                <div className="text-sm text-primary">{c.org}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.date}</div>
                <p className="text-sm text-muted-foreground mt-2">{c.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk product." subtitle="The fastest path is email - I usually reply within a day.">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-0.5 transition-transform"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase text-muted-foreground">Email</div>
              <div className="font-semibold">{profile.email}</div>
            </div>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-0.5 transition-transform"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase text-muted-foreground">Phone</div>
              <div className="font-semibold">{profile.phone}</div>
            </div>
          </a>
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card">
            <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground flex items-center justify-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase text-muted-foreground">Location</div>
              <div className="font-semibold">{profile.location}</div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-2xl p-6 bg-card border border-border shadow-card space-y-4">
          <div>
            <label className="text-sm font-medium">Your name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full px-3 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full px-3 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="mt-1 w-full px-3 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
              placeholder="Tell me about the role or project…"
            />
          </div>
          {error && <div className="text-sm text-destructive">{error}</div>}
          {sent && !error && (
            <div className="text-sm text-success">Opening your email client… thanks for reaching out!</div>
          )}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-medium shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            Send via email <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} {profile.name}. Built with care.</div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-primary inline-flex items-center gap-1">
            <Mail className="h-4 w-4" /> Email
          </a>
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary inline-flex items-center gap-1">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          )}
          {profile.socials.github && (
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary inline-flex items-center gap-1">
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

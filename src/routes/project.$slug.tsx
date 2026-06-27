import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, Tag, Target, Lightbulb, TrendingUp, Layers, FileText, ExternalLink } from "lucide-react";
import { projects, profile, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/project/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    const title = p ? `${p.title} - Sarath Chandar` : "Project - Sarath Chandar";
    const desc = p?.description ?? "Product Management case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: profile.photo },
      ],
    };
  },
  loader: ({ params }): { project: Project } => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const data = Route.useLoaderData() as { project: Project };
  const p = data.project;

  const insights = [
    { label: "Overview", value: p.overview, icon: Layers, accent: "from-sky-500 to-indigo-500" },
    { label: "Problem Statement", value: p.problem, icon: Target, accent: "from-rose-500 to-orange-500" },
    { label: "Solution & Strategy", value: p.solution, icon: Lightbulb, accent: "from-amber-500 to-yellow-500" },
    { label: "Outcomes & Recommendations", value: p.outcomes, icon: TrendingUp, accent: "from-emerald-500 to-teal-500" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={p.pdf}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open PDF
            </a>
            <a
              href={p.pdf}
              download
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-gradient-hero text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform"
            >
              <Download className="h-3.5 w-3.5" /> Download
            </a>
          </div>
        </div>
      </header>

      <section className={`relative bg-gradient-to-br ${p.gradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.5), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,.3), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="text-xs uppercase tracking-widest opacity-90">{p.category}</div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold max-w-3xl">{p.title}</h1>
          <p className="mt-4 text-base sm:text-lg max-w-2xl opacity-95">{p.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20">
                <Tag className="inline h-3 w-3 mr-1" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <section className="grid sm:grid-cols-2 gap-5">
          {insights.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.label} className="relative p-6 rounded-2xl bg-card border border-border shadow-card overflow-hidden">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.accent}`} />
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.accent} text-white grid place-items-center shadow-soft`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-base font-semibold tracking-tight">{s.label}</h2>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.value}</p>
              </article>
            );
          })}
        </section>

        <section className="grid md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <div className="text-xs uppercase tracking-wider text-primary font-semibold">Frameworks Applied</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.frameworks.map((f) => (
                <span key={f} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <div className="text-xs uppercase tracking-wider text-primary font-semibold">Tags</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              Category: <span className="text-foreground font-medium">{p.category}</span> · Brand: <span className="text-foreground font-medium">{p.brand}</span>
            </div>
          </div>
        </section>

        <section className={`relative overflow-hidden rounded-2xl p-8 sm:p-10 bg-gradient-to-br ${p.gradient} text-white shadow-card`}>
          <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,.6), transparent 50%)" }} />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur grid place-items-center border border-white/20">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Read the full case study</h3>
                <p className="mt-1 text-sm opacity-90 max-w-md">Download the complete PDF to view the detailed analysis, wireframes, metrics and recommendations.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={p.pdf}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-soft hover:-translate-y-0.5 transition-transform"
              >
                <Download className="h-4 w-4" /> Download PDF
              </a>
              <a
                href={p.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 backdrop-blur border border-white/25 font-semibold hover:bg-white/25 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Open in new tab
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to all projects
        </Link>
      </footer>
    </div>
  );
}
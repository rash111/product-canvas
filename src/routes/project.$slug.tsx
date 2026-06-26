import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Maximize2, ExternalLink, Download, Tag } from "lucide-react";
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

  const sections = [
    { label: "Overview", value: p.overview },
    { label: "Problem Statement", value: p.problem },
    { label: "Solution & Strategy", value: p.solution },
    { label: "Outcomes & Recommendations", value: p.outcomes },
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
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
            >
              <Maximize2 className="h-3.5 w-3.5" /> Fullscreen
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
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.5), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,.3), transparent 50%)" }} />
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-3 gap-8">
        <aside className="space-y-5 lg:order-2">
          {sections.map((s) => (
            <div key={s.label} className="p-5 rounded-2xl bg-card border border-border shadow-card">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">{s.label}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.value}</p>
            </div>
          ))}
          <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
            <div className="text-xs uppercase tracking-wider text-primary font-semibold">Frameworks Used</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.frameworks.map((f) => (
                <span key={f} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-card">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-secondary/40">
              <div className="text-sm font-medium">Case Study PDF</div>
              <div className="flex items-center gap-3">
                <a
                  href={p.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs inline-flex items-center gap-1 text-primary hover:underline"
                >
                  Open full page <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <object
              data={`${p.pdf}#view=FitH&toolbar=1`}
              type="application/pdf"
              className="w-full h-[85vh] block bg-muted"
              aria-label={p.title}
            >
              <div className="p-8 text-center text-sm text-muted-foreground">
                <p>Your browser can't display the PDF inline.</p>
                <a
                  href={p.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-hero text-primary-foreground"
                >
                  Open PDF in new tab <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to all projects
        </Link>
      </footer>
    </div>
  );
}
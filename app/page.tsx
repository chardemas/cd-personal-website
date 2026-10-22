import Nav from "@/components/Nav";
import ProjectArt from "@/components/ProjectArt";
import CopyEmail from "@/components/CopyEmail";
import Skyline from "@/components/Skyline";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { InterestGlyph, nycIcons } from "@/components/NycIcons";
import { education, experience, offClock, profile, projects, skills, summary } from "@/lib/content";

const accents = ["var(--color-pink)", "var(--color-blue)", "var(--color-green)", "var(--color-purple)", "var(--color-red)"];

// Renders **bold** spans from the content file.
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

// Two-column section: title (with a subway-style route bullet) on the left, content on the right.
function Section({
  id,
  bullet,
  title,
  color,
  children,
}: {
  id: string;
  bullet: string;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-14">
      <div className="grid gap-6 border-t border-line pt-10 md:grid-cols-[180px_1fr] md:gap-10">
        <div className="reveal flex items-center gap-3 self-start md:sticky md:top-28">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs"
            style={{ borderColor: color, color }}
            aria-hidden
          >
            {bullet}
          </span>
          <h2 className="font-serif text-3xl tracking-tight">{title}</h2>
        </div>
        <div className="reveal min-w-0">{children}</div>
      </div>
    </section>
  );
}

function Label({ color, children }: { color?: string; children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-widest uppercase" style={{ color: color ?? "var(--color-faint)" }}>
      {children}
    </p>
  );
}

// Label + content row, used by Skills and Education so they read the same way.
function Row({ label, color, children }: { label: string; color?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5 border-b border-line py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[170px_1fr] sm:gap-6">
      <div className="sm:pt-1">
        <Label color={color}>{label}</Label>
      </div>
      <div className="text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

const dotList = (items: string[]) => items.join("  ·  ");

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Nav />

      <main id="main" className="relative overflow-x-clip">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section id="top" className="relative mx-auto max-w-6xl px-5 pt-28 pb-12 sm:px-8 md:pt-36">
          <div className="glow -top-24 right-0 h-80 w-80 bg-pink" />
          <div className="glow top-32 -left-24 h-72 w-72 bg-purple" />

          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div className="fade-up">
              <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.02em] sm:text-7xl lg:text-[5.25rem]">
                Charlotte
                <br />
                Demas
              </h1>

              <dl className="mt-7 space-y-2">
                {[
                  { label: "Role", value: "Software Engineer · Bank of America", color: "var(--color-pink)" },
                  { label: "Degrees", value: "B.S. Computer Science & B.A. Economics", color: "var(--color-purple)" },
                  { label: "School", value: "Wake Forest University · 2025", color: "var(--color-blue)" },
                ].map((row) => (
                  <div key={row.label} className="flex items-baseline gap-4">
                    <dt className="w-16 shrink-0 font-mono text-[11px] tracking-widest uppercase" style={{ color: row.color }}>
                      {row.label}
                    </dt>
                    <dd className="text-[17px]">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-pink"
                >
                  <DownloadIcon />
                  Download resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium transition hover:border-ink"
                >
                  Get in touch
                </a>
                <div className="ml-1 flex items-center gap-1">
                  <a href={profile.links.github} aria-label="GitHub" className="rounded-full p-2.5 transition hover:bg-white/5 hover:text-pink">
                    <GitHubIcon />
                  </a>
                  <a href={profile.links.linkedin} aria-label="LinkedIn" className="rounded-full p-2.5 transition hover:bg-white/5 hover:text-pink">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* headshot shown in full at its native 230×237 size, no crop */}
            <div className="fade-up flex justify-center [animation-delay:150ms]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/charlotte.jpg" alt="Charlotte Demas" width={230} height={237} className="block h-auto w-[230px] rounded-md" />
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <Section id="about" bullet="1" title="About" color="var(--color-pink)">
          <div className="max-w-3xl space-y-4 text-[17px] leading-relaxed">
            {summary.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Label color="var(--color-purple)">Off the clock</Label>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
              {offClock.map((item) => {
                const inner = (
                  <>
                    <span style={{ color: item.color }}>
                      <InterestGlyph icon={item.icon} className="h-4 w-4" />
                    </span>
                    {item.label}
                  </>
                );
                return (
                  <li key={item.label} title={item.detail}>
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-1.5 hover:text-pink">
                        {inner}
                        <ArrowIcon className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5">{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>

        {/* ── Skills ───────────────────────────────────────── */}
        <Section id="skills" bullet="2" title="Skills" color="var(--color-purple)">
          {skills.map((g, i) => (
            <Row key={g.group} label={g.group} color={accents[i % accents.length]}>
              {dotList(g.items)}
            </Row>
          ))}
        </Section>

        {/* ── Experience ───────────────────────────────────── */}
        <Section id="experience" bullet="3" title="Experience" color="var(--color-blue)">
          {/* laid out like a subway line: dates on the left, one stop per role */}
          <ol className="relative space-y-3">
            <span
              className="subway-line absolute top-3 bottom-3 left-[7px] w-0.5 rounded-full md:left-[147px]"
              aria-hidden
            />
            {experience.map((job) => (
              <li key={`${job.org}-${job.role}`} className="md:grid md:grid-cols-[140px_1fr]">
                <div className="hidden pt-6 pr-6 text-right font-mono text-[11px] leading-relaxed md:block">
                  <p>{job.dates}</p>
                  <p className="text-faint">{job.location}</p>
                </div>
                <div className="relative pl-7">
                  <span className="absolute top-6 left-0 h-4 w-4 rounded-full border-2 border-ink bg-bg" aria-hidden />
                  <div className="card p-5 transition-colors hover:border-line-strong sm:p-6">
                    <p className="mb-1.5 font-mono text-[11px] text-faint md:hidden">
                      {job.dates} · {job.location}
                    </p>
                    <h3 className="text-base font-medium tracking-tight sm:text-[17px]">
                      {job.role}
                      <span className="text-faint"> · </span>
                      <span className="text-purple">{job.org}</span>
                    </h3>
                    {job.team && <p className="mt-0.5 text-[13px] text-faint">{job.team}</p>}
                    <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                      {job.points.map((p, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="mt-[9px] h-px w-2.5 shrink-0 bg-pink" aria-hidden />
                          <span>
                            <Rich text={p} />
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-3.5 flex flex-wrap gap-1.5" aria-label="Tools">
                      {job.tags.map((t) => (
                        <li key={t} className="rounded-full bg-white/[0.06] px-2.5 py-0.5 font-mono text-[11px]">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── Education ────────────────────────────────────── */}
        <Section id="education" bullet="4" title="Education" color="var(--color-red)">
          <div className="mb-6">
            <h3 className="text-xl font-medium tracking-tight">{education.school}</h3>
            <p className="mt-0.5 text-[15px]">
              {education.degree} <span className="text-faint">·</span> {education.year}{" "}
              <span className="text-faint">·</span> GPA {education.gpa}
            </p>
          </div>
          <Row label="Study abroad" color="var(--color-blue)">
            {education.abroad.title}: {education.abroad.detail}
          </Row>
          <Row label="Relevant coursework" color="var(--color-purple)">
            {dotList(education.coursework)}
          </Row>
          <Row label="Favorite coursework" color="var(--color-pink)">
            {dotList(education.favorites)}
          </Row>
          <Row label="Involvement" color="var(--color-green)">
            {education.involvement
              .map((o) => (o.role ? `${o.name} (${o.role}, ${o.dates})` : o.name))
              .join("  ·  ")}
          </Row>
        </Section>

        {/* ── Projects ─────────────────────────────────────── */}
        <Section id="projects" bullet="5" title="Projects" color="var(--color-green)">
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-2">
                  <div className="absolute inset-0 flex items-center justify-center p-2">
                    <ProjectArt kind={p.art} />
                  </div>
                </div>
                <p className="mt-4 font-mono text-[11px] tracking-widest text-green uppercase">
                  {p.kind} · {p.status}
                </p>
                <h3 className="mt-1.5 text-lg font-medium tracking-tight">
                  {p.href ? (
                    <a href={p.href} className="inline-flex items-center gap-1.5 hover:text-pink">
                      {p.title} <ArrowIcon />
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed">{p.blurb}</p>
                <p className="mt-3 font-mono text-[11px] text-faint">{dotList(p.stack)}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="relative mt-8 overflow-hidden pt-16 pb-44 text-center sm:pb-56">
          <div className="glow top-1/4 left-1/2 h-64 w-[32rem] -translate-x-1/2 bg-purple" />
          <div className="relative mx-auto max-w-2xl px-5">
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              Contact <span className="text-gradient italic">Info</span>
            </h2>
            <p className="mt-3">Open to new opportunities. Reach out by email anytime.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-bg transition hover:bg-pink"
              >
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <a href={profile.links.linkedin} className="inline-flex items-center gap-1 hover:text-pink">
                LinkedIn <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <a href={profile.links.github} className="inline-flex items-center gap-1 hover:text-pink">
                GitHub <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <a href={profile.resume} download className="inline-flex items-center gap-1 hover:text-pink">
                Resume (PDF) <DownloadIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-36 w-full opacity-80 sm:h-48" />
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 font-mono text-xs text-faint sm:flex-row sm:px-8">
        <p>© Charlotte Demas · New York City</p>
        <div className="flex items-center gap-3" aria-hidden>
          {nycIcons.map((Icon, i) => (
            <span
              key={i}
              className="transition-colors hover:text-[var(--hover)]"
              style={{ "--hover": accents[i % accents.length] } as React.CSSProperties}
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}

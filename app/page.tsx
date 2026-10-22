import Nav from "@/components/Nav";
import ProjectArt from "@/components/ProjectArt";
import CopyEmail from "@/components/CopyEmail";
import NycClock from "@/components/NycClock";
import Skyline from "@/components/Skyline";
import Ticker from "@/components/Ticker";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { EmpireStateIcon, InterestGlyph } from "@/components/NycIcons";
import {
  education,
  experience,
  lookingFor,
  offClock,
  profile,
  projects,
  quickFacts,
  skills,
} from "@/lib/content";

// Renders **bold** spans from the content file.
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-medium text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

// Section titles marked with a subway-style route bullet.
function SectionHeading({ bullet, title, color }: { bullet: string; title: string; color: string }) {
  return (
    <div className="reveal mb-12 flex items-center gap-4">
      <span
        className="neon-box flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-lg font-bold text-bg"
        style={{ background: color, color: "var(--color-bg)", boxShadow: `0 0 22px ${color}` }}
        aria-hidden
      >
        {bullet}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <li className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-muted">{children}</li>;
}

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
        <section id="top" className="relative mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 md:pt-40">
          <div className="glow -top-24 right-0 h-80 w-80 bg-pink" />
          <div className="glow top-40 -left-24 h-72 w-72 bg-purple" />
          <div className="glow top-72 right-1/3 h-56 w-56 bg-blue" />

          <div className="grid items-center gap-14 md:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div className="fade-up">
              <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-muted">
                <span className="pulse-dot h-2 w-2 rounded-full bg-green" />
                {profile.status}
              </p>
              <h1 className="text-5xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-7xl lg:text-[5.5rem]">
                Charlotte
                <br />
                Demas<span className="neon text-pink">.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                I&apos;m a software engineer at Bank of America in New York. I studied computer science and economics at
                Wake Forest, and I like building things end to end, from the{" "}
                <span className="text-ink">infrastructure</span> to the{" "}
                <span className="neon font-serif text-[1.2em] text-pink italic">product</span>.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-pink px-5 py-3 text-sm font-semibold text-bg shadow-[0_0_24px_rgb(255_79_210/0.45)] transition hover:shadow-[0_0_36px_rgb(255_79_210/0.7)]"
                >
                  <DownloadIcon />
                  Download resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium transition hover:border-ink"
                >
                  See my work
                </a>
                <div className="ml-1 flex items-center gap-1">
                  <a
                    href={profile.links.github}
                    aria-label="GitHub"
                    className="rounded-full p-2.5 text-muted transition hover:bg-white/5 hover:text-ink"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={profile.links.linkedin}
                    aria-label="LinkedIn"
                    className="rounded-full p-2.5 text-muted transition hover:bg-white/5 hover:text-ink"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* NYC "pass" card, photo shown at its native size */}
            <div className="fade-up flex justify-center [animation-delay:150ms]">
              <div className="w-[270px] -rotate-2 rounded-3xl border border-line-strong bg-surface p-5 shadow-2xl shadow-black/60 transition duration-500 hover:rotate-0">
                <div className="mb-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
                  <span className="flex items-center gap-1.5">
                    <EmpireStateIcon className="neon-icon h-4 w-4 text-pink" />
                    New York City
                  </span>
                  <span className="flex gap-1" aria-hidden>
                    {["bg-pink", "bg-blue", "bg-green", "bg-purple"].map((c) => (
                      <span key={c} className={`h-2 w-2 rounded-full ${c}`} />
                    ))}
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/charlotte.jpg"
                  alt="Charlotte Demas"
                  width={230}
                  height={237}
                  className="mx-auto block rounded-2xl"
                />
                <div className="mt-4">
                  <p className="font-medium tracking-tight">Charlotte Demas</p>
                  <p className="text-sm text-muted">Software Engineer</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-dashed border-line-strong pt-3 font-mono text-[10px] text-faint">
                  <span>40.7128° N, 74.0060° W</span>
                  <span className="text-green">
                    NYC <NycClock />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <dl className="fade-up mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line [animation-delay:300ms] md:grid-cols-4">
            {quickFacts.map((f) => (
              <div key={f.label} className="bg-bg px-5 py-5">
                <dt className="font-mono text-[11px] tracking-widest text-faint uppercase">{f.label}</dt>
                <dd className="mt-1.5 text-sm text-ink sm:text-[15px]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Ticker />

        {/* ── About ────────────────────────────────────────── */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHeading bullet="1" title="About" color="var(--color-pink)" />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  I&apos;m on Bank of America&apos;s Core Technology Infrastructure team, where I work on cloud
                  provisioning, release testing, and incident response for production applications. Before that I
                  studied computer science and economics at Wake Forest, with a semester in Copenhagen studying neural
                  networks.
                </p>
                <p>
                  Outside of work I&apos;m building <span className="text-ink">kiki</span>, a planning app for friends,
                  and a model that turns photos into needlepoint charts for my{" "}
                  <a href={profile.links.etsy} className="text-ink underline decoration-pink/60 underline-offset-4 hover:text-pink">
                    Etsy shop
                  </a>
                  .
                </p>
              </div>

              <div className="reveal card p-6">
                <p className="mb-5 font-mono text-xs tracking-widest text-faint uppercase">What I&apos;m looking for</p>
                <ul className="grid gap-5 sm:grid-cols-2">
                  {lookingFor.map((item, i) => (
                    <li key={item.title}>
                      <p className="flex items-center gap-2 font-medium text-ink">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            background: ["var(--color-pink)", "var(--color-blue)", "var(--color-green)", "var(--color-purple)"][i % 4],
                          }}
                          aria-hidden
                        />
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal card p-6">
              <p className="mb-5 font-mono text-xs tracking-widest text-faint uppercase">Off the clock</p>
              <ul className="space-y-5">
                {offClock.map((item) => (
                  <li key={item.label} className="flex gap-3.5">
                    <span style={{ color: item.color }}>
                      <InterestGlyph icon={item.icon} className="neon-icon mt-0.5 h-5 w-5" />
                    </span>
                    <div>
                      {item.href ? (
                        <a href={item.href} className="inline-flex items-center gap-1 text-ink hover:text-pink">
                          {item.label}
                          <ArrowIcon className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <p className="text-ink">{item.label}</p>
                      )}
                      {item.detail && <p className="text-sm text-faint">{item.detail}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────── */}
        <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHeading bullet="2" title="Experience" color="var(--color-blue)" />
          {/* laid out like a subway line, one stop per role */}
          <ol className="relative space-y-6 pl-9 sm:pl-12">
            <span className="subway-line absolute top-3 bottom-3 left-[9px] w-1 rounded-full sm:left-[13px]" aria-hidden />
            {experience.map((job) => (
              <li key={`${job.org}-${job.role}`} className="reveal relative">
                <span
                  className="absolute top-7 -left-9 h-[22px] w-[22px] rounded-full border-4 border-ink bg-bg sm:-left-12 sm:h-[30px] sm:w-[30px]"
                  aria-hidden
                />
                <div className="card grid gap-4 p-6 transition-colors hover:border-line-strong sm:p-8 md:grid-cols-[190px_1fr] md:gap-10">
                  <div className="font-mono text-xs leading-relaxed text-faint">
                    <p className="text-muted">{job.dates}</p>
                    <p>{job.location}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {job.role}
                      <span className="text-faint"> · </span>
                      <span className="text-muted">{job.org}</span>
                    </h3>
                    {job.team && <p className="mt-0.5 text-sm text-faint">{job.team}</p>}
                    <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-muted">
                      {job.points.map((p, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2.5 h-px w-3 shrink-0 bg-pink" aria-hidden />
                          <span>
                            <Rich text={p} />
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools">
                      {job.tags.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Projects ─────────────────────────────────────── */}
        <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHeading bullet="3" title="Projects" color="var(--color-green)" />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`reveal card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-line-strong ${
                  p.featured ? "md:col-span-2 md:flex-row" : ""
                }`}
              >
                <div
                  className={`relative border-b border-line bg-surface-2/60 ${
                    p.featured ? "aspect-[16/10] md:aspect-auto md:w-1/2 md:border-r md:border-b-0" : "aspect-[16/9.5]"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <ProjectArt kind={p.art} />
                  </div>
                </div>
                <div className={`flex flex-1 flex-col p-6 sm:p-7 ${p.featured ? "md:p-10" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-faint">
                    <span className="tracking-widest uppercase">{p.kind}</span>
                    <span aria-hidden>·</span>
                    <span className="rounded-full border border-line px-2 py-0.5 text-muted">{p.status}</span>
                  </div>
                  <h3 className={`mt-3 font-medium tracking-tight ${p.featured ? "text-3xl" : "text-2xl"}`}>{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
                    {p.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </ul>
                  {p.href && (
                    <a
                      href={p.href}
                      className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-medium text-ink hover:text-green"
                    >
                      {p.linkLabel ?? "View"} <ArrowIcon />
                      <span className="sr-only"> for {p.title}</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────── */}
        <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHeading bullet="4" title="Skills" color="var(--color-purple)" />
          <div className="reveal card divide-y divide-line">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-3 p-6 sm:grid-cols-[170px_1fr]">
                <p className="font-mono text-xs tracking-widest text-faint uppercase sm:pt-1.5">{g.group}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-lg border border-line px-2.5 py-1 text-sm text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ────────────────────────────────────── */}
        <section id="education" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHeading bullet="5" title="Education" color="var(--color-red)" />
          <div className="grid gap-4 lg:grid-cols-[1fr_1.3fr]">
            <div className="reveal card flex flex-col p-6 sm:p-8">
              <h3 className="text-2xl font-medium tracking-tight">{education.school}</h3>
              <p className="mt-1 text-muted">{education.degree}</p>
              <p className="mt-1 font-mono text-xs text-faint">
                {education.year} · GPA {education.gpa}
              </p>

              <div className="mt-6 rounded-2xl border border-line bg-white/[0.02] p-4">
                <p className="font-mono text-[11px] tracking-widest text-blue uppercase">Study abroad</p>
                <p className="mt-1.5 text-ink">{education.abroad.title}</p>
                <p className="text-sm text-muted">{education.abroad.detail}</p>
              </div>

              <div className="dashed-rule my-6" />

              <p className="font-mono text-[11px] tracking-widest text-faint uppercase">Involvement</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                {education.involvement.map((o) => (
                  <li key={o.name} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
                    <span>
                      <span className="text-ink">{o.name}</span>
                      {o.role && (
                        <span className="text-muted">
                          {" "}
                          · {o.role}, {o.dates}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal card p-6 sm:p-8">
              <p className="font-mono text-[11px] tracking-widest text-faint uppercase">Relevant coursework</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <li key={c} className="rounded-lg border border-line px-2.5 py-1 text-sm text-muted">
                    {c}
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-mono text-[11px] tracking-widest text-faint uppercase">Favorite classes</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {education.favorites.map((f, i) => (
                  <li
                    key={f.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-line bg-white/[0.02] px-4 py-3"
                  >
                    <span className="text-ink">{f.name}</span>
                    {f.note && (
                      <span
                        className="font-mono text-[10px] whitespace-nowrap"
                        style={{ color: ["var(--color-pink)", "var(--color-blue)", "var(--color-green)", "var(--color-purple)"][i % 4] }}
                      >
                        {f.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="mx-auto max-w-6xl px-5 pt-24 pb-16 sm:px-8">
          <div className="reveal card relative overflow-hidden px-6 pt-16 pb-40 text-center sm:px-12 sm:pt-24 sm:pb-52">
            <div className="glow top-1/3 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-purple" />
            <h2 className="relative mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-6xl">
              Let&apos;s <span className="neon font-serif font-normal text-pink italic">talk</span>.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-muted">
              I&apos;m looking for in-person software engineering roles in New York. Email is the best way to reach me.
            </p>
            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-pink px-6 py-3 text-sm font-semibold text-bg shadow-[0_0_24px_rgb(255_79_210/0.45)] transition hover:shadow-[0_0_36px_rgb(255_79_210/0.7)]"
              >
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
            </div>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
              <a href={profile.links.linkedin} className="inline-flex items-center gap-1 hover:text-ink">
                LinkedIn <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <a href={profile.links.github} className="inline-flex items-center gap-1 hover:text-ink">
                GitHub <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <a href={profile.links.etsy} className="inline-flex items-center gap-1 hover:text-ink">
                Etsy shop <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <a href={profile.resume} download className="inline-flex items-center gap-1 hover:text-ink">
                Resume (PDF) <DownloadIcon className="h-3.5 w-3.5" />
              </a>
            </div>
            <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-36 w-full sm:h-48" />
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 pb-10 font-mono text-xs text-faint sm:flex-row sm:px-8">
        <p>© Charlotte Demas</p>
        <p>Built with Next.js, TypeScript &amp; Tailwind in New York City.</p>
      </footer>
    </>
  );
}

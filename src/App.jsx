import React, { useMemo, useState, useEffect, useRef } from "react";

const Sparkles = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3zM5 3l2.8 2.8M2 13h6m-4 4 2.8-2.8M13 2h6m-4 4 2.8 2.8"/></svg>;
const Sun = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
const Moon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;
const LinkIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>;
const Github = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const Linkedin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Mail = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const FolderGit2 = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><circle cx="12" cy="13" r="2"/><path d="M14 13h3"/><path d="M7 13h3"/></svg>;
const Building2 = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>;

const profile = {
  name: "Edward Hawkson",
  title: "Computer Engineering Student @ Notre Dame",
  summary:
    "",
  links: {
    github: "https://github.com/eddieboi13",
    linkedin: "https://www.linkedin.com/in/edward-hawkson-762614234",
    email: "ehawkson@nd.edu",
    resume: "#",
  },
};

const projects = [
  {
    title: "Game Boy Emulator (C + SDL2)",
    image: "Tetris.png",
    description:
      "CPU, PPU, timers/interrupts, and MBC1/2/3/5. Used for learning low‑level architecture and passing classic test ROMs.",
    tags: ["C", "SDL2", "Emulation", "Low‑Level"],
    href: "https://github.com/eddieboi13/Gameboy_Emulator",
  },
  {
    title: "Wi‑Fi Diagnostics (SwiftUI + CoreWLAN)",
    image: "Wifi.png",
    description:
      "macOS app that scans SSIDs/BSSIDs, logs SNR and channel width, and visualizes network health; wrangled code‑signing and permissions.",
    tags: ["SwiftUI", "CoreWLAN", "macOS"],
    href: "https://github.com/eddieboi13/WifiDiagnostics",
  },
  {
    title: "Fund-a-Box",
    image: "logo copy.png",
    description:
      "Collaborative Hackathon project: a community-driven app that supports garden creation through donations, guides, social interaction, and local partnerships.",
    tags: ["React", "Firebase"],
    href: "https://github.com/Chiboy560/Fund-A-Box",
  },
];

const experience = [
  {
    company: "NetScale Lab, University of Notre Dame",
    role: "Research / Tooling (Wi‑Fi Health)",
    period: "2024–present",
    bullets: [
      "Built a SwiftUI macOS tool to scan and log Wi‑Fi data (SSID/BSSID, SNR, channel width).",
      "Dealt with CoreWLAN quirks, location permissions, and code‑signing for local testing.",
    ],
  },
  {
    company: "Personal Systems Projects",
    role: "Indie Dev",
    period: "Ongoing",
    bullets: [
      "Game Boy emulator in C: CPU/PPU pipeline, interrupts/timers, tile/sprite rendering.",
      "Network monitoring scripts and a small C++ multithreaded server for learning.",
    ],
  },
];

const personaTheme = {
  name: "persona",
  bg: "from-[#09121a] via-[#0b1824] to-[#0c1b29]",
  chrome: "bg-blue-950/20 border-blue-400/20 backdrop-blur-lg",
  ring: "ring-2 ring-[#1E90FF]/50",
  accent: "#1E90FF",
};

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { rootMargin });
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [ref, rootMargin]);
  return isIntersecting;
};

const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return dateTime;
};

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "-100px");
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/90 font-heading">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

const Card = ({ children, className = "" }) => (
  <div className={`border ${className}`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}>
    {children}
  </div>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/70 backdrop-blur-sm">{children}</span>
);

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => { if (e.target.closest('a, button, [role="button"], [role="link"], input, textarea, select, label, summary, .clickable, .cursor-pointer')) setIsHovering(true); };
    const handleMouseOut = (e) => { if (e.target.closest('a, button, [role="button"], [role="link"], input, textarea, select, label, summary, .clickable, .cursor-pointer')) setIsHovering(false); };
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed z-50 hidden md:block" style={{ left: `${position.x}px`, top: `${position.y}px`, transition: 'transform 0.1s ease-out' }}>
      <div className={`h-8 w-8 rounded-full border-2 border-blue-400 transition-all duration-200 ${isHovering ? 'scale-150 bg-blue-400/20' : 'scale-100'}`} style={{ transform: 'translate(-50%, -50%)' }}></div>
    </div>
  );
};



const DateTimeDisplay = ({ theme }) => {
  const dateTime = useDateTime();
  const day = dateTime.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  const date = `${dateTime.getMonth() + 1}/${dateTime.getDate()}`;
  const time = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  return (
    <div className="absolute top-5 right-5 z-20 text-right font-mono" style={{ color: theme.accent }}>
      <div className="text-lg">{day}</div>
      <div className="text-4xl font-bold">{date}</div>
      <div className="flex items-center justify-end text-lg">
        <Moon className="h-4 w-4" />
        <span className="ml-2">{time}</span>
      </div>
    </div>
  );
};

export default function App() {
  const theme = personaTheme;
  const nav = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={`min-h-dvh relative text-base text-slate-100 bg-gradient-to-b ${theme.bg} font-sans`}>
      <CustomCursor />
      

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@400;500;700&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; cursor: none; }
        h1, h2, h3, .font-heading { font-family: 'Orbitron', sans-serif; }
        @keyframes bg-pan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animated-bg { background-size: 200% 200%; animation: bg-pan 15s ease infinite; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        @keyframes spin-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 4s linear infinite; }
        /* Hide OS cursor on interactive elements */
        a, button, [role="button"], [role="link"], input, textarea, select, label, summary, details, .cursor-pointer, .clickable { cursor: none !important; }
      `}</style>

      {/* Persona background flourishes */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-screen animated-bg" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, rgba(30,144,255,0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(30,144,255,0.15), transparent 50%)" }} />
      <div className="pointer-events-none absolute inset-0 [background:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_3px)]" />

      <header className={"sticky top-0 z-40"}>
        <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between ${theme.chrome} border-b`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 2% 100%)' }}>
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight font-heading">
            <Sparkles className="h-5 w-5" />
            <span>{profile.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/70 hover:text-white/95 transition">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={profile.links.github} className={`group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border ${theme.ring} ${theme.chrome}`} aria-label="GitHub">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href={profile.links.linkedin} className={`group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border ${theme.ring} ${theme.chrome}`} aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <div className="relative overflow-hidden">
          <DateTimeDisplay theme={theme} />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">{profile.title}</p>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-heading">{profile.name}</h1>
                <p className="text-white/80 max-w-prose">{profile.summary}</p>
                <div className="flex items-center gap-3 pt-2">
                  <a className="p-2 rounded-full border border-white/10 hover:bg-white/5" href={profile.links.github} aria-label="GitHub"><Github className="h-5 w-5"/></a>
                  <a className="p-2 rounded-full border border-white/10 hover:bg-white/5" href={profile.links.linkedin} aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
                  <a className="p-2 rounded-full border border-white/10 hover:bg-white/5" href={`mailto:${profile.links.email}`} aria-label="Email"><Mail className="h-5 w-5"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Section id="about" title="About">
          <AnimatedSection>
            <Card className={`${theme.chrome} p-6`}>
              <p className="text-white/80 leading-relaxed">
                I’m Edward — a Notre Dame student who loves learning about how computers actually work. 
                I’ve been building a Game Boy emulator in C (down to flags and PPU timing), a macOS Wi‑Fi diagnostics app in SwiftUI, 
                and small network monitoring/automation tools.
              </p>
            </Card>
          </AnimatedSection>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <AnimatedSection key={p.title}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={`group block overflow-hidden border ${theme.chrome} hover:shadow-lg hover:shadow-black/20 h-full`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}>
                  <div className="overflow-hidden">
                    <img src={p.image || 'https://placehold.co/600x400/0c1b29/1E90FF?text=' + encodeURIComponent(p.title)} alt={`Screenshot of ${p.title}`} loading="lazy" className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"/>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-white/90 font-semibold font-heading"><FolderGit2 className="h-4 w-4" />{p.title}</div>
                    <p className="mt-3 text-sm text-white/75">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((e) => (
              <AnimatedSection key={e.company}>
                <Card className={`${theme.chrome} p-6`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-1"><Building2 className="h-5 w-5"/></div>
                    <div>
                      <h3 className="text-white/90 font-semibold font-heading">{e.company}</h3>
                      <p className="text-white/70 text-sm">{e.role} · {e.period}</p>
                      <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">{e.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <AnimatedSection>
            <Card className={`${theme.chrome} p-6`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 font-heading">Let’s build something</h3>
                  <p className="text-white/75 text-sm">Reach out to me on these platforms.</p>
                </div>
                <div className="flex items-center gap-3">
                  <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-white/5" href={`mailto:${profile.links.email}`}><Mail className="h-4 w-4"/> Email</a>
                  <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-white/5" href={profile.links.linkedin}><Linkedin className="h-4 w-4"/> LinkedIn</a>
                  <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-white/5" href={profile.links.github}><Github className="h-4 w-4"/> GitHub</a>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </Section>
      </main>

      <footer className={"border-t border-white/10 py-8"}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-white/60">© {new Date().getFullYear()} {profile.name}.</div>
      </footer>
    </div>
  );
}

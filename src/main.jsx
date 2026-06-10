import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Award,
  BookOpenText,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  Sparkles,
  Sun,
  UsersRound,
  X,
} from 'lucide-react';
import './styles.css';

const links = {
  github: 'https://github.com/Claxinaragel',
  linkedin: 'https://www.linkedin.com/in/claxina-ragel/',
  behance: 'https://www.behance.net/claxina_ragel',
  email: 'mailto:claxinadesigns@gmail.com',
};

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'designs', label: 'Designs' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'volunteering', label: 'Volunteering' },
];

const stats = [
  ['3+', 'years in design, clubs, and digital work'],
  ['6+', 'leadership and organizing roles'],
  ['4', 'focus areas: design, UX, marketing, technology'],
];

const moments = [
  {
    title: 'Best Performing OCVP - Marketing',
    meta: 'AIESEC in Rajarata',
    copy: 'Recognized for brand and marketing performance through the Shining Minds project.',
    image: asset('aiesec-best-marketer.jpg'),
    alt: 'Ann Claxina Ragel holding the Best Performing OCVP Marketing award at an AIESEC event',
  },
  {
    title: 'IEEE Executive Committee Secretary',
    meta: 'IEEE Student Branch of Rajarata University of Sri Lanka',
    copy: 'Serving the student branch through coordination, planning, and executive committee leadership.',
    image: asset('ieee-secretary.jpg'),
    alt: 'Ann Claxina Ragel speaking at a podium as IEEE executive committee secretary',
  },
  {
    title: 'RUSLXTREME 1.0',
    meta: 'BD Lead, Mini Organizing Committee',
    copy: 'Contributed to the IEEE Student Branch coding competition initiative as business development lead.',
    image: asset('ruslxtreme.jpg'),
    alt: 'Ann Claxina Ragel at RUSLXTREME wearing an IEEE event lanyard',
  },
];

const certifications = [
  {
    title: 'UI/UX Design Foundations',
    meta: 'Placeholder',
    copy: 'A polished slot for verified UX, product design, or research credentials when final certificates are ready.',
  },
  {
    title: 'Digital Marketing & Content Strategy',
    meta: 'Placeholder',
    copy: 'Reserved for marketing, content creation, campaign planning, and analytics certifications.',
  },
  {
    title: 'Technology & Web Development',
    meta: 'Placeholder',
    copy: 'A future space for certificates connected to software engineering, web development, AI, or cybersecurity.',
  },
  {
    title: 'Leadership & Volunteering',
    meta: 'Placeholder',
    copy: 'A clean card for recognition from IEEE, AIESEC, media, or community leadership programs.',
  },
];

const projects = [
  {
    title: 'IEEE Student Branch Management',
    meta: 'Student Branch Secretary - 2025',
    copy: 'Supports branch activities, coordinates project execution, and helps maintain momentum across student-led initiatives.',
    image: asset('ieee-secretary.jpg'),
    alt: 'Ann Claxina Ragel speaking at an IEEE Student Branch event',
    tags: ['IEEE', 'Leadership', 'Operations'],
  },
  {
    title: 'Innovation Nation Sri Lanka',
    meta: 'Secretary, INSL Mini Organizing Committee - 2024',
    copy: 'Contributed to IEEE Student Branch organizing work for an innovation-focused program at Rajarata University of Sri Lanka.',
    tags: ['IEEE', 'Organizing', 'Innovation'],
  },
  {
    title: 'RUSLXTREME 1.0',
    meta: 'BD Lead, Mini Organizing Committee - 2024',
    copy: 'Worked on business development and coordination for the 18th International Coding Competition local initiative.',
    image: asset('ruslxtreme.jpg'),
    alt: 'Ann Claxina Ragel at RUSLXTREME',
    tags: ['Coding Competition', 'BD', 'IEEE'],
  },
  {
    title: 'Shining Minds',
    meta: 'OCVP Brand and Marketing - 2024',
    copy: 'Led brand and marketing work for a school-student community engagement project with Emerald International and AIESEC.',
    image: asset('aiesec-best-marketer.jpg'),
    alt: 'Ann Claxina Ragel with her AIESEC marketing award',
    tags: ['AIESEC', 'Marketing', 'Community'],
  },
  {
    title: 'INTELLECT 2024',
    meta: 'OC Member, Brand and Marketing - 2024',
    copy: 'Supported branding and marketing execution for an AIESEC in Rajarata initiative.',
    tags: ['Branding', 'AIESEC', 'Events'],
  },
];

const designs = [
  {
    title: 'Graphic Design Systems',
    meta: 'Branding - Social content - Event visuals',
    copy: 'Visual design work across university clubs, media units, campaigns, and digital marketing needs.',
    type: 'Graphic Design',
  },
  {
    title: 'UI Design Concepts',
    meta: 'Web interfaces - User-friendly digital products',
    copy: 'Interface concepts shaped by an IT background, UX curiosity, and a love for usable, modern experiences.',
    type: 'UI Design',
  },
  {
    title: 'Digital Campaign Creatives',
    meta: 'Qubitz Digital Marketing & Software Solutions',
    copy: 'Graphic design, content creation, and website UI/UX contributions during professional design experience.',
    type: 'Graphic Design',
  },
  {
    title: 'Creative Portfolio on Behance',
    meta: 'External design archive',
    copy: 'Selected design pieces and visual explorations are available through Behance.',
    type: 'Portfolio',
    href: links.behance,
  },
];

const volunteering = [
  {
    title: 'IEEE Student Branch',
    meta: 'Secretary - Program Committee Team Leader - Designer',
    copy: 'Joined IEEE RUSL as a designer, grew into project management roles, and now contributes to branch leadership.',
    image: asset('ieee-secretary.jpg'),
    alt: 'Ann Claxina Ragel speaking at an IEEE Student Branch event',
  },
  {
    title: 'AIESEC in Rajarata',
    meta: 'Marketing OCVP - IR Team Leader - Member',
    copy: 'Built experience in branding, public relations, pitching, marketing strategy, and international relations.',
    image: asset('aiesec-best-marketer.jpg'),
    alt: 'Ann Claxina Ragel holding an AIESEC marketing award',
  },
  {
    title: 'Infocus Media Unit',
    meta: 'Senior Graphic Designer and Marketer',
    copy: 'Creates visual communication for the official media club at Rajarata University of Sri Lanka.',
  },
  {
    title: 'Scouting',
    meta: "Completed up to Scout Master's Award",
    copy: 'A foundation in service, discipline, leadership, and community-first engagement.',
  },
  {
    title: 'Announcing and Moderating',
    meta: '2022 - 2025',
    copy: 'Comfortable guiding events, speaking with audiences, and creating a confident stage presence.',
  },
  {
    title: 'Community Engagement',
    meta: 'School-student projects and outreach',
    copy: 'Contributes creative, organizational, and communication skills to community-focused initiatives.',
  },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  });
}

function App() {
  const [page, setPage] = useState(() => window.location.hash.replace('#/', '') || 'home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash.replace('#/', '') || 'home';
      setPage(navItems.some((item) => item.id === next) ? next : 'home');
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goTo = (id) => {
    if (id === page) {
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = `/${id}`;
  };

  const pageComponent = useMemo(() => {
    const props = { goTo };
    return {
      home: <Home {...props} />,
      certifications: <ListingPage eyebrow="Credential Library" title="Certifications" intro="A refined space for verified certificates and learning milestones. Placeholder cards are ready for exact certification details." icon={Award} items={certifications} />,
      projects: <ListingPage eyebrow="Leadership in Motion" title="Projects" intro="CV-backed organizing, leadership, and brand work across IEEE, AIESEC, and university communities." icon={BriefcaseBusiness} items={projects} />,
      designs: <DesignsPage />,
      blogs: <BlogsPage />,
      volunteering: <ListingPage eyebrow="Community Energy" title="Volunteering" intro="A collection of service, leadership, communication, and creative contributions across student organizations and community programs." icon={UsersRound} items={volunteering} />,
    }[page];
  }, [page]);

  return (
    <>
      <Header page={page} goTo={goTo} theme={theme} setTheme={setTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="page-shell">{pageComponent}</main>
      <Footer />
    </>
  );
}

function Header({ page, goTo, theme, setTheme, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={() => goTo('home')} aria-label="Go to home">
        <span>ACR</span>
        <strong>Ann Claxina Ragel</strong>
      </button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <button key={item.id} className={page === item.id ? 'active' : ''} onClick={() => goTo(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Home({ goTo }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">Graphic Designer - UI/UX Designer - Digital Marketer</p>
          <h1>Ann Claxina Ragel</h1>
          <p className="hero-text">
            BSc IT undergraduate at Rajarata University of Sri Lanka, IEEE volunteer, and creative technologist combining visual design,
            user experience, marketing, and community leadership to build meaningful digital work.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href={links.email}>
              <Mail size={18} /> Contact
            </a>
            <button className="secondary-btn" onClick={() => goTo('projects')}>
              Explore Work <ArrowRight size={18} />
            </button>
          </div>
          <div className="socials" aria-label="Social links">
            <a href={links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href={links.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github /></a>
            <a href={links.behance} aria-label="Behance" target="_blank" rel="noreferrer"><span className="be-icon">Be</span></a>
            <a href={links.email} aria-label="Email"><Mail /></a>
          </div>
        </div>
        <div className="portrait-wrap reveal">
          <img src={asset('ann-claxina-ragel.jpg')} alt="Ann Claxina Ragel portrait" />
          <div className="portrait-card">
            <Sparkles size={18} />
            <span>FinTech - MarTech - MedTech enthusiast</span>
          </div>
        </div>
      </section>

      <section className="stats-grid reveal">
        {stats.map(([number, label]) => (
          <div className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="about-band reveal">
        <div>
          <p className="eyebrow">Who She Is</p>
          <h2>Creative thinking with an IT backbone.</h2>
        </div>
        <p>
          Claxina adapts to trends, keeps learning, and is especially interested in using technology for meaningful real-world
          solutions. Her journey spans design, UX, marketing strategy, PR, pitching, planning, and execution.
        </p>
      </section>

      <MomentsSection />
      <PreviewSection icon={Award} title="Certifications" intro="Learning milestones and professional development spaces." items={certifications.slice(0, 3)} action={() => goTo('certifications')} />
      <PreviewSection icon={BriefcaseBusiness} title="Projects" intro="Leadership and organizing work from IEEE and AIESEC initiatives." items={projects.slice(0, 3)} action={() => goTo('projects')} />
      <PreviewSection icon={Palette} title="Designs" intro="Graphic design, UI concepts, campaign visuals, and Behance work." items={designs.slice(0, 3)} action={() => goTo('designs')} />
      <PreviewSection icon={BookOpenText} title="Blogs / Articles" intro="A future home for design, tech, and leadership writing." items={[{ title: 'Coming soon', meta: 'No published articles yet', copy: 'Articles and reflections will appear here when ready.' }]} action={() => goTo('blogs')} />
      <PreviewSection icon={UsersRound} title="Volunteering" intro="IEEE, AIESEC, media, scouting, moderation, and community engagement." items={volunteering.slice(0, 3)} action={() => goTo('volunteering')} />
    </>
  );
}

function MomentsSection() {
  return (
    <section className="content-section reveal">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><Sparkles size={16} /> Featured Moments</p>
          <h2>Proof of work, in the room.</h2>
        </div>
        <p>Selected real moments from AIESEC recognition, IEEE executive committee leadership, and RUSLXTREME organizing work.</p>
      </div>
      <div className="moment-grid">
        {moments.map((item) => (
          <article className="moment-card" key={item.title}>
            <img src={item.image} alt={item.alt} />
            <div>
              <p className="card-meta">{item.meta}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PreviewSection({ icon: Icon, title, intro, items, action }) {
  return (
    <section className="content-section reveal">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><Icon size={16} /> {title}</p>
          <h2>{title}</h2>
        </div>
        <p>{intro}</p>
      </div>
      <CardGrid items={items} />
      <button className="more-btn" onClick={action}>
        See more <ArrowRight size={18} />
      </button>
    </section>
  );
}

function ListingPage({ eyebrow, title, intro, icon: Icon, items }) {
  return (
    <section className="inner-page reveal">
      <div className="page-title">
        <p className="eyebrow"><Icon size={16} /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <CardGrid items={items} expanded />
    </section>
  );
}

function DesignsPage() {
  const graphic = designs.filter((item) => item.type === 'Graphic Design' || item.type === 'Portfolio');
  const ui = designs.filter((item) => item.type === 'UI Design');

  return (
    <section className="inner-page reveal">
      <div className="page-title split-title">
        <div>
          <p className="eyebrow"><Palette size={16} /> Creative Work</p>
          <h1>Designs</h1>
          <p>Graphic design and UI design work shaped by brand thinking, digital marketing, and user-centered technology.</p>
        </div>
        <a className="primary-btn" href={links.behance} target="_blank" rel="noreferrer">
          <span className="be-icon">Be</span> View Behance
        </a>
      </div>
      <h2 className="subhead">Graphic Design</h2>
      <CardGrid items={graphic} expanded />
      <h2 className="subhead">UI Design</h2>
      <CardGrid items={ui} expanded />
    </section>
  );
}

function BlogsPage() {
  return (
    <section className="inner-page reveal">
      <div className="coming-soon">
        <p className="eyebrow"><BookOpenText size={16} /> Blogs / Articles</p>
        <h1>Coming soon</h1>
        <p>No published articles yet. This page is ready for future writing on design, technology, volunteering, and leadership.</p>
      </div>
    </section>
  );
}

function CardGrid({ items, expanded = false }) {
  return (
    <div className={expanded ? 'card-grid expanded' : 'card-grid'}>
      {items.map((item) => (
        <article className="info-card" key={item.title}>
          {item.image && <img className="card-image" src={item.image} alt={item.alt || item.title} />}
          <span className="card-glow" />
          <p className="card-meta">{item.meta}</p>
          <h3>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}</h3>
          <p>{item.copy}</p>
          {item.tags && (
            <div className="tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Ann Claxina Ragel</strong>
        <p>Batticaloa, Sri Lanka - claxinadesigns@gmail.com</p>
      </div>
      <div className="footer-links">
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={links.behance} target="_blank" rel="noreferrer">Behance</a>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);

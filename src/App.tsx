import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronUp,
  Code2,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  PenTool,
  Send,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const technicalSkills = [
  { name: 'HTML5', level: 'Foundations', width: '82%' },
  { name: 'CSS3', level: 'Foundations', width: '78%' },
  { name: 'JavaScript', level: 'Foundations', width: '68%' },
  { name: 'Microsoft Office', level: 'Confident', width: '88%' },
  { name: 'Google Workspace', level: 'Confident', width: '86%' },
  { name: 'UI design principles', level: 'Growing', width: '72%' },
];

const softSkills = ['Problem-solving', 'Communication', 'Professionalism', 'Adaptability', 'Continuous learning'];

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio Website',
    description: 'A responsive personal website that presents a professional profile, capabilities, and work in a clear, accessible format.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: Monitor,
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Interactive To-Do List',
    description: 'A beginner-friendly task manager focused on practical programming logic, clear interaction, and manipulating content on the page.',
    tags: ['JavaScript', 'DOM', 'UI'],
    icon: Check,
    accent: 'mint',
  },
  {
    number: '03',
    title: 'Online Book Summaries',
    description: 'A structured collection of digital book summaries created to showcase research, organisation, and polished documentation skills.',
    tags: ['Microsoft Word', 'Excel', 'Research'],
    icon: FileText,
    accent: 'gold',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark"><Code2 size={18} /></span>
            <span>RL<span className="brand-dot">.</span></span>
          </a>

          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            {navItems.map((item) => (
              <a
                className={activeSection === item.href.slice(1) ? 'active' : ''}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowRight size={15} /></a>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section container">
          <div className="hero-copy">
            <div className="eyebrow reveal"><span className="eyebrow-line" /> Aspiring technology professional</div>
            <h1 className="hero-title reveal delay-1">Building a future<br />with <em>curiosity.</em></h1>
            <p className="hero-intro reveal delay-2">I’m Reithabetse Lenkoane, a South African technology enthusiast who enjoys turning ideas into thoughtful digital experiences.</p>
            <div className="hero-actions reveal delay-3">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="text-link" href="mailto:reithabetselenkoane42@gmail.com">Get in touch <ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="hero-aside reveal delay-2">
            <div className="portrait-card">
              <div className="portrait-topline"><span>PROFILE / 2025</span><span className="status"><i /> Open to opportunities</span></div>
              <div className="portrait-initials">RL</div>
              <div className="portrait-caption"><span>South Africa</span><span>21 years old</span></div>
            </div>
            <div className="hero-note"><Sparkles size={17} /><span>Learning today.<br /><strong>Creating tomorrow.</strong></span></div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to discover</span><ArrowDown size={16} /></a>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="section-label"><span>01</span><span className="label-rule" /> About me</div>
            <div className="about-content">
              <h2 className="section-title">A thoughtful learner<br /><em>with a practical mindset.</em></h2>
              <div className="about-text-grid">
                <p>I’m a 21-year-old aspiring technology professional from South Africa. With a strong interest in technology, digital innovation, and continuous learning, I’m building the practical skills needed to contribute to meaningful digital work.</p>
                <p>I’m especially drawn to web development, digital systems, and productivity tools. My goal is to grow into a versatile technology professional while creating work that is useful, simple, and made with care.</p>
              </div>
              <div className="about-facts">
                <div><MapPin size={17} /><span>South Africa</span></div>
                <div><Target size={17} /><span>Focused on growth</span></div>
                <div><MessageCircle size={17} /><span>Open to connect</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-label"><span>02</span><span className="label-rule" /> Skills & strengths</div>
            <div className="section-heading-row"><h2 className="section-title">Tools I use.<br /><em>Values I bring.</em></h2><p className="section-lead">A growing toolkit shaped by hands-on practice, curiosity, and a commitment to doing things well.</p></div>
            <div className="skills-layout">
              <div className="skill-panel">
                <div className="panel-heading"><Code2 size={19} /><h3>Technical toolkit</h3></div>
                <div className="skill-list">{technicalSkills.map((skill) => <div className="skill-row" key={skill.name}><div className="skill-meta"><span>{skill.name}</span><small>{skill.level}</small></div><div className="skill-track"><span style={{ width: skill.width }} /></div></div>)}</div>
              </div>
              <div className="skill-panel soft-panel">
                <div className="panel-heading"><PenTool size={19} /><h3>How I work</h3></div>
                <p className="soft-intro">The qualities I bring into every new challenge:</p>
                <div className="soft-list">{softSkills.map((skill) => <span key={skill}><Check size={14} /> {skill}</span>)}</div>
                <div className="quote">“Every expert was once a beginner.”</div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-label"><span>03</span><span className="label-rule" /> Selected work</div>
            <div className="section-heading-row"><h2 className="section-title">Small projects.<br /><em>Real progress.</em></h2><p className="section-lead">Each project is a step forward — a chance to practise, experiment, and make something clearer than it was before.</p></div>
            <div className="projects-grid">{projects.map((project) => { const Icon = project.icon; return <article className={`project-card ${project.accent}`} key={project.title}><div className="project-top"><span className="project-number">{project.number}</span><div className="project-icon"><Icon size={20} /></div></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ExternalLink size={17} /></div></article>; })}</div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="container">
            <div className="section-label"><span>04</span><span className="label-rule" /> My journey</div>
            <div className="journey-grid">
              <div><h2 className="section-title">The foundation<br /><em>is being built.</em></h2><p className="section-lead journey-lead">I’m actively developing my technical and professional knowledge through study, practical projects, and real-world experience.</p></div>
              <div className="timeline">
                <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17} /></div><div><span className="timeline-kicker">Education / In progress</span><h3>National Diploma</h3><p>Continuing studies to deepen technical and professional knowledge.</p></div></div>
                <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17} /></div><div><span className="timeline-kicker">Education / Completed</span><h3>National Senior Certificate</h3><p>South African high school diploma with foundations in computer literacy, mathematics, and sciences.</p></div></div>
                <div className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={17} /></div><div><span className="timeline-kicker">Experience / 3 months</span><h3>Salesperson</h3><p>Built communication, professionalism, and problem-solving skills in a customer-facing retail environment.</p></div></div>
                <div className="timeline-item"><div className="timeline-marker"><FileText size={17} /></div><div><span className="timeline-kicker">Certifications</span><h3>Currently expanding</h3><p>Relevant certificates are being added as my learning journey continues.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <div className="contact-copy"><div className="section-label"><span>05</span><span className="label-rule" /> Start a conversation</div><h2 className="section-title">Have an idea?<br /><em>Let’s make it real.</em></h2><p>I’m open to conversations about opportunities, collaborations, and ways to keep growing in technology.</p><a className="email-link" href="mailto:reithabetselenkoane42@gmail.com"><Mail size={18} /> reithabetselenkoane42@gmail.com</a></div>
            <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="form-row"><label>Name<input type="text" placeholder="Your name" required /></label><label>Email<input type="email" placeholder="you@example.com" required /></label></div><label>Message<textarea placeholder="Tell me a little about your idea..." rows={5} required /></label><button className="button button-primary" type="submit">{sent ? <>Message ready <Check size={17} /></> : <>Send a message <Send size={16} /></>}</button>{sent && <p className="form-success">Thanks — your message is ready to send. Please use the email address above to get in touch.</p>}</form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark"><Code2 size={18} /></span><span>RL<span className="brand-dot">.</span></span></a><span>Designed with intention by Reithabetse Lenkoane</span><div className="socials"><a href="mailto:reithabetselenkoane42@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a></div></div></footer>
      {showTop && <a className="back-top" href="#home" aria-label="Back to top"><ChevronUp size={18} /></a>}
    </div>
  );
}

export default App;

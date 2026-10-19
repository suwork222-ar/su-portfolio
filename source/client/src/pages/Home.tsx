import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Languages,
  MapPin,
  Menu,
  Monitor,
  Sparkles,
  X,
} from "lucide-react";
import { HeroLandscape, ProjectStillLife } from "@/components/PortfolioArtwork";

const githubProfile = "https://github.com/suwork222-ar";
const projectRepository = "https://github.com/suwork222-ar/su-portfolio";
const temporaryPortraitSrc = `${import.meta.env.BASE_URL}images/temporary-anime-portrait.webp`;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span>{children}</span>
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}

function TemporaryPortrait({ placement }: { placement: "hero" | "about" }) {
  return (
    <figure className={`temporary-portrait ${placement === "hero" ? "hero-portrait-card" : "about-portrait-card"}`}>
      <img
        src={temporaryPortraitSrc}
        alt="Fictional Japanese retro-anime portrait illustration; not a photograph of Su."
        loading={placement === "hero" ? "eager" : "lazy"}
      />
      <figcaption>
        <span>Temporary illustration</span>
        <span>Not Su’s photo</span>
      </figcaption>
    </figure>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-shell" id="top">
      <div className="paper-frame">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Su portfolio, back to top">
            <span className="brand-seal" aria-hidden="true">S</span>
            <span className="brand-copy">
              <span className="brand-name">Su<span>.</span></span>
              <span className="brand-caption">Personal portfolio · 2026</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav
            id="primary-navigation"
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="nav-profile-link"
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </header>

        <main>
          <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="kicker-dot" /> A portfolio in progress</div>
              <p className="hero-overline">Digital skills · Web foundations · Thailand</p>
              <h1 id="hero-title">Hello,<br />I’m <em>Su.</em></h1>
              <p className="hero-role">Beginner web developer<br />&amp; digital skills learner</p>
              <p className="hero-intro">
                Learning with intention and building practical skills for the next chapter in web and online work.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a className="text-link" href={githubProfile} target="_blank" rel="noreferrer">
                  GitHub profile <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-location"><MapPin size={15} aria-hidden="true" /> Based in Thailand</div>
            </div>

            <div className="hero-art-wrap">
              <div className="hero-art" role="group" aria-label="Original retro-anime landscape with a temporary portrait illustration">
                <HeroLandscape />
                <div className="hero-art-wash" aria-hidden="true" />
                <TemporaryPortrait placement="hero" />
                <div className="scene-caption">
                  <span>暮らしと学び</span>
                  <span>STUDY NOTES · NO. 01</span>
                </div>
              </div>
              <div className="art-stamp" aria-hidden="true">
                <span>learn</span><span>·</span><span>make</span><span>·</span><span>grow</span>
              </div>
              <span className="hero-side-note" aria-hidden="true">A small beginning, thoughtfully made</span>
            </div>
            <div className="hero-index" aria-hidden="true"><span>SU</span><span>01 / 06</span></div>
          </section>

          <div className="ticker" aria-label="Areas of learning">
            <span>HTML</span><i>✳</i><span>CSS</span><i>✳</i><span>MICROSOFT EXCEL</span><i>✳</i><span>LEARNING IN PROGRESS</span><i>✳</i><span>HTML</span>
          </div>

          <section className="content-section about-section" id="about" aria-labelledby="about-title">
            <SectionLabel number="01" >About me</SectionLabel>
            <div className="about-layout">
              <div className="about-heading">
                <h2 id="about-title">A curious mind,<br /><em>one skill at a time.</em></h2>
                <div className="margin-note"><span className="note-star">✳</span> Growing through practice</div>
              </div>
              <div className="about-body">
                <p className="lead-copy">
                  I’m based in Thailand and currently developing my digital and web development skills.
                </p>
                <TemporaryPortrait placement="about" />
                <p>
                  I’m learning HTML and CSS, building practical projects, and improving my English and other digital skills along the way. I’m interested in online work and future opportunities in web development.
                </p>
                <a className="inline-link" href="#skills">See what I’m learning <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </section>

          <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
            <SectionLabel number="02">Skills &amp; practical support</SectionLabel>
            <div className="section-heading-row">
              <h2 id="skills-title">Foundations I’m<br /><em>building on.</em></h2>
              <p className="section-intro">A clear snapshot of the skills I’m learning and using in practical settings.</p>
            </div>
            <div className="skills-list">
              <article className="skill-card">
                <div className="skill-icon"><Code2 size={21} strokeWidth={1.7} aria-hidden="true" /></div>
                <div className="skill-content">
                  <div className="card-index">01 / WEB FOUNDATIONS</div>
                  <h3>HTML &amp; CSS</h3>
                  <p>Learning page structure and styling through hands-on practice with links, tables, selectors, and external stylesheets.</p>
                  <div className="skill-tags"><span>HTML</span><span>CSS</span><span>Practice projects</span></div>
                </div>
                <span className="skill-card-mark" aria-hidden="true">01</span>
              </article>
              <article className="skill-card">
                <div className="skill-icon"><Monitor size={21} strokeWidth={1.7} aria-hidden="true" /></div>
                <div className="skill-content">
                  <div className="card-index">02 / BUSINESS SUPPORT</div>
                  <h3>Microsoft Excel</h3>
                  <p>Using spreadsheets and organizing information to support records for a curtain sewing business.</p>
                  <div className="skill-tags"><span>Excel</span><span>Information organization</span></div>
                </div>
                <span className="skill-card-mark" aria-hidden="true">02</span>
              </article>
              <article className="skill-card">
                <div className="skill-icon"><Languages size={21} strokeWidth={1.7} aria-hidden="true" /></div>
                <div className="skill-content">
                  <div className="card-index">03 / EVERYDAY DIGITAL SKILLS</div>
                  <h3>Computer skills &amp; communication</h3>
                  <p>Building confidence with basic computer tasks and connecting across several languages.</p>
                  <div className="skill-tags"><span>Burmese</span><span>English</span><span>Chinese</span><span>Thai</span></div>
                </div>
                <span className="skill-card-mark" aria-hidden="true">03</span>
              </article>
            </div>
            <p className="skills-footnote"><Sparkles size={15} aria-hidden="true" /> Interested in online work, web development, digital skills, and business.</p>
          </section>

          <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
            <SectionLabel number="03">Selected work</SectionLabel>
            <div className="section-heading-row project-heading-row">
              <h2 id="projects-title">Small steps.<br /><em>Real practice.</em></h2>
              <p className="section-intro">One current project, made while learning the building blocks of the web.</p>
            </div>
            <article className="project-feature">
              <div className="project-visual">
                <ProjectStillLife />
                <span className="project-visual-label">A STUDY IN HTML &amp; CSS</span>
                <span className="project-visual-number" aria-hidden="true">01</span>
              </div>
              <div className="project-info">
                <div className="card-index">CURRENT PROJECT · LEARNING BY DOING</div>
                <h3>HTML &amp; CSS<br /><em>Practice Website</em></h3>
                <p>
                  A beginner web development project exploring HTML structure, links, tables, CSS selectors, external stylesheets, and basic page styling.
                </p>
                <div className="project-meta"><span>HTML</span><span>CSS</span><span>Web fundamentals</span></div>
                <a className="project-link" href={projectRepository} target="_blank" rel="noreferrer">
                  View project repository <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
            <div className="project-note"><span aria-hidden="true">✳</span> An honest record of what I’m learning now.</div>
          </section>

          <section className="content-section journey-section" id="journey" aria-labelledby="journey-title">
            <SectionLabel number="04">Experience &amp; direction</SectionLabel>
            <div className="journey-layout">
              <div>
                <h2 id="journey-title">Learning from<br /><em>everyday work.</em></h2>
                <p className="section-intro journey-intro">Practical experience can begin in ordinary places—and grow from there.</p>
              </div>
              <div className="journey-card">
                <div className="journey-icon"><BriefcaseBusiness size={21} strokeWidth={1.6} aria-hidden="true" /></div>
                <div className="card-index">PRACTICAL EXPERIENCE</div>
                <h3>Supporting a curtain sewing business</h3>
                <p>I help organize information and use Excel for business records—practical tasks that continue to build my digital skills.</p>
                <div className="journey-divider" />
                <div className="career-label">Career interests</div>
                <div className="career-chips"><span>Web development</span><span>Online work</span><span>Digital skills</span><span>Business</span></div>
              </div>
            </div>
          </section>

          <section className="content-section education-section" id="education" aria-labelledby="education-title">
            <SectionLabel number="05">Education &amp; certifications</SectionLabel>
            <div className="education-card">
              <div className="education-icon"><BookOpen size={22} strokeWidth={1.6} aria-hidden="true" /></div>
              <div>
                <h2 id="education-title">The learning is <em>underway.</em></h2>
                <p>The original portfolio does not list formal education or certifications. Current learning includes HTML, CSS, English, and other digital skills.</p>
              </div>
              <span className="education-seal" aria-label="Learning in progress">In progress</span>
            </div>
          </section>

          <section className="contact-section" id="contact" aria-labelledby="contact-title">
            <div className="contact-sun" aria-hidden="true">✳</div>
            <SectionLabel number="06">Contact</SectionLabel>
            <div className="contact-layout">
              <div>
                <p className="hero-overline">A new chapter begins with a conversation</p>
                <h2 id="contact-title">Let’s connect<br /><em>and see what grows.</em></h2>
              </div>
              <div className="contact-copy">
                <p>I’m interested in online work and future opportunities in web development. The original portfolio did not list an email or LinkedIn address.</p>
                <a className="button button-light" href={githubProfile} target="_blank" rel="noreferrer">
                  Visit my GitHub profile <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <span className="contact-note">Public profile · opens in a new tab</span>
              </div>
            </div>
            <div className="contact-colophon"><span>SU · PERSONAL PORTFOLIO</span><span>THANK YOU FOR STOPPING BY</span></div>
          </section>
        </main>

        <footer className="site-footer">
          <a className="footer-brand" href="#top">Su<span>.</span></a>
          <p>Learning in progress, with care.</p>
          <a href="#top" className="back-to-top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
          <span className="copyright">© 2026 Su</span>
        </footer>
      </div>
    </div>
  );
}

export default Home;

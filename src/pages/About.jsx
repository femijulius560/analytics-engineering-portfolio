import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection.jsx'
import PageMeta from '../components/PageMeta.jsx'

const skills = [
  ['Data & analytics', 'Python · SQL · pandas · scikit-learn · Excel'],
  ['Analytics engineering', 'Data preparation · analytical contracts · validation · reproducible workflows'],
  ['Product & application', 'React · Node.js · Express · Streamlit · REST APIs'],
  ['Visual & spatial', 'GeoPandas · GIS · Leaflet · Plotly · Matplotlib'],
  ['Engineering workflow', 'Git · GitHub · Jupyter'],
]

const principles = [
  ['01', 'Start with the decision', 'I begin with what someone needs to understand, investigate or act on, then work backwards to the data and analytical method required.'],
  ['02', 'Keep the evidence honest', 'A useful system should preserve uncertainty and the meaning of its inputs rather than turning every signal into a stronger claim than the evidence supports.'],
  ['03', 'Build the whole path', 'I am interested in more than a model or dashboard. I focus on the route from raw data and analytical logic to a usable product and repeatable decision workflow.'],
]

export default function About() {
  return (
    <>
      <PageMeta title="About | Femi Julius" description="About Femi Julius, an Analytics Engineer working across analytics engineering, data science and decision support systems." />
      <header className="section about-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>I build data systems that help people make better informed decisions.</h1>
          <div className="about-hero-bottom">
            <p className="lead">
              I am an Analytics Engineer working across data engineering,
              applied data science and product development. My focus is turning
              complex analytical problems into reliable systems that people can
              understand and use.
            </p>
            <p className="about-intro-note">
              My work spans environmental intelligence, business performance
              and risk, with decision support as the common thread.
            </p>
          </div>
        </div>
      </header>

      <section className="section about-story">
        <div className="container about-reading-grid">
          <aside><p className="eyebrow">Background</p></aside>
          <div className="about-copy">
            <h2>A technical path shaped by both data and real world systems.</h2>
            <p>
              My background combines data science with environmental and risk
              disciplines. I studied Agricultural Technology with a
              specialisation in Fisheries and Aquaculture Technology, followed
              by postgraduate study in Flood Risk Management and professional
              training in Data Analytics with Artificial Intelligence.
            </p>
            <p>
              That combination has shaped how I approach analytics. I am
              interested in systems where data has to represent something real:
              a changing environmental condition, an operational problem, a
              financial risk or a decision that someone eventually has to make.
            </p>
            <p>
              Today, I apply that perspective to end to end analytical products,
              working from data preparation and modelling through validation,
              APIs and user-facing decision support.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-principles">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">How I work</p>
              <h2>Analysis should lead somewhere.</h2>
            </div>
            <p className="section-note">
              The method matters, but so does the path from analytical output
              to a decision someone can actually make.
            </p>
          </div>

          <div className="principle-list">
            {principles.map(([number, title, copy]) => (
              <article className="principle-row" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-capabilities">
        <div className="container about-reading-grid">
          <aside><p className="eyebrow">Capabilities</p></aside>
          <div className="about-copy">
            <h2>Working across the analytical product stack.</h2>
            <p>
              I work across enough of the stack to connect analytical methods
              with the systems that deliver them. The exact tools vary by
              problem; the objective is a coherent and maintainable path from
              data to use.
            </p>

            <div className="skills-table">
              {skills.map(([group, tools]) => (
                <div className="skill-row" key={group}>
                  <h3>{group}</h3>
                  <p>{tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about-focus">
        <div className="container about-focus-grid">
          <div>
            <p className="eyebrow">Current direction</p>
            <h2>Decision support systems are the centre of my work.</h2>
          </div>
          <div className="about-focus-copy">
            <p>
              Across projects, I keep returning to the same challenge: how to
              make complex data useful without hiding its limitations or asking
              the user to become a data specialist.
            </p>
            <p>
              Sponge Metrics applies that thinking to surface water flood
              management. Profit Optimiser applies it to hospitality
              performance. Other work explores insurance intelligence and
              predictive risk.
            </p>
            <a className="text-link" href="/#selected-work">Explore selected work ↗</a>
          </div>
        </div>
      </section>

      <section className="section about-contact">
        <div className="container about-contact-inner">
          <p className="eyebrow">Next</p>
          <h2>Interested in the systems behind the analysis?</h2>
          <p>
            The project case studies document the analytical reasoning,
            engineering choices and product decisions behind my work.
          </p>
          <Link className="button button-primary" to="/projects/sponge-metrics">View Sponge Metrics</Link>
        </div>
      </section>
          <ContactSection />
    </>
  )
}
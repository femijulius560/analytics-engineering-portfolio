import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection.jsx'
import PageMeta from '../components/PageMeta.jsx'

const capabilities = [
  ['01', 'Analytics Engineering', 'Structuring data, analytical logic and application-ready outputs into reliable systems.'],
  ['02', 'Decision Support', 'Designing products around the questions, evidence and actions that matter to the people using them.'],
  ['03', 'Applied Data Science', 'Using statistical, spatial and machine learning methods where they improve the quality of a decision.'],
]

export default function Home() {
  return (
    <>
      <PageMeta title="Femi Ogunnaya | Analytics Engineer" description="Analytics Engineer building decision support systems from complex data across environmental intelligence, business performance and applied machine learning." />
      <section className="hero section">
        <div className="container">
          <div className="hero-kicker"><p className="availability">Data · Systems · Decisions</p></div>
          <h1>Building decision support systems from complex data.</h1>
          <div className="hero-bottom">
            <p className="hero-copy">I design end to end data products that turn complex analytical problems into clear evidence, practical workflows and usable decision support.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#selected-work">Selected work</a>
              <Link className="button button-secondary" to="/about">About me</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section selected-work" id="selected-work">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Selected work</p><h2>Systems built around real decisions.</h2></div>
            <p className="section-note">Selected projects across environmental intelligence, business performance and applied analytics.</p>
          </div>

          <Link className="project-feature" to="/projects/sponge-metrics">
            <div className="project-feature-copy">
              <div>
                <p className="project-index">01 / Environmental intelligence</p>
                <h3>Sponge Metrics</h3>
                <p className="project-description">A surface water flood decision support system connecting changing hazard signals with evidence, consequence, investigation and intervention screening.</p>
              </div>
              <div className="project-meta-row"><span>Spatial analytics</span><span>Decision support</span><span>Oxford + Birmingham</span></div>
              <span className="project-link">View case study <span aria-hidden="true">↗</span></span>
            </div>
            <div className="project-shot-wrap">
              <img loading="lazy" decoding="async" className="project-shot" src="/images/sponge-metrics/live-conditions.png" alt="Sponge Metrics Live Conditions interface showing the Birmingham surface water screening grid" />
            </div>
          </Link>

          <Link className="project-feature project-feature-secondary" to="/projects/profit-optimiser">
            <div className="project-feature-copy">
              <div>
                <p className="project-index">02 / Business intelligence</p>
                <h3>Profit Optimiser</h3>
                <p className="project-description">A hospitality decision support system that turns sales, labour and operating data into profitability evidence, practical investigations and recorded decisions.</p>
              </div>
              <div className="project-meta-row"><span>Hospitality</span><span>Operational analytics</span><span>Decision learning</span></div>
              <span className="project-link">View case study <span aria-hidden="true">↗</span></span>
            </div>
            <div className="project-shot-wrap profit-card-shot">
              <img loading="lazy" decoding="async" className="project-shot" src="/images/profit-optimiser/financial-analysis.png" alt="Profit Optimiser financial analysis interface" />
            </div>
          </Link>

          <Link className="project-feature claimiq-feature" to="/projects/claimiq">
            <div className="project-feature-copy">
              <div>
                <p className="project-index">03 / Insurance intelligence</p>
                <h3>ClaimIQ</h3>
                <p className="project-description">A machine learning system for insurance claim prediction, prediction-level explainability, batch analytics and rule-based fraud investigation.</p>
              </div>
              <div className="project-meta-row"><span>Machine learning</span><span>Explainability</span><span>Fraud intelligence</span></div>
              <span className="project-link">View case study <span aria-hidden="true">↗</span></span>
            </div>
            <div className="project-shot-wrap claimiq-card-shot">
              <img loading="lazy" decoding="async" className="project-shot" src="/images/claimiq/batch-analytics.png" alt="ClaimIQ batch analytics dashboard showing predicted claim KPIs and analytical charts" />
            </div>
          </Link>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container">
          <div className="section-heading split-heading"><div><p className="eyebrow">What I do</p><h2>From analytical method to usable product.</h2></div></div>
          <div className="capability-list">
            {capabilities.map(([number,title,copy]) => <article className="capability-row" key={number}><span className="capability-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section closing-section">
        <div className="container closing-grid">
          <p className="eyebrow">Approach</p>
          <div><h2>Analysis is most useful when it leads somewhere.</h2><p>My work focuses on the full path from data and analytical logic to the interface, workflow and evidence a person needs to make a better informed decision.</p><Link className="text-link" to="/about">More about my work ↗</Link></div>
        </div>
      </section>
          <ContactSection />
    </>
  )
}
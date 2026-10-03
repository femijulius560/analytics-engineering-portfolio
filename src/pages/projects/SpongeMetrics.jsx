import { Link } from 'react-router-dom'
import PageMeta from '../../components/PageMeta.jsx'

const Meta = () => (
  <dl className="case-meta">
    <div><dt>Role</dt><dd>Analytics Engineer</dd></div>
    <div><dt>Domain</dt><dd>Flood risk · Environmental intelligence</dd></div>
    <div><dt>Stack</dt><dd>Python · GeoPandas · Node.js · React</dd></div>
    <div><dt>Scale</dt><dd>389 grids · Oxford + Birmingham</dd></div>
  </dl>
)

function Figure({src, alt, caption, wide=false}) {
  return <figure className={wide ? 'case-figure case-figure-wide' : 'case-figure'}>
    <img loading="lazy" decoding="async" src={src} alt={alt} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
}

export default function SpongeMetrics() {
  return (
    <article className="case-study">
      <PageMeta title="Sponge Metrics | Femi Ogunnaya" description="Case study: Sponge Metrics, an environmental and spatial decision support system connecting operational hazard signals, evidence, investigation and intervention." />
      <header className="section case-hero">
        <div className="container">
          <Link className="back-link" to="/">← Selected work</Link>
          <p className="eyebrow">Environmental intelligence · Decision support</p>
          <h1>Sponge Metrics</h1>
          <p className="case-summary">An end to end urban surface water decision support system that turns spatial, rainfall, historical flood and infrastructure data into structured evidence for investigation and management.</p>
          <Meta />
        </div>
      </header>

      <section className="case-lead-visual">
        <div className="container"><Figure src="/images/sponge-metrics/overview.png" alt="Sponge Metrics overview workspace for Birmingham" caption="Overview workspace · Birmingham" wide /></div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">01 / The problem</p></aside>
          <div className="case-copy">
            <h2>Flood information exists. The harder problem is turning it into a decision.</h2>
            <p>Surface water flood management is not simply a question of identifying where flooding might occur. Professionals may need to consider current and recent rainfall, historical reports, local physical characteristics, exposed receptors, drainage context, possible interventions and gaps in the evidence before deciding what deserves investigation.</p>
            <p>Those sources describe different things. A forecast is an operational signal. Historical reports are evidence of previous problems. Population and infrastructure provide consequence context. None of them, on their own, establishes that flooding will occur.</p>
            <blockquote>The central challenge was to bring these forms of evidence together without collapsing the distinction between them.</blockquote>
          </div>
        </div>
      </section>

      <section className="section case-section case-section-paper">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">02 / Decision architecture</p></aside>
          <div className="case-copy">
            <h2>Designed around what a professional needs to decide next.</h2>
            <p>Instead of organising the product around datasets or models, I organised it around the decision process. Eight connected workspaces move from current conditions and investigation through planning evidence, intervention screening, future stress, provenance and reporting.</p>
            <div className="decision-chain" aria-label="Decision support flow">
              <span>Signal</span><i>→</i><span>Evidence</span><i>→</i><span>Consequence</span><i>→</i><span>Investigation</span><i>→</i><span>Intervention</span><i>→</i><span>Action</span><i>→</i><span>Follow-up</span>
            </div>
          </div>
        </div>
        <div className="container case-architecture">
          <Figure src="/images/sponge-metrics/architecture.png" alt="Sponge Metrics analytical and application architecture from source data to decision support" caption="Analytical and application architecture" wide />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">03 / Analytical contract</p></aside>
          <div className="case-copy">
            <h2>One product architecture. City specific analytical context.</h2>
            <p>Python and Jupyter handle the reproducible analytical and spatial workflows. Validated CSV, GeoJSON and JSON assets form the application contract, Node.js and Express expose those assets through structured endpoints, and React, Vite and Leaflet provide the product interface.</p>
            <p>Sponge Metrics uses 1 km × 1 km British National Grid cells as a common analytical unit: 65 grids in Oxford and 324 in Birmingham. A grid is an analytical unit, not a property, street, neighbourhood or predicted flood extent.</p>
            <blockquote>The application adapts to the validated science. The science is not changed simply to make the interface easier to build.</blockquote>
          </div>
        </div>
      </section>

      <section className="section case-section case-section-dark">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">04 / Operational signal</p></aside>
          <div className="case-copy">
            <h2>From rainfall to a changing surface water hazard signal.</h2>
            <p>I developed the Surface Water Hazard Index (SWHI) to combine relevant rainfall and spatial characteristics into a relative operational signal across the analysis grids. Conditions are communicated as Routine, Elevated, High or Exceptional.</p>
            <p>SWHI is not presented as flood probability, predicted flood depth, property level risk, a return period or a hydraulic simulation. Its role is narrower: identifying where changing conditions may warrant attention.</p>
          </div>
        </div>
        <div className="container"><Figure src="/images/sponge-metrics/live-conditions.png" alt="Live Conditions workspace showing Birmingham screening states across the forecast period" caption="Live Conditions · operational screening signal" wide /></div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">05 / Evidence + consequence</p></aside>
          <div className="case-copy">
            <h2>Keeping similar looking concepts deliberately separate.</h2>
            <p>Historical evidence is not current hazard, and receptor presence is not predicted flood exposure. The product keeps hazard, evidence, consequence, investigation priority and intervention opportunity distinct rather than forcing them into one composite risk score.</p>
            <blockquote>Grid intersection is strategic exposure context, not predicted flood exposure.</blockquote>
          </div>
        </div>
        <div className="container case-pair">
          <Figure src="/images/sponge-metrics/evidence.png" alt="Evidence workspace showing historical flood evidence and consequence context for grid BHM 089" caption="Evidence · historical records and consequence context" />
          <Figure src="/images/sponge-metrics/investigation.png" alt="Investigation Operations workspace showing the Birmingham investigation queue" caption="Investigation Operations · one canonical priority per grid" />
        </div>
      </section>

      <section className="section case-section case-section-paper">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">06 / Planning + intervention</p></aside>
          <div className="case-copy">
            <h2>Supporting professional judgement without pretending to replace it.</h2>
            <p>Planning Evidence bridges strategic screening and the evidence that may be needed at site level, including relevant national planning policy context. It does not determine whether an FRA is required, whether a sequential test has been passed, whether a proposal is compliant or whether development is acceptable.</p>
            <p>The SuDS workspace treats sustainable drainage as a management train rather than a catalogue of isolated interventions. Managed Rainfall Sensitivity explores 2 mm, 5 mm and 10 mm strategic assumptions without presenting them as storage sizing, predicted flood reduction or compliance evidence.</p>
          </div>
        </div>
        <div className="container case-pair">
          <Figure src="/images/sponge-metrics/planning-evidence.png" alt="Planning Evidence workspace showing strategic screening and national planning policy context" caption="Planning Evidence · strategic screening toward site-level evidence needs" />
          <Figure src="/images/sponge-metrics/suds-management-train.png" alt="SuDS and Management Train workspace showing managed rainfall sensitivity" caption="SuDS & Management Train · managed rainfall sensitivity" />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">07 / Future + operations</p></aside>
          <div className="case-copy">
            <h2>Separate methods for separate analytical questions.</h2>
            <p>Operational conditions and extreme rainfall are different problems. Future & Exceedance therefore uses a separate Extreme Stress Index rather than stretching SWHI beyond its intended role. Statistical return levels are also kept distinct from observed historical maxima.</p>
            <p>For operational use, forecast and Managed Rainfall Sensitivity assets are refreshed as a synchronised package so related outputs represent the same dates and rainfall context.</p>
          </div>
        </div>
        <div className="container"><Figure src="/images/sponge-metrics/future-exceedance.png" alt="Future and Exceedance workspace showing 10 year, 30 year and 100 year design rainfall scenarios" caption="Future & Exceedance · separate extreme rainfall stress testing" wide /></div>
      </section>

      <section className="section case-section case-section-paper">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">08 / Scale + validation</p></aside>
          <div className="case-copy">
            <h2>Birmingham turned the prototype into an engineering test.</h2>
            <p>Oxford was the first complete implementation with 65 grids. Birmingham expanded the system to 324 grids and exposed memory, payload and frontend performance issues that were not obvious at the smaller scale.</p>
            <p>I reduced unnecessary analytical memory demand, introduced request reuse and in-flight deduplication in the frontend, and used different cache lifetimes for strategic and operational resources without changing the validated methodology.</p>
            <p>Validation became an engineering layer: grid counts, schemas, uniqueness, receptor and population reconciliation, provenance, forecast completeness, sensitivity coverage, date alignment, API structure and cross-city behaviour are checked explicitly.</p>
          </div>
        </div>
      </section>

      <section className="section case-section case-section-dark">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">09 / Reporting</p></aside>
          <div className="case-copy">
            <h2>The report consumes the same evidence. It does not invent another model.</h2>
            <p>The reporting layer packages validated information into a professional decision-support brief. It introduces no additional score, weighting system, threshold or recommendation engine, preventing the report and interactive product from producing different interpretations of the same grid.</p>
          </div>
        </div>
        <div className="container"><Figure src="/images/sponge-metrics/reports.png" alt="Sponge Metrics Reports workspace showing decision summary and consequence context" caption="Reports · validated evidence packaged for communication and follow-up" wide /></div>
      </section>

      <section className="section case-outcome">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">10 / What it demonstrates</p></aside>
          <div className="case-copy">
            <h2>A complete analytical product, not an isolated model.</h2>
            <p>Sponge Metrics required heterogeneous spatial and non-spatial data integration, reproducible analytical workflows, spatial data contracts, REST APIs, a React product, operational refresh logic, provenance, uncertainty management, cross-city scaling and performance optimisation.</p>
            <blockquote>The objective is not simply to produce analysis. It is to engineer a reliable path from data to evidence, from evidence to understanding, and from understanding to better-informed decisions.</blockquote>
            <div className="tech-list">
              <span>Python</span><span>pandas</span><span>GeoPandas</span><span>NumPy</span><span>scikit-learn</span><span>Jupyter</span><span>Node.js</span><span>Express</span><span>React</span><span>Vite</span><span>Leaflet</span><span>Git</span>
            </div>
            <p className="responsible-use"><strong>Responsible use:</strong> Sponge Metrics is a strategic screening and decision-support system. Detailed local decisions require appropriate modelling, site investigation and professional assessment.</p>
          </div>
        </div>
      </section>
    </article>
  )
}
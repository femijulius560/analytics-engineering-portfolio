import { Link } from 'react-router-dom'
import PageMeta from '../../components/PageMeta.jsx'

const Meta = () => (
  <dl className="case-meta">
    <div><dt>Role</dt><dd>Analytics Engineer</dd></div>
    <div><dt>Domain</dt><dd>Hospitality · Business performance</dd></div>
    <div><dt>Product</dt><dd>Decision support system</dd></div>
    <div><dt>Focus</dt><dd>Profit · Labour · Operations</dd></div>
  </dl>
)

function Figure({src, alt, caption}) {
  return (
    <figure className="case-figure">
      <img loading="lazy" decoding="async" src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default function ProfitOptimiser() {
  return (
    <article className="case-study profit-case">
      <PageMeta title="Profit Optimiser | Femi Julius" description="Case study: Profit Optimiser, a hospitality decision support system that turns weekly business data into clear findings and practical actions." />
      <header className="section case-hero profit-hero">
        <div className="container">
          <Link className="back-link" to="/#selected-work">← Selected work</Link>
          <p className="eyebrow">Hospitality intelligence · Decision support</p>
          <h1>Profit Optimiser</h1>
          <p className="case-summary">
            A business performance decision support system designed to turn weekly
            hospitality data into clear profitability evidence, practical actions
            and a record of what happened next.
          </p>
          <Meta />
        </div>
      </header>

      <section className="case-lead-visual profit-lead">
        <div className="container">
          <Figure src="/images/profit-optimiser/financial-analysis.png" alt="Profit Optimiser analysis workspace showing revenue, operating profit, margin and data confidence" caption="Profit intelligence · financial performance and data confidence" />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">01 / The problem</p></aside>
          <div className="case-copy">
            <h2>Being busy does not always mean being profitable.</h2>
            <p>Hospitality operators generate useful data through sales, staffing, inventory and operating systems, but the management question is rarely “what does the dashboard say?” It is more practical: where is profit being lost, when is labour out of line with demand, which trading periods deserve attention, and what should be checked before making a change?</p>
            <p>Profit Optimiser was designed around that gap between operational data and management action.</p>
            <blockquote>The objective is not more reporting. It is a repeatable path from weekly evidence to a better informed operational decision.</blockquote>
          </div>
        </div>
      </section>

      <section className="section case-section case-section-paper">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">02 / Operational context</p></aside>
          <div className="case-copy">
            <h2>Start with the venue before interpreting its numbers.</h2>
            <p>The workflow begins with a venue profile. Venue type, currency, timezone and opening hours provide context for later analysis, while the workspace supports multiple venues rather than treating every dataset as an isolated report.</p>
            <p>This matters because an operating recommendation only makes sense when it reflects the business that is expected to act on it.</p>
          </div>
        </div>
        <div className="container profit-wide-figure">
          <Figure src="/images/profit-optimiser/venue-setup.png" alt="Profit Optimiser venue setup workspace with multiple venues and venue profile fields" caption="Venue setup · operational context before analysis" />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">03 / Data workflow</p></aside>
          <div className="case-copy">
            <h2>Different input routes. One trusted reporting workflow.</h2>
            <p>The product supports connected business systems as well as CSV uploads. Sales and labour can be connected through operational sources, while the CSV workflow can accept separate datasets for sales, labour, operating expenses, inventory or cost of goods, and inventory waste.</p>
            <p>Uploaded files are inspected and mapped before they become reporting data. The resulting reporting weeks provide a clear boundary between raw operational inputs and the analysis presented to the manager.</p>
          </div>
        </div>
        <div className="container case-pair profit-pair">
          <Figure src="/images/profit-optimiser/data-sources.png" alt="Profit Optimiser data sources showing labour and sales system connections" caption="Data sources · connected sales and labour systems" />
          <Figure src="/images/profit-optimiser/csv-import.png" alt="Profit Optimiser CSV import workflow showing dataset type selection" caption="CSV workflow · inspect, map and process operational files" />
        </div>
        <div className="container profit-wide-figure">
          <Figure src="/images/profit-optimiser/weekly-reports.png" alt="Profit Optimiser weekly report cards generated from a processed upload" caption="Reporting periods · operational data converted into weekly analysis units" />
        </div>
      </section>

      <section className="section case-section profit-dark">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">04 / Profit intelligence</p></aside>
          <div className="case-copy">
            <h2>Make the economics visible before recommending action.</h2>
            <p>The analysis brings revenue, depleted inventory cost, labour, recorded waste and operating expenses into a common financial view. Alongside operating profit and margin, the interface exposes data quality so the strength of the inputs is visible rather than hidden.</p>
            <p>That creates a base for interpretation: the system can identify profitability conditions while still showing how complete and reliable the reporting inputs are.</p>
          </div>
        </div>
        <div className="container profit-wide-figure">
          <Figure src="/images/profit-optimiser/financial-analysis.png" alt="Profit Optimiser financial breakdown and data confidence panels" caption="Financial breakdown · profitability and input confidence in the same workspace" />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">05 / Findings + drivers</p></aside>
          <div className="case-copy">
            <h2>Move from totals to the conditions driving performance.</h2>
            <p>Key findings surface specific conditions such as low revenue per labour hour, labour cost above target, contribution margin below target and contribution-loss trading periods. Each finding carries the affected periods and relevant benchmark context rather than relying on a generic alert.</p>
            <p>The business-driver layer then adds operational context such as product contribution, inventory depletion, waste, week-on-week change and the strongest trading periods.</p>
          </div>
        </div>
        <div className="container case-pair profit-pair">
          <Figure src="/images/profit-optimiser/key-findings.png" alt="Profit Optimiser key findings cards showing profitability conditions and affected periods" caption="Key findings · evidence-based profitability conditions" />
          <Figure src="/images/profit-optimiser/business-drivers.png" alt="Profit Optimiser key business drivers showing products, waste and week-on-week performance" caption="Business drivers · what shaped the reporting period" />
        </div>
      </section>

      <section className="section case-section case-section-paper">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">06 / Trading patterns</p></aside>
          <div className="case-copy">
            <h2>Find the hours that deserve a closer look.</h2>
            <p>Weekly totals can hide when performance is actually being created or lost. Profit Optimiser therefore analyses trading intervals and exposes best and worst contribution hours alongside a day-by-hour contribution view.</p>
            <p>The purpose is not to turn every weak hour into an automatic staffing cut. It is to identify operating windows that deserve investigation in the context of bookings, preparation, service requirements and other constraints.</p>
          </div>
        </div>
        <div className="container case-pair profit-pair">
          <Figure src="/images/profit-optimiser/contribution-hours.png" alt="Profit Optimiser best and worst contribution hour tables" caption="Hour performance · strongest and weakest contribution periods" />
          <Figure src="/images/profit-optimiser/contribution-heatmap.png" alt="Profit Optimiser contribution heatmap by day and hour" caption="Contribution heatmap · recurring patterns across the trading week" />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">07 / Decision support</p></aside>
          <div className="case-copy">
            <h2>The analysis becomes an investigation, not an instruction.</h2>
            <p>For an identified issue, the action workflow explains the situation, provides a commercial interpretation and recommends what should be reviewed before an operational change is made. It also makes expected outcomes, trade-offs, business risks, review timing and decision ownership explicit.</p>
            <p>For labour efficiency, for example, the interface directs the manager to examine demand, staffing levels, shift timing and role overlap while protecting service quality and safe operating coverage.</p>
            <blockquote>Profit Optimiser supports the manager's judgement. It does not replace operational context with an automated instruction.</blockquote>
          </div>
        </div>
        <div className="container profit-decision-stack">
          <Figure src="/images/profit-optimiser/recommended-decision.png" alt="Profit Optimiser recommended decision showing weekly exposure, achievable impact, outcomes, trade-offs and checks" caption="Action plan · recommendation, opportunity, trade-offs and what to check" />
          <Figure src="/images/profit-optimiser/decision-learning.png" alt="Profit Optimiser decision priority showing review plan, decision owner and completed decision history" caption="Decision context · ownership, review plan and learning from completed decisions" />
        </div>
      </section>

      <section className="section case-section profit-dark">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">08 / Decision memory</p></aside>
          <div className="case-copy">
            <h2>Record what happened so the next decision has context.</h2>
            <p>The workflow does not end when a recommendation is shown. Managers can record the investigation outcome, including whether a controllable cause was confirmed, an operating requirement explained the result, no actionable cause was found, or more evidence is needed.</p>
            <p>Completed decisions feed back into the decision context. That creates a lightweight organisational memory: what was investigated, what was learned and how previous outcomes should influence the next review.</p>
          </div>
        </div>
        <div className="container profit-wide-figure">
          <Figure src="/images/profit-optimiser/decision-outcome.png" alt="Profit Optimiser outcome recording interface with investigation result options and notes" caption="Outcome recording · closing the loop between investigation and future decisions" />
        </div>
      </section>

      <section className="section case-outcome">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">09 / What it demonstrates</p></aside>
          <div className="case-copy">
            <h2>Business intelligence engineered around a management workflow.</h2>
            <p>Profit Optimiser connects venue configuration, operational data ingestion, weekly reporting, financial analysis, data-quality context, interval-level performance, structured findings, action planning and decision learning in one product flow.</p>
            <p>The project demonstrates how I approach analytics products: establish a trusted analytical base, expose the evidence behind a finding, translate it into a practical investigation and preserve the outcome so the system becomes more useful over time.</p>
            <div className="tech-list">
              <span>Python</span><span>FastAPI</span><span>PostgreSQL</span><span>Pandas</span>
            </div>
            <p className="responsible-use"><strong>Product principle:</strong> recommendations are decision support. Managers retain responsibility for operational changes and should consider service, safety, contractual and business context before acting.</p>
          </div>
        </div>
      </section>
    </article>
  )
}
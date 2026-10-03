import { Link } from 'react-router-dom'
import PageMeta from '../../components/PageMeta.jsx'

function Figure({ src, alt, caption }) {
  return (
    <figure className="case-figure">
      <img loading="lazy" decoding="async" src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default function ClaimIQ() {
  return (
    <article className="case-study claimiq-case">
      <PageMeta title="ClaimIQ | Femi Ogunnaya" description="Case study: ClaimIQ, an insurance analytics system for claim prediction, SHAP explainability, batch analytics and fraud investigation." />
      <header className="section case-hero claimiq-hero">
        <div className="container">
          <Link className="back-link" to="/#selected-work">← Selected work</Link>
          <p className="eyebrow">Insurance intelligence · Applied machine learning</p>
          <h1>ClaimIQ</h1>
          <p className="case-summary">
            An insurance claim prediction and fraud intelligence system combining
            individual prediction, model explainability, batch analytics and
            investigation-oriented fraud screening.
          </p>
          <dl className="case-meta">
            <div><dt>Role</dt><dd>Data Scientist</dd></div>
            <div><dt>Domain</dt><dd>Insurance analytics</dd></div>
            <div><dt>Model</dt><dd>Random Forest pipeline</dd></div>
            <div><dt>Interface</dt><dd>Streamlit application</dd></div>
          </dl>
        </div>
      </header>

      <section className="claimiq-lead">
        <div className="container">
          <Figure src="/images/claimiq/batch-analytics.png" alt="ClaimIQ batch analytics dashboard with predicted total, average and maximum claims" caption="Batch analytics · model outputs translated into portfolio-level evidence" />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">01 / The system</p></aside>
          <div className="case-copy">
            <h2>One model, three analytical workflows.</h2>
            <p>ClaimIQ combines three related tasks in one application: single-record claim prediction with explainability, batch scoring and analytics, and fraud investigation using actual-versus-predicted claim behaviour.</p>
            <p>The prediction layer uses a Random Forest pipeline with log-target handling and calibration logic intended to improve upper-tail claim estimates. The application then exposes those outputs differently depending on the decision context.</p>
          </div>
        </div>
      </section>

      <section className="section case-section case-section-paper">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">02 / Individual prediction</p></aside>
          <div className="case-copy">
            <h2>Make a prediction inspectable at the individual level.</h2>
            <p>The single-prediction workflow accepts a profile and produces a claim estimate. Each prediction receives a unique identifier and timestamp, while the prediction record retains the input features and predicted claim.</p>
            <p>This creates a traceable unit that can then be explained or compared through scenario analysis rather than presenting a model output without context.</p>
          </div>
        </div>
        <div className="container claimiq-wide">
          <Figure src="/images/claimiq/single-prediction.png" alt="ClaimIQ single prediction interface with profile inputs" caption="Single prediction · profile-level claim estimation" />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">03 / Explainability</p></aside>
          <div className="case-copy">
            <h2>Expose what contributed to the prediction.</h2>
            <p>SHAP explainability is calculated for individual predictions using TreeExplainer. The interface reports both the SHAP value in log space and an estimated dollar contribution to the predicted claim for each feature.</p>
            <p>The purpose is not to turn feature contribution into causality. It gives the user a structured way to inspect how the fitted model arrived at a particular estimate.</p>
          </div>
        </div>
        <div className="container claimiq-wide">
          <Figure src="/images/claimiq/shap-explainability.png" alt="ClaimIQ SHAP explainability table showing feature contributions to an individual predicted claim" caption="Prediction explainability · feature-level SHAP contributions" />
        </div>
      </section>

      <section className="section case-section claimiq-dark">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">04 / Batch analytics</p></aside>
          <div className="case-copy">
            <h2>Move from one prediction to a portfolio view.</h2>
            <p>Batch analytics accepts CSV data, scores records through the model and exposes aggregate prediction KPIs and visual analysis. Filters allow the results to be explored by region, smoker status, gender, age and BMI.</p>
            <p>The same model therefore supports both individual inspection and higher-level analytical review without treating the dashboard as a separate analytical process.</p>
          </div>
        </div>
        <div className="container claimiq-wide">
          <Figure src="/images/claimiq/batch-analytics.png" alt="ClaimIQ claims analysis dashboard showing predicted claim KPIs and charts" caption="Batch scoring · aggregate KPIs and analytical patterns" />
        </div>
      </section>

      <section className="section case-section">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">05 / Fraud screening</p></aside>
          <div className="case-copy">
            <h2>Use the model as a benchmark for investigation.</h2>
            <p>When actual claim values are available, ClaimIQ compares them with predicted claims and applies an explicit screening rule: an actual claim greater than three times the predicted claim is flagged for review.</p>
            <p>The resulting fraud ratio and fraud gap provide investigation fields rather than a declaration that fraud occurred. Suspicious claims can then be ranked and exported for further review.</p>
            <blockquote>A flagged claim is an investigation signal, not proof of fraud.</blockquote>
          </div>
        </div>
        <div className="container claimiq-stack">
          <Figure src="/images/claimiq/suspicious-claims.png" alt="ClaimIQ top suspicious claims table with actual and predicted claims, fraud ratio and fraud gap" caption="Suspicious claims · ranked screening output" />
          <Figure src="/images/claimiq/fraud-investigation.png" alt="ClaimIQ fraud investigation table containing profile attributes and fraud screening fields" caption="Investigation table · screening evidence prepared for review and export" />
        </div>
      </section>

      <section className="section case-outcome">
        <div className="container case-reading-grid">
          <aside><p className="eyebrow">06 / What it demonstrates</p></aside>
          <div className="case-copy">
            <h2>Predictive modelling connected to an analytical workflow.</h2>
            <p>ClaimIQ demonstrates more than model training. It connects preprocessing and prediction with explainability, scenario-oriented inspection, batch scoring, interactive analysis and a clearly defined fraud-screening workflow.</p>
            <p>Within the portfolio, it represents the applied machine learning side of my work: building a model, interrogating its outputs and designing a usable analytical layer around the prediction.</p>
            <div className="tech-list">
              <span>Python</span><span>Pandas</span><span>scikit-learn</span><span>SHAP</span><span>Streamlit</span>
            </div>
            <p className="responsible-use"><strong>Interpretation:</strong> predictions and fraud flags are analytical support. SHAP contributions describe model behaviour rather than causal effects, and a screening rule identifies cases for investigation rather than establishing fraud.</p>
          </div>
        </div>
      </section>
    </article>
  )
}
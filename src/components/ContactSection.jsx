function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.25H3.25V20H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM20.75 13.27c0-3.54-1.89-5.19-4.42-5.19-2.04 0-2.95 1.12-3.46 1.91V8.25H9.62V20h3.25v-5.82c0-1.53.29-3.01 2.18-3.01 1.86 0 1.88 1.74 1.88 3.11V20h3.25l.57-6.73Z"/></svg>
}
function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 7.7a9.4 9.4 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.56 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3v-13Zm1.8 1.8 7.2 5.45 7.2-5.45M4.8 16.7l5.1-4M19.2 16.7l-5.1-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something useful from data.</h2>
        </div>
        <div className="contact-copy">
          <p>I’m interested in Analytics Engineering and data product opportunities where analytical work needs to become something people can actually use.</p>
          <nav className="contact-links" aria-label="Professional links">
            <a href="mailto:femijulius560@gmail.com"><span className="contact-icon"><MailIcon /></span><span>Email</span><span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/femi-ogunnaya-79ba48242/" target="_blank" rel="noreferrer"><span className="contact-icon"><LinkedInIcon /></span><span>LinkedIn</span><span aria-hidden="true">↗</span></a>
            <a href="https://github.com/femijulius560" target="_blank" rel="noreferrer"><span className="contact-icon"><GitHubIcon /></span><span>GitHub</span><span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </div>
    </section>
  )
}

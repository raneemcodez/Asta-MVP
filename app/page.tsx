import PreparationDashboard from "./components/preparation-dashboard";

export default function HomePage() {
  return (
    <div className="dashboard">
      <header className="site-header">
        <div className="header-brand">
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          <span>
            <strong>Asta’s Preparation Dashboard</strong>
            <small>Grimoire Combat Codex</small>
          </span>
        </div>
        <span className="readiness-badge">
          <span className="status-dot" aria-hidden="true" />
          <span className="desktop-status">Confrontation Ready</span>
          <span className="mobile-status">Active</span>
        </span>
      </header>

      <main className="dashboard-main">
        <section className="hero-panel" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow gold">✦ Supreme Devil Engagement</p>
            <h1 id="hero-title">The Path to Wizard King</h1>
            <p>Every training session brings Asta closer to his goal.</p>
          </div>
          <span className="hero-watermark" aria-hidden="true">
            ✦
          </span>
        </section>

        <section className="threat-panel" aria-labelledby="threat-title">
          <div className="threat-copy">
            <h2 id="threat-title" className="eyebrow red">
              Lucifero Threat Brief
            </h2>
            <p className="threat-description">
              Supreme devil manifestation with overwhelming gravity magic.
              Conventional spells disintegrate on contact—only conditioned
              Anti-Magic synchronization and raw physical dominance can endure
              the singularity.
            </p>
          </div>
          <span className="threat-badge">⚠ Calamity Class</span>
        </section>

        <PreparationDashboard />
      </main>

      <footer className="site-footer">
        <span className="desktop-footer">
          © Anti-Magic Vanguard. All directives classified.
        </span>
        <span className="mobile-footer">
          Black Bull Order • Clover Kingdom Anti-Magic Corps
        </span>
      </footer>
    </div>
  );
}

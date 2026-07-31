import "./style.css";

function About() {
  return (
    <section className="page">
      <div className="hero-card about-hero">
        <div className="hero-text">
          <p className="eyebrow">Our learning approach</p>
          <h2>Programs designed for focused, lasting growth.</h2>
          <p>
            We mix short lessons, real projects, and one-on-one guidance so learners can build practical confidence without feeling overwhelmed.
          </p>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
            alt="A focused team learning together"
          />
        </div>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h3>Step-by-step learning</h3>
          <p>Each module breaks big goals into small, achievable actions that feel manageable.</p>
        </article>
        <article className="info-card">
          <h3>Hands-on practice</h3>
          <p>Apply what you learn through mini-projects, feedback loops, and guided challenges.</p>
        </article>
        <article className="info-card">
          <h3>Career momentum</h3>
          <p>Build confidence in communication, collaboration, and tool-based problem solving.</p>
        </article>
      </div>

      <div className="story-banner">
        <div>
          <p className="eyebrow">What makes us different</p>
          <h3>Growth that feels personal, practical, and motivating.</h3>
          <p>From first steps to advanced confidence, every experience is built to support progress.</p>
        </div>
        <div className="pill-list">
          <span>Mentor support</span>
          <span>Live feedback</span>
          <span>Portfolio-ready projects</span>
        </div>
      </div>
    </section>
  );
}

export default About;
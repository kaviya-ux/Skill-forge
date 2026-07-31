import { Link } from "react-router-dom";
import "./style.css";

const skills = [
  {
    id: "design-thinking",
    icon: "🎨",
    name: "Design Thinking",
    blurb: "Learn how to turn ideas into customer-friendly solutions with structure and empathy.",
  },
  {
    id: "public-speaking",
    icon: "🎤",
    name: "Public Speaking",
    blurb: "Practice speaking with confidence, clarity, and calm presence in any room.",
  },
  {
    id: "ai-tools",
    icon: "🤖",
    name: "AI Productivity",
    blurb: "Use modern tools to work faster, think smarter, and build better habits.",
  },
];

const highlights = ["Project-based learning", "Weekly mentors", "Career-ready practice"];

function Home() {
  return (
    <section className="page">
      <div className="hero-card">
        <div className="hero-text">
          <p className="eyebrow">Modern learning for ambitious people</p>
          <h2>Turn curiosity into real-world capability.</h2>
          <p>
            SkillForge helps you discover practical programs, sharpen essential abilities, and grow through guided challenges.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn primary">
              Explore programs
            </Link>
            <Link to="/contact" className="btn secondary">
              Join the community
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="A collaborative learning space with people working together"
          />
        </div>
      </div>

      <div className="highlight-strip">
        {highlights.map((item) => (
          <span key={item} className="highlight-pill">
            {item}
          </span>
        ))}
      </div>

      <div className="section-title">
        <p className="eyebrow">Featured tracks</p>
        <h2>Choose a skill path that matches your goals.</h2>
      </div>

      <div className="card-grid">
        {skills.map((skill) => (
          <article key={skill.id} className="skill-card">
            <div className="plant-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.blurb}</p>
            <Link to={`/skills/${skill.id}`} className="text-link">
              See learning plan
            </Link>
          </article>
        ))}
      </div>

      <div className="story-banner">
        <div>
          <p className="eyebrow">Why learners stay</p>
          <h3>Clear lessons, personal support, and visible progress.</h3>
          <p>Every path is designed to turn practice into confidence and confidence into opportunity.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=700&q=80"
          alt="A calm, focused workspace for learning"
        />
      </div>
    </section>
  );
}

export default Home;


import { Link, useParams } from "react-router-dom";
import "./style.css";

const skillDetails = {
  "design-thinking": {
    icon: "🎨",
    name: "Design Thinking",
    description: "A practical framework for solving problems with empathy, curiosity, and user-centered ideas.",
    steps: ["Observe real user needs", "Define the challenge clearly", "Prototype simple solutions", "Test and improve quickly"],
    outcome: "Perfect for students and professionals who want to create thoughtful, useful solutions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  "public-speaking": {
    icon: "🎤",
    name: "Public Speaking",
    description: "Build confidence through clear structure, strong delivery, and calm, engaging communication.",
    steps: ["Craft a focused message", "Practice pacing and breathing", "Deliver with simple body language", "Request feedback and improve"],
    outcome: "Ideal for interviews, presentations, and leadership moments that require presence.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
  "ai-tools": {
    icon: "🤖",
    name: "AI Productivity",
    description: "Learn how to use AI tools professionally while keeping creativity, judgment, and ethics in focus.",
    steps: ["Set a clear prompt", "Review output thoughtfully", "Refine your workflow", "Apply insights in real work"],
    outcome: "Great for people who want to save time and improve quality in everyday tasks.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
  },
};

function Discrip() {
  const { id } = useParams();
  const skill = skillDetails[id];

  if (!skill) {
    return (
      <section className="page">
        <Link to="/" className="text-link">
          ← Back to all tracks
        </Link>
        <p className="section-title">This skill path is not available yet.</p>
      </section>
    );
  }

  return (
    <section className="page">
      <Link to="/" className="text-link">
        ← Back to all tracks
      </Link>

      <div className="detail-card">
        <div className="detail-head">
          <div>
            <p className="eyebrow">Skill spotlight</p>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </div>
          <div className="detail-badge">{skill.icon}</div>
        </div>

        <img src={skill.image} alt={skill.name} className="detail-illustration" />

        <div className="detail-grid">
          <div>
            <h3>Learning steps</h3>
            <ul>
              {skill.steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Expected outcome</h3>
            <p>{skill.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discrip;
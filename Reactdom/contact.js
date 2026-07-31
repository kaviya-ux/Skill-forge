import "./style.css";

function Contact() {
  return (
    <section className="page">
      <div className="section-title">
        <p className="eyebrow">Join the next cohort</p>
        <h2>Ready to grow your skills with a supportive team?</h2>
      </div>

      <div className="contact-card">
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Mina" />
          </label>
          <label>
            Email
            <input type="email" placeholder="mina@email.com" />
          </label>
          <label>
            What do you want to improve?
            <textarea rows="4" placeholder="I want stronger presentation skills and more confidence in interviews."></textarea>
          </label>
          <button type="button" className="btn primary">
            Reserve my spot
          </button>
        </form>

        <div className="contact-details">
          <h3>Community access</h3>
          <p>Live sessions every week</p>
          <p>Practice resources and templates</p>
          <p>hello@skillforge.com</p>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80"
            alt="A group of learners collaborating"
            className="contact-image"
          />
        </div>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h3>Flexible learning</h3>
          <p>Choose beginner, intermediate, or advanced tracks that fit your schedule.</p>
        </article>
        <article className="info-card">
          <h3>Community support</h3>
          <p>Connect with mentors and peers through live sessions and shared challenges.</p>
        </article>
      </div>
    </section>
  );
}

export default Contact;
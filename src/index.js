import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Menu, X, Instagram, Linkedin, ChevronRight } from "lucide-react";
import "./styles.css";
import project1 from './images/Project1.jpg';
import project2 from './images/Project2.jpg';
import project3 from './images/Project3.jpg';
import Gadag from './images/Gadag.mp4';
import Nelmangla from './images/Nelmangla.mp4';
import Sirsi from './images/Sirsi.mp4';

const projects = [
  {
    name: "Samruddhi",
    type: "Residential · Hassan",
    //image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
	image: project1
  },
  {
    name: "Parijatha",
    type: "Residential · Tumkur",
    //image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
	image: project2
  },
  {
    name: "Anvaya",
    type: "Residential · Bengaluru",
    //image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
	image: project3
  }
];

const projectVideos = [
  {
    name: "Sirsi",
    type: "Commercial Sirsi",
	image: Sirsi
  },
  {
    name: "Gadag",
    type: "Commercial Gadag",
	image: Gadag
  },
  {
    name: "Nelmangla",
    type: "Commercial Nelmangla",
	image: Nelmangla
  } 
];

const reviews = [
  {
    quote: "They didn't just design a beautiful house. They understood how we wanted to live, then turned that feeling into architecture.",
    name: "Rhea & Arjun",
    role: "Private Residence"
  },
  {
    quote: "The Showroom brought clarity to a complicated brief and delivered a space that feels timeless rather than trendy.",
    name: "Vikram",
    role: "Commercial Client"
  },
  {
    quote: "Every detail feels considered. The team made a complex process surprisingly calm and collaborative.",
    name: "Nisha",
    role: "Commercial Client"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [review, setReview] = useState(0);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => goTo("home")}>
          <span className="brand-mark">LOKA</span>
          <span>LOKA Architecture and Interior Design</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => goTo("studio")}>Studio</button>
          <button onClick={() => goTo("work")}>Work</button>
          <button onClick={() => goTo("approach")}>Approach</button>
          <button onClick={() => goTo("contact")}>Contact</button>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Architecture · Interiors · Urbanism</p>
            <h1>A tale of bricks, love, and dreams <em> built high </em></h1>
            <p className="hero-text">
              We design quiet, considered architecture for people who care about how a space makes them feel.
            </p>
            <button className="circle-cta" onClick={() => goTo("work")}>
              <ArrowUpRight size={24} />
            </button>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90"
              alt="Contemporary architecture"
            />
            <span className="image-caption">Residence No. 14 · 2025</span>
          </div>

          <div className="hero-bottom">
            <span>EST. 2022</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="intro section" id="studio">
          <div className="section-label">01 / Studio</div>
          <div className="intro-content">
            <h2>Architecture with a human pulse.</h2>
            <div>
              <p className="lead">
                LOKA is an independent architecture and design studio working across homes, hospitality, workplaces and the spaces between them.
              </p>
              <p>
                Our work starts with listening. We look at light, landscape, material, movement and the everyday rituals that turn a building into a place.
              </p>
              <button className="text-link" onClick={() => goTo("approach")}>
                Our approach <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="numbers">
          <div><strong>4+</strong><span>Years of practice</span></div>
          <div><strong>30</strong><span>Projects delivered</span></div>
          <div><strong>5</strong><span>People across the studio</span></div>
          <div><strong>5</strong><span>Cities we have built in</span></div>
        </section>

        <section className="work section" id="work">
          <div className="section-head">
            <div className="section-label">02 / Proects Delivered</div>
            <p>Delivered projects from the studio</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={index === 1 ? "project offset" : "project"} key={project.name}>
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                  <span>0{index + 1}</span>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.type}</p>
                  </div>
                  <ArrowUpRight size={20} />
                </div>
              </article>
            ))}
          </div>
		  <div className="projectvideos-grid">
            {projectVideos.map((project, index) => (
              <article className={index === 1 ? "project offset" : "project"} key={project.name}>
                <div className="project-videos">
                  <video src={project.image} 
					  controls
					  muted
					  playsInline
					  preload={project.name}
				  />            
                </div>
                <div className="project-meta">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.type}</p>
                  </div>
                  <ArrowUpRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach section" id="approach">
          <div className="section-label">03 / Approach</div>
          <div className="approach-grid">
            <h2>Less decoration.<br />More intention.</h2>
            <div className="principles">
              {[
                ["01", "Listen first", "Every project begins with context, conversation and a close reading of the site."],
                ["02", "Make it last", "We choose honest materials and enduring details over short-lived aesthetics."],
                ["03", "Edit relentlessly", "Good design is often about knowing what to remove. We keep refining until it feels right."]
              ].map(([number, title, text]) => (
                <div className="principle" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <ChevronRight size={19} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial section">
          <div className="section-label">04 / Client words</div>
          <div className="quote-wrap">
            <div className="quote-mark">“</div>
            <blockquote>{reviews[review].quote}</blockquote>
            <div className="reviewer">
              <div>
                <strong>{reviews[review].name}</strong>
                <span>{reviews[review].role}</span>
              </div>
              <div className="review-controls">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={review === index ? "active" : ""}
                    onClick={() => setReview(index)}
                    aria-label={`Review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2>Have a space<br /><em>in mind?</em></h2>
            </div>
            <a className="contact-arrow" href="mailto:lokaarchitectsinteriordesign@gmail.com">
              <ArrowUpRight size={35} />
            </a>
          </div>

          <div className="contact-details">
            <div>
              <span>Studio</span>
              <p>MS Palya<br />Bengaluru 560097, India</p>
            </div>
            <div>
              <span>Reach us</span>
			  <p><b>Ar. Keerthana Lokesh</b>, Founder</p>
              <a href="mailto:lokaarchitectsinteriordesign@gmail.com">lokaarchitectsinteriordesign@gmail.com</a>
              <a href="tel:+917829116958">+91 78 2911 6958</a>
            </div>
            <div>
              <span>Follow</span>
              <div className="socials">
                <a href="https://www.instagram.com/loka_ar_in" target="_blank" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 LOKA</span>
        <span>Built around ideas.</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

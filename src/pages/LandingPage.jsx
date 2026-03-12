import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPlus } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import './LandingPage.css';

const TICKER_ITEMS = [
  'Team Phoenix joined Hack-A-Thon 2026',
  'Sarah Chen registered for AI Summit 2026',
  'Team Nebula joined CodeSprint 3.0',
  'Alex Rivera registered for Web3 Conf',
  'Team Quantum joined DevFest Global',
  'Maria Santos registered for Cloud Expo',
  'Team Cipher joined CyberSec CTF 2026',
  'James Wilson registered for DataCon 2026',
];

function CountdownUnit({ value, label }) {
  return (
    <div className="countdown-unit">
      <div className="countdown-value glass">{String(value).padStart(2, '0')}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );
}

function Globe() {
  return (
    <div className="globe-container">
      <div className="globe">
        <div className="globe-ring ring-1"></div>
        <div className="globe-ring ring-2"></div>
        <div className="globe-ring ring-3"></div>
        <div className="globe-core"></div>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="globe-dot" style={{
            '--angle': `${i * 45}deg`,
            '--delay': `${i * 0.5}s`,
          }} />
        ))}
      </div>
      <div className="globe-glow"></div>
    </div>
  );
}

export default function LandingPage() {
  const [countdown, setCountdown] = useState({ days: 5, hours: 12, minutes: 34 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(target.getHours() + 12);
    target.setMinutes(target.getMinutes() + 34);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) { clearInterval(interval); return; }
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <Navbar />

      {/* Particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }} />
        ))}
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="hero-badge tag tag-lime">🚀 Next-Gen Developer Events</div>
            <h1 className="hero-headline">
              <span className="hero-line">CODE.</span>
              <span className="hero-line accent">CONQUER.</span>
              <span className="hero-line">REPEAT.</span>
            </h1>
            <p className="hero-subtext">
              Discover the best hackathons, tech fests, and developer events.
              Connect with builders worldwide and level up your skills.
            </p>
            <div className="hero-actions">
              <Link to="/events" className="btn btn-primary">
                Explore Events <HiArrowRight />
              </Link>
              <Link to="/admin" className="btn btn-secondary">
                <HiPlus /> Host Event
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">2,400+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-value">50K+</span>
                <span className="stat-label">Developers</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-value">120+</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Globe />
          </motion.div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot">●</span>
              Latest Registration: {item}
            </span>
          ))}
        </div>
      </div>

      {/* Countdown */}
      <section className="countdown-section">
        <div className="container">
          <motion.div
            className="countdown-card glass-strong"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="countdown-title">Next Major Event Starts In</h3>
            <div className="countdown-grid">
              <CountdownUnit value={countdown.days} label="Days" />
              <span className="countdown-separator">:</span>
              <CountdownUnit value={countdown.hours} label="Hours" />
              <span className="countdown-separator">:</span>
              <CountdownUnit value={countdown.minutes} label="Minutes" />
            </div>
            <Link to="/events/1" className="btn btn-primary" style={{ marginTop: '24px' }}>
              View Event Details <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why DevEvent?
          </motion.h2>
          <div className="features-grid">
            {[
              { icon: '⚡', title: 'Instant Discovery', desc: 'Find hackathons, tech fests, and meetups curated for developers.' },
              { icon: '🎫', title: 'Digital Tickets', desc: 'Get QR-coded tickets delivered instantly after registration.' },
              { icon: '📊', title: 'Live Analytics', desc: 'Track registrations, attendance, and engagement in real time.' },
              { icon: '🌍', title: 'Global Community', desc: 'Connect with 50K+ developers across 120+ countries.' },
            ].map((feat, i) => (
              <motion.div
                key={i}
                className="feature-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <span className="feature-icon">{feat.icon}</span>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">DevEvent</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-copy">© 2026 DevEvent. Built for developers, by developers.</p>
          <div className="footer-links">
            <Link to="/events">Events</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

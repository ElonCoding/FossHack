import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMail, HiLockClosed, HiUser, HiArrowRight, HiX } from 'react-icons/hi';
import './AuthPages.css';

const SKILL_OPTIONS = ['React', 'Node.js', 'Python', 'AI', 'Blockchain', 'Flutter', 'Rust', 'Go', 'TypeScript', 'AWS', 'DevOps', 'UI/UX'];

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [skills, setSkills] = useState(['React', 'AI']);

  const toggleSkill = (skill) => {
    setSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-effects">
        <div className="auth-orb orb-1"></div>
        <div className="auth-orb orb-2"></div>
        <div className="auth-orb orb-3"></div>
      </div>

      <motion.div
        className="auth-card glass-strong register-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">DevEvent</span>
            <span className="logo-bracket">/&gt;</span>
          </Link>
          <h2>Create Account</h2>
          <p>Join the developer community</p>
        </div>

        <form className="auth-form" onSubmit={e => e.preventDefault()}>
          <div className="input-group">
            <HiUser className="input-icon" />
            <input type="text" className="input-field" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div className="input-group">
            <HiMail className="input-icon" />
            <input type="email" className="input-field" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="auth-form-row">
            <div className="input-group">
              <HiLockClosed className="input-icon" />
              <input type="password" className="input-field" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="input-group">
              <HiLockClosed className="input-icon" />
              <input type="password" className="input-field" placeholder="Confirm password" value={confirm} onChange={e => setConfirm(e.target.value)} />
            </div>
          </div>

          <div className="skills-section">
            <label className="skills-label">Select your skills</label>
            <div className="skills-grid">
              {SKILL_OPTIONS.map(skill => (
                <button
                  key={skill}
                  type="button"
                  className={`skill-pill ${skills.includes(skill) ? 'active' : ''}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                  {skills.includes(skill) && <HiX size={12} />}
                </button>
              ))}
            </div>
          </div>

          <Link to="/dashboard">
            <button type="button" className="btn btn-primary auth-submit">
              Create Account <HiArrowRight />
            </button>
          </Link>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}

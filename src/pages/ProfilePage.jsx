import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiAcademicCap, HiX, HiPencil, HiSave } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import DashboardLayout from '../components/DashboardLayout';
import './ProfilePage.css';

const INITIAL_SKILLS = ['React', 'Node.js', 'AI', 'Blockchain', 'Python', 'TypeScript'];
const ALL_SKILLS = ['React', 'Node.js', 'AI', 'Blockchain', 'Python', 'TypeScript', 'Flutter', 'Rust', 'Go', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Next.js', 'Svelte'];

export default function ProfilePage() {
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [editing, setEditing] = useState(false);

  const toggleSkill = (skill) => {
    setSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <DashboardLayout>
      <div className="profile-page">
        <div className="page-header">
          <h2>My Profile</h2>
          <button className="btn btn-secondary btn-sm" onClick={() => setEditing(!editing)}>
            {editing ? <><HiSave /> Save</> : <><HiPencil /> Edit Profile</>}
          </button>
        </div>

        <div className="profile-grid">
          {/* User Info Card */}
          <motion.div className="profile-card glass-strong glow-lime" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="profile-avatar">
              <div className="avatar-circle">
                <span>AS</span>
              </div>
              <div className="profile-online" />
            </div>
            <div className="profile-info">
              <h3>Alex Sharma</h3>
              <span className="profile-role tag tag-lime">Full Stack Developer</span>
            </div>
            <div className="profile-details">
              <div className="profile-detail-row">
                <HiMail className="profile-detail-icon" />
                <span>alex.sharma@devmail.com</span>
              </div>
              <div className="profile-detail-row">
                <HiAcademicCap className="profile-detail-icon" />
                <span>MIT Institute of Technology</span>
              </div>
              <div className="profile-detail-row">
                <HiUser className="profile-detail-icon" />
                <span>Member since Jan 2025</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="profile-card glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4>Social Links</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link glass">
                <FaGithub size={22} />
                <div>
                  <span className="social-label">GitHub</span>
                  <span className="social-value">@alexsharma</span>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link glass">
                <FaLinkedin size={22} color="#0a66c2" />
                <div>
                  <span className="social-label">LinkedIn</span>
                  <span className="social-value">Alex Sharma</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div className="profile-card glass skills-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4>Skills & Technologies</h4>
            <div className="profile-skills">
              {(editing ? ALL_SKILLS : skills).map(skill => {
                const isActive = skills.includes(skill);
                const colors = {
                  'React': 'aqua', 'Node.js': 'lime', 'AI': 'purple', 'Blockchain': 'gold',
                  'Python': 'lime', 'TypeScript': 'aqua', 'Flutter': 'aqua', 'Rust': 'gold',
                  'Go': 'aqua', 'AWS': 'gold', 'Docker': 'aqua', 'Kubernetes': 'purple',
                  'GraphQL': 'purple', 'Next.js': 'lime', 'Svelte': 'gold'
                };
                const c = colors[skill] || 'lime';
                return (
                  <motion.button
                    key={skill}
                    className={`tag tag-${c} ${editing ? 'editable' : ''} ${!isActive && editing ? 'inactive' : ''}`}
                    onClick={() => editing && toggleSkill(skill)}
                    whileHover={editing ? { scale: 1.08 } : {}}
                    whileTap={editing ? { scale: 0.95 } : {}}
                    layout
                  >
                    {skill}
                    {editing && isActive && <HiX size={12} />}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div className="profile-card glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4>Event Statistics</h4>
            <div className="profile-stats-grid">
              <div className="profile-stat">
                <span className="profile-stat-value" style={{ color: 'var(--accent-aqua)' }}>12</span>
                <span className="profile-stat-label">Events Attended</span>
              </div>
              <div className="profile-stat">
                <span className="profile-stat-value" style={{ color: 'var(--accent-lime)' }}>3</span>
                <span className="profile-stat-label">Hackathons Won</span>
              </div>
              <div className="profile-stat">
                <span className="profile-stat-value" style={{ color: 'var(--accent-gold)' }}>8</span>
                <span className="profile-stat-label">Teams Joined</span>
              </div>
              <div className="profile-stat">
                <span className="profile-stat-value" style={{ color: 'var(--accent-purple)' }}>24</span>
                <span className="profile-stat-label">Connections</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

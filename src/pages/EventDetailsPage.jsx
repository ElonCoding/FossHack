import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiUsers, HiArrowRight, HiClock, HiArrowLeft } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import './EventDetailsPage.css';

const SCHEDULE = [
  { time: '09:00 AM', title: 'Registration & Check-in', desc: 'Badge pickup and networking' },
  { time: '10:00 AM', title: 'Opening Ceremony', desc: 'Keynote speech and event overview' },
  { time: '11:00 AM', title: 'Hacking Begins', desc: 'Teams start building their projects' },
  { time: '01:00 PM', title: 'Lunch Break', desc: 'Networking lunch with sponsors' },
  { time: '06:00 PM', title: 'Mentoring Sessions', desc: 'Get help from industry experts' },
  { time: '09:00 AM', title: 'Final Submissions', desc: 'Projects due by noon, Day 2' },
  { time: '02:00 PM', title: 'Demo & Judging', desc: 'Pitch your project to judges' },
  { time: '04:00 PM', title: 'Awards Ceremony', desc: 'Winners announced and prizes awarded' },
];

const RULES = [
  'Teams of 2–4 members',
  'All code must be written during the event',
  'Use of open-source libraries is allowed',
  'Projects must be submitted before deadline',
  'Judges decision is final',
];

const PARTICIPANTS = [
  { name: 'Team Phoenix', members: 4 },
  { name: 'Team Nebula', members: 3 },
  { name: 'Team Quantum', members: 4 },
  { name: 'Team Cipher', members: 2 },
  { name: 'Team Aurora', members: 3 },
  { name: 'Team Vertex', members: 4 },
];

export default function EventDetailsPage() {
  return (
    <div className="details-page">
      <Navbar />

      {/* Banner */}
      <div className="details-banner">
        <div className="container">
          <Link to="/events" className="back-link"><HiArrowLeft /> Back to Events</Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag tag-aqua">Hackathon</span>
            <h1>Hack-A-Thon 2026</h1>
            <div className="details-meta">
              <span><HiCalendar /> March 25–26, 2026</span>
              <span><HiLocationMarker /> Online</span>
              <span><HiUsers /> 65 / 100 registered</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container details-content">
        <div className="details-grid">
          {/* Main Content */}
          <div className="details-main">
            {/* Description */}
            <motion.section className="details-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>About the Event</h3>
              <p>Join 100+ developers from around the world for an intense 48-hour hackathon. Build innovative solutions, collaborate with talented teams, and compete for exciting prizes. Whether you're a beginner or an expert, there's something for everyone at Hack-A-Thon 2026.</p>
              <p>This year we're focusing on AI-powered solutions that can make a real impact. Bring your creativity and coding skills — mentors from top tech companies will be available to guide you throughout the event.</p>
            </motion.section>

            {/* Schedule */}
            <motion.section className="details-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>Schedule Timeline</h3>
              <div className="timeline">
                {SCHEDULE.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="timeline-dot" />
                      {i < SCHEDULE.length - 1 && <div className="timeline-line" />}
                    </div>
                    <div className="timeline-content glass">
                      <span className="timeline-time"><HiClock /> {item.time}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Rules */}
            <motion.section className="details-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>Rules</h3>
              <ul className="rules-list">
                {RULES.map((rule, i) => (
                  <li key={i}>
                    <span className="rule-num">{String(i + 1).padStart(2, '0')}</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Participants */}
            <motion.section className="details-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>Registered Teams</h3>
              <div className="participants-grid">
                {PARTICIPANTS.map((team, i) => (
                  <div key={i} className="participant-card glass">
                    <div className="participant-avatar" style={{ background: ['#4df0ff20', '#b5ff4d20', '#a855f720', '#ffd70020', '#ff4d6a20', '#4df0ff20'][i] }}>
                      {team.name.charAt(5)}
                    </div>
                    <div>
                      <div className="participant-name">{team.name}</div>
                      <div className="participant-members">{team.members} members</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <aside className="details-sidebar">
            <motion.div className="sidebar-card glass-strong glow-aqua" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h4>Prize Pool</h4>
              <div className="prize-list">
                <div className="prize-item">
                  <span className="prize-medal">🥇</span>
                  <div>
                    <span className="prize-place">1st Place</span>
                    <span className="prize-amount">$1,000</span>
                  </div>
                </div>
                <div className="prize-item">
                  <span className="prize-medal">🥈</span>
                  <div>
                    <span className="prize-place">2nd Place</span>
                    <span className="prize-amount">$500</span>
                  </div>
                </div>
                <div className="prize-item">
                  <span className="prize-medal">🥉</span>
                  <div>
                    <span className="prize-place">3rd Place</span>
                    <span className="prize-amount">$250</span>
                  </div>
                </div>
              </div>
              <div className="prize-total">
                <span>Total Prize Pool</span>
                <span className="prize-total-amount">$1,750</span>
              </div>
              <Link to="/register" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                Register Now <HiArrowRight />
              </Link>
            </motion.div>

            <div className="sidebar-card glass">
              <h4>Quick Info</h4>
              <div className="info-rows">
                <div className="info-row"><span>Format</span><span>48-hour Hackathon</span></div>
                <div className="info-row"><span>Difficulty</span><span className="tag tag-aqua">Intermediate</span></div>
                <div className="info-row"><span>Team Size</span><span>2–4 members</span></div>
                <div className="info-row"><span>Registration</span><span style={{ color: 'var(--accent-lime)' }}>Open</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

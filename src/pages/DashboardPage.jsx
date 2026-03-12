import { motion } from 'framer-motion';
import { HiCalendar, HiTicket, HiUsers, HiTrendingUp, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import './DashboardPage.css';

const STATS = [
  { label: 'Upcoming Events', value: '3', icon: <HiCalendar />, color: 'var(--accent-aqua)', bg: 'var(--accent-aqua-dim)' },
  { label: 'My Tickets', value: '5', icon: <HiTicket />, color: 'var(--accent-lime)', bg: 'var(--accent-lime-dim)' },
  { label: 'Teams Joined', value: '2', icon: <HiUsers />, color: 'var(--accent-purple)', bg: 'var(--accent-purple-dim)' },
  { label: 'Events This Year', value: '12', icon: <HiTrendingUp />, color: 'var(--accent-gold)', bg: 'var(--accent-gold-dim)' },
];

const UPCOMING = [
  { id: 1, title: 'Hack-A-Thon 2026', date: 'Mar 25, 2026', type: 'Hackathon', color: '#4df0ff' },
  { id: 2, title: 'AI Summit Global', date: 'Apr 10, 2026', type: 'Conference', color: '#b5ff4d' },
  { id: 3, title: 'Web3 DevCon', date: 'Apr 18, 2026', type: 'Conference', color: '#a855f7' },
];

function QRCode() {
  return (
    <svg className="qr-svg" viewBox="0 0 100 100" width="80" height="80">
      <rect width="100" height="100" fill="#111" rx="4" />
      {/* QR pattern */}
      <rect x="10" y="10" width="24" height="24" fill="var(--accent-aqua)" rx="2" />
      <rect x="14" y="14" width="16" height="16" fill="#111" rx="1" />
      <rect x="18" y="18" width="8" height="8" fill="var(--accent-aqua)" rx="1" />
      <rect x="66" y="10" width="24" height="24" fill="var(--accent-aqua)" rx="2" />
      <rect x="70" y="14" width="16" height="16" fill="#111" rx="1" />
      <rect x="74" y="18" width="8" height="8" fill="var(--accent-aqua)" rx="1" />
      <rect x="10" y="66" width="24" height="24" fill="var(--accent-aqua)" rx="2" />
      <rect x="14" y="70" width="16" height="16" fill="#111" rx="1" />
      <rect x="18" y="74" width="8" height="8" fill="var(--accent-aqua)" rx="1" />
      {/* Data cells */}
      <rect x="40" y="10" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="50" y="10" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="40" y="20" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="10" y="40" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="20" y="40" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="40" y="40" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="50" y="40" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="60" y="40" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="80" y="40" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="40" y="50" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="60" y="60" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="70" y="70" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="80" y="80" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="50" y="70" width="6" height="6" fill="var(--accent-lime)" rx="1" />
      <rect x="80" y="60" width="6" height="6" fill="var(--accent-lime)" rx="1" />
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-page">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="dashboard-header">
            <div>
              <h2>Welcome back, <span style={{ color: 'var(--accent-lime)' }}>Alex</span></h2>
              <p className="dashboard-subtitle">Here's what's happening with your events</p>
            </div>
            <Link to="/events" className="btn btn-primary btn-sm">Browse Events <HiArrowRight /></Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card glass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <div className="stat-icon" style={{ background: stat.bg, color: stat.color }}>
                {stat.icon}
              </div>
              <div>
                <span className="stat-card-value" style={{ color: stat.color }}>{stat.value}</span>
                <span className="stat-card-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="dashboard-grid">
          {/* Upcoming Events */}
          <motion.div className="widget glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="widget-header">
              <h4>Upcoming Events</h4>
              <Link to="/events" className="widget-link">View All <HiArrowRight /></Link>
            </div>
            <div className="upcoming-list">
              {UPCOMING.map(event => (
                <Link to={`/events/${event.id}`} key={event.id} className="upcoming-item">
                  <div className="upcoming-dot" style={{ background: event.color }} />
                  <div className="upcoming-info">
                    <span className="upcoming-title">{event.title}</span>
                    <span className="upcoming-date">{event.date}</span>
                  </div>
                  <span className="tag" style={{ background: `${event.color}15`, color: event.color, border: `1px solid ${event.color}25`, fontSize: '0.7rem' }}>
                    {event.type}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Ticket Preview */}
          <motion.div className="widget glass glow-aqua" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="widget-header">
              <h4>Latest Ticket</h4>
              <Link to="/tickets" className="widget-link">All Tickets <HiArrowRight /></Link>
            </div>
            <div className="ticket-preview">
              <div className="ticket-preview-info">
                <span className="ticket-event-name">Hack-A-Thon 2026</span>
                <span className="ticket-event-date">March 25, 2026</span>
                <div className="ticket-details-row">
                  <span>Gate: <strong>A</strong></span>
                  <span>Seat: <strong>T4-07</strong></span>
                </div>
              </div>
              <div className="ticket-qr">
                <QRCode />
              </div>
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div className="widget glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="widget-header">
              <h4>Recent Activity</h4>
            </div>
            <div className="activity-list">
              {[
                { text: 'Registered for Hack-A-Thon 2026', time: '2 hours ago', color: 'var(--accent-lime)' },
                { text: 'Joined Team Phoenix', time: '5 hours ago', color: 'var(--accent-aqua)' },
                { text: 'Ticket issued for AI Summit', time: '1 day ago', color: 'var(--accent-gold)' },
                { text: 'Profile updated', time: '2 days ago', color: 'var(--accent-purple)' },
              ].map((item, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-dot" style={{ background: item.color }} />
                  <div className="activity-info">
                    <span>{item.text}</span>
                    <span className="activity-time">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

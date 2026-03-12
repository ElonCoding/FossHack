import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiSearch, HiLocationMarker, HiCalendar, HiFilter } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import './EventDiscoveryPage.css';

const EVENTS = [
  { id: 1, title: 'Hack-A-Thon 2026', date: 'March 25, 2026', location: 'Online', category: 'Hackathon', difficulty: 'Intermediate', slots: 35, total: 100, color: '#4df0ff' },
  { id: 2, title: 'AI Summit Global', date: 'April 10, 2026', location: 'San Francisco', category: 'Conference', difficulty: 'Advanced', slots: 120, total: 500, color: '#b5ff4d' },
  { id: 3, title: 'Web3 DevCon', date: 'April 18, 2026', location: 'Berlin', category: 'Conference', difficulty: 'Advanced', slots: 80, total: 300, color: '#a855f7' },
  { id: 4, title: 'CodeSprint 3.0', date: 'May 2, 2026', location: 'Online', category: 'Hackathon', difficulty: 'Beginner', slots: 50, total: 200, color: '#ffd700' },
  { id: 5, title: 'React Universe', date: 'May 15, 2026', location: 'London', category: 'Workshop', difficulty: 'Intermediate', slots: 25, total: 50, color: '#4df0ff' },
  { id: 6, title: 'CyberSec CTF 2026', date: 'June 1, 2026', location: 'Online', category: 'CTF', difficulty: 'Advanced', slots: 45, total: 150, color: '#ff4d6a' },
  { id: 7, title: 'Cloud Expo 2026', date: 'June 12, 2026', location: 'New York', category: 'Conference', difficulty: 'Intermediate', slots: 200, total: 800, color: '#b5ff4d' },
  { id: 8, title: 'DevFest India', date: 'July 5, 2026', location: 'Bangalore', category: 'Festival', difficulty: 'Beginner', slots: 150, total: 400, color: '#a855f7' },
  { id: 9, title: 'Flutter Forward', date: 'July 20, 2026', location: 'Tokyo', category: 'Workshop', difficulty: 'Beginner', slots: 30, total: 100, color: '#4df0ff' },
];

const CATEGORIES = ['All', 'Hackathon', 'Conference', 'Workshop', 'CTF', 'Festival'];
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function EventDiscoveryPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');

  const filtered = EVENTS.filter(e => {
    if (search && !e.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (category !== 'All' && e.category !== category) return false;
    if (difficulty !== 'All' && e.difficulty !== difficulty) return false;
    return true;
  });

  return (
    <div className="discovery-page">
      <Navbar />

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="container filter-bar-inner">
          <div className="filter-search">
            <HiSearch className="filter-search-icon" />
            <input
              type="text"
              placeholder="Search events..."
              className="input-field"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-selects">
            <div className="filter-select-wrapper">
              <HiFilter className="filter-icon" />
              <select className="filter-select" value={category} onChange={e => setCategory(e.target.value)}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>)}
              </select>
            </div>
            <div className="filter-select-wrapper">
              <HiCalendar className="filter-icon" />
              <select className="filter-select" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                {DIFFICULTIES.map(d => <option key={d} value={d}>{d === 'All' ? 'All Levels' : d}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <section className="events-section">
        <div className="container">
          <div className="events-header">
            <h2>Discover Events</h2>
            <span className="events-count">{filtered.length} events found</span>
          </div>
          <div className="events-grid">
            {filtered.map((event, i) => (
              <motion.div
                key={event.id}
                className="event-card glass"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="event-banner" style={{ background: `linear-gradient(135deg, ${event.color}15, ${event.color}05)` }}>
                  <span className="event-category tag" style={{ background: `${event.color}20`, color: event.color, border: `1px solid ${event.color}30` }}>
                    {event.category}
                  </span>
                  <div className="event-banner-icon" style={{ color: event.color }}>&lt;/&gt;</div>
                </div>
                <div className="event-info">
                  <h4 className="event-title">{event.title}</h4>
                  <div className="event-meta">
                    <span><HiCalendar /> {event.date}</span>
                    <span><HiLocationMarker /> {event.location}</span>
                  </div>
                  <div className="event-slots">
                    <div className="slots-text">
                      <span>Slots Remaining</span>
                      <span className="slots-count">{event.total - event.slots} / {event.total}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: `${((event.total - event.slots) / event.total) * 100}%` }} />
                    </div>
                  </div>
                  <Link to={`/events/${event.id}`} className="btn btn-primary btn-sm event-register-btn">
                    Register
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlus, HiPencil, HiTrash, HiSearch, HiCalendar, HiLocationMarker, HiUsers, HiX } from 'react-icons/hi';
import DashboardLayout from '../components/DashboardLayout';
import './AdminPanel.css';

const INITIAL_EVENTS = [
  { id: 1, title: 'Hack-A-Thon 2026', date: '2026-03-25', location: 'Online', category: 'Hackathon', registrations: 65, capacity: 100, status: 'Active' },
  { id: 2, title: 'AI Summit Global', date: '2026-04-10', location: 'San Francisco', category: 'Conference', registrations: 380, capacity: 500, status: 'Active' },
  { id: 3, title: 'Web3 DevCon', date: '2026-04-18', location: 'Berlin', category: 'Conference', registrations: 220, capacity: 300, status: 'Active' },
  { id: 4, title: 'CodeSprint 3.0', date: '2026-05-02', location: 'Online', category: 'Hackathon', registrations: 150, capacity: 200, status: 'Draft' },
  { id: 5, title: 'React Universe', date: '2026-05-15', location: 'London', category: 'Workshop', registrations: 25, capacity: 50, status: 'Active' },
  { id: 6, title: 'CyberSec CTF 2026', date: '2026-06-01', location: 'Online', category: 'CTF', registrations: 105, capacity: 150, status: 'Upcoming' },
];

export default function AdminPanel() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const handleEdit = (event) => {
    setEditEvent(event);
    setShowModal(true);
  };

  return (
    <DashboardLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h2>Admin Panel</h2>
            <p className="page-subtitle">Manage your events and registrations</p>
          </div>
          <button className="btn btn-primary" onClick={() => { setEditEvent(null); setShowModal(true); }}>
            <HiPlus /> Create Event
          </button>
        </div>

        {/* Stats */}
        <div className="admin-stats">
          {[
            { label: 'Total Events', value: events.length, color: 'var(--accent-lime)' },
            { label: 'Active', value: events.filter(e => e.status === 'Active').length, color: 'var(--accent-aqua)' },
            { label: 'Total Registrations', value: events.reduce((a, e) => a + e.registrations, 0), color: 'var(--accent-gold)' },
            { label: 'Total Capacity', value: events.reduce((a, e) => a + e.capacity, 0).toLocaleString(), color: 'var(--accent-purple)' },
          ].map((stat, i) => (
            <motion.div key={i} className="admin-stat-card glass" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <span className="admin-stat-value" style={{ color: stat.color }}>{stat.value}</span>
              <span className="admin-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Search */}
        <div className="admin-toolbar">
          <div className="admin-search">
            <HiSearch className="admin-search-icon" />
            <input type="text" className="input-field" placeholder="Search events..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: '40px' }} />
          </div>
        </div>

        {/* Table */}
        <motion.div className="admin-table-wrap glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Location</th>
                <th>Category</th>
                <th>Registrations</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(event => (
                <tr key={event.id}>
                  <td className="table-event-name">{event.title}</td>
                  <td><HiCalendar style={{ opacity: 0.4, marginRight: '4px' }} />{event.date}</td>
                  <td><HiLocationMarker style={{ opacity: 0.4, marginRight: '4px' }} />{event.location}</td>
                  <td><span className="tag tag-aqua">{event.category}</span></td>
                  <td>
                    <div className="admin-reg-cell">
                      <HiUsers style={{ opacity: 0.4 }} />
                      <span>{event.registrations} / {event.capacity}</span>
                      <div className="progress-bar" style={{ width: '80px', height: '4px' }}>
                        <div className="progress-bar-fill" style={{ width: `${(event.registrations / event.capacity) * 100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`admin-status status-${event.status.toLowerCase()}`}>{event.status}</span>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button className="action-btn edit" onClick={() => handleEdit(event)} title="Edit"><HiPencil /></button>
                      <button className="action-btn delete" onClick={() => handleDelete(event.id)} title="Delete"><HiTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <motion.div
              className="modal-card glass-strong"
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            >
              <div className="modal-header">
                <h3>{editEvent ? 'Edit Event' : 'Create New Event'}</h3>
                <button className="modal-close" onClick={() => setShowModal(false)}><HiX /></button>
              </div>
              <form className="modal-form" onSubmit={e => { e.preventDefault(); setShowModal(false); }}>
                <div className="input-group">
                  <input type="text" className="input-field" placeholder="Event Title" defaultValue={editEvent?.title || ''} />
                </div>
                <div className="modal-row">
                  <input type="date" className="input-field" defaultValue={editEvent?.date || ''} />
                  <input type="text" className="input-field" placeholder="Location" defaultValue={editEvent?.location || ''} />
                </div>
                <div className="modal-row">
                  <select className="input-field" defaultValue={editEvent?.category || ''}>
                    <option value="">Select Category</option>
                    <option>Hackathon</option>
                    <option>Conference</option>
                    <option>Workshop</option>
                    <option>CTF</option>
                    <option>Festival</option>
                  </select>
                  <input type="number" className="input-field" placeholder="Capacity" defaultValue={editEvent?.capacity || ''} />
                </div>
                <textarea className="input-field" placeholder="Event Description..." rows={3} style={{ resize: 'vertical' }} />
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  {editEvent ? 'Save Changes' : 'Create Event'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

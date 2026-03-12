import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiQrcode } from 'react-icons/hi';
import DashboardLayout from '../components/DashboardLayout';
import './MyTicketsPage.css';

const TICKETS = [
  { id: 1, event: 'Hack-A-Thon 2026', date: 'March 25, 2026', gate: 'A', seat: 'T4-07', color: '#4df0ff', status: 'Active' },
  { id: 2, event: 'AI Summit Global', date: 'April 10, 2026', gate: 'B', seat: 'G12-03', color: '#b5ff4d', status: 'Active' },
  { id: 3, event: 'Web3 DevCon', date: 'April 18, 2026', gate: 'C', seat: 'W8-15', color: '#a855f7', status: 'Upcoming' },
  { id: 4, event: 'CodeSprint 3.0', date: 'May 2, 2026', gate: 'D', seat: 'CS-22', color: '#ffd700', status: 'Upcoming' },
  { id: 5, event: 'React Universe', date: 'May 15, 2026', gate: 'A', seat: 'RU-11', color: '#4df0ff', status: 'Upcoming' },
];

function TicketQR({ color }) {
  return (
    <svg viewBox="0 0 100 100" width="90" height="90" className="ticket-qr-svg">
      <rect width="100" height="100" fill="#0a0a0f" rx="6" />
      <rect x="10" y="10" width="24" height="24" fill={color} rx="2" />
      <rect x="14" y="14" width="16" height="16" fill="#0a0a0f" rx="1" />
      <rect x="18" y="18" width="8" height="8" fill={color} rx="1" />
      <rect x="66" y="10" width="24" height="24" fill={color} rx="2" />
      <rect x="70" y="14" width="16" height="16" fill="#0a0a0f" rx="1" />
      <rect x="74" y="18" width="8" height="8" fill={color} rx="1" />
      <rect x="10" y="66" width="24" height="24" fill={color} rx="2" />
      <rect x="14" y="70" width="16" height="16" fill="#0a0a0f" rx="1" />
      <rect x="18" y="74" width="8" height="8" fill={color} rx="1" />
      <rect x="40" y="14" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="50" y="14" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="40" y="24" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="14" y="44" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="24" y="44" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="44" y="44" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="54" y="44" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="64" y="44" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="74" y="44" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="44" y="54" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="64" y="64" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="74" y="74" width="6" height="6" fill={color} opacity="0.7" rx="1" />
      <rect x="84" y="84" width="6" height="6" fill={color} opacity="0.7" rx="1" />
    </svg>
  );
}

export default function MyTicketsPage() {
  return (
    <DashboardLayout>
      <div className="tickets-page">
        <div className="page-header">
          <h2>My Tickets</h2>
          <p className="page-subtitle">{TICKETS.length} tickets in your collection</p>
        </div>

        <div className="tickets-grid">
          {TICKETS.map((ticket, i) => (
            <motion.div
              key={ticket.id}
              className="ticket-card glass"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              style={{ '--glow-color': ticket.color }}
            >
              <div className="ticket-card-glow" style={{ background: `${ticket.color}08`, borderColor: `${ticket.color}25` }} />
              <div className="ticket-card-top">
                <div className="ticket-card-info">
                  <span className="ticket-status" style={{ background: `${ticket.color}15`, color: ticket.color, border: `1px solid ${ticket.color}30` }}>
                    {ticket.status}
                  </span>
                  <h4 className="ticket-card-event">{ticket.event}</h4>
                  <div className="ticket-card-meta">
                    <span><HiCalendar /> {ticket.date}</span>
                  </div>
                </div>
                <div className="ticket-card-qr">
                  <TicketQR color={ticket.color} />
                </div>
              </div>
              <div className="ticket-card-divider">
                <div className="divider-notch left" />
                <div className="divider-line" />
                <div className="divider-notch right" />
              </div>
              <div className="ticket-card-bottom">
                <div className="ticket-detail">
                  <span className="ticket-detail-label">Entry Gate</span>
                  <span className="ticket-detail-value" style={{ color: ticket.color }}>{ticket.gate}</span>
                </div>
                <div className="ticket-detail">
                  <span className="ticket-detail-label">Seat / Team ID</span>
                  <span className="ticket-detail-value" style={{ color: ticket.color }}>{ticket.seat}</span>
                </div>
                <div className="ticket-detail">
                  <span className="ticket-detail-label">Ticket ID</span>
                  <span className="ticket-detail-value">#{String(ticket.id).padStart(5, '0')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

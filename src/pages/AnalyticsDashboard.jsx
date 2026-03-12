import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiTrendingUp, HiEye, HiUsers, HiCheckCircle, HiQrcode } from 'react-icons/hi';
import DashboardLayout from '../components/DashboardLayout';
import './AnalyticsDashboard.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const REG_DATA = [45, 72, 110, 85, 130, 95];
const TRAFFIC_DATA = [200, 350, 280, 420, 380, 500];
const ATTENDANCE_DATA = [38, 60, 95, 70, 105, 80];

function BarChart({ data, labels, color, maxVal }) {
  const max = maxVal || Math.max(...data);
  return (
    <div className="bar-chart">
      <div className="bar-chart-bars">
        {data.map((val, i) => (
          <div key={i} className="bar-column">
            <motion.div
              className="bar"
              style={{ background: color, height: `${(val / max) * 100}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${(val / max) * 100}%` }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            />
            <span className="bar-label">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChart({ data, labels, color }) {
  const max = Math.max(...data);
  const points = data.map((val, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 100 - (val / max) * 80 - 10,
  }));
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaD = pathD + ` L100,100 L0,100 Z`;

  return (
    <div className="line-chart">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="line-chart-svg">
        <defs>
          <linearGradient id={`grad-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill={`url(#grad-${color.replace('#','')})`} />
        <path d={pathD} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.5" fill={color} stroke="#0a0a0f" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <div className="line-chart-labels">
        {labels.map((l, i) => <span key={i}>{l}</span>)}
      </div>
    </div>
  );
}

export default function AnalyticsDashboard() {
  const [scanStatus, setScanStatus] = useState(null);

  const simulateScan = () => {
    setScanStatus('scanning');
    setTimeout(() => {
      setScanStatus(Math.random() > 0.3 ? 'verified' : 'invalid');
      setTimeout(() => setScanStatus(null), 3000);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="analytics-page">
        <div className="page-header">
          <h2>Analytics Dashboard</h2>
          <p className="page-subtitle">Track your event performance and metrics</p>
        </div>

        {/* Overview Stats */}
        <div className="analytics-stats">
          {[
            { icon: <HiTrendingUp />, label: 'Total Registrations', value: '537', change: '+12%', color: 'var(--accent-lime)' },
            { icon: <HiEye />, label: 'Page Views', value: '2,130', change: '+25%', color: 'var(--accent-aqua)' },
            { icon: <HiUsers />, label: 'Attendance Rate', value: '83%', change: '+5%', color: 'var(--accent-gold)' },
            { icon: <HiCheckCircle />, label: 'Check-ins Today', value: '47', change: '+18', color: 'var(--accent-purple)' },
          ].map((stat, i) => (
            <motion.div key={i} className="analytics-stat glass" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <div className="analytics-stat-icon" style={{ color: stat.color, background: `color-mix(in srgb, ${stat.color} 12%, transparent)` }}>
                {stat.icon}
              </div>
              <div className="analytics-stat-info">
                <span className="analytics-stat-label">{stat.label}</span>
                <div className="analytics-stat-row">
                  <span className="analytics-stat-value">{stat.value}</span>
                  <span className="analytics-stat-change" style={{ color: stat.color }}>{stat.change}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          <motion.div className="chart-card glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="chart-header">
              <h4>Registrations</h4>
              <span className="chart-period">Last 6 months</span>
            </div>
            <BarChart data={REG_DATA} labels={MONTHS} color="var(--accent-lime)" />
          </motion.div>

          <motion.div className="chart-card glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="chart-header">
              <h4>Traffic</h4>
              <span className="chart-period">Last 6 months</span>
            </div>
            <LineChart data={TRAFFIC_DATA} labels={MONTHS} color="#4df0ff" />
          </motion.div>

          <motion.div className="chart-card glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="chart-header">
              <h4>Attendance</h4>
              <span className="chart-period">Last 6 months</span>
            </div>
            <BarChart data={ATTENDANCE_DATA} labels={MONTHS} color="#a855f7" />
          </motion.div>

          {/* QR Scanner */}
          <motion.div className="chart-card glass qr-scanner-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <div className="chart-header">
              <h4>QR Check-In Scanner</h4>
            </div>
            <div className="qr-scanner">
              <div className={`scanner-frame ${scanStatus === 'scanning' ? 'scanning' : ''}`}>
                <div className="scanner-corner tl" />
                <div className="scanner-corner tr" />
                <div className="scanner-corner bl" />
                <div className="scanner-corner br" />
                {scanStatus === 'scanning' && <div className="scanner-line" />}
                <HiQrcode className="scanner-icon" />
              </div>
              
              {scanStatus === 'verified' && (
                <motion.div className="scan-result success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  <HiCheckCircle size={24} /> Verified Participant
                </motion.div>
              )}
              {scanStatus === 'invalid' && (
                <motion.div className="scan-result error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  ❌ Invalid Ticket
                </motion.div>
              )}
              
              <button className="btn btn-aqua" onClick={simulateScan} disabled={scanStatus === 'scanning'} style={{ width: '100%', marginTop: '16px' }}>
                {scanStatus === 'scanning' ? 'Scanning...' : 'Simulate Scan'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

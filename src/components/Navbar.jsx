import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/admin', label: 'Admin' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">DevEvent</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="navbar-auth">
            <Link to="/login" className="btn btn-secondary btn-sm" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm" onClick={() => setMobileOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>

        <button className="navbar-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}

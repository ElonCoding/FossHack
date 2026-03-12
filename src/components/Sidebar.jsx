import { NavLink, useNavigate } from 'react-router-dom';
import {
  HiOutlineViewGrid,
  HiOutlineCalendar,
  HiOutlineTicket,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineChartBar,
} from 'react-icons/hi';
import './Sidebar.css';

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { to: '/dashboard', icon: <HiOutlineViewGrid size={20} />, label: 'Dashboard' },
    { to: '/events', icon: <HiOutlineCalendar size={20} />, label: 'Events' },
    { to: '/tickets', icon: <HiOutlineTicket size={20} />, label: 'My Tickets' },
    { to: '/profile', icon: <HiOutlineUser size={20} />, label: 'Profile' },
    { to: '/admin', icon: <HiOutlineCog size={20} />, label: 'Admin' },
    { to: '/analytics', icon: <HiOutlineChartBar size={20} />, label: 'Analytics' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-text">DE</span>
        <span className="logo-bracket">/&gt;</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="sidebar-link sidebar-logout" onClick={() => navigate('/login')}>
        <HiOutlineLogout size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
}

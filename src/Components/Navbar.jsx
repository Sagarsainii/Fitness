import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './styles/Navbar.css';
import { FaBars, FaTimes, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="logo">🏃‍♂️ <strong>Fitness-Tracking</strong></div>
        <div className="navbar-icons">
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
     <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li><Link to="/dashboard">Dashboard</Link></li>
  <li><Link to="/log">Log Activity</Link></li>
  <li><Link to="/progress">Progress</Link></li>
  <li><Link to="/Goals">Goals</Link></li>
</ul>

    </nav>
  );
}

export default Navbar;

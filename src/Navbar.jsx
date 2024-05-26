import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">ProLiCulture</Link>
      </div>
      <div className="navbar-center">
        <ul className="navbar-menu">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/evenements">Évènements</Link></li>
          <li><Link to="/calendrier">Calendrier</Link></li>
          <li><Link to="/lieux">Lieux</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <form action="/recherche" className="navbar-search">
          <input type="text" placeholder="Rechercher..." name="search" />
          <button type="submit">🔍</button>
        </form>
        <Link to="/soumettre-evenement" className="navbar-cta">Soumettre un événement</Link>
      </div>
    </nav>
  );
}

export default Navbar;

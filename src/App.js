import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Calendar from './pages/Calendar';
import Venues from './pages/Lieux';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Search from './pages/Search';
import SubmitEvent from './pages/SubmitEvent';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element ={<Navbar />} >

        <Route path="/" element={<Home />} />
        <Route path="/evenements" element={<Events />} />
        <Route path="/calendrier" element={<Calendar />} />
        <Route path="/lieux" element={<Venues />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/recherche" element={<Search />} />
        <Route path="/soumettre-evenement" element={<SubmitEvent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

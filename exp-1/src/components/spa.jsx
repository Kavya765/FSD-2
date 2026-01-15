import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './Contact';

export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
               <Route path="/Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './Contact';
import ButtonBasic from './Button';
export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/Contact">Contact</Link> |{" "}
        <Link to="/ButtonBasic">Button</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
               <Route path="/Contact" element={<Contact />} />
               <Route path="/ButtonBasic" element={<ButtonBasic />} />

      </Routes>
    </BrowserRouter>
  );
}
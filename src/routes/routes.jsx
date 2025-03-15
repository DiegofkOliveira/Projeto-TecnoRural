import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "../templates/top/top.jsx";
import Home from "../components/home/home/home.jsx";
import AboutMe from "../components/abouteMe/abouteMe.jsx";
import Reports from "../components/reports/reports.jsx";
import Projects from "../components/projects/Projects.jsx";
import Contact from "../components/contacts/contacts.jsx";
import End from '../templates/end/end.jsx';
import { FaWhatsapp } from 'react-icons/fa'


function Rotas() {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quem somos" element={<AboutMe />} />
        <Route path="/laudo" element={<Reports />} />
        <Route path="/projeto" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <End />
      <a
        href="https://wa.me/555599154228?text=Olá, gostaria de saber mais!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </Router>
  );
}

export default Rotas;
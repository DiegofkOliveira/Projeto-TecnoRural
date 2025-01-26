import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "../templates/top/top.jsx";
import Home from "../components/home/home/home.jsx";
import AboutMe from "../components/abouteMe/abouteMe.jsx";
import Reports from "../components/reports/reports.jsx";
import Projects from "../components/projects/projects.jsx";
import Contact from "../components/contacts/contacts.jsx";
import End from '../templates/end/end.jsx';


function Rotas() {
  return (
    <Router>
      <nav>
        <Top />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutMe />} />
          <Route path="/laudo" element={<Reports />} />
          <Route path="/projeto" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <footer className="w-full h-auto flex flex-col items-center justify-center bg-green-500 p-4">
          <End />
        </footer>
      </nav>
    </Router>
  );
}

export default Rotas;
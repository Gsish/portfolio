import { Routes, Route } from 'react-router-dom';
import HomePage from './Homepage.jsx';
import Projects from './components/project.jsx';
import Contact from './components/contact.jsx';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
       <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

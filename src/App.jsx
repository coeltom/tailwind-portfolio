import { Route, Routes } from 'react-router';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Work from './pages/Work';
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
};

export default App;

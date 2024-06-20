import './App.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import OurServices from './components/OurServices.js';
import OurWork from './components/OurWork.js';
import Projects from './components/Projects.js';
import Clients from './components/Clients.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={[<Home />,<About />,<OurServices />,<OurWork />,<Projects />,<Clients />,<Footer />   ]} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

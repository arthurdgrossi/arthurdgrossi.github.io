import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
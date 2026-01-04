import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './components/layout/AppLayout';
import GlobalStyles from './styles/GlobalStyles';
import About from './pages/About';
import Branches from './pages/Branches';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <ScrollToTop /> */}
      <Routes>
        {/* The Layout wraps all these child routes */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

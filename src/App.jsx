import { Route, Routes } from 'react-router-dom';
import Home from './pages/Homescreen';
import Aboutus from './pages/Aboutscreen';
import MyNavbar from './component/Navbarcomp';
import ContactMe from './pages/Contact';
import Services from './pages/Sevice';
import Footer from './component/Footercomp.jsx';
const App = () => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

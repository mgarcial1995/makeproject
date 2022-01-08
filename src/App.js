import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Resources from "./Resources";
import Services from "./Services";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const routes = [
    { name: 'Home', url: '/' },
    { name: 'Servicios', url: '/services' },
    { name: 'Herramientas', url: '/resources' }
  ];
  return (
    <div className='App'>
      <Navbar routes={routes}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer routes={routes} />
    </div>
  );
}

export default App;

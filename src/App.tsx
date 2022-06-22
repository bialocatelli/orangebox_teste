import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './paginas/home/Home';


function App() {
  return (
   
    
      <Router>
        <Navbar />

        <div style={{ minHeight: '100vh' }}>

          <Routes>
            
            <Route path="/home" element={<Home />} />

            

          </Routes>

        </div>

        <Footer />
      </Router>
    
  );
}

export default App;

// import logo from './logo.svg';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/partials/Header/Header'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Shop from './components/pages/Shop/Shop'
import Footer from './components/partials/Footer/Footer'
import Grammar from './components/pages/Grammar/Grammar'
import Vocabulary from './components/pages/Vocabulary/Vocabulary'
import Tips from './components/pages/Tips/Tips'
import Questions from './components/pages/Questions/Questions'
import React from "react";

const App: React.FC = () => {
  return (
    <>

    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/grammar" element={<Grammar />}/>
        <Route path="/vocabulary" element={<Vocabulary />}/>
        <Route path="/tips" element={<Tips />}/>
        
        <Route path="/questions" element={<Questions/>}/>
    

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
      

    </div>
    </>
  );
}

export default App;

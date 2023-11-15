import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Home from './Home.js';
import Education from './components/Education'
import Projects from './components/Projects'

function App() {
  return (
    <>

        <Header />
        <Routes>
          
          <Route path='/' element={<Home />}/>
           <Route path="/education"element={<Education />}/>
          <Route path="/projects" element={<Projects />} />
           </Routes>

      
    </>
  );
}

export default App;

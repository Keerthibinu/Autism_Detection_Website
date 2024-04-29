import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import QuestionnaireMRI from './components/Quest';
import MyForm from './components/Form';
import Result from './components/result';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Form1" element={<MyForm />} />
        <Route exact path="/form" element={<QuestionnaireMRI/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Result" element={<Result/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

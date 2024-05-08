import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProjectView from './views/ProjectView';
import ContactView from './views/ContactView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={<HomeView/>} />
          <Route path='/projects' element={<ProjectView/>} />
          <Route path='/contact' element={<ContactView/>} />
      </Routes>
    </div>
  );
}

export default App;

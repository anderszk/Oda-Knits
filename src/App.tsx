import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProjectView from './views/ProjectView';
import ContactView from './views/ContactView';
import RootLayout from './layouts/RootLayout/RootLayout';
import ScrollToTop from './ScrollToTop';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <div className="App">
      <RootLayout>
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<HomeView/>} />
            <Route path='/projects' element={<ProjectView/>} />
            <Route path='/contact' element={<ContactView/>} />
            <Route path='*' element={<NotFoundView />} />
        </Routes>
      </RootLayout>
    </div>
  );
}

export default App;

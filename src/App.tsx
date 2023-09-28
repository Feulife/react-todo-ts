import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Todo } from "./pages/Todo";
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" Component={Todo}/>
        </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;

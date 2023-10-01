import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Todo } from "./pages/Todo/Todo";
import { About } from './pages/About/About';
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" Component={Todo}/>
          <Route path='/about' Component={About} />
        </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;

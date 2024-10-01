import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Premium1 from './pages/demo/Premium-1';
import Premium2 from './pages/demo/Premium-2';
import Premium4 from './pages/demo/Premium-4';
import Standard1 from './pages/demo/Standard-1';
import Standard2 from './pages/demo/Standard-2';
import Standard4 from './pages/demo/Standard-4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/premium-1" element={<Premium1 />} />
        <Route path="/demo/premium-2" element={<Premium2 />} />
        <Route path="/demo/premium-4" element={<Premium4 />} />
        <Route path="/demo/standard-1" element={<Standard1 />} />
        <Route path="/demo/standard-2" element={<Standard2 />} />
        <Route path="/demo/standard-4" element={<Standard4 />} />
      </Routes>
    </Router>
  );
}

export default App;

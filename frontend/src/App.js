import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Hero, ProductGrid, Footer } from './components';

const Home = () => {
  return (
    <div className="bottega-veneta-replica">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Deals from '/deals';  // Update with correct path if necessary
import ProductDetail from './components/ProductDetail';  // Update with correct path if necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Deals />} /> {/* Main page */}
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Product details page */}
      </Routes>
    </Router>
  );
};

export default App;

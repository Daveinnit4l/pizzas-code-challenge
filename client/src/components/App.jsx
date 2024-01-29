import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Restaurant from './Restaurant';
import Pizza from './Pizza';
import RestaurantPizza from './RestaurantPizza';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants/:id" element={<Restaurant />} exact />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/restaurant_pizzas" element={<RestaurantPizza />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/restaurants')
      .then((response) => response.json())
      .then(setRestaurants);
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-container">
          <div className="restaurant-info">
            <p>Restaurant: {restaurant.name}</p>
            <p>Address: {restaurant.address}</p>
          </div>
          <Link to={`/restaurants/${restaurant.id}`} className="restaurant-link">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;

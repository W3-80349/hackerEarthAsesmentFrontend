import React, { useState, useEffect } from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import './Home.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const userToken = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`https://hackerearthassesment.onrender.com/properties`, {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        });
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    if (userToken) {
      fetchProperties();
    }
  }, [userToken]);

  return (
    <div className="home-container">
        <Navbar/>
      <div className="property-list">
        {properties.map((property) => (
          property && (
            <PropertyCard
              key={property._id}
              property={property}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Home;

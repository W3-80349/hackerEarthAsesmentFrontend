// src/pages/AddProperty/AddProperty.js
import React, { useState, useEffect } from 'react';
import './AddProperty.css';
import axios from 'axios';

const AddProperty = () => {
  const [property, setProperty] = useState({
    houseNo: '',
    street: '',
    area: '',
    landmark: '',
    city: '',
    state: '',
    country: '',
    numberOfBedrooms: '',
    numberOfBathrooms: '',
    pincode: '',
    latitude: '',
    longitude: '',
    numberOfLikes: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      const {
        houseNo,
        street,
        area,
        city,
        state,
        country,
        numberOfBedrooms,
        numberOfBathrooms,
        pincode,
        latitude,
        longitude,
        numberOfLikes
      } = property;

      const isValid =
        houseNo &&
        street &&
        area &&
        city &&
        state &&
        country &&
        numberOfBedrooms &&
        numberOfBathrooms &&
        pincode &&
        latitude &&
        longitude &&
        numberOfLikes;

      setIsFormValid(isValid);
    };

    checkFormValidity();
  }, [property]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://hackerearthassesment.onrender.com/properties`, property, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      console.log('Property added successfully:', response.data);
      setProperty({
        houseNo: '',
        street: '',
        area: '',
        landmark: '',
        city: '',
        state: '',
        country: '',
        numberOfBedrooms: '',
        numberOfBathrooms: '',
        pincode: '',
        latitude: '',
        longitude: '',
        price: ''
      });
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  const handleClear = () => {
    setProperty({
      houseNo: '',
      street: '',
      area: '',
      landmark: '',
      city: '',
      state: '',
      country: '',
      numberOfBedrooms: '',
      numberOfBathrooms: '',
      pincode: '',
      latitude: '',
      longitude: '',
      price: ''
    });
  };

  return (
    <div className="add-property-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>House No:</label>
          <input type="text" name="houseNo" value={property.houseNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Street:</label>
          <input type="text" name="street" value={property.street} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Area:</label>
          <input type="text" name="area" value={property.area} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Landmark:</label>
          <input type="text" name="landmark" value={property.landmark} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" value={property.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input type="text" name="state" value={property.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input type="text" name="country" value={property.country} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of Bedrooms:</label>
          <input type="number" name="numberOfBedrooms" value={property.numberOfBedrooms} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of Bathrooms:</label>
          <input type="number" name="numberOfBathrooms" value={property.numberOfBathrooms} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input type="text" name="pincode" value={property.pincode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Latitude:</label>
          <input type="text" name="latitude" value={property.latitude} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Longitude:</label>
          <input type="text" name="longitude" value={property.longitude} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>price:</label>
          <input type="number" name="price" value={property.price} onChange={handleChange} required />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleClear}>Clear</button>
          <button type="submit" disabled={!isFormValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;

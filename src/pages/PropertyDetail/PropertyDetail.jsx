import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetail.css';
import axios from 'axios';
import Home from "../../assets/Home.jpeg"
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
;
const PropertyDetail = () => {
  const { id } = useParams();
const history = useHistory();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`https://hackerearthassesment.onrender.com/properties/${id}`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        setProperty(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);

  const handleInterest =  () => {
    console.log("clicked");
    history.push("/home")
        
  };

  if (!property) {
    return <p>Loading...</p>;
  }

  function intrest(){
    console.log("clicked");
    toast.info("Mail will be sent shortly!");
    axios.post(`https://hackerearthassesment.onrender.com/properties/intrest`, {
                propertyId: id,
              }, {
                headers: {
                  authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
              })
              .then(response=>{
                console.log(response);
              })
              .catch(err => {
                console.log(err);
              })
  }

  const notify = () =>{
    toast.success("Success Notification !", {
        position: "top-left"
      });
  }

  return (
    <div className="property-detail-container">
         <ToastContainer />
      <img src={Home} alt="Property" className="property-detail-image" />
      <div className="property-detail-info">
        <div className="heading-container" style={{
            display:'flex',
            alignItems:"center",
            justifyContent:"space-evenly"
        }}>
        <h2>Property Details</h2>
        <Button variant='outlined' onClick={intrest} >I'm Intrested</Button>
        </div>
        <br />
        <p><strong>House No:</strong> {property.houseNo}</p>
        <p><strong>Street:</strong> {property.street}</p>
        <p><strong>Area:</strong> {property.area}</p>
        <p><strong>Landmark:</strong> {property.landmark}</p>
        <p><strong>City:</strong> {property.city}</p>
        <p><strong>State:</strong> {property.state}</p>
        <p><strong>Country:</strong> {property.country}</p>
        <p><strong>Number of Bedrooms:</strong> {property.numberOfBedrooms}</p>
        <p><strong>Number of Bathrooms:</strong> {property.numberOfBathrooms}</p>
        <p><strong>Pincode:</strong> {property.pincode}</p>
        <p><strong>Latitude:</strong> {property.latitude}</p>
        <p><strong>Longitude:</strong> {property.longitude}</p>
        <p><strong>Number of Likes:</strong> {property.numberOfLikes}</p>
        <p><strong>Sold Out:</strong> {property.isSoldOut ? 'Yes' : 'No'}</p>
        <p><strong>Price:</strong> ${property.price?.toLocaleString()}</p> {/* Optional chaining */}
      </div>
    </div>
  );
};

export default PropertyDetail;

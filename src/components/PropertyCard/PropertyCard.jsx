import React from 'react';
import './PropertyCard.css';
import Home from "../../assets/Home.jpeg"
import { useHistory } from 'react-router-dom';

const PropertyCard = ({
    property,
}) => {
    const history = useHistory();
    const handleCardClick = () => {
        history.push(`/property/${property?._id}`); 
    };

    return (
        <div className="property-card" onClick={handleCardClick}>
            <img src={Home} alt="Property" className="property-image" />
            <div className="property-details">
                <h3>{`${property?.houseNo || ''}, ${property?.street || ''}, ${property?.area || ''}`}</h3>
                <p>{`${property?.city || ''}, ${property?.state || ''}, ${property?.country || ''}`}</p>
                <p className="property-price">{`Price: $${property?.price?.toLocaleString() || ''}`}</p> {/* Use optional chaining here */}
            </div>
        </div>
    );
};

export default PropertyCard;

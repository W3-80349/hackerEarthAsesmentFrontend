import React from 'react';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  const handleAddPropertyClick = () => {
    console.log('Add Property button clicked');
  };

  const handleLogout = () => {
    sessionStorage.clear();
    history.push('/');
  }

  return (
    <div className="navbar">
      <h1>Property Management</h1>
      <div>
        {sessionStorage.getItem("userType") === "seller" && (
          <Link to="/add-property">
            <button className="add-property-btn">Add Property</button>
          </Link>
        )}
        <button onClick={handleLogout} className="logout-btn" style={{ marginLeft: "20px" }}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

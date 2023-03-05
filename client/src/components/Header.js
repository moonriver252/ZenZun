import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ backgroundColor: '#3CBBB1', height: '100px' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 style={{ textAlign: 'center', lineHeight: '100px', color: 'white' }}>Header</h1>
      </Link>
    </div>
  );
};

export default Header;
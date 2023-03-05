import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const linkStyle = {
    padding: '20px',
    color: hovered || clicked ? 'black' : 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  }

  const handleHover = () => {
    setHovered(!hovered);
  }

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div style={{ backgroundColor: '#FF9F1C', height: '500px', display: 'flex', flexDirection: 'column' }}>
      <Link to="/register" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleClick}>
        회원가입
      </Link>
      <Link to="/login" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleClick}>
        로그인
      </Link>
      <Link to="/contact" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleClick}>
        마이페이지
      </Link>
      <Link to="/contact" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleClick}>
        게시판
      </Link>
    </div>
  );
};

export default Sidebar;
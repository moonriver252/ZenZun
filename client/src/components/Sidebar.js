import React from "react";
import { Link, useLocation  } from 'react-router-dom';
import styled, { css } from 'styled-components';

const LinkStyle = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: black;
    text-decoration: underline;
  }

  &:active {
    color: gray;
  }

  ${({ to }) => to === useLocation().pathname && css`
    color: black;
    text-decoration: underline;
  `}
`;

const Sidebar = () => {
  
  return (
    <div style={{ backgroundColor: '#FF9F1C', height: '500px', display: 'flex', flexDirection: 'column' }}>
      <LinkStyle to="/register">회원가입</LinkStyle>
      <LinkStyle to="/login">로그인</LinkStyle>
      <LinkStyle to="/mypage">마이페이지</LinkStyle>
      <LinkStyle to="/board">게시판2</LinkStyle>
    </div>
  );
};

export default Sidebar;
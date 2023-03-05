import React from "react";

const Header = () => {
  return (
    <header>
      <div style={{ backgroundColor: '##f0f', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2><a href={"/"}>배너 영역입니다.</a></h2>
      </div>
      
      
      {/* <a href={"/login"}>contact</a>
      <a href={"/register"}>register</a>
      <a href={"/about"}>about</a>
      <a href={"/page/2"}>page</a> */}
    </header>
  );
};

export default Header;
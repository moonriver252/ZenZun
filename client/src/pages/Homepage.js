import React from 'react';

function HomePage() {
  return (
    <div>
      
      {/* <div style={{ backgroundColor: '#f0f', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>배너 영역입니다.</h2>
      </div> */}

      
      <div style={{ display: 'flex', flexDirection: 'row', height: '500px' }}>
        <div style={{ width: '200px', backgroundColor: '##f0f' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '10px' }}><a href={"/register"}>회원가입</a></li>
            <li style={{ margin: '10px' }}><a href={"/login"}>로그인</a></li>
            <li style={{ margin: '10px' }}><a href={"/register"}>마이페이지</a></li>
            <li style={{ margin: '10px' }}><a href={"/register"}>회원탈퇴</a></li>
            <li style={{ margin: '10px' }}><a href={"/register"}>crud</a></li>
            <li style={{ margin: '10px' }}><a href={"/register"}>채팅</a></li>
            <li style={{ margin: '10px' }}><a href={"/register"}>심리테스트</a></li>
            <li style={{ margin: '10px' }}><a href={"/register"}>지도</a></li>
            <li style={{ margin: '10px' }}><a href={"/register"}>다마고치</a></li>
            <li style={{ margin: '10px' }}><a href={"/register"}>다크모드</a></li>
          </ul>
        </div>

        
        <div style={{ flex: 1, backgroundColor: '##f0f', padding: '20px' }}>
          <h2>메뉴 1 페이지입니다.</h2>
          <p>여기에는 메뉴 1에 대한 내용이 들어갑니다.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
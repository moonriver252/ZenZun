// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Mypage() {
//   const history = useNavigate();
//   const [userData, setUserData] = useState({});
//   const [profileImage, setProfileImage] = useState(null);

//   useEffect(() => {
//     // 서버에서 유저 정보 받아오기
//     axios
//       .get("/register")
//       .then((response) => {
//         setUserData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleImageChange = (event) => {
//     setProfileImage(event.target.files[0]);
//   };

//   const handleUpdate = () => {
//     const formData = new FormData();
//     formData.append("profile_image", profileImage);
//     formData.append("nickname", userData.nickname);
//     formData.append("password", userData.password);
//     formData.append("checkPassword", userData.password);

//     axios
//       .patch("/register", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         console.log(response);
//         setUserData(response.data);
//         setProfileImage(null);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleDelete = () => {
//     axios
//       .delete("/register")
//       .then((response) => {
//         console.log(response);
//         history.push("/"); // 탈퇴 후 로그인 페이지로 이동
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <div>
//         {/* <img src={userData.profile_image} alt="profile image" /> */}
//         <div>{userData.email}</div>
//         <div>{userData.nickname}</div>
//       </div>
//       <div>
//         <input type="file" onChange={handleImageChange} />
//         <button onClick={handleUpdate}>프로필 수정</button>
//         <button onClick={handleDelete}>회원 탈퇴</button>
//       </div>
//     </div>
//   );
// }

// export default Mypage;
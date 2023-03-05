import React, { useState } from "react";
import styled from "styled-components";

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4981c2;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #a3acbd;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, nickname, password, confirmPassword);
  };

  return (
    <RegisterWrapper>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button onClick={handleSubmit}>OK</Button>
    </RegisterWrapper>
  );
};

export default Register;
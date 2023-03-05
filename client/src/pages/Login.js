import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  background-color: #f3f3f3;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  background-color: #A3ACBD;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #7986CB;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

function Login() {
  return (
    <LoginWrapper>
      <FormWrapper>
        <Input type="text" placeholder="ID" />
        <Input type="password" placeholder="Password" />
        <Button>OK</Button>
      </FormWrapper>
      <SocialWrapper>
        <SocialButton color="#3b5998" hoverColor="#2f477a">
          Github
        </SocialButton>
        <SocialButton color="#ea4335" hoverColor="#c23328">
          Google
        </SocialButton>
        <SocialButton color="#f7d400" hoverColor="#cfb600">
          Kakao
        </SocialButton>
      </SocialWrapper>
      <div>
        <a href="/">PW 찾기</a>
      </div>
      <div>
        <a href="/register">회원가입</a>
      </div>
    </LoginWrapper>
  );
}

export default Login;
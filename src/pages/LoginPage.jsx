import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgLigther};
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  cursor: pointer;
`;

const More = styled.span`
  color: #ff0000;
  cursor: pointer;
`;
const Link = styled(Link)`
  text-decoration: none;
  color: #ff0000;
`;
function LoginPage() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>Sign in to your account</SubTitle>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
        <Title>OR</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign Up</Button>
        <More>
          ENglish(USA)
          <Link> Help</Link>
          <Link> Privacy</Link>
          <Link> Terms</Link>
        </More>
      </Wrapper>
    </Container>
  );
}

export default LoginPage;

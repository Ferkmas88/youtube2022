import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;

  padding: 10px;
  background-color: #3a3a3a;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
`;
const NewComment = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Input = styled.input`
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3a3a3a;
  color: #fff;
`;

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0" />
        <Input placeholder="Add a public comment..." />
      </NewComment>
    </Container>
  );
}

export default Comments;

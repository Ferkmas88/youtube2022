import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px;
`;
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Name = styled.div`
  display: flex;
  gap: 10px;
`;
const Date = styled.span`
  color: #777;
  font-weight: 400;
`;

const Text = styled.p`
  color: #777;
  font-weight: 400;
`;

function Comment() {
  return (
    <Container>
      <Avatar src="https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;

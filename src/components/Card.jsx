import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  flex-direction: ${(props) => props.type === "sm" && "row"};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

function Card({ type, video }) {
  // 👈🏽 Accept video as a prop
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          src=" https://media.istockphoto.com/id/1906799476/photo/aerial-view-winter-season-snow-town-xuexiang-with-chinese-lantern-overcast-weather-deep-snow.jpg?s=1024x1024&w=is&k=20&c=ZyzGvAl4WjdNmlBERLV4nxS6hrmL_IGiO4tUtF2u4ss="
          type={type}
        />
        <Details>
          <ChannelImage src="https://media.istockphoto.com/id/1659045579/photo/orange-glass-link-leadership-concept.jpg?s=1024x1024&w=is&k=20&c=vKpG-qmJgXGU8fuyFdeFvY9zt81M-p9RTuYA69M1XaE=" />
          <Texts>
            <Title>Title</Title>
            <ChannelName>Channel Name</ChannelName>
            <Info>2.3M views • 2 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;

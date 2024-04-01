import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  flex: 5;

  width: 100%;
  height: 100%;
`;
const VideoWrapper = styled.div``;
const Recomentation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;

  gap: 10px;
`;

const Hr = styled.hr`
  border: 1px solid #999;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s;
  &:hover {
    background-color: #ff3333;
  }
`;

const Recomantation = styled.div``;

const Channel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-top: 10px;
  margin-bottom: 10px;
`;

const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const Subscribe = styled.button`
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const ChannelDetail = styled.h2`
  font-size: 14px;

  margin: 9px 0px;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};

  margin: 9px 0px;
`;

const ChanelCounter = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const ChannelCounter = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Description = styled.h2`
  font-size: 14px;
`;

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7CqJlxBYj-M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>

        <Title>Test Video</Title>

        <Details>
          <Info>7.5M views • 1 year ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="channel-image.jpg" alt="Channel Image" />
            <ChannelDetail>Description of the channel</ChannelDetail>
            <ChannelName>Channel Name</ChannelName>
            <ChanelCounter>2.3M subscribers</ChanelCounter>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Donec at ligula in urna semper ultricies. Nulla
              facilisi. Donec at ligula in urna semper ultricies.
            </Description>

            <Title>Channel Name</Title>
            <Info>2.3M subscribers</Info>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Content>
      <Recomentation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recomentation>
    </Container>
  );
}

export default Video;

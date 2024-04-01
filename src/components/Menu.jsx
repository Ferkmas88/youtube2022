import React from "react";
import styled from "styled-components";
import Youtube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 2;
  font-family: Arial, sans-serif;
  font-size: 13px;
  background-color: ${({ theme }) => theme.bg};
  height: 100%;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 10px;
`;
const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: px;
  margin-bottom: 20px;
  font-size: 15px;
`;
const Img = styled.img`
  height: 40px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 10px 0px;
  &:hover {
    background-color: #282828;
  }
`;

const Hr = styled.hr`
  margin: 10px 0px;
  border: 1px solid ${({ theme }) => theme.textSoft};
`;

const Login = styled.div`
  display: flex;
`;
const LoginButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.soft};
  border: none;
  color: ${({ theme }) => theme.textSoft};
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  margin-left: 15px;
  align-items: center;
  gap: 10px;
  stickiness: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.bgLigther};
  }
`;

function Menu({ darkMode, setDarkMode }) {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Youtube} alt="youtube" />
            <h1>Youtube</h1>
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          <Item>
            <AccountCircleOutlinedIcon />
            Account
          </Item>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <LoginButton>Login to Youtube</LoginButton>
          </Link>
        </Login>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />

        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report history
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Menu;

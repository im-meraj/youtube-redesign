import styled from "styled-components"
import { Link } from "react-router-dom"
// import LogoImg from "../images/YouTube-White-Full-Color-Logo.png"
import LogoImg2 from "../images/MeTube_Logo.png"
import HomeIcon from "../images/HomeIcon-White.png"
import ExploreIcon from "../images/ExploreIcon2.png"
import SubscriptionsIcon from "../images/SubscriptionsIcon.png"
import LibraryIcon from "../images/library.png"
import HistoryIcon from "../images/history.png"
import MusicIcon from "../images/music.png"
import SportsIcon from "../images/sports.png"
import GamingIcon from "../images/gaming.png"
import MoviesIcon from "../images/action.png"
import NewsIcon from "../images/news.png"
import LiveIcon from "../images/live.png"
import SettingsIcon from "../images/settings.png"
import ReportIcon from "../images/report.png"
import HelpIcon from "../images/help24.png"
import LightModeIcon from "../images/moon.png"
import UserIcon from "../images/user.png"

const Container = styled.div`
position: sticky;
top: 0;
flex: 1;
background-color: ${({theme}) => theme.bgLighter};
height: 100vh;
color: ${({theme}) => theme.text};
@media (max-width: 768px) {
  display: none;
}
`

const Wrapper = styled.div`
${'' /* padding: 18px 26px; */}
padding: 0 26px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  padding: 0 20px;
`

const Img = styled.img`
  height: 20px;
  margin-bottom: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 3px;
  font-size: 16px;
  font-family: "Montserrat",monospace;
  font-weight: 500;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.soft};
  }
`

const Icon = styled.img`
  height: 24px;
`

const Hr = styled.hr`
  border: 0.5px solid ${({theme}) => theme.soft};
  margin: 15px 0;
`

const Login = styled.div``;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  color: #3ea6ff;
  font-size: 14px;
  font-family: "Montserrat",monospace;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #3ea6ff;
    color: white;
  }
`;

const UserIconImg = styled.img`
  height: 22px;
  margin-right: 10px;
`;

const SubText = styled.p`
  font-size: 14px;
  color: ${({theme}) => theme.text};
  font-family: "Montserrat",monospace;
  margin-bottom: 10px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
        <Logo>
          <Img src={LogoImg2} alt="Logo" />
        </Logo>
      </Link>
        <Item>
          <Icon src={HomeIcon} alt="Home" />
          Home
        </Item>

        <Item>
          <Icon src={ExploreIcon} alt="Explore" />
          Explore
        </Item>

        <Item>
          <Icon src={SubscriptionsIcon} alt="Subscriptions" />
          Subscriptions
        </Item>

        <Hr />

        <Item>
          <Icon src={LibraryIcon} alt="Library" />
          Library
        </Item>
        <Item>
          <Icon src={HistoryIcon} alt="History" />
          History
        </Item>

        <Hr />

        <Login>
          <SubText>
            Sign in to like videos, comment, and subscribe.
          </SubText>
          <LoginButton>
          <UserIconImg src={UserIcon} alt="User" />
           SIGN IN
          </LoginButton>
        </Login>

        <Hr />

        <SubText>
          Best of YouTube
        </SubText>
        <Item>
          <Icon src={MusicIcon} alt="Music" />
          Music
        </Item>
        <Item>
          <Icon src={SportsIcon} alt="Sports" />
          Sports
        </Item>
        <Item>
          <Icon src={GamingIcon} alt="Gaming" />
          Gaming
        </Item>
        <Item>
          <Icon src={MoviesIcon} alt="Movies" />
          Movies
        </Item>
        <Item>
          <Icon src={NewsIcon} alt="News" />
          News
        </Item>
        <Item>
          <Icon src={LiveIcon} alt="Live" />
          Live
        </Item>

        <Hr />

        <Item>
          <Icon src={SettingsIcon} alt="Settings" />
          Settings
        </Item>
        <Item>
          <Icon src={ReportIcon} alt="Report" />
          Report
        </Item>
        <Item>
          <Icon src={HelpIcon} alt="Help" />
          Help
        </Item>
        <Item>
          <Icon src={LightModeIcon} alt="Light Mode" />
          Light Mode
        </Item>
        
      </Wrapper>
    </Container>
  )
}

export default Menu
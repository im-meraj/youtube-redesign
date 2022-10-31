import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "../images/SearchIcon-white.png";
import GoLiveIcon from "../images/go_live.png";
import NotificationIcon from "../images/notifications2.png";
import AvatarImg from "../images/avatar.png";
import LogoImg2 from "../images/MeTube_Logo.png"

const Container = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 56px;
  z-index: 10;
  @media (max-width: 428px) {
    width: 100%;
  }
  `;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 20%;
  width: 30%;
  background-color: ${({ theme }) => theme.search};
  border-radius: 25px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  height: 40px;
  @media (max-width: 428px) {
    display: none;
  }
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 70px;
  background-color: ${({ theme }) => theme.searchIcon};
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.searchIconHover};
  }
  `

const SIcon = styled.img`
  height: 24px;
`;

const Input = styled.input`
font-size: 16px;
font-family: "Montserrat",monospace;
border: none;
background-color: transparent;
color: ${({ theme }) => theme.greyText};
width: 100%;
padding-left: 10px;
`;

const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 80px;
  &:nth-child(2) {
    display: none;
  }
  @media (max-width: 428px) {
    padding: 0 4px;
    width: 60%;
  }
`;

const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(2) {
    display: none;
  }
  @media (max-width: 428px) {
    &:nth-child(2) {
      display: block;
    }
  }
  `;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 36px;
  width: 50%;
  background-color: ${({ theme }) => theme.search};
  border-radius: 25px;
`;

const NavbarIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: 428px) {
    height: 22px;
  }
`;

const Avatar = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (max-width: 428px) {
    height: 28px;
    width: 28px;
  }
`;

//Logo
const Logo = styled.div`
  display: none;
  @media (max-width: 428px) {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 14px;
  }
`;

//LogoImg
const LogoImg = styled.img`
  height: 100%;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/">
            <Logo>
              <LogoImg src={LogoImg2} />
            </Logo>
          </Link>
          <Search>
            <Input type="text" placeholder="Search" />
            <IconDiv>
              <SIcon src={SearchIcon} alt="Search" />
            </IconDiv>
          </Search>
          <NavbarItems>
            <IconWrapper>
              <NavbarIcon src={GoLiveIcon} alt="Go Live" />
              <NavbarIcon src={NotificationIcon} alt="Notifications Icon" />
            </IconWrapper>
            <NavbarItem>
              <NavbarIcon style={{ height: "24px"}} src={SearchIcon} alt="Search Icon" />
            </NavbarItem>
            <NavbarItem>
              <Avatar src={AvatarImg} alt="Avatar" />
            </NavbarItem>
          </NavbarItems>
        </Wrapper>
      </Container>
    </>
  )
}

export default Navbar
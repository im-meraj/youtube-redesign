import styled from "styled-components"
import LogoImg from "../images/YouTube-White-Full-Color-Logo.png"
import HomeIcon from "../images/HomeIcon-White.png"
import ExploreIcon from "../images/ExploreIcon2.png"
import SubscriptionsIcon from "../images/SubscriptionsIcon.png"

const Container = styled.div`
position: sticky;
top: 0;
flex: 1;
background-color: ${({theme}) => theme.bgLighter};
height: 100vh;
color: ${({theme}) => theme.text};
`

const Wrapper = styled.div`
padding: 18px 26px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`

const Img = styled.img`
  height: 84px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0;
  font-size: 16px;
  font-family: monospace;
`

const Icon = styled.img`
  height: 24px;
`

const Hr = styled.hr`
  border: 0.5px solid ${({theme}) => theme.soft};
  margin: 15px 0;
`

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LogoImg} alt="Logo" />
        </Logo>
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
      </Wrapper>
    </Container>
  )
}

export default Menu
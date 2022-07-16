import styled from "styled-components";
import SearchIcon from "../images/SearchIcon-white.png";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  color: ${({theme}) => theme.text};
  height: 74px;
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
  left: 100px;
  width: 30%;
  background-color: ${({ theme }) => theme.search};
  border-radius: 25px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  height: 46px;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 70px;
  background-color: ${({ theme }) => theme.searchIcon};
  border-radius: 25px;
  cursor: pointer;
  `

const SIcon = styled.img`
  height: 24px;
`;

const Input = styled.input`
font-size: 16px;
font-family: monospace;
border: none;
background-color: transparent;
color: ${({ theme }) => theme.greyText};
width: 100%;
padding-left: 10px;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input type="text" placeholder="Search" />
            <IconDiv>
              <SIcon src={SearchIcon} alt="Search" />
            </IconDiv>
          </Search>
        </Wrapper>
      </Container>
    </>
  )
}

export default Navbar
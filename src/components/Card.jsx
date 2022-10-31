import styled from "styled-components"
import { Link } from "react-router-dom"


const Container = styled.div`
    width: 360px;
    height: 360px;
    margin-bottom: 45px;
    /* background-color: ${({ theme }) => theme.bgLighter}; */
    /* border-radius: 6px; */
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
    }
    @media (max-width: 768px) {
        width: 100%;
        transform: none !important;
        transition: none !important;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
    border-radius: 12px 12px 0 0;
    object-fit: cover;
    @media (max-width: 428px) {
        /* height: 150px; */
    }
`;

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
    padding: 12px;
    border-radius: 0 0 12px 12px;
    background-color: ${({ theme }) => theme.bgLighter};
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(50, 48, 62, 0.75);
    /* border-radius: 12px; */
    border: 1px solid rgba(255, 255, 255, 0.125);
    @media (max-width: 428px) {
        display: flex;
    }
`;

const ChannelImage = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background-color: #999;
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 12px;
    @media (max-width: 428px) {
        margin-left: 20;
    }
`;

const Title = styled.h1`
    font-size: 16px;
    font-family: "Montserrat",monospace;
    color: #fff;
    font-weight: 500;
    margin-bottom: 6px;
    @media (max-width: 428px) {
        font-size: 14px;
    }
`;

const ChannelName = styled.h2`
    font-size: 14px;
    font-family: "Montserrat", monospace;
    color: ${({ theme }) => theme.text};
    margin: 10px 0;
    font-weight: 500;
    @media (max-width: 428px) {
        font-size: 12px;
    }
`;

const Info = styled.p`
    font-size: 14px;
    @media (max-width: 428px) {
        font-size: 12px;

    }
`;

const Card = () => {
    return (
        <Link to="/video/test" style={{textDecoration: 'none', color: 'inherit'}}>
            <Container>
                <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />

                <Details>
                    <ChannelImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                    <Texts>
                        <Title>FORTNITE [New chapter]</Title>
                        <ChannelName>Meraj</ChannelName>
                        <Info>660,908 views • 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card
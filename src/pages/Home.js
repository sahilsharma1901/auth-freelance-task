import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media (max-width: 800px) {
        width: 85%;
    }

    @media (max-width: 500px) {
        width: 90%;
    }
`;

const WelcomeText = styled.h1`
    color: #ffffff;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 1000px) {
        font-size: 4rem;
    }

    @media (max-width: 800px) {
        font-size: 3rem;
    }

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`;

const LogoutButton = styled.button`
    background: none;
    outline: none;
    display: block;
    border: none;
    color: #ffffff;
    font-size: 1.25rem;
    letter-spacing: .3px;
    cursor: pointer;
    width: 50%;
    margin: 0 auto;
`;

const Home = ({handleLogout}) => {
    return (
        <Container>
            <Wrapper>
                <WelcomeText>Yay! You are logged in!</WelcomeText>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </Wrapper>
        </Container>
    );
}

export default Home;

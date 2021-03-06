import React from 'react';
import styled from 'styled-components/macro';
import { Link } from "react-router-dom";

import UserIconImage from "../assets/user.png";

const Container = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignupWrapper = styled.div`
    width: 35%;
    background: #ffffff;
    border-radius: .5rem;
    padding-top: 2rem;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.50);
    overflow: hidden;

    @media (max-width: 1300px) {
        width: 45%;
    }

    @media (max-width: 1000px) {
        width: 55%;
    }

    @media (max-width: 800px) {
        width: 75%;
    }

    @media (max-width: 500px) {
        width: 90%;
    }
`;

const SignupHeader = styled.div`
    width: 100%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const UserIcon = styled.img`
    vertical-align: middle;
    transform: scale(1.2);
    display: block;
    margin-bottom: 1.25rem;
`;

const SignupHeading = styled.h1`
    font-size: 2rem;
    letter-spacing: .3px;
`;

const SignupForm = styled.form`
    width: 70%;
    margin: 0 auto;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    background: #dadada;
    width: 100%;
    border: none;
    outline: none;
    padding: .75rem 1rem;
    margin: .5rem 0rem;
    border-radius: .5rem;
`;

const SignupButton = styled.button`
    display: block;
    margin-top: .75rem;
    width: 100%;
    background: #1877f2;
    border: none;
    outline: none;
    font-family: inherit;
    font-weight: 600;
    font-size: 1.25rem;
    color: #ffffff;
    padding: .75rem 0;
    border-radius: .5rem;
    cursor: pointer;
    opacity: .95;

    &:hover {
        opacity: 1;
    }
`;

const AuthSwitchContainer = styled.div`
    width: 100%;
    background: #dadada;
    padding: 1.5rem 0;
    display: grid;
    place-items: center;
`;

const AuthSwitchText = styled.p`
    font-size: 0.95rem;
    font-weight: 400;
`;

const AuthSwitchLink = styled(Link)`
    color: #1877f2;
    font-size: 0.95rem;
    text-decoration: none;
    padding-left: .5rem;
    font-weight: 600;
`;

const Signup = () => {
    return (
        <Container>
            <SignupWrapper>
                <SignupHeader>
                    <UserIcon src={UserIconImage} alt="User"/>
                    <SignupHeading>Sign Up</SignupHeading>
                </SignupHeader>
                <SignupForm>
                    <Input type="text" placeholder="Full Name" autoComplete="false"/>
                    <Input type="email" placeholder="E-mail" autoComplete="false"/>
                    <Input type="password" placeholder="Password" autoComplete="false"/>
                    <Input type="password" placeholder="Confirm Password" autoComplete="false"/>
                    <SignupButton>
                        Sign Up
                    </SignupButton>
                </SignupForm>
                <AuthSwitchContainer>
                    <AuthSwitchText>Already have an account?
                        <AuthSwitchLink to="/login">Sign in</AuthSwitchLink>
                    </AuthSwitchText>
                </AuthSwitchContainer>
            </SignupWrapper>
        </Container>
    );
}

export default Signup;

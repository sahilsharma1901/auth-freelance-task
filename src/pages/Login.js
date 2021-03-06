import React, {useState} from 'react';
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

const LoginWrapper = styled.div`
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

const LoginHeader = styled.div`
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

const LoginHeading = styled.h1`
    font-size: 2rem;
    letter-spacing: .3px;
`;

const LoginForm = styled.form`
    width: 70%;
    margin: 0 auto;
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

const ErrorMessage = styled.p`
    color: red;
    font-size: .9rem;
    font-weight: 600;
`;

const LoginButton = styled.button`
    display: block;
    margin-top: .75rem;
    width: 100%;
    background: #1877f2;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
    padding: .75rem 0;
    border-radius: .5rem;
    cursor: pointer;
    opacity: .95;

    &:hover {
        opacity: 1;
    }
`;

const MoreActionsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem auto 2.5rem auto;
`;

const RememberMe = styled.div`
    display: flex;
    align-items: center;
    flex: 0 0 45%;
`;

const RememberMeCheckbox = styled.input`
    display: inline-block;
    margin-right: .5rem;
    cursor: pointer;
`;

const RememberMeLabel = styled.label`
    font-size: .9rem;
    cursor: pointer;
    letter-spacing: .2px;
    font-weight: 400;
`;

const ForgotPasswordLink = styled.a`
    text-decoration: none;
    color: #1877f2;
    letter-spacing: .2px;
    font-weight: 400;
    font-size: .9rem;
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

const Login = ({authSuccess}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authorized, setAuthorized] = useState(true);

    const handleLoginClick = (user_email, user_password, e) => {
        e.preventDefault();
        if(user_email === "demo@demo.com" && user_password === "demo"){
            authSuccess();
        } else {
            setAuthorized(false);

            setTimeout(() => {
                setAuthorized(true);
            }, [2000]);
        }
    }
    return (
        <Container>
            <LoginWrapper>
                <LoginHeader>
                    <UserIcon src={UserIconImage} alt="User"/>
                    <LoginHeading>Sign In</LoginHeading>
                </LoginHeader>
                <LoginForm onSubmit={handleLoginClick.bind(null, email, password)}>
                    <Input type="email" placeholder="E-mail" autoComplete="false" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <Input type="password" placeholder="Password" autoComplete="false" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    {!authorized && <ErrorMessage>Wrong credentials!</ErrorMessage>}
                    <LoginButton onClick={handleLoginClick.bind(null, email, password)}>
                        Sign In
                    </LoginButton>
                    <MoreActionsContainer>
                        <RememberMe>
                            <RememberMeCheckbox type="checkbox" name="remember-me" id="rememberMe"/>
                            <RememberMeLabel htmlFor="rememberMe">Remember Me</RememberMeLabel>
                        </RememberMe>
                        <ForgotPasswordLink href="#">
                            Forgot Password ?
                        </ForgotPasswordLink>
                    </MoreActionsContainer>
                </LoginForm>
                <AuthSwitchContainer>
                    <AuthSwitchText>Don't have an account?
                        <AuthSwitchLink to="/signup">Register</AuthSwitchLink>
                    </AuthSwitchText>
                </AuthSwitchContainer>
            </LoginWrapper>
        </Container>
    );
}

export default Login;

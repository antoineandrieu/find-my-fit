import React from "react";

import styled, { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import SignInWelcomeComponent from "./SignInWelcomeComponent";

const StyledSignInWelcomeComponentStory = styled.div`
    height: 100vh;
    width: 50vh;
    margin: auto;
`;

export const SignInWelcomeComponentStory = () => (
    <ThemeProvider theme={Theme}>
        <StyledSignInWelcomeComponentStory>
            <SignInWelcomeComponent />
        </StyledSignInWelcomeComponentStory>
    </ThemeProvider>
);

export default {
    title: "Sign In Welcome",
    component: SignInWelcomeComponentStory,
};

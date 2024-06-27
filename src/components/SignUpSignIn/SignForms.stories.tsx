import React from "react";

import styled, { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import { SignInForm, SignUpForm } from "./SignForms";

const StyledSignFormsStory = styled.div`
    height: 100vh;
    width: 50vh;
    margin: auto;
`;

export const SignUpFormsStory = () => (
    <ThemeProvider theme={Theme}>
        <StyledSignFormsStory>
            <SignUpForm />
        </StyledSignFormsStory>
    </ThemeProvider>
);

export const SignInFormsStory = () => (
    <ThemeProvider theme={Theme}>
        <StyledSignFormsStory>
            <SignInForm />
        </StyledSignFormsStory>
    </ThemeProvider>
);

export default {
    title: "Sign In & Up Forms",
};

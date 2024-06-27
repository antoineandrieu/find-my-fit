import React from "react";

import styled, { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import SignUpAdvantageDescription from "./SignUpAdvantageDescription";

const StyledSignUpAdvantageDescriptionStory = styled.div`
    height: 100vh;
    width: 50vh;
    margin: auto;
`;

export const SignUpAdvantageDescriptionStory = () => (
    <ThemeProvider theme={Theme}>
        <StyledSignUpAdvantageDescriptionStory>
            <SignUpAdvantageDescription />
        </StyledSignUpAdvantageDescriptionStory>
    </ThemeProvider>
);

export default {
    title: "Sign Up Advantage Description",
    component: SignUpAdvantageDescriptionStory,
};

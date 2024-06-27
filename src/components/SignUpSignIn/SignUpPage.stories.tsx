import React from "react";

import { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import SignUpPage from "./SignUpPage";

export const SignUpPageStory = () => (
    <ThemeProvider theme={Theme}>
        <SignUpPage />
    </ThemeProvider>
);

export default {
    title: "Sign Up",
    component: SignUpPageStory,
};

import React from "react";

import { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import SignInPage from "./SignInPage";

export const SignInPageStory = () => (
    <ThemeProvider theme={Theme}>
        <SignInPage />
    </ThemeProvider>
);

export default {
    title: "Sign In",
    component: SignInPageStory,
};

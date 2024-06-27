import React from "react";

import { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import PasswordInput from "./PasswordInput";

export const PasswordInputStory = () => (
    <ThemeProvider theme={Theme}>
        <PasswordInput password={""} onChange={() => {}} />
    </ThemeProvider>
);

export default {
    title: "Password input",
    component: PasswordInputStory,
};

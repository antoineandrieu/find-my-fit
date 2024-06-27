import React from "react";

import { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import Separator from "./Separator";

export const SeparatorStory = () => (
    <ThemeProvider theme={Theme}>
        <Separator text={"or"} />
    </ThemeProvider>
);

export default {
    title: "Separator",
    component: Separator,
};

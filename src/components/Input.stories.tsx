import React from "react";
import Input from "./Input";
import { ThemeProvider } from "styled-components";

import Theme from "./Theme";

export const InputStory = () => (
    <ThemeProvider theme={Theme}>
        <Input
            placeholder="Placeholder"
            autoFocus={true}
            onChange={(e) => {
                return e.target.value;
            }}
        />
    </ThemeProvider>
);

export default {
    title: "Input",
    component: Input,
};

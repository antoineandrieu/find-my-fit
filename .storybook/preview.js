import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/shared/GlobalStyle";

addDecorator((story) => (
    <>
        <GlobalStyle />
        {story()}
    </>
));

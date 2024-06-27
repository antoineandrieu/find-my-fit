import React, { useContext } from "react";
import Button, { BackButton, TransparentButton } from "./Button";
import { ThemeProvider } from "styled-components";

import Theme from "./Theme";

import { I18nContext } from "../context/I18nContext";

export const ButtonStory = () => {
    const { i18n } = useContext(I18nContext);

    return (
        <ThemeProvider theme={Theme}>
            <Button text={i18n.buttonTextContinue} />
        </ThemeProvider>
    );
};

export const BackButtonStory = () => {
    return <BackButton />;
};

export const TransparentButtonStory = () => {
    const { i18n } = useContext(I18nContext);

    return <TransparentButton text={i18n.buttonTextContinue} />;
};

export default {
    title: "Button",
    component: Button,
};

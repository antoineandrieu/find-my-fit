import React, { useState } from "react";

import { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import CheckBox from "./CheckBox";
import Center from "../StyledComponents/StyledCenter";

export const PrivacyPageStory = () => {
    const [privacyChecked, setPrivacyChecked] = useState(false);

    return (
        <ThemeProvider theme={Theme}>
            <Center
                style={{
                    width: "200px",
                    height: "200px",
                }}
                onClick={() => setPrivacyChecked(!privacyChecked)}
            >
                <CheckBox checked={privacyChecked} />
            </Center>
        </ThemeProvider>
    );
};

export default {
    title: "Check box",
    component: CheckBox,
};

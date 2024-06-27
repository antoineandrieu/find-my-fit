import React, { useState } from "react";

import { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import DropDown from "./DropDown";
import { DropDownItem } from "../../Models";

export const DropDownStory = () => {
    const [itemSelected, setItemSelected] = useState({
        id: 1,
        text: "+31",
    });
    return (
        <ThemeProvider theme={Theme}>
            <DropDown
                title={itemSelected.text}
                callBack={(item: DropDownItem) => {
                    setItemSelected(item);
                }}
                items={[
                    {
                        id: 1,
                        text: "+31",
                    },
                    {
                        id: 2,
                        text: "+33",
                    },
                    {
                        id: 3,
                        text: "+358",
                    },
                    {
                        id: 4,
                        text: "+49",
                    },
                ]}
            />
        </ThemeProvider>
    );
};

export default {
    title: "DropDown",
    component: DropDown,
};

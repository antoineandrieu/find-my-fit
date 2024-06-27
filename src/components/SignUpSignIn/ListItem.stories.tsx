import React from "react";

import styled, { ThemeProvider } from "styled-components";

import Theme from "../Theme";

import ListItem from "./ListItem";

const StyledListItemStory = styled.div`
    background: #45b3bf;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
`;

export const ListItemStory = () => (
    <ThemeProvider theme={Theme}>
        <StyledListItemStory>
            <ListItem
                text={
                    "Personalised shopping experiences with all our brand partners "
                }
            />
            <ListItem text={"Rewards and exclusive offers"} />
            <ListItem text={"To make a positive impact on our planet"} />
        </StyledListItemStory>
    </ThemeProvider>
);

export default {
    title: "ListItem",
    component: ListItem,
};

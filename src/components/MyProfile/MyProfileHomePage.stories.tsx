import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Theme from '../Theme';

import MyProfileHomePage from './MyProfileHomePage';

const StyledMyProfileHomePageStory = styled.div``;

export const MyProfileHomePageStory = () => (
    <ThemeProvider theme={Theme}>
        <StyledMyProfileHomePageStory>
            <MyProfileHomePage />
        </StyledMyProfileHomePageStory>
    </ThemeProvider>
);

export default {
    title: 'My Profile',
    component: MyProfileHomePage,
};

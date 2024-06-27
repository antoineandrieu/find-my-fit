import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Theme from './Theme';

import PrivacyPage from './PrivacyPage';

const StyledWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
`;

const StyledPrivacyPage = styled.div`
    width: 100vmin;
    height: 70vmin;
    border: none;
    margin-top: 10vh;
`;

export const PrivacyPageStory = () => (
    <ThemeProvider theme={Theme}>
        <StyledWrapper>
            <StyledPrivacyPage>
                <PrivacyPage />
            </StyledPrivacyPage>
        </StyledWrapper>
    </ThemeProvider>
);

export default {
    title: 'PrivacyPage',
    component: PrivacyPage,
};

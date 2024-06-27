import React from 'react';

import { ThemeProvider } from 'styled-components';

import Theme from '../Theme';

import StyledSignWithHeader from './StyledHeaderWithcustomTopRight';
import Center from './StyledCenter';

export const StyledSignInWithHeaderStory = () => (
    <ThemeProvider theme={Theme}>
        <StyledSignWithHeader topRightBlock={<div>{'demo'}</div>}>
            <Center> Demo </Center>
        </StyledSignWithHeader>
    </ThemeProvider>
);

export default {
    title: 'Header',
};

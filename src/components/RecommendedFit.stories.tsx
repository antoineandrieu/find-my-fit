import React from 'react';

import RecommendedFit from './RecommendedFit';

import Theme from './Theme';
import { ThemeProvider } from 'styled-components';

export const RecommendedFitStory = () => (
    <ThemeProvider theme={Theme}>
        <RecommendedFit />
    </ThemeProvider>
);
export default {
    title: 'Recommended Fit',
    component: RecommendedFit,
};

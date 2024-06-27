import React, { useState } from 'react';

import Guidelines from './Guidelines';

export const GuidelinesStory = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <Guidelines instruction="Wrap the tape around your back, under your arms and over the fullest part of your bust" />
    );
};

export default {
    title: 'Guidelines',
    component: Guidelines,
};

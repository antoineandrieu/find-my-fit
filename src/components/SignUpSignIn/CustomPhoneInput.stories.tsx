import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Theme from '../Theme';

import CustomPhoneInput from './CustomPhoneInput';

export const CustomPhoneInputStory = () => {
    const [phone, setPhone] = useState('');
    return (
        <ThemeProvider theme={Theme}>
            <CustomPhoneInput phone={phone} onChange={setPhone} />
        </ThemeProvider>
    );
};

export default {
    title: 'Phone input',
    component: CustomPhoneInputStory,
};

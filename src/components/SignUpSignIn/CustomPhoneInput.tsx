import React, { FC, useState } from 'react';
import styled from 'styled-components';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const containerStyle = {
    display: 'flex',
    position: 'relative',
    'border-radius': '4px',
} as React.CSSProperties;

const inputStyle = {
    'box-shadow': 'inset 0px 0px 5px rgba(193, 197, 196, 0.14)',
    border: '1px solid #e9eff2',
    color: '#0b0b0f',
    padding: '7.7%',
    'padding-left': '65px',
    'padding-right': '4vw',
    outline: 'none',
    width: '100%',
    'font-size': '16px',
    'font-family': '"Inter", sans-serif',
} as React.CSSProperties;

const dropdownStyle = {
    'font-size': '14px',
    'font-family': '"Inter", sans-serif',
    'text-decoration': 'none',
    background: 'white',
    border: '1px solid #e9eff2',
} as React.CSSProperties;

const StyledPhoneInput = styled.div`
    .flag-dropdown {
        background: white;
        border: 1px solid #e9eff2;
        padding-right: 10px;
        padding-left: 10px;
    }
`;

interface PhoneInputProps {
    phone: string;
    onChange: (arg0: string) => void;
}

const CustomPhoneInput: FC<PhoneInputProps> = (props: PhoneInputProps) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <StyledPhoneInput>
            <PhoneInput
                containerStyle={containerStyle}
                inputStyle={inputStyle}
                dropdownStyle={dropdownStyle}
                country={'nl'}
                preferredCountries={['fr', 'gb', 'de']}
                value={phoneNumber}
                enableSearch={true}
                disableSearchIcon={true}
                countryCodeEditable={false}
                onChange={(phone) => {
                    setPhoneNumber('+' + phone);
                    props.onChange('+' + phone);
                }}
            />
        </StyledPhoneInput>
    );
};

export default CustomPhoneInput;

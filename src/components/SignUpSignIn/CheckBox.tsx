import React, { FC } from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
    checked: boolean;
    height?: string;
}

const StyledCheckBox = styled.div`
    cursor: pointer;
`;

export const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
    return (
        <StyledCheckBox
            style={{
                height: props.height,
            }}
        >
            {props.checked ? <CheckedBox /> : <EmptyCheckBox />}
        </StyledCheckBox>
    );
};

const EmptyCheckBox = () => (
    <svg
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.5"
            y="0.5"
            width="19"
            height="19"
            rx="3.5"
            fill="white"
            stroke="#0B0B0F"
        />
    </svg>
);

const CheckedBox = () => (
    <svg
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="20" height="20" rx="4" fill="#4AB7C3" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.85355 11.1464L13.5 6.5L14.2071 7.20711L8.85355 12.5607L6 9.70711L6.70711 9L8.85355 11.1464Z"
            fill="white"
        />
    </svg>
);

export default CheckBox;

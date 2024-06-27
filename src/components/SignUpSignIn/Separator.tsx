import styled from "styled-components";
import React from "react";

const StyledSeparator = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #adb5c3;
    }
`;

interface SeparatorProps {
    text: string;
}

const Separator = (props: SeparatorProps) => {
    return (
        <StyledSeparator>
            <SeparatorLine />
            <div>{props.text}</div>
            <SeparatorLine />
        </StyledSeparator>
    );
};

const SeparatorLine = () => (
    <div>
        <svg
            width="100%"
            height="1"
            viewBox="0 0 119 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="100%" height="1" fill="#ADB5C3" />
        </svg>
    </div>
);

export default Separator;

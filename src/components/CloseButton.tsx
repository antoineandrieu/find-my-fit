import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCloseButton = styled.div`
    width: 25%;
    height: auto;
`;

const CloseButton: FC<unknown> = () => (
    <StyledCloseButton>
        <div className="CloseButton">
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 4.90909L10.9091 0L12 1.09091L7.09091 6L12 10.9091L10.9091 12L6 7.09091L1.09091 12L0 10.9091L4.90909 6L0 1.09091L1.09091 0L6 4.90909Z"
                    fill="#0B0B0F"
                />
            </svg>
        </div>
    </StyledCloseButton>
);

export default CloseButton;

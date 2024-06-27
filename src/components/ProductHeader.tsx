import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { I18nContext } from '../context/I18nContext';

const ShoppingIconSvg = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7096 0.5L15.455 13.9168C15.501 14.7439 14.8677 15.4517 14.0405 15.4977C13.999 15.4996 13.9989 15.4996 13.9574 15.5H13.9574H13.9573H2.04297C1.21454 15.5 0.542969 14.8284 0.542969 14C0.543354 13.9584 0.543354 13.9584 0.545278 13.9168L1.29066 0.5H14.7096ZM2.70964 2L2.04297 14H13.9573L13.2907 2H2.70964ZM5.75015 3.5H4.25015V5.375C4.25015 7.17552 5.99258 8.75 8.00015 8.75C10.0077 8.75 11.7502 7.17552 11.7502 5.375V3.5H10.2502V5.375C10.2502 6.31128 9.2113 7.25 8.00015 7.25C6.78901 7.25 5.75015 6.31128 5.75015 5.375V3.5Z"
                fill="#00232D"
            />
        </svg>
    );
};

const StyledProductHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 767px) {
        font-size: 12px;
    }
`;

const StyledProductHeaderText = styled.div``;

const ProductHeader: FC<unknown> = () => {
    const { i18n } = useContext(I18nContext);

    return (
        <StyledProductHeader>
            <ShoppingIconSvg />
            <StyledProductHeaderText>
                {i18n.productHeaderTitle}
            </StyledProductHeaderText>
        </StyledProductHeader>
    );
};

export default ProductHeader;

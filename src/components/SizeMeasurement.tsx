import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import Center from './StyledComponents/StyledCenter';
import StyledHeaderAndFooter from './StyledComponents/StyledHeaderAndFooter';
import { Product } from './Product';
import SizeMeasurementContent from './SizeMeasurementContent';
import { UserContext } from '../context/UserContext';

const Middle = styled.div`
    @media only screen and (max-width: 599px) {
        .product-column {
            display: none;
        }
    }
    @media only screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: 20% 80%;
        .product-column {
            display: grid;
            border-right: 1px solid ${(props) => props.theme.borderColor};
        }
    }
`;

export const SizeMeasurement: FC<unknown> = () => {
    const userContext = useContext(UserContext);

    return (
        <StyledHeaderAndFooter showProduct={true}>
            <Middle>
                <div className="product-column">
                    <Product product={userContext.getCurrentProduct()} />
                </div>
                <Center>
                    <SizeMeasurementContent />
                </Center>
            </Middle>
        </StyledHeaderAndFooter>
    );
};

export default SizeMeasurement;

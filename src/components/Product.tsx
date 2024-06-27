import React, { FC } from 'react';
import styled from 'styled-components';

import { ProductModel } from '../Models';

const StyledProduct = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 70%;
    }

    .product-title {
        margin-top: 4vh;
        text-align: center;
        margin-left: 10%;
        margin-right: 10%;
        font-weight: 300;
        font-size: 0.8em;
        font-family: ${(props) => props.theme.fontFamily};
    }

    .product-price {
        font-size: 0.8em;
        margin-top: 1.5vh;
        color: #6a7984;
        font-weight: 300;
    }
`;

interface ProductProps {
    product: ProductModel;
}

export const Product: FC<ProductProps> = (props: ProductProps) => {
    const { product } = props;

    return (
        <StyledProduct>
            <img src={product.imgUrl} alt="Product Image" />
            <div className="product-title">{product.title}</div>
            <div className="product-price">{product.price}</div>
        </StyledProduct>
    );
};

const StyledSmallProduct = styled.div`
    height: 100%;
    display: flex;
    flex-direction: rows;
    justify-content: space-around;
    align-items: center;

    img {
        height: 5vh;
    }

    .product-image {
        margin-right: 2vw;
    }

    .product-price {
        color: #6a7984;
        font-weight: 200;
    }
`;

export const SmallProduct: FC<ProductProps> = (props: ProductProps) => {
    const { product } = props;

    return (
        <StyledSmallProduct>
            <div className="product-image">
                <img src={product.imgUrl} alt="" />
            </div>
            <div>
                <div>{product.title}</div>
                <div className="product-price">{product.price}</div>
            </div>
        </StyledSmallProduct>
    );
};
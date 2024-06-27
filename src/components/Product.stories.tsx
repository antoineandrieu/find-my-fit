import React from 'react';
import { Product } from './Product';
import { ThemeProvider } from 'styled-components';
import { ProductModel } from '../Models';

import Theme from './Theme';

const product = {
    imgUrl: '/imgs/product.svg',
    price: '$250',
    title: 'Badialy Art Blazer',
} as ProductModel;

export const ProductStory = () => (
    <ThemeProvider theme={Theme}>
        <Product product={product} />
    </ThemeProvider>
);

export default {
    title: 'Product',
    component: ProductStory,
};

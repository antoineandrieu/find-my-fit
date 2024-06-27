import React from 'react';
import { Sizes, ProductModel, UserModel } from '../Models';

type UserContextType = {
    setSizes: (sizes: Sizes) => void;
    getSizes: () => Sizes;
    setUnit: (unit: string) => void;
    getUnit: () => string;
    setCurrentProduct: (product: ProductModel) => void;
    getCurrentProduct: () => ProductModel;
    setCurrentUser: (user: UserModel) => void;
    getCurrentUser: () => UserModel;
    removeCurrentUser: () => void;
    setGender: (unit: string) => void;
    getGender: () => string;
};

export const UserContext = React.createContext<UserContextType>({
    setSizes: () => {},
    getSizes: () => ({} as Sizes),
    setUnit: () => {},
    getUnit: () => '',
    setCurrentProduct: () => {},
    getCurrentProduct: () => ({} as ProductModel),
    setCurrentUser: () => {},
    getCurrentUser: () => ({} as UserModel),
    removeCurrentUser: () => {},
    setGender: () => {},
    getGender: () => '',
});

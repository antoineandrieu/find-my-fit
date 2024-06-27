import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Theme from './Theme';
import { DEFAULT_LANGUAGE, I18nContext } from '../context/I18nContext';
import { Sizes, ProductModel, UserModel } from '../Models';
import { RouteContext } from '../context/RouteContext';
import { UserContext } from '../context/UserContext';

import i18n from '../context/I18n';
import SizeMeasurement from './SizeMeasurement';
import { GlobalStyle } from '../shared/GlobalStyle';

export const SizeMeasurementStory = () => {
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
    const [page, setPage] = useState('SizeMeasurement');
    const [lastPage, setLastPage] = useState('');
    const [sizes, setSizes] = useState({
        bustSize: 0,
        waistSize: 0,
        hipsSize: 0,
        thighSize: 0,
    } as Sizes);
    const [currentProduct, setProduct] = useState({
        imgUrl: '/imgs/product.svg',
        price: '$250',
        title: 'Badialy Art Blazer',
    } as ProductModel);
    const [unit, setUnit] = useState('');
    const [gender, setGender] = useState('');

    const [currentUser, setCurrentUser] = useState({} as UserModel);

    const [
        currentSizeMeasurementStep,
        setCurrentSizeMeasurementStep,
    ] = useState(0);

    const setPageWithHistory = (newPage: string) => {
        setLastPage(page);
        setPage(newPage);
    };

    return (
        <RouteContext.Provider
            value={{
                goBack: () => {
                    setPage(lastPage);
                },
                goToPrivacyPage: () => {
                    setPageWithHistory('Privacy');
                },
                goToAboutPage: () => {
                    setPageWithHistory('About');
                },
                goToSignUpPage: () => {
                    setPageWithHistory('SignUpPage');
                },
                goToSignInPage: () => {
                    setPageWithHistory('SignInPage');
                },
                goToRecommendedFitPage: () => {
                    setPageWithHistory('RecommendedFit');
                },
                goToSizeMeasurementPage: () => {
                    setPageWithHistory('SizeMeasurement');
                },
                getCurrentSizeMeasurementStep: () => {
                    return currentSizeMeasurementStep;
                },
                goToNextSizeMeasurementStep: () => {
                    if (currentSizeMeasurementStep < 3) {
                        setCurrentSizeMeasurementStep(
                            currentSizeMeasurementStep + 1,
                        );
                    } else {
                        setPageWithHistory('RecommendedFit');
                    }
                },
                goToFirstSizeMeasurementStep: () => {
                    setCurrentSizeMeasurementStep(0);
                    setPageWithHistory('SizeMeasurement');
                },
                goToPreviousSizeMeasurementStep: () => {
                    if (currentSizeMeasurementStep > 0) {
                        setCurrentSizeMeasurementStep(
                            currentSizeMeasurementStep - 1,
                        );
                    }
                },
                goToFullGuidePage: (specificGuide) => {
                    setPageWithHistory(specificGuide);
                },
                goToMyProfileHomePage: () => {
                    setPageWithHistory('MyProfileHomePage');
                },
            }}
        >
            <I18nContext.Provider
                value={{
                    i18n: i18n[language],
                    changeLanguage: (newLanguage) => {
                        setLanguage(newLanguage);
                    },
                }}
            >
                <UserContext.Provider
                    value={{
                        setSizes: (sizes) => {
                            setSizes(sizes);
                        },
                        setUnit: (unit) => {
                            setUnit(unit);
                        },
                        getUnit: () => {
                            return unit;
                        },
                        setGender: (gender) => {
                            setGender(gender);
                        },
                        getGender: () => {
                            return gender;
                        },
                        getSizes: () => {
                            return sizes;
                        },
                        setCurrentProduct: (currentProduct) => {
                            setProduct(currentProduct);
                        },
                        getCurrentProduct: () => {
                            return currentProduct;
                        },
                        getCurrentUser: () => {
                            return currentUser;
                        },
                        setCurrentUser: (user: UserModel) => {
                            setCurrentUser(user);
                        },
                        removeCurrentUser: () => {
                            setCurrentUser({} as UserModel);
                        },
                    }}
                >
                    <ThemeProvider theme={Theme}>
                        <GlobalStyle />
                        <div
                            style={{
                                width: '90%',
                                height: '50vh',
                            }}
                        >
                            <SizeMeasurement />
                        </div>
                    </ThemeProvider>
                </UserContext.Provider>
            </I18nContext.Provider>
        </RouteContext.Provider>
    );
};
export default {
    title: 'Size Measurement',
    component: SizeMeasurementStory,
};

import { Auth } from '@aws-amplify/auth';
import React, { FC, useEffect, useState, useContext } from 'react';
import { CircleSpinner } from 'react-spinners-kit';
import store from 'store';
import { ThemeProvider } from 'styled-components';

import MyProfileHomePage from './components/MyProfile/MyProfileHomePage';
import PrivacyPage from './components/PrivacyPage';
import AboutPage from './components/AboutPage';
import RecommendedFit from './components/RecommendedFit';
import SignInPage from './components/SignUpSignIn/SignInPage';
import SignUpPage from './components/SignUpSignIn/SignUpPage';
import SizeMeasurement from './components/SizeMeasurement';
import Center from './components/StyledComponents/StyledCenter';
import { StyledEmptyLayoutNoGrid } from './components/StyledComponents/StyledEmptyLayout';
import Theme from './components/Theme';
import i18n from './context/I18n';
import { DEFAULT_LANGUAGE, I18nContext } from './context/I18nContext';
import { IframeParentContext } from './context/IframeParentContext';
import { RouteContext } from './context/RouteContext';
import { TmpUserContext } from './context/TmpUserContext';
import { UserContext } from './context/UserContext';
import {
    CreateAnalyticResponse,
    ProductModel,
    Sizes,
    TmpUserModel,
    UserModel,
} from './Models';
import { GlobalStyle } from './shared/GlobalStyle';

const App: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
    const [page, setPage] = useState('');
    const [lastPage, setLastPage] = useState('');
    const [sizes, setSizes] = useState({
        bustSize: 0,
        waistSize: 0,
        hipsSize: 0,
        thighSize: 0,
        inseamSize: 0,
    } as Sizes);
    const [currentProduct, setProduct] = useState({
        imgUrl: '/imgs/product.svg',
        price: '$250',
        title: 'Badialy Art Blazer',
        id: '4490330603563',
        shopName: 'RHUMAA',
        gender: 'woman',
        color: 'grey',
        buttonBorderRadius: '0px',
        fontStyle: 'Lexend',
        mainButtonBorderColor: 'black',
        buttonColor: 'white',
        buttonTextColor: 'black',
        mainButtonBorder: 'none',
        mainBorderColor: 'grey',
        inputColor: 'black',
    } as ProductModel);
    const [unit, setUnit] = useState('centimetres');
    const [gender, setGender] = useState('woman');

    const [currentUser, setCurrentUser] = useState({} as UserModel);
    const [currentTmpUser, setCurrentTmpUser] = useState({} as TmpUserModel);

    const [currentSizeMeasurementStep, setCurrentSizeMeasurementStep] =
        useState(0);

    const setPageWithHistory = (newPage: string) => {
        setLastPage(page);
        setPage(newPage);
    };

    const msgHandler = (e: MessageEvent) => {
        switch (e.data.type) {
            case 'product':
                e.data.data.gender = 'woman';
                setProduct(e.data.data);
                if (e.data.data.shopUrl) {
                    localStorage.setItem('vendor', e.data.data.shopUrl);
                } else {
                    localStorage.setItem('vendor', e.origin);
                }
                if (e.data.data.locale) {
                    setLanguage(e.data.data.locale);
                } else {
                    setLanguage('en');
                }
                if (e.data.data.gender) {
                    setGender(e.data.data.gender);
                } else {
                    setGender('woman');
                }
                setIsLoading(false);

                break;
        }
    };
    window.addEventListener('message', msgHandler);

    useEffect(() => {
        const setupUser = async () => {
            try {
                await Auth.currentSession();
            } catch (error) {
                try {
                    await Auth.signIn(
                        process.env.REACT_APP_ANON_USERNAME || '',
                        process.env.REACT_APP_ANON_PASSWORD || '',
                    );
                } catch (error) {
                    console.log(error);
                }
            }
            try {
                const currentUserInfo = await Auth.currentUserInfo();
                if (currentUserInfo) {
                    const attrs = currentUserInfo.attributes;
                    if (
                        attrs.email &&
                        attrs.email !== process.env.REACT_APP_ANON_USERNAME
                    ) {
                        setCurrentUser({ username: attrs.email });
                    } else if (attrs.phone_number) {
                        setCurrentUser({ username: attrs.phone_number });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };
        setupUser();
    }, []);

    useEffect(() => {
        let indexPage = 'SizeMeasurement';
        if (store.get('unit')) {
            setUnit(store.get('unit'));
        } else {
            store.set('unit', unit);
        }
        if (store.get('measurements')) {
            const measurements = store.get('measurements');
            setSizes({
                bustSize: measurements.bust || 0,
                waistSize: measurements.waist || 0,
                hipsSize: measurements.hips || 0,
                thighSize: measurements.thigh || 0,
                inseamSize: measurements.inseam || 0,
            });
            if (Object.keys(measurements).length === 6) {
                indexPage = 'RecommendedFit';
            }
        }
        setPage(indexPage);
    }, [unit]);

    const pageRender = () => {
        if (isLoading) {
            return (
                <Center>
                    <CircleSpinner
                        size={50}
                        color={currentProduct.color}
                        loading={isLoading}
                    />
                </Center>
            );
        } else {
            switch (page) {
                case 'SizeMeasurement':
                    return <SizeMeasurement />;
                case 'RecommendedFit':
                    return <RecommendedFit />;
                case 'Privacy':
                    return <PrivacyPage />;
                case 'About':
                    return <AboutPage />;
                case 'SignUpPage':
                    return <SignUpPage />;
                case 'SignInPage':
                    return <SignInPage />;
                case 'MyProfileHomePage':
                    return currentUser.username && <MyProfileHomePage />;
                default:
                    break;
            }
        }
    };
    console.log('color', currentProduct.mainBorderColor);
    const theme = {
        ...Theme,
        mainColor: currentProduct.color,
        buttonRadius: currentProduct.buttonBorderRadius,
        fontFamily: currentProduct.fontStyle,
        mainButtonBorderColor: currentProduct.mainButtonBorderColor,
        buttonColor: currentProduct.buttonColor,
        buttonTextColor: currentProduct.buttonTextColor,
        buttonBorder: currentProduct.mainButtonBorder,
        borderColor: currentProduct.mainBorderColor,
        inputColor: currentProduct.inputColor,
    };
    return (
        <IframeParentContext.Provider
            value={{
                closeIframe: () => {
                    window.top.postMessage({ message: 'closeIframe' }, '*');
                },
                addToCart: (recommendation: CreateAnalyticResponse) => {
                    window.top.postMessage(
                        { message: 'addToCart', size: recommendation },
                        '*',
                    );
                },
                recommendedSize: (createAnalyticResponse) => {
                    window.top.postMessage(
                        {
                            message: 'recommendedSize',
                            size: createAnalyticResponse,
                        },
                        '*',
                    );
                },
            }}
        >
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
                        if (currentSizeMeasurementStep < 4) {
                            setCurrentSizeMeasurementStep(
                                currentSizeMeasurementStep + 1,
                            );
                        } else {
                            setPageWithHistory('RecommendedFit');
                        }
                    },
                    goToPreviousSizeMeasurementStep: () => {
                        if (currentSizeMeasurementStep > 0) {
                            setCurrentSizeMeasurementStep(
                                currentSizeMeasurementStep - 1,
                            );
                        }
                    },
                    goToFirstSizeMeasurementStep: () => {
                        setCurrentSizeMeasurementStep(0);
                        setPageWithHistory('SizeMeasurement');
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
                            getSizes: () => {
                                return sizes;
                            },
                            setGender: (gender) => {
                                setGender(gender);
                            },
                            getGender: () => {
                                return gender;
                            },
                            setCurrentProduct: (product: ProductModel) => {
                                setProduct(product);
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
                        <TmpUserContext.Provider
                            value={{
                                getCurrentTmpUser: () => {
                                    return currentTmpUser;
                                },
                                setCurrentTmpUser: (tmpUser: TmpUserModel) => {
                                    setCurrentTmpUser(tmpUser);
                                },
                            }}
                        >
                            <ThemeProvider theme={theme}>
                                <StyledEmptyLayoutNoGrid>
                                    <GlobalStyle />
                                    {pageRender()}
                                </StyledEmptyLayoutNoGrid>
                            </ThemeProvider>
                        </TmpUserContext.Provider>
                    </UserContext.Provider>
                </I18nContext.Provider>
            </RouteContext.Provider>
        </IframeParentContext.Provider>
    );
};

export default App;

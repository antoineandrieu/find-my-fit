import React from 'react';

type RouteContextType = {
    goBack: () => void;
    getCurrentSizeMeasurementStep: () => number;
    goToNextSizeMeasurementStep: () => void;
    goToPreviousSizeMeasurementStep: () => void;
    goToFirstSizeMeasurementStep: () => void;
    goToPrivacyPage: () => void;
    goToSignUpPage: () => void;
    goToSignInPage: () => void;
    goToSizeMeasurementPage: () => void;
    goToRecommendedFitPage: () => void;
    goToFullGuidePage: (specificGuide: string) => void;
    goToMyProfileHomePage: () => void;
    goToAboutPage: () => void;
};

export const RouteContext = React.createContext<RouteContextType>({
    goBack: () => {},
    getCurrentSizeMeasurementStep: () => ({} as number),
    goToNextSizeMeasurementStep: () => {},
    goToPreviousSizeMeasurementStep: () => {},
    goToFirstSizeMeasurementStep: () => {},
    goToPrivacyPage: () => {},
    goToSignUpPage: () => {},
    goToSignInPage: () => {},
    goToSizeMeasurementPage: () => {},
    goToRecommendedFitPage: () => {},
    goToFullGuidePage: (specificGuide: string) => {},
    goToMyProfileHomePage: () => {},
    goToAboutPage: () => {},
});

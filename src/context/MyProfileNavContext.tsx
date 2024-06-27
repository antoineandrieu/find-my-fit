import React from 'react';

type MyProfileNavContextType = {
    showMyMeasurement: () => void;
    showMyProfileSettings: () => void;
};

export const MyProfileNavContext = React.createContext<MyProfileNavContextType>(
    {
        showMyMeasurement: () => {},
        showMyProfileSettings: () => {},
    },
);

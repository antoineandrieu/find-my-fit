import React from 'react';

import { CreateAnalyticResponse } from '../Models';

type IframeParentContextType = {
    closeIframe: () => void;
    addToCart?: (recommendation: CreateAnalyticResponse) => void;
    recommendedSize?: (recommenddation: CreateAnalyticResponse) => void;
};

export const IframeParentContext = React.createContext<IframeParentContextType>(
    {
        closeIframe: () => {},
        addToCart: () => {},
        recommendedSize: () => {},
    },
);

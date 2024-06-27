import React from 'react';

import i18n from './I18n';

export const DEFAULT_LANGUAGE = 'de';

export const I18nContext = React.createContext({
    i18n: i18n[DEFAULT_LANGUAGE],
    changeLanguage: (language: string) => {},
});

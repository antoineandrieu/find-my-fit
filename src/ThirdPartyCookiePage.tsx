import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { StyledEmptyLayoutNoGrid } from './components/StyledComponents/StyledEmptyLayout';
import Theme from './components/Theme';
import i18n from './context/I18n';
import { DEFAULT_LANGUAGE, I18nContext } from './context/I18nContext';
import { IframeParentContext } from './context/IframeParentContext';
import { GlobalStyle } from './shared/GlobalStyle';
import ThirdPartyCookieScreen from './components/ThirdPartyCookieScreen';

const App: FC = () => {
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

    const msgHandler = (e: MessageEvent) => {
        switch (e.data.type) {
            case 'product':
                if (e.data.data.locale) {
                    setLanguage(e.data.data.locale);
                }
                break;
        }
    };
    window.addEventListener('message', msgHandler);

    return (
        <IframeParentContext.Provider
            value={{
                closeIframe: () => {
                    window.top.postMessage({ message: 'closeIframe' }, '*');
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
                <ThemeProvider theme={Theme}>
                    <StyledEmptyLayoutNoGrid>
                        <GlobalStyle />
                        <ThirdPartyCookieScreen />
                    </StyledEmptyLayoutNoGrid>
                </ThemeProvider>
            </I18nContext.Provider>
        </IframeParentContext.Provider>
    );
};

export default App;

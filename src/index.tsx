import { Auth } from '@aws-amplify/auth';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import awsconfig from './lib/aws-exports';
import ThirdPartyCookiePage from './ThirdPartyCookiePage';

try {
    // Check if third party cookies are enabled in the browser
    // @ts-ignore
    // eslint-disable-next-line
    const localStorage = global.localStorage;
    Auth.configure(awsconfig);
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root'),
    );
} catch (DOMException) {
    ReactDOM.render(
        <React.StrictMode>
            <ThirdPartyCookiePage />
        </React.StrictMode>,
        document.getElementById('root'),
    );
}

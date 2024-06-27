import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Inter", "Helvetica", "Arial", sans-serif;
    }

    p {
        font-weight: 300;
    } 

    h1 {
        font-weight: 500;
        margin: 0;
    }

    h2 {
        font-weight: 400;
        margin: 0;
    }

    input {
        font-size: inherit;
    }

    @media only screen and (max-width: 420px) {
        body {
            font-size: 12px;
        }

        h1 {
            font-size: 18px;
        }

        h2 {
            font-size: 16px;
        }

        h3 {
            font-size: 18px;
        }

        p {
            font-size: 14px;
        }
    }
    @media only screen and (min-width: 421px) and (max-width: 767px) {
        body {
            font-size: 14px;
        }

        h1 {
            font-size: 22px;
        }

	h2 {
            font-size: 20px;
        }

	h3 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        body {
            font-size: 16px;
        }

        h1 {
            font-size: 26px;
        }

        h2 {
            font-size: 24px;
        }

        h3 {
            font-size: 20px;
        }

        p {
            font-size: 18px;
        }
    }

    @media only screen and (min-width: 1024px) and (max-width: 1365px) {
        body {
            font-size: 18px;
        }

        h1 {
            font-size: 30px;
        }

	h2 {
            font-size: 28px;
        }

	h3 {
            font-size: 24px;
        }

        p {
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 1366px) {
        body {
            font-size: 20px;
        }

        h1 {
            font-size: 34px;
        }

        h2 {
            font-size: 32px;
        }

        h3 {
            font-size: 28px;
        }

        p {
            font-size: 22px;
        }
    }
`;

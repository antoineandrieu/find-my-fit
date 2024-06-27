import React, { FC, useContext } from 'react';

import styled from 'styled-components';
import Center from '../StyledComponents/StyledCenter';
import background from './background.svg';
import { I18nContext } from '../../context/I18nContext';

const StyledSignInWelcomeComponent = styled(Center)`
    background-image: url(${background});
    background-size: cover;

    > div {
        display: flex;
        flex-direction: column;
        padding: 0 10%;
        justify-content: space-evenly;
        color: #ffffff;
    }

    @media only screen and (max-width: 420px) {
        width: 90%;
        height: 90%;
        margin: auto;

        > div {
            height: 80%;
        }

        .signin-title {
            font-weight: 500;
            font-size: 18px;
        }

        .signin-text {
            font-weight: 400;
            font-size: 13px;
        }
    }

    @media only screen and (min-width: 421px) {
        > div {
            height: 40%;
        }

        .signin-title {
            font-weight: 600;
            font-size: 32px;
        }

        .signin-text {
            font-weight: 500;
            font-size: 20px;
        }
    }
`;

const SignInWelcomeComponent: FC<unknown> = () => {
    const { i18n } = useContext(I18nContext);

    return (
        <StyledSignInWelcomeComponent>
            <div>
                <h1 className="signin-title">
                    <div>{i18n.signInDescriptionTitle}</div>
                </h1>
                <div className="signin-text">{i18n.signInDescriptionText}</div>
            </div>
        </StyledSignInWelcomeComponent>
    );
};
export default SignInWelcomeComponent;

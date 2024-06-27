import React, { FC, useContext } from 'react';

import styled from 'styled-components';
import { I18nContext } from '../../context/I18nContext';
import Center from '../StyledComponents/StyledCenter';
import background from './background.svg';

const StyledSignUpAdvantageDescription = styled(Center)`
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

        .signup-title {
            font-weight: 500;
            font-size: 18px;
        }

        .signup-text {
            font-weight: 400;
            font-size: 13px;
        }
    }

    @media only screen and (min-width: 421px) {
        > div {
            height: 40%;
        }

        .signup-title {
            font-weight: 600;
            font-size: 32px;
        }

        .signup-text {
            font-weight: 500;
            font-size: 20px;
        }
    }
`;

const SignUpAdvantageDescription: FC<unknown> = () => {
    const { i18n } = useContext(I18nContext);

    return (
        <StyledSignUpAdvantageDescription>
            <div>
                <h1 className="signup-title">
                    {i18n.signUpAdvantageDescriptionTitle}
                </h1>
                <div className="signup-text">
                    {i18n.signUpAdvantageDescriptionText}
                </div>
            </div>
        </StyledSignUpAdvantageDescription>
    );
};
export default SignUpAdvantageDescription;

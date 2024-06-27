import React, { FC, useContext } from 'react';
import StyledHeaderWithcustomTopRight from '../StyledComponents/StyledHeaderWithcustomTopRight';

import styled from 'styled-components';
import SignUpAdvantageDescription from './SignUpAdvantageDescription';
import { SignUpForm } from './SignForms';
import StyledLink from '../StyledComponents/StyledLink';
import { RouteContext } from '../../context/RouteContext';
import { I18nContext } from '../../context/I18nContext';

const StyledSignUpContent = styled.div`
    display: grid;

    @media only screen and (max-width: 420px) {
        grid-template-rows: 25% 75%;
    }
    @media only screen and (min-width: 421px) {
        grid-template-columns: 50% 50%;
    }
`;

const SignUpPage: FC<unknown> = () => {
    const routeContext = useContext(RouteContext);

    const { i18n } = useContext(I18nContext);

    return (
        <StyledHeaderWithcustomTopRight
            topRightBlock={
                <div
                    className="signin-button"
                    onClick={routeContext.goToSignInPage}
                >
                    <div>{i18n.signUpLoginInvitation}</div>
                    <StyledLink>&nbsp;{i18n.signIn}</StyledLink>
                </div>
            }
        >
            <StyledSignUpContent>
                <SignUpAdvantageDescription />
                <SignUpForm />
            </StyledSignUpContent>
        </StyledHeaderWithcustomTopRight>
    );
};

export default SignUpPage;

import React, { FC, useContext } from 'react';
import StyledHeaderWithcustomTopRight from '../StyledComponents/StyledHeaderWithcustomTopRight';

import styled from 'styled-components';
import { SignInForm } from './SignForms';
import SignInWelcomeComponent from './SignInWelcomeComponent';
import { RouteContext } from '../../context/RouteContext';
import { I18nContext } from '../../context/I18nContext';
import StyledLink from '../StyledComponents/StyledLink';

const StyledSignUpContent = styled.div`
    display: grid;

    @media only screen and (max-width: 420px) {
        grid-template-rows: 25% 75%;
    }
    @media only screen and (min-width: 421px) {
        grid-template-columns: 50% 50%;
    }
`;

const SignInPage: FC<unknown> = () => {
    const routeContext = useContext(RouteContext);

    const { i18n } = useContext(I18nContext);
    return (
        <StyledHeaderWithcustomTopRight
            topRightBlock={
                <div
                    className="signin-button"
                    onClick={routeContext.goToSignUpPage}
                >
                    <StyledLink>{i18n.signInLoginUpInvitationPart1}</StyledLink>
                    <div>{i18n.signInLoginUpInvitationPart2}</div>
                </div>
            }
        >
            <StyledSignUpContent>
                <SignInWelcomeComponent />
                <SignInForm />
            </StyledSignUpContent>
        </StyledHeaderWithcustomTopRight>
    );
};

export default SignInPage;

import React, { FC, useContext } from 'react';

import styled from 'styled-components';
import { I18nContext } from '../context/I18nContext';
import { RouteContext } from '../context/RouteContext';
import StyledLink from './StyledComponents/StyledLink';

const StyledSignupButton = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2vw 0 2vw;
    cursor: pointer;
`;

const SignupButton: FC<unknown> = () => {
    const { i18n } = useContext(I18nContext);
    const routeContext = useContext(RouteContext);

    return (
        <StyledSignupButton onClick={routeContext.goToSignUpPage}>
            <StyledLink>{i18n.create}</StyledLink>
            {i18n.scirculaProfile}
        </StyledSignupButton>
    );
};

export default SignupButton;

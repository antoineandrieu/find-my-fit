import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { I18nContext } from '../context/I18nContext';
import { RouteContext } from '../context/RouteContext';

const StyledPrivacy = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2vw 0 2vw;
    cursor: pointer;
`;

const PrivacyButton: FC<unknown> = () => {
    const { i18n } = useContext(I18nContext);
    const routeContext = useContext(RouteContext);

    return (
        <StyledPrivacy onClick={routeContext.goToPrivacyPage}>
            {i18n.privacy}
        </StyledPrivacy>
    );
};

export default PrivacyButton;

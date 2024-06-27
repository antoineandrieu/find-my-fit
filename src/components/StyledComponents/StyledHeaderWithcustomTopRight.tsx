import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import Center from './StyledCenter';
import ScirculaLogo from '../ScirculaLogo';
import { StyledEmptyLayout } from './StyledEmptyLayout';
import BackArrowSVG from '../BackArrowSVG';
import { RouteContext } from '../../context/RouteContext';

const StyledEmptyLayoutNoFooter = styled(StyledEmptyLayout)`
    @media only screen and (max-width: 420px) {
        grid-template-rows: 7% 93%;
    }
    @media only screen and (min-width: 421px) {
        grid-template-rows: 10% 90%;
    }
`;

const CenterBorderRight = styled(Center)`
    border-right: 1px solid ${(props) => props.theme.borderColor};
`;

const BackButtonContainer = styled(CenterBorderRight)`
    cursor: pointer;
`;

const Header = styled(Center)`
    display: grid;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    > div {
        text-align: center;
    }
    .scircula-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .signin-button {
        display: flex;
        justify-content: center;
        cursor: pointer;
        height: 100%;
    }

    .signin-button > div {
        place-self: center center;
    }

    @media only screen and (max-width: 420px) {
        grid-template-columns: 15% 25% 60%;
        .scircula-logo {
            border-right: 1px solid ${(props) => props.theme.borderColor};
            svg {
                width: 18vmin;
            }
        }
    }
    @media only screen and (min-width: 421px) {
        grid-template-columns: 10% 55% 35%;
        .scircula-logo {
            margin-left: 25vw;
            border-right: 1px solid ${(props) => props.theme.borderColor};
            svg {
                width: 13vmin;
            }
        }
    }
`;

interface StyledSignWithHeaderProps {
    children: React.ReactNode;
    topRightBlock: React.ReactNode;
}

const StyledSignWithHeader: FC<StyledSignWithHeaderProps> = (
    props: StyledSignWithHeaderProps,
) => {
    const routeContext = useContext(RouteContext);

    return (
        <StyledEmptyLayoutNoFooter>
            <Header>
                <BackButtonContainer
                    onClick={routeContext.goToSizeMeasurementPage}
                >
                    <BackArrowSVG height={15} width={15} opacity={1} />
                </BackButtonContainer>
                <div className="scircula-logo">
                    <ScirculaLogo />
                </div>
                {props.topRightBlock}
            </Header>
            {props.children}
        </StyledEmptyLayoutNoFooter>
    );
};

export default StyledSignWithHeader;

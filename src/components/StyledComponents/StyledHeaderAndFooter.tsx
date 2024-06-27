import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { IframeParentContext } from '../../context/IframeParentContext';
import { UserContext } from '../../context/UserContext';
import AboutButton from '../AboutButton';
import ClientLogo from '../ClientLogo';
import CloseButton from '../CloseButton';
import PrivacyButton from '../PrivacyButton';
import { SmallProduct } from '../Product';
import ScirculaLogo from '../ScirculaLogo';
import Center from './StyledCenter';
import { StyledEmptyLayout } from './StyledEmptyLayout';

const CenterBorderRight = styled(Center)`
    border-right: 1px solid ${(props) => props.theme.borderColor};
    min-height: 0;
`;

const Header = styled(Center)`
    display: grid;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};

    .close-button {
        border-left: 1px solid ${(props) => props.theme.borderColor};
        cursor: pointer;
    }

    @media only screen and (max-width: 420px) {
        grid-template-columns: 35% 45% 20%;
    }
    @media only screen and (min-width: 421px) and (max-width: 767px) {
        grid-template-columns: 30% 55% 15%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: 20% 70% 10%;
    }

    @media only screen and (min-width: 1024px) {
        grid-template-columns: 20% 73% 7%;
    }

    @media only screen and (max-width: 599px) {
        .product {
            display: block;
        }
    }
    @media only screen and (min-width: 600px) {
        .product {
            display: none;
        }
    }
`;

const Footer = styled.div`
    border-top: 1px solid ${(props) => props.theme.borderColor};
    display: grid;
    .scircula-logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .privacy-container {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        align-items: center;
        > div {
            border-left: 1px solid ${(props) => props.theme.borderColor};
        }
    }
    @media only screen and (max-width: 420px) {
        grid-template-columns: 35% 65%;
        .scircula-logo {
            svg {
                width: 18vmin;
            }
        }
    }
    @media only screen and (min-width: 421px) {
        grid-template-columns: 20% 80%;
        .scircula-logo {
            border-right: 1px solid ${(props) => props.theme.borderColor};
            svg {
                width: 13vmin;
            }
        }
    }
    .username {
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2vw;
    }
`;

interface StyledHeaderAndFooterProps {
    children: React.ReactNode;
    showProduct: boolean;
}

const StyledHeaderAndFooter: FC<StyledHeaderAndFooterProps> = (
    props: StyledHeaderAndFooterProps,
) => {
    const iframeParent = useContext(IframeParentContext);
    const userContext = useContext(UserContext);

    return (
        <StyledEmptyLayout>
            <Header>
                <CenterBorderRight>
                    <ClientLogo
                        logoUrl={userContext.getCurrentProduct().logoUrl}
                        title={userContext.getCurrentProduct().shopName}
                    />
                </CenterBorderRight>
                <Center>
                    {props.showProduct && (
                        <div className="product">
                            <SmallProduct
                                product={userContext.getCurrentProduct()}
                            />
                        </div>
                    )}
                </Center>
                <Center
                    className="close-button"
                    onClick={iframeParent.closeIframe}
                >
                    <CloseButton />
                </Center>
            </Header>
            {props.children}
            <Footer>
                <div className="scircula-logo">
                    <ScirculaLogo />
                </div>
                <div className="privacy-container">
                    <PrivacyButton />
                    <AboutButton />
                    {/*{userContext.getCurrentUser().username ? (
                        <div
                            className="username"
                            onClick={routeContext.goToMyProfileHomePage}
                        >
                            {userContext.getCurrentUser().username}
                        </div>
                    ) : (
                        <SignupButton />
                    )}
                    */}
                </div>
            </Footer>
        </StyledEmptyLayout>
    );
};

export default StyledHeaderAndFooter;

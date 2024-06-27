import React, { FC, useContext } from 'react';

import styled from 'styled-components';
import CloseButton from './CloseButton';
import { I18nContext } from '../context/I18nContext';
import { RouteContext } from '../context/RouteContext';
import { UserContext } from '../context/UserContext';


const StyledAboutPage = styled.div<any>`
    background: ${(props) => props.theme.layoutBackgroundColor};
    height: 100%;
    display: grid;
    overflow: auto;
    .header {
        text-align: left;
        align-items: center;
        display: grid;
        grid-template-columns: 85% 15%;
    }

    .privacy-text {
        display: flex;
        flex-direction: column;
    }

    .tou-title {
        margin-top: 5vh;
    }

    .privacy-close-button {
        cursor: pointer;
    }
    ol {
        list-style-type: lower-latin;
    }
    @media only screen and (max-width: 420px) {
        grid-template-rows: 10% 90%;
        .header {
            grid-template-columns: 85% 15%;
            border-bottom: 1px solid ${(props) => props.theme.borderColor};

            .privacy-close-button {
                border-left: 1px solid ${(props) => props.theme.borderColor};

                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
        }
        .privacy-text {
            padding: 1vmin 3vmin;
        }

        .header > h1 {
            margin-left: 3vmin;
        }
    }
    @media only screen and (min-width: 421px) {
        grid-template-rows: 10% 90%;
        .header {
            grid-template-columns: 85% 15%;

            .privacy-close-button {
                border: 1px solid ${(props) => props.theme.borderColor};
                border-radius: 4px;
                width: 80%;
                height: 80%;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .header > h1 {
            margin-left: 15vmin;
        }
        .privacy-text {
            padding: 5vmin 15vmin;
            font: ${props => props.selectedFont};
        }
        .tou-text {
            padding: 5vmin 15vmin;
        }
    }
`;

export const AboutPage: FC = () => {
    const { i18n } = useContext(I18nContext);
    const routeContext = useContext(RouteContext);
    const userContext = useContext(UserContext);
    const selectedFont = (userContext.getCurrentProduct().fontStyle);

    return (
        <StyledAboutPage selectedFont={selectedFont}>
            <div className="header">
                <div></div>
                <div
                    className="privacy-close-button"
                    onClick={routeContext.goBack}
                >
                    <CloseButton />
                </div>
            </div>
            <div className="privacy-text">
                <h2 className="guide-question">{i18n.guideQuestion}</h2>
                <div className="guide-explanation">
                    <p>{i18n.guideLifeEasier}</p>
                    <p>{i18n.guideUnlike}</p>
                    <p>{i18n.guideData}</p>
                    <p>{i18n.guideApproach}</p>
                </div>
            </div>
        </StyledAboutPage>
    );
};

export default AboutPage;

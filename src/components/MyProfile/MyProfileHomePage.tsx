import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';

import StyledHeaderWithcustomTopRight from '../StyledComponents/StyledHeaderWithcustomTopRight';
import { MyProfileNavContext } from '../../context/MyProfileNavContext';
import { UserContext } from '../../context/UserContext';
import { RouteContext } from '../../context/RouteContext';
import MyMeasurements from './MyMeasurements';
import MyProfileNavigation from './MyProfileNavigation';
import MyProfileSettings from './MyProfileSettings';

const StyledSignUpContent = styled.div`
    .content {
        > button {
            height: 80px;
            width: 200px;
        }
    }

    @media only screen and (max-width: 548px) {
        display: flex;
        flex-direction: column-reverse;
        .menu {
            border-bottom: 1px solid ${(props) => props.theme.borderColor};
            height: 20%;
        }
    }
    @media only screen and (max-width: 722px) and (min-width: 549px) {
        display: grid;
        grid-template-columns: 35% 65%;
        .menu {
            border-right: 1px solid ${(props) => props.theme.borderColor};
        }
    }
    @media only screen and (min-width: 723px) {
        display: grid;
        grid-template-columns: 30% 70%;
        .menu {
            border-right: 1px solid ${(props) => props.theme.borderColor};
        }
    }
`;

const MyProfileHomePage: FC<unknown> = () => {
    const userContext = useContext(UserContext);
    const routeContext = useContext(RouteContext);

    const [content, setContent] = useState('MyMeasurements');

    const contentRender = () => {
        switch (content) {
            case 'MyMeasurements':
                return <MyMeasurements />;
            case 'MyProfileSettings':
                return <MyProfileSettings />;
            default:
                break;
        }
    };

    if (!userContext.getCurrentUser().username) {
        routeContext.goToSizeMeasurementPage();
    }
    return (
        <MyProfileNavContext.Provider
            value={{
                showMyMeasurement: () => {
                    setContent('MyMeasurements');
                },
                showMyProfileSettings: () => {
                    setContent('MyProfileSettings');
                },
            }}
        >
            <StyledHeaderWithcustomTopRight
                topRightBlock={
                    <div> {userContext.getCurrentUser().username} </div>
                }
            >
                <StyledSignUpContent>
                    <MyProfileNavigation />
                    {contentRender()}
                </StyledSignUpContent>
            </StyledHeaderWithcustomTopRight>
        </MyProfileNavContext.Provider>
    );
};

export default MyProfileHomePage;

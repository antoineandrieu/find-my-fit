import { Auth } from '@aws-amplify/auth';
import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';

import { MyProfileNavContext } from '../../context/MyProfileNavContext';
import { RouteContext } from '../../context/RouteContext';
import { UserContext } from '../../context/UserContext';
import { SignOut } from '../../lib/auth';

const StyledNavigationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-weight: 500;

    button {
	border: none;
	cursor: pointer;
	outline: none;
	font-weight: 500;
	font-size: 14px;
	padding 4% 6%;
	width: 80%;
	height: 40px;
	display: flex;
	align-items: center;
	margin-top : 5vh;
	background: white;
    }

    .button-selected {
        background-color: ${(props) => props.theme.buttonBackgroundColor};
	color: ${(props) => props.theme.buttonTextColor};
	box-shadow: 0px 10px 30px rgba(175, 203, 206, 0.55);
	border-radius: 4px;
	font-weight: 600;
    }

    button svg {
        margin-right: 5%;
    }

    @media only screen and (max-width: 723px) and (min-width: 465px){
        button {
            text-align: left;
            font-size: 12px;
        }
    }
`;

const MyProfileNavigation: FC<unknown> = () => {
    const userContext = useContext(UserContext);
    const routeContext = useContext(RouteContext);
    const myProfileNavContext = useContext(MyProfileNavContext);

    const [measurementsSelected, setMeasurementsSelected] = useState(true);
    const [profileSelected, setProfileSelected] = useState(false);
    const [logoutSelected, setLogoutSelected] = useState(false);

    if (!userContext.getCurrentUser().username) {
        routeContext.goToSizeMeasurementPage();
    }

    const measurementsClass =
        (measurementsSelected && 'button-selected') || 'button-unselected';
    const settingsClass =
        (profileSelected && 'button-selected') || 'button-unselected';
    const logoutClass =
        (logoutSelected && 'button-selected') || 'button-unselected';

    const measurementsFill = (measurementsSelected && 'white') || 'black';
    const settingsFill = (profileSelected && 'white') || 'black';
    const logoutFill = (logoutSelected && 'white') || 'black';

    return (
        <StyledNavigationContent className="menu">
            <button
                className={measurementsClass}
                onClick={() => {
                    myProfileNavContext.showMyMeasurement();
                    setMeasurementsSelected(true);
                    setProfileSelected(false);
                    setLogoutSelected(false);
                }}
            >
                <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill={measurementsFill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.25 8V2C17.25 1.17157 16.5784 0.5 15.75 0.5H2.25C1.42157 0.5 0.75 1.17157 0.75 2V8C0.75 8.82843 1.42157 9.5 2.25 9.5H15.75C16.5784 9.5 17.25 8.82843 17.25 8ZM2.25 2H3.75V4.25H5.25V2H6.75V5.75H8.25V2H9.75V4.25H11.25V2H12.75V5.75H14.25V2H15.75V8H2.25V2Z"
                    />
                </svg>
                My Measurements
            </button>
            <button
                className={settingsClass}
                onClick={() => {
                    myProfileNavContext.showMyProfileSettings();
                    setProfileSelected(true);
                    setMeasurementsSelected(false);
                    setLogoutSelected(false);
                }}
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill={settingsFill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25ZM14.5497 12.8433C15.3065 11.7526 15.75 10.4281 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 10.4282 2.69358 11.7529 3.45049 12.8437C4.29451 11.7286 6.27806 11.25 9.00024 11.25C11.7222 11.25 13.7056 11.7285 14.5497 12.8433ZM13.4737 14.0547C13.254 13.2654 11.6771 12.75 9.00024 12.75C6.32301 12.75 4.74602 13.2656 4.52668 14.055C5.71764 15.1097 7.28405 15.75 9 15.75C10.7161 15.75 12.2827 15.1096 13.4737 14.0547ZM9 4.5C7.18432 4.5 6 5.81682 6 7.5C6 10.0705 7.32065 11.25 9 11.25C10.6636 11.25 12 10.1097 12 7.65C12 5.94118 10.8106 4.5 9 4.5ZM7.5 7.5C7.5 9.20194 8.11366 9.75 9 9.75C9.88328 9.75 10.5 9.22379 10.5 7.65C10.5 6.71281 9.91174 6 9 6C8.0503 6 7.5 6.61187 7.5 7.5Z"
                    />
                </svg>
                Profile Settings
            </button>
            <button
                className={logoutClass}
                onClick={() => {
                    setLogoutSelected(true);
                    setProfileSelected(false);
                    setMeasurementsSelected(false);
                    SignOut()
                        .then(async () => {
                            userContext.removeCurrentUser();
                            try {
                                await Auth.signIn(
                                    process.env.REACT_APP_ANON_USERNAME || '',
                                    process.env.REACT_APP_ANON_PASSWORD || '',
                                );
                            } catch (error) {
                                console.log(error);
                            }
                            routeContext.goToSizeMeasurementPage();
                        })
                        .catch((e) => {
                            console.error(e);
                        });
                }}
            >
                <svg
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill={logoutFill}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0)">
                        <path
                            d="M16.24 9.44122C16.2435 9.43745 16.2435 9.43745 16.247 9.43368C16.2576 9.41861 16.2682 9.40731 16.2752 9.39223C16.2787 9.38846 16.2787 9.3847 16.2823 9.38093C16.2893 9.36585 16.2999 9.35078 16.3069 9.33571C16.3069 9.33194 16.3105 9.32817 16.3105 9.32817C16.3175 9.3131 16.3246 9.29802 16.3316 9.27918C16.3316 9.27541 16.3316 9.27541 16.3351 9.27164C16.3422 9.25657 16.3457 9.23773 16.3528 9.21889C16.3528 9.21512 16.3528 9.21135 16.3563 9.21135C16.3598 9.19251 16.3669 9.17743 16.3669 9.15859C16.3669 9.15106 16.3669 9.14729 16.3704 9.13975C16.3739 9.12468 16.3739 9.1096 16.3774 9.09453C16.3809 9.07192 16.3809 9.05308 16.3809 9.03047C16.3809 9.00786 16.3809 8.98902 16.3774 8.96641C16.3774 8.95133 16.3739 8.93626 16.3704 8.92118C16.3704 8.91365 16.3704 8.90988 16.3669 8.90234C16.3633 8.8835 16.3598 8.86843 16.3563 8.84958C16.3563 8.84582 16.3563 8.84205 16.3528 8.84205C16.3492 8.82321 16.3422 8.80813 16.3351 8.78929C16.3351 8.78552 16.3351 8.78552 16.3316 8.78175C16.3246 8.76668 16.3175 8.74784 16.3105 8.73277C16.3105 8.729 16.3069 8.72523 16.3069 8.72523C16.2999 8.71016 16.2928 8.69508 16.2823 8.68001C16.2787 8.67624 16.2787 8.67247 16.2752 8.6687C16.2646 8.65363 16.2576 8.63856 16.247 8.62725C16.2435 8.62348 16.2435 8.62348 16.24 8.61971C16.2259 8.60464 16.2153 8.5858 16.1977 8.57073L12.7117 4.84756C12.4756 4.59508 12.0914 4.59508 11.8552 4.84756C11.619 5.10005 11.619 5.5108 11.8552 5.76328L14.3084 8.38607H4.55547C4.22062 8.38607 3.94922 8.67624 3.94922 9.03047C3.94922 9.38846 4.22062 9.67863 4.55547 9.67863H14.3119L11.8763 12.2826C11.6402 12.5351 11.6402 12.9458 11.8763 13.1983C11.9927 13.3227 12.1477 13.3867 12.3028 13.3867C12.4579 13.3867 12.613 13.3227 12.7293 13.1983L16.1941 9.49398C16.2118 9.47137 16.2259 9.45629 16.24 9.44122V9.44122Z"
                            stroke="white"
                            strokeWidth="0.3"
                        />
                        <path
                            d="M3.6568 1.39412H8.48033C8.83833 1.39412 9.12849 1.11484 9.12849 0.773888C9.12849 0.429312 8.83833 0.150024 8.48033 0.150024H3.6568C1.72362 0.150024 0.148438 1.66616 0.148438 3.52687V14.5424C0.148438 16.4031 1.72362 17.9193 3.6568 17.9193H8.40119C8.75919 17.9193 9.04935 17.64 9.04935 17.299C9.04935 16.9544 8.75919 16.6752 8.40119 16.6752H3.6568C2.43585 16.6752 1.44099 15.7176 1.44099 14.5424V3.52687C1.44476 2.34806 2.43585 1.39412 3.6568 1.39412Z"
                            stroke="white"
                            strokeWidth="0.3"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="16.5326" height="18.0692" />
                        </clipPath>
                    </defs>
                </svg>
                Logout
            </button>
        </StyledNavigationContent>
    );
};

export default MyProfileNavigation;

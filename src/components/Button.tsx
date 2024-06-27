import React, { FC, useContext } from 'react';
import { UserContext } from '../context/UserContext';

import styled from 'styled-components';

/**********************************************
 ******************** Button ******************
 **********************************************/

interface ButtonProps {
    text: string;
    textColor?: string;
    onClick?: () => void;
}

const ButtonStyled = styled.button`
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.buttonTextColor};
    box-shadow: 0px 10px 30px rgba(175, 203, 206, 0.55);
    border-radius: ${(props) => props.theme.buttonRadius};
    border: ${(props) => props.theme.buttonBorder} ${(props) => props.theme.mainButtonBorderColor};
    cursor: pointer;
    outline: none;
    font-weight: 600;
    font-size: 12px;
    font-family: ${(props) => props.theme.fontFamily};
    padding 4% 6%;
    width: 100%;
    height: 100%;
    font-size: inherit;
`;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const userContext = useContext(UserContext);
    const selectedBorderRadius = (userContext.getCurrentProduct().buttonBorderRadius);
    const selectedBorderColor = (userContext.getCurrentProduct().mainButtonBorderColor);
    const selectedBorder = (userContext.getCurrentProduct().mainButtonBorder);


    console.log("color", selectedBorder);
    return <ButtonStyled onClick={props.onClick}> {props.text} </ButtonStyled>;
};

export default Button;

/**********************************************
 ************** TransparentButton *************
 **********************************************/

const StyledTransparentButton = styled.button`
    color: ${(props) => props.theme.buttonTextColor};
    padding: 5% 10%;
    border-radius: ${(props) => props.theme.buttonRadius};
    border: 1px solid #e9eff2;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    background: #ffffff;
    width: 100%;
    height: 100%;
`;

export const TransparentButton: FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <StyledTransparentButton
            style={{
                color: props.textColor,
            }}
            onClick={props.onClick}
        >
            {props.text}
        </StyledTransparentButton>
    );
};

/************************************************
 ************** SocialNetworkButton *************
 ************************************************/

interface SocialNetworkSignUpButtonProps {
    text?: string;
    textColor?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const StyledSocialNetworkSignUpButton = styled(StyledTransparentButton)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 3em;
    padding-right: 3em;
    font-size: inherit;
`;

export const SocialNetworkSignUpButton: FC<SocialNetworkSignUpButtonProps> = (
    props: SocialNetworkSignUpButtonProps,
) => {
    return (
        <StyledSocialNetworkSignUpButton
            style={{
                color: props.textColor,
            }}
            onClick={props.onClick}
        >
            {props.text || props.children}
        </StyledSocialNetworkSignUpButton>
    );
};

interface SocialNetworkProps {
    text: string;
}

export const FacebookSignButton: FC<SocialNetworkProps> = (
    props: SocialNetworkProps,
) => (
    <SocialNetworkSignUpButton textColor={'#3B5998'}>
        <FacebookSVG /> <div>{props.text}</div>
    </SocialNetworkSignUpButton>
);

export const GoogleSignButton: FC<SocialNetworkProps> = (
    props: SocialNetworkProps,
) => (
    <SocialNetworkSignUpButton textColor={'#EA4335'}>
        <GoogleSVG /> <div>{props.text}</div>
    </SocialNetworkSignUpButton>
);

const FacebookSVG = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 15 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.625 0.25C9.9375 0.25 10.2031 0.359375 10.4219 0.578125C10.6406 0.796875 10.75 1.0625 10.75 1.375V9.625C10.75 9.9375 10.6406 10.2031 10.4219 10.4219C10.2031 10.6406 9.9375 10.75 9.625 10.75H6.41406V7.1875H7.77344L8.03125 5.5H6.41406V4.39844C6.41406 3.80469 6.72656 3.50781 7.35156 3.50781H8.07812V2.07812C7.64062 2 7.21094 1.96094 6.78906 1.96094C6.33594 1.96094 5.94531 2.04688 5.61719 2.21875C5.30469 2.39062 5.05469 2.64844 4.86719 2.99219C4.67969 3.33594 4.58594 3.74219 4.58594 4.21094V5.5H3.10938V7.1875H4.58594V10.75H1.375C1.0625 10.75 0.796875 10.6406 0.578125 10.4219C0.359375 10.2031 0.25 9.9375 0.25 9.625V1.375C0.25 1.0625 0.359375 0.796875 0.578125 0.578125C0.796875 0.359375 1.0625 0.25 1.375 0.25H9.625Z"
            fill="#3B5998"
        />
    </svg>
);

const GoogleSVG = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11.7188 6.64062C11.7188 8.29688 11.1953 9.65625 10.1484 10.7188C9.11719 11.7812 7.76562 12.3125 6.09375 12.3125C4.48438 12.3125 3.10938 11.75 1.96875 10.625C0.84375 9.48438 0.28125 8.10938 0.28125 6.5C0.28125 4.89062 0.84375 3.52344 1.96875 2.39844C3.10938 1.25781 4.48438 0.6875 6.09375 0.6875C7.60938 0.6875 8.90625 1.19531 9.98438 2.21094L8.41406 3.73438C7.91406 3.25 7.3125 2.96875 6.60938 2.89062C5.92188 2.79688 5.27344 2.88281 4.66406 3.14844C4.07031 3.39844 3.55469 3.82812 3.11719 4.4375C2.69531 5.03125 2.48438 5.71875 2.48438 6.5C2.48438 7.51562 2.83594 8.38281 3.53906 9.10156C4.24219 9.82031 5.09375 10.1797 6.09375 10.1797C6.64062 10.1797 7.125 10.0938 7.54688 9.92188C7.98438 9.73438 8.32031 9.50781 8.55469 9.24219C8.80469 8.96094 8.99219 8.6875 9.11719 8.42188C9.25781 8.15625 9.35156 7.90625 9.39844 7.67188H6.09375V5.65625H11.625C11.6875 6 11.7188 6.32812 11.7188 6.64062Z"
            fill="#EA4335"
        />
    </svg>
);

/***************************************
 ************** BackButton *************
 ***************************************/

interface BackButtonProps {
    onClick?: () => void;
}
export const BackButton: FC<BackButtonProps> = (props: BackButtonProps) => {
    const userContext = useContext(UserContext);
    const selectedBorderRadius = (userContext.getCurrentProduct().buttonBorderRadius);
    return (
        <StyledTransparentButton
        onClick={props.onClick}>
            <BackArrow />
        </StyledTransparentButton>
    );
};

const BackArrow = () => {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.81077 7.75L8.53044 12.4697L7.46978 13.5303L0.939453 7L7.46978 0.469666L8.53044 1.53033L3.81077 6.25H14.7501V7.75H3.81077Z"
                fill="#0B0B0F"
            />
        </svg>
    );
};

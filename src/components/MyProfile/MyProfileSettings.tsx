import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../../context/UserContext';
import EmailModal from './EmailModal';
import PasswordModal from './PasswordModal';
import PhoneNumberModal from './PhoneNumberModal';

const StyledProfileSettings = styled.div`
    display: grid;
    grid-template-rows: 15% 85%;

    height: 100%;
    width: 100%;
    padding-left: 5%;

    h2 {
        color: #adb5c3;
        margin-bottom: 1%;
    }

    .modal-toggle {
        cursor: pointer;
        text-decoration: underline;
        color: #6a7984;
        margin-top: 2%;
    }
`;
const StyledProfileSettingsContent = styled.div`
    display: flex;
    flex-direction: column;

    .username {
        font-weight: 600;
        font-size: 20px;
    }

    .password {
        font-weight: 600;
        font-size: 20px;
    }
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    font-weight: 600;
`;

const StyledUsernameBlock = styled.div``;

const StyledPasswordBlock = styled.div`
    margin-top: 5%;
`;

const MyProfileSettings: FC<unknown> = () => {
    const { getCurrentUser } = useContext(UserContext);

    const [username, setUsername] = useState(getCurrentUser().username);
    const [isEmail, setIsEmail] = useState(true);

    const [isEmailShowing, setIsEmailShowing] = useState(false);
    const [isPasswordShowing, setIsPasswordShowing] = useState(false);
    const [isPhoneNumberShowing, setIsPhoneNumberShowing] = useState(false);

    const toggleEmail = () => {
        setIsEmailShowing(!isEmailShowing);
        setUsername(getCurrentUser().username);
    };

    const togglePassword = () => {
        setIsPasswordShowing(!isPasswordShowing);
    };

    const togglePhoneNumber = () => {
        setIsPhoneNumberShowing(!isPhoneNumberShowing);
        setUsername(getCurrentUser().username);
    };

    useEffect(() => {
        const isEmailTest = () => {
            const regex = /\S+@\S+\.\S+/;
            return regex.test(username);
        };
        setIsEmail(isEmailTest());
    }, [username]);

    const usernameBlock = (isEmail && (
        <StyledUsernameBlock>
            <h2>Email</h2>
            <div className="username">{username}</div>
            <div className="modal-toggle" onClick={toggleEmail}>
                Change email
            </div>
            <EmailModal isShowing={isEmailShowing} hide={toggleEmail} />
        </StyledUsernameBlock>
    )) || (
        <StyledUsernameBlock>
            <h2>Phone number</h2>
            <div className="username">{username}</div>
            <div className="modal-toggle" onClick={togglePhoneNumber}>
                Change phone number
            </div>
            <PhoneNumberModal
                isShowing={isPhoneNumberShowing}
                hide={togglePhoneNumber}
            />
        </StyledUsernameBlock>
    );

    return (
        <StyledProfileSettings>
            <StyledHeader>
                <h1>Profile Settings</h1>
            </StyledHeader>
            <StyledProfileSettingsContent>
                <div id="modal-root" />
                {usernameBlock}
                <StyledPasswordBlock>
                    <h2>Password</h2>
                    <div className="password">**********</div>
                    <div className="modal-toggle" onClick={togglePassword}>
                        Change password
                    </div>
                    <PasswordModal
                        isShowing={isPasswordShowing}
                        hide={togglePassword}
                    />
                </StyledPasswordBlock>
            </StyledProfileSettingsContent>
        </StyledProfileSettings>
    );
};

export default MyProfileSettings;

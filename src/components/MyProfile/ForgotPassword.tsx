import { Auth } from '@aws-amplify/auth';
import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { I18nContext } from '../../context/I18nContext';
import { UserContext } from '../../context/UserContext';
import Button from '../Button';
import CustomPhoneInput from '../SignUpSignIn/CustomPhoneInput';
import PasswordInput from '../SignUpSignIn/PasswordInput';
import Center from '../StyledComponents/StyledCenter';
import StyledLink from '../StyledComponents/StyledLink';

interface ForgotPasswordProps {
    isEmailUsername: boolean;
    isShowing: boolean;
    hide: () => void;
}

const Header = styled(Center)`
    display: grid;
    grid-template-columns: 90% 10%;
    margin-bottom: 5%;
    text-align: left;

    .close-button {
        margin-top: 50%;
        border: 1px solid ${(props) => props.theme.borderColor};
        border-radius: 4px;
        cursor: pointer;
    }
`;

const Content = styled.div`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }
`;

const ButtonStyled = styled.button`
    background-color: ${(props) => props.theme.buttonBackgroundColor};
    color: ${(props) => props.theme.buttonTextColor};
    box-shadow: 0px 10px 30px rgba(175, 203, 206, 0.55);
    border-radius: 4px;
    border: none;
    cursor: pointer;
    outline: none;
    font-weight: 600;
    font-size: 12px;
    padding: 4% 6%;
    width: 100%;
    font-size: inherit;
`;

const SuccessContent = styled.div`
    text-align: center;

    h1 {
        font-size: 24px;
    }

    p {
        font-size: 14px;
    }
`;

const ForgotPassword: FC<ForgotPasswordProps> = (
    props: ForgotPasswordProps,
) => {
    const { setCurrentUser } = useContext(UserContext);
    const { i18n } = useContext(I18nContext);

    const [isEmail, setIsEmail] = useState(true);
    const [step, setStep] = useState('inputUsername');
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setIsEmail(props.isEmailUsername);
    }, [props.isEmailUsername]);

    const sendCode = async () => {
        try {
            const codeSent = await Auth.forgotPassword(username);
            console.log(codeSent);
            setStep('inputCode');
        } catch (error) {
            setError(error.message);
        }
    };

    const verifyCode = async () => {
        try {
            await Auth.forgotPasswordSubmit(username, code, newPassword);
            await Auth.signIn(username, newPassword);
            setCurrentUser({ username });
            setStep('success');
        } catch (error) {
            setError(error);
        }
    };

    let content;
    let title = '';
    if (step === 'inputUsername') {
        title = 'Change password';
        content = (
            <>
                {isEmail}
                <div className="input-title">
                    {isEmail
                        ? 'Enter your email address'
                        : 'Enter your phone number'}
                </div>
                {isEmail ? (
                    <input
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setError('');
                        }}
                        type="email"
                    />
                ) : (
                    <CustomPhoneInput
                        phone={username}
                        onChange={(phone) => {
                            setUsername(phone);
                        }}
                    />
                )}

                <StyledLink
                    className="switch-email-phone"
                    onClick={() => {
                        setIsEmail(!isEmail);
                    }}
                >
                    {isEmail
                        ? i18n.signUpUsePhoneNumber
                        : i18n.signUpUseEmailAddress}
                </StyledLink>
                {error}
                <ButtonStyled onClick={sendCode}>Verify</ButtonStyled>
            </>
        );
    } else if (step === 'inputCode') {
        title = 'Create new password';
        content = (
            <>
                <div className="input-title">Enter the verification code</div>
                <input
                    className="input-code"
                    value={code}
                    onChange={(e) => {
                        setCode(e.target.value);
                    }}
                    type="number"
                />
                <div className="input-title">Enter new password</div>
                <PasswordInput
                    password={newPassword}
                    onChange={(e) => {
                        setNewPassword(e.target.value);
                        setError('');
                    }}
                />
                <div className="input-title">Confirm new password</div>
                <PasswordInput
                    password={newPasswordConfirm}
                    onChange={(e) => {
                        setNewPasswordConfirm(e.target.value);
                        setError('');
                    }}
                />
                {error}
                <ButtonStyled onClick={verifyCode}>Create</ButtonStyled>
            </>
        );
    } else if (step === 'success') {
        content = (
            <SuccessContent>
                <h1>You have successfully created a new password</h1>
                <p>Now you can return to your profile settings</p>
                <Button text="Back to My Profile" onClick={props.hide} />
            </SuccessContent>
        );
    }

    return (
        <>
            <Header>
                <h1>{title}</h1>
            </Header>
            <Content>{content}</Content>
        </>
    );
};

export default ForgotPassword;

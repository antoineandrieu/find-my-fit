import { Auth } from '@aws-amplify/auth';
import React, { FC, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { I18nContext } from '../../context/I18nContext';
import { UserContext } from '../../context/UserContext';
import Button from '../Button';
import CloseButton from '../CloseButton';
import StyledLink from '../StyledComponents/StyledLink';
import CustomPhoneInput from './CustomPhoneInput';
import PasswordInput from './PasswordInput';

interface ModalProps {
    isEmailUsername: boolean;
    isShowing: boolean;
    hide: () => void;
}

const StyledModal = styled.div`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1040;
        width: 100vw;
        height: 100vh;
        background-color: #000;
        opacity: 0.5;
    }

    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1050;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        outline: 0;
    }

    .modal {
        z-index: 100;
        background: white;
        position: relative;
        margin: 1.75rem auto;
        margin-top: 10%;
        border-radius: 3px;
        max-width: 500px;
        padding: 2rem;
    }

    @media only screen and (max-height: 599px) {
        .modal {
            margin-top: 1%;
        }
    }

    .close-button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        float: right;
        width: 40px;
        height: 40px;
        border: 1px solid ${(props) => props.theme.borderColor};
        border-radius: 4px;
        cursor: pointer;
    }
`;

const ModalContent = styled.div`
    width: 80%;
    margin: auto;
    margin-left: 10%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;

    .input-title {
        color: #0b0b0f;
        margin-bottom: 5%;
        margin-top: 5%;
    }

    input {
        background: #ffffff;
        border: 1px solid #e9eff2;
        box-shadow: inset 0px 0px 5px rgba(193, 197, 196, 0.14);
        border-radius: 4px;
        color: #0b0b0f;
        padding: 5%;
        padding-right: 4vw;
        outline: none;
    }

    .input-code {
        margin-bottom: 10%;
    }

    @media only screen and (max-height: 599px) {
        .input {
            margin-bottom: 2%;
        }

        .input-code {
            margin-bottom: 5%;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    button {
        margin-top: 10%;
    }

    .switch-email-phone {
        margin-top: 5%;
    }

    h1 {
        margin-bottom: 3vh;
        display: block;
    }
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

const ForgotPasswordModal: FC<ModalProps> = (props: ModalProps) => {
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

    let modalContent;
    if (step === 'inputUsername') {
        modalContent = (
            <>
                <h1>Forgot password?</h1>
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
                <Button text="Send verification code" onClick={sendCode} />
            </>
        );
    } else if (step === 'inputCode') {
        modalContent = (
            <>
                <h1>Create new password</h1>
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
                <Button text="Create" onClick={verifyCode} />
            </>
        );
    } else if (step === 'success') {
        modalContent = (
            <SuccessContent>
                <h1>You have successfully created a new password</h1>
                <p>Now you can return to your profile settings</p>
                <Button text="Back to My Profile" onClick={props.hide} />
            </SuccessContent>
        );
    }

    if (props.isShowing) {
        return ReactDOM.createPortal(
            <StyledModal>
                <div className="modal-overlay" />
                <div
                    className="modal-wrapper"
                    aria-modal
                    aria-hidden
                    tabIndex={-1}
                    role="dialog"
                >
                    <div className="modal">
                        <div className="close-button" onClick={props.hide}>
                            <CloseButton />
                        </div>
                        <ModalContent>{modalContent}</ModalContent>
                    </div>
                </div>
            </StyledModal>,
            document.body,
        );
    } else {
        return null;
    }
};

export default ForgotPasswordModal;

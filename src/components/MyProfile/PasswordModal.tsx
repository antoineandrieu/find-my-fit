import { Auth } from '@aws-amplify/auth';
import React, { FC, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { I18nContext } from '../../context/I18nContext';
import CloseButton from '../CloseButton';
import PasswordInput from '../SignUpSignIn/PasswordInput';
import ForgotPassword from './ForgotPassword';

interface ModalProps {
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

    @media only screen and (max-height: 599px) {
        .modal {
            margin-top: 1%;
        }
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
    }

    button {
        margin-top: 10%;
    }

    .forgot-password {
        text-decoration-line: underline;
        color: #6a7984;
        cursor: pointer;
        margin-top: 2%;
        margin-bottom: 10%;
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

const PasswordModal: FC<ModalProps> = (props: ModalProps) => {
    const { i18n } = useContext(I18nContext);

    const [step, setStep] = useState('inputPassword');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        setOldPassword('');
        setNewPassword('');
        setNewPasswordConfirm('');
        setPasswordError('');
        setStep('inputPassword');
    }, [props.isShowing]);

    const changePassword = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const passwordChanged = await Auth.changePassword(
                user,
                oldPassword,
                newPassword,
            );
            if (passwordChanged !== 'SUCCESS') {
                setPasswordError('An error ocurred');
            }
            setStep('success');
        } catch (error) {
            setPasswordError(error.message);
        }
    };
    const goToForgotPassword = () => {
        setStep('forgotPassword');
    };

    let modalContent;
    if (step === 'inputPassword') {
        modalContent = (
            <>
                <h1>Create new password</h1>
                <div className="modal-content">
                    <div className="input-title">Enter current password</div>
                    <PasswordInput
                        password={oldPassword}
                        onChange={(e) => {
                            setOldPassword(e.target.value);
                            setPasswordError('');
                        }}
                    />
                    <div
                        className="forgot-password"
                        onClick={goToForgotPassword}
                    >
                        {i18n.signInForgotPassword}
                    </div>
                    <div className="input-title">Enter new password</div>
                    <PasswordInput
                        password={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            setPasswordError('');
                        }}
                    />
                    <div className="input-title">Confirm new password</div>
                    <PasswordInput
                        password={newPasswordConfirm}
                        onChange={(e) => {
                            setNewPasswordConfirm(e.target.value);
                            setPasswordError('');
                        }}
                    />
                    {passwordError}
                    <ButtonStyled onClick={changePassword}>Create</ButtonStyled>
                </div>
            </>
        );
    } else if (step === 'success') {
        modalContent = (
            <SuccessContent>
                <h1>You have successfully changed your password</h1>
                <p>Now you can return to your profile settings</p>
                <ButtonStyled onClick={props.hide}>
                    Back to My Profile
                </ButtonStyled>
            </SuccessContent>
        );
    } else if (step === 'forgotPassword') {
        modalContent = (
            <ForgotPassword
                isEmailUsername={true}
                hide={props.hide}
                isShowing={props.isShowing}
            />
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

export default PasswordModal;

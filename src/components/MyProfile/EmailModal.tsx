import { Auth } from '@aws-amplify/auth';
import React, { FC, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { UserContext } from '../../context/UserContext';
import CloseButton from '../CloseButton';
import ResendCode from '../SignUpSignIn/ResendCode';

const ButtonStyled = styled.button`
    background-color: ${(props) => props.theme.buttonBackgroundColor};
    color: ${(props) => props.theme.buttonTextColor};
    box-shadow: 0px 10px 30px rgba(175, 203, 206, 0.55);
    border-radius: 4px;
    border:none;
    cursor: pointer;
    outline: none;
    font-weight: 600;
    font-size: 12px;
    padding 4% 6%;
    width: 100%;
    font-size: inherit;
`;

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
    margin-right: 10%;

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
        width: 80%;
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

    .error-block {
        color: #ea4335;
    }
`;

const EmailModal: FC<ModalProps> = (props: ModalProps) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [step, setStep] = useState('inputEmail');
    const [code, setCode] = useState('');

    const { setCurrentUser } = useContext(UserContext);

    useEffect(() => {
        setEmail('');
        setError('');
        setCode('');
        setStep('inputEmail');
    }, [props.isShowing]);

    const verifyAttribute = async () => {
        try {
            console.log(email);
            const user = await Auth.currentAuthenticatedUser();
            await Auth.updateUserAttributes(user, {
                email,
            });
            setStep('verify');
        } catch (error) {
            setError(error.message);
        }
    };

    const verifyAttributeSubmit = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const codeVerified = await Auth.verifyUserAttributeSubmit(
                user,
                'email',
                code,
            );
            console.log('Code ok');
            console.log(codeVerified);
            setCurrentUser({ username: email });
            setStep('success');
        } catch (error) {
            setError(error.message);
        }
    };

    let modalContent;
    if (step === 'inputEmail') {
        modalContent = (
            <>
                <h1>Change email</h1>
                <div className="modal-content">
                    <div className="input-title">Enter new email address</div>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                        }}
                        type="email"
                    />
                    <div className="error-block">{error}</div>
                    <ButtonStyled onClick={verifyAttribute}>
                        Change
                    </ButtonStyled>
                </div>
            </>
        );
    } else if (step === 'verify') {
        modalContent = (
            <>
                <h1>Change email</h1>
                <div className="input-title">Enter your verification code</div>
                <input
                    value={code}
                    onChange={(e) => {
                        setCode(e.target.value);
                    }}
                />
                <ResendCode username={email} callback={setError} />
                <div className="error-block">{error}</div>
                <ButtonStyled onClick={verifyAttributeSubmit}>
                    Verify
                </ButtonStyled>
            </>
        );
    } else if (step === 'success') {
        modalContent = (
            <div className="modal-content">
                <h1>You have successfully changed email</h1>
                <p>Now you can return to your profile settings</p>
                <ButtonStyled onClick={props.hide}>
                    Back to My Profile
                </ButtonStyled>
            </div>
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

export default EmailModal;

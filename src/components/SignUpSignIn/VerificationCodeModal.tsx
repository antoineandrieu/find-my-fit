import React, { FC, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Auth } from '@aws-amplify/auth';

import Button from '../Button';
import CloseButton from '../CloseButton';
import { UserContext } from '../../context/UserContext';
import ResendCode from './ResendCode';

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

    .error-block {
        color: #ea4335;
        text-align: center;
    }
`;

const VerificationCodeModal: FC<ModalProps> = (props: ModalProps) => {
    const { getCurrentUser } = useContext(UserContext);

    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const confirmSignUp = async () => {
        try {
            const signUpConfirmed = await Auth.confirmSignUp(
                getCurrentUser().username,
                code,
            );
            if (signUpConfirmed !== 'SUCCESS') {
                setError('An error ocurred');
            }
            props.hide();
        } catch (error) {
            setError(error.message);
        }
    };

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
                        <ModalContent>
                            <h1>Confirm your account</h1>
                            <div className="input-title">
                                Enter your verification code
                            </div>
                            <input
                                value={code}
                                onChange={(e) => {
                                    setCode(e.target.value);
                                }}
                            />
                            <ResendCode
                                username={getCurrentUser().username}
                                callback={setError}
                            />
                            <div className="error-block">{error}</div>
                            <Button text="Verify" onClick={confirmSignUp} />
                        </ModalContent>
                    </div>
                </div>
            </StyledModal>,
            document.body,
        );
    } else {
        return null;
    }
};

export default VerificationCodeModal;

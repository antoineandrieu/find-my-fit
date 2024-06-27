import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import store from 'store';

import Button from '../Button';
import CheckBox from './CheckBox';
import StyledLink from '../StyledComponents/StyledLink';
import PasswordInput from './PasswordInput';
import { I18nContext } from '../../context/I18nContext';
import CustomPhoneInput from './CustomPhoneInput';
import { SignIn, SignUp } from '../../lib/auth';
import { UserContext } from '../../context/UserContext';
import { TmpUserContext } from '../../context/TmpUserContext';
import { RouteContext } from '../../context/RouteContext';
import ForgotPasswordModal from './ForgotPasswordModal';
import VerificationCodeModal from './VerificationCodeModal';

const StyledSignForms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 96%;
    width: 75%;
    margin: auto;

    button {
        height: 10%;
    }

    .signup-title {
        font-weight: 500;
        color: #0b0b0f;
        padding-bottom: 0.2em;
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
`;

const StyledSignUpForm = styled(StyledSignForms)`
    .privacy-block {
        color: #6a7984;
        height: 8vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;

        .privacy-text {
            color: #6a7984;
            margin-left: 2vw;
        }
    }

    .switch-email-phone {
        text-align: right;
    }

    .error-block {
        color: #ea4335;
        text-align: center;
    }

    .password-error-block {
        color: #ea4335;
    }

    .link {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const SignUpForm: FC<unknown> = () => {
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const [isEmailSignUp, setIsEmailSignUp] = useState(true);

    const [login, setLogin] = useState('');

    const [password, setPassword] = useState('');
    const [error, setError] = useState(' ');
    const [passwordError, setPasswordError] = useState(false);
    const [privacyError, setPrivacyError] = useState('');

    const [isModalShowing, setIsModalShowing] = useState(false);

    const { i18n } = useContext(I18nContext);
    const { setCurrentUser } = useContext(UserContext);
    const { getCurrentTmpUser, setCurrentTmpUser } = useContext(TmpUserContext);
    const routeContext = useContext(RouteContext);

    const tmpUser = getCurrentTmpUser();

    useEffect(() => {
        setLogin(tmpUser.username);
        setPassword(tmpUser.password);
    }, [tmpUser]);

    const toggleModal = () => {
        setIsModalShowing(!isModalShowing);
    };

    const toggleModalAndSignin = () => {
        SignIn(login, password)
            .then(() => {
                routeContext.goToSizeMeasurementPage();
            })
            .catch((e) => {
                setCurrentUser({ username: '' });
                console.log(e);
            });
        toggleModal();
    };

    const passwordErrorBlock = passwordError && (
        <div className="password-error-block">
            Password must contains:
            <ul>
                <li>At least 1 upper case letter (A-Z)</li>
                <li>At least 1 number (0-9)</li>
                <li>At least 8 characters</li>
            </ul>
        </div>
    );

    return (
        <StyledSignUpForm>
            <h1 className="signup-title">{i18n.signUpTitle}</h1>
            <div>
                {isEmailSignUp
                    ? i18n.signUpEmailAdress
                    : i18n.signUpPhoneNumber}
            </div>
            {isEmailSignUp ? (
                <input
                    value={login}
                    onChange={(e) => {
                        setError('');
                        setLogin(e.target.value);
                        setCurrentTmpUser({
                            username: e.target.value,
                            password,
                        });
                    }}
                    type="email"
                />
            ) : (
                <CustomPhoneInput
                    phone={login}
                    onChange={(phone) => {
                        setLogin(phone);
                        setCurrentTmpUser({
                            username: phone,
                            password,
                        });
                    }}
                />
            )}
            <StyledLink
                className="switch-email-phone"
                onClick={() => {
                    setIsEmailSignUp(!isEmailSignUp);
                }}
            >
                {isEmailSignUp
                    ? i18n.signUpUsePhoneNumber
                    : i18n.signUpUseEmailAddress}
            </StyledLink>
            <div>{i18n.signUpCreatePassword}</div>
            <PasswordInput
                password={password}
                onChange={(e) => {
                    setPasswordError(false);
                    setPassword(e.target.value);
                    setCurrentTmpUser({
                        username: login,
                        password: e.target.value,
                    });
                }}
            />
            <div className="error-block"> {error} </div>
            {passwordErrorBlock}

            <div className="privacy-block">
                <div
                    className="privacy-check-box"
                    onClick={() => {
                        setPrivacyChecked(!privacyChecked);
                        setPrivacyError('');
                    }}
                >
                    <CheckBox height={'2em'} checked={privacyChecked} />
                </div>
                <div className={'privacy-text'}>
                    {i18n.signUpPolicyAccept}&nbsp;
                    <span
                        className="link"
                        onClick={routeContext.goToPrivacyPage}
                    >
                        {i18n.termsOfUse}
                    </span>
                    &nbsp;{i18n.andAcknowledging}&nbsp;
                    <span
                        className="link"
                        onClick={routeContext.goToPrivacyPage}
                    >
                        {i18n.privacyPolicy}
                    </span>
                </div>
            </div>
            <div className="error-block"> {privacyError} </div>
            <Button
                text={i18n.signUpValidationButton}
                onClick={() => {
                    if (privacyChecked) {
                        SignUp(login, password, isEmailSignUp)
                            .then(() => {
                                setError('');
                                setCurrentUser({ username: login });
                                toggleModal();
                            })
                            .catch((e) => {
                                if (e.code) {
                                    if (
                                        e.message
                                            .toLowerCase()
                                            .includes('password')
                                    ) {
                                        setPasswordError(true);
                                    } else {
                                        setError(e.message);
                                    }
                                } else if (
                                    e
                                        .toString()
                                        .toLowerCase()
                                        .includes('username')
                                ) {
                                    setError(
                                        'Email or Phone number cannot be empty',
                                    );
                                } else {
                                    setError(e.toString().split(':')[1]);
                                }
                            });
                    } else {
                        setPrivacyError(i18n.errorPrivacyNotChecked);
                    }
                }}
            />
            <VerificationCodeModal
                isShowing={isModalShowing}
                hide={toggleModalAndSignin}
            />
        </StyledSignUpForm>
    );
};

const StyledSignInForm = styled(StyledSignForms)`
    .forgot-password {
        text-decoration-line: underline;
        color: #6a7984;
        cursor: pointer;
    }
    .switch-email-phone {
        text-align: right;
    }
    .error-block {
        color: red;
        text-align: center;
    }
`;

export const SignInForm: FC<unknown> = () => {
    const [isEmailSignUp, setIsEmailSignUp] = useState(true);

    const [isModalShowing, setIsModalShowing] = useState(false);

    const { i18n } = useContext(I18nContext);
    const { getCurrentUser, setCurrentUser } = useContext(UserContext);
    const { getCurrentTmpUser, setCurrentTmpUser } = useContext(TmpUserContext);
    const routeContext = useContext(RouteContext);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(' ');

    useEffect(() => {
        const tmpUser = getCurrentTmpUser();
        setLogin(tmpUser.username);
        setPassword(tmpUser.password);
    }, [getCurrentTmpUser]);

    const toggleModal = () => {
        setIsModalShowing(!isModalShowing);
    };

    const toggleModalAndComeBack = () => {
        setIsModalShowing(!isModalShowing);
        const currentUser = getCurrentUser();

        if (Object.keys(currentUser).length !== 0) {
            if (store.get('measurements')) {
                routeContext.goToSizeMeasurementPage();
            } else {
                routeContext.goToMyProfileHomePage();
            }
        }
    };

    return (
        <StyledSignInForm>
            <h1 className="signup-title">{i18n.signInTitle}</h1>
            <div>
                {isEmailSignUp
                    ? i18n.signUpEmailAdress
                    : i18n.signUpPhoneNumber}
            </div>
            {isEmailSignUp ? (
                <input
                    value={login}
                    onChange={(e) => {
                        setError('');
                        setLogin(e.target.value);
                        setCurrentTmpUser({
                            username: e.target.value,
                            password,
                        });
                    }}
                    type="email"
                />
            ) : (
                <CustomPhoneInput
                    phone={login}
                    onChange={(phone) => {
                        setError('');
                        setLogin(phone);
                        setCurrentTmpUser({
                            username: phone,
                            password,
                        });
                    }}
                />
            )}
            <StyledLink
                className="switch-email-phone"
                onClick={() => {
                    setIsEmailSignUp(!isEmailSignUp);
                }}
            >
                {isEmailSignUp
                    ? i18n.signUpUsePhoneNumber
                    : i18n.signUpUseEmailAddress}
            </StyledLink>
            <div>{i18n.signInEnterPassword}</div>
            <PasswordInput
                password={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setCurrentTmpUser({
                        username: login,
                        password: e.target.value,
                    });
                }}
            />
            <div className="forgot-password" onClick={toggleModal}>
                {i18n.signInForgotPassword}
            </div>
            <ForgotPasswordModal
                isShowing={isModalShowing}
                hide={toggleModalAndComeBack}
                isEmailUsername={isEmailSignUp}
            />
            <div className="error-block"> {error} </div>
            <Button
                text={i18n.signInValidationButton}
                onClick={() => {
                    SignIn(login, password)
                        .then(() => {
                            setError('');
                            setCurrentUser({ username: login });
                            routeContext.goToSizeMeasurementPage();
                        })
                        .catch((e) => {
                            console.log(e);

                            if (e.code) {
                                if (
                                    e.message.includes(
                                        'CUSTOM_AUTH is not enabled for the client.',
                                    )
                                ) {
                                    setError(i18n.errorSignInMissingPassword);
                                } else {
                                    setError(e.message);
                                }
                            } else {
                                setError(e.toString().split(':')[1]);
                            }
                        });
                }}
            />
        </StyledSignInForm>
    );
};

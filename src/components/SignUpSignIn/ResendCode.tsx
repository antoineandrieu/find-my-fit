import { Auth } from '@aws-amplify/auth';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface ResendCodeProps {
    username: string;
    callback: Dispatch<SetStateAction<string>>;
}

const StyledDiv = styled.div`
    color: #6a7984;
    margin-top: 2vh;
    display: flex;
    justify-content: space-between;

    span {
        text-decoration: underline;
        cursor: pointer;
    }

    .feedback {
        color: #001c4f;
        text-align: right;
    }
`;

const ResendCode: FC<ResendCodeProps> = (props: ResendCodeProps) => {
    const username = props.username;
    const callback = props.callback;

    const [codeSentMsg, setCodeSentMsg] = useState('');

    const resendCodeRequest = async () => {
        setCodeSentMsg('');
        try {
            await Auth.resendSignUp(username);
            setCodeSentMsg('Code sent');
            callback('');
        } catch (error) {
            callback(error.message);
        }
    };

    return (
        <StyledDiv>
            <div>
                Did not receive the code?{' '}
                <span onClick={resendCodeRequest}>Resend</span>
            </div>
            <div className="feedback"> {codeSentMsg}</div>
        </StyledDiv>
    );
};

export default ResendCode;

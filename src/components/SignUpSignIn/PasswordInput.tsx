import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';

const StyledPasswordInput = styled.div`
    display: flex;
    position: relative;
    input {
        background: #ffffff;
        border: 1px solid #e9eff2;
        box-shadow: inset 0px 0px 5px rgba(193, 197, 196, 0.14);
        border-radius: 4px;
        color: #0b0b0f;
        padding: 0.7em;
        outline: none;
        width: 100%;
    }
    .password-icon {
        position: absolute;
        top: 10%;
        bottom: 10%;
        cursor: pointer;
    }

    @media only screen and (max-width: 420px) {
        .password-icon {
            width: 6vmin;
            right: 3vmin;
        }
    }
    @media only screen and (min-width: 421px) {
        .password-icon {
            width: 3vmin;
            right: 1vmin;
        }
    }
`;

interface PasswordInputProps {
    password: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: FC<PasswordInputProps> = (props: PasswordInputProps) => {
    const [togglePassword, setTogglePassword] = useState('password');
    return (
        <StyledPasswordInput>
            <input
                value={props.password}
                type={togglePassword}
                onChange={props.onChange}
            />
            <div
                className="password-icon"
                onClick={() =>
                    setTogglePassword(
                        togglePassword === 'password' ? 'text' : 'password',
                    )
                }
            >
                <PasswordSVG />
            </div>
        </StyledPasswordInput>
    );
};

const PasswordSVG = () => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.00173 0C11.5964 0 14.5871 2.58667 15.2144 6C14.5877 9.41333 11.5964 12 8.00173 12C4.40706 12 1.4164 9.41333 0.789062 6C1.41573 2.58667 4.40706 0 8.00173 0ZM8.00173 10.6667C9.36138 10.6664 10.6807 10.2045 11.7436 9.35678C12.8066 8.50901 13.5503 7.32552 13.8531 6C13.5492 4.67554 12.805 3.49334 11.7421 2.64668C10.6793 1.80003 9.3606 1.33902 8.00173 1.33902C6.64286 1.33902 5.32419 1.80003 4.26131 2.64668C3.19844 3.49334 2.45424 4.67554 2.1504 6C2.45313 7.32552 3.19685 8.50901 4.25983 9.35678C5.32281 10.2045 6.64208 10.6664 8.00173 10.6667ZM8.00173 9C7.20608 9 6.44302 8.68393 5.88041 8.12132C5.3178 7.55871 5.00173 6.79565 5.00173 6C5.00173 5.20435 5.3178 4.44129 5.88041 3.87868C6.44302 3.31607 7.20608 3 8.00173 3C8.79738 3 9.56044 3.31607 10.123 3.87868C10.6857 4.44129 11.0017 5.20435 11.0017 6C11.0017 6.79565 10.6857 7.55871 10.123 8.12132C9.56044 8.68393 8.79738 9 8.00173 9ZM8.00173 7.66667C8.44376 7.66667 8.86768 7.49107 9.18024 7.17851C9.4928 6.86595 9.6684 6.44203 9.6684 6C9.6684 5.55797 9.4928 5.13405 9.18024 4.82149C8.86768 4.50893 8.44376 4.33333 8.00173 4.33333C7.5597 4.33333 7.13578 4.50893 6.82322 4.82149C6.51066 5.13405 6.33506 5.55797 6.33506 6C6.33506 6.44203 6.51066 6.86595 6.82322 7.17851C7.13578 7.49107 7.5597 7.66667 8.00173 7.66667Z"
            fill="#48B6C2"
        />
    </svg>
);

export default PasswordInput;

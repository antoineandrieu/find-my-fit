import styled from 'styled-components';

const InputStyled = styled.input`
    font: inherit;
    font-size: 30px;
    border: 0;
    background: none;
    color: ${props => props.theme.inputTextColor};
    outline: none;
    width: 100%;
    ::placeholder {
        color: ${props => props.theme.inputPlaceholderColor};
    }
`;

export default InputStyled;

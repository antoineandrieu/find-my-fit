import styled from 'styled-components';

export const StyledEmptyLayout = styled.div`
    background: ${props => props.theme.layoutBackgroundColor};
    width: 100%;
    height: 100vh;
    display: grid;
    @media only screen and (max-width: 420px) {
        grid-template-rows: 7% 86% 7%;
    }
    @media only screen and (min-width: 421px) {
        grid-template-rows: 9% 82% 9%;
    }
`;

export const StyledEmptyLayoutNoGrid = styled.div`
    background: ${props => props.theme.layoutBackgroundColor};
    width: 100%;
    height: 100vh;
`;

import React, { FC } from 'react';
import styled from 'styled-components';

const MainLayout = styled.div`
    h3 {
        display: inline;
        font-weight: 500;
        font-family: ${(props) => props.theme.fontFamily};
    }
`;

interface GuidelinesProps {
    instruction: string;
}

const Guidelines: FC<GuidelinesProps> = (props: GuidelinesProps) => {
    return (
        <MainLayout>
            <h3>{props.instruction}</h3>
        </MainLayout>
    );
};

export default Guidelines;

import styled from 'styled-components';
import React from 'react';
import Center from '../StyledComponents/StyledCenter';

const StyledListItem = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
`;

interface ListItemProps {
    text: string;
}

const ListItem = (props: ListItemProps) => {
    return (
        <StyledListItem>
            <Center>
                <ListBullet />
            </Center>
            <div>{props.text}</div>
        </StyledListItem>
    );
};

const ListBullet = () => (
    <svg
        width="14"
        height="2"
        viewBox="0 0 14 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 0.0532667H0V1.34091H14V0.0532667Z"
            fill="white"
            fillOpacity="0.8"
        />
    </svg>
);

export default ListItem;

import { FC } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    width: auto;
    height: auto;
`;

const StyledDiv = styled.div`
    display: flex;
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
`;

interface ClientLogoProps {
    title: string;
    logoUrl?: string;
}

const ClientLogo: FC<ClientLogoProps> = (props: ClientLogoProps) => {
    const { title, logoUrl } = props;

    if (logoUrl) {
        return (
            <StyledDiv>
                <StyledLogo
                    className="ShopLogo"
                    src={logoUrl}
                    alt={`${title} logo`}
                />
            </StyledDiv>
        );
    } else {
        return <div className="ShopName">{title}</div>;
    }
};

export default ClientLogo;

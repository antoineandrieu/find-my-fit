import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { RouteContext } from '../context/RouteContext';

const StyledAbout = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2vw 0 2vw;
    cursor: pointer;
`;

const AboutButton: FC<unknown> = () => {
    const routeContext = useContext(RouteContext);

    return (
        <StyledAbout onClick={routeContext.goToAboutPage}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23.077 25"
                height={25}
                width={23.077}
            >
                <defs>
                    <path
                        id="prefix__b"
                        d="M356.068 307.268h457.806v463.107H356.068z"
                    />
                    <path
                        id="prefix__a"
                        d="M308.149 379.725h437.756v353.352H308.149z"
                    />
                </defs>
                <path
                    d="M3.588 4.074c-1.5 1.284-2.415 2.744-2.557 4.008a.516.516 0 01-.57.453.514.514 0 01-.458-.567c.182-1.624 1.309-3.3 2.91-4.672C4.526 1.915 6.683.786 9.049.283c2.37-.504 4.963-.383 7.425.757 2.464 1.14 4.753 3.284 6.546 6.75.13.253.03.562-.224.692a.519.519 0 01-.697-.223C20.394 4.961 18.26 3 16.037 1.97 13.81.94 11.452.822 9.267 1.287c-2.19.466-4.192 1.513-5.679 2.787zM3.588 20.926c-1.5-1.284-2.415-2.744-2.557-4.008a.517.517 0 00-1.028.114c.182 1.624 1.309 3.3 2.91 4.672 1.613 1.381 3.77 2.51 6.136 3.013 2.37.504 4.963.383 7.425-.757 2.464-1.14 4.753-3.284 6.546-6.75a.512.512 0 00-.224-.692.52.52 0 00-.697.223c-1.705 3.298-3.84 5.259-6.062 6.289-2.227 1.03-4.585 1.148-6.77.683-2.19-.466-4.192-1.514-5.679-2.787z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
                <text
                    style={{
                        lineHeight: 1.25,
                    }}
                    x={388.846}
                    y={916.731}
                    fontWeight={400}
                    fontSize={180.298}
                    fontFamily="sans-serif"
                    strokeWidth={4.508}
                    transform="matrix(.02083 0 0 .02083 -.962 0)"
                >
                    <tspan
                        x={388.846}
                        y={916.731}
                        style={{
                            fontVariantLigatures: 'normal',
                            fontVariantCaps: 'normal',
                            fontVariantNumeric: 'normal',
                            fontVariantEastAsian: 'normal',
                            fontVariationSettings: "'wght' 300",
                        }}
                        fontSize={865.516}
                        fontFamily="Inter"
                    >
                        {'?'}
                    </tspan>
                </text>
            </svg>
        </StyledAbout>
    );
};

export default AboutButton;

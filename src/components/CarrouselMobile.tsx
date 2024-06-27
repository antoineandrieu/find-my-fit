import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { I18nContext } from '../context/I18nContext';
import { RouteContext } from '../context/RouteContext';
import { UserContext } from '../context/UserContext';
import {
    BustImgSvg,
    HipsImgSvg,
    InseamImgSvg,
    ThighImgSvg,
    WaistImgSvg,
} from './SizeMeasurementSVG';
import Center from './StyledComponents/StyledCenter';

const CarrouselMobileLayout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgAnnotation = styled(Center)`
    border-top: 1px solid ${(props) => props.theme.borderColor};
    width: 100%;
    text-align: center;
    font-weight: 600;
`;

const ImgAndAnnotationContainer = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 80% 20%;
    align-items: center;
    box-shadow: 0px 3.04px 30.4px rgba(223, 227, 232, 0.6);
    border-radius: 3.04px;
`;

interface CarrouselMobileProps {
    step: number;
}

const CarrouselMobile: FC<CarrouselMobileProps> = (
    props: CarrouselMobileProps,
) => {
    // Different images size
    const large = '100%';

    const routeContext = React.useContext(RouteContext);
    const { i18n } = useContext(I18nContext);
    const userContext = useContext(UserContext);
    const gender = userContext.getCurrentProduct().gender;

    const renderStep0 = () => {
        return (
            <CarrouselMobileLayout>
                <ImgAndAnnotationContainer>
                    <BustImgSvg
                        className={undefined}
                        width={large}
                        height={large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step15Bust}</ImgAnnotation>
                </ImgAndAnnotationContainer>
            </CarrouselMobileLayout>
        );
    };

    const renderStep1 = () => {
        return (
            <CarrouselMobileLayout>
                <ImgAndAnnotationContainer>
                    <WaistImgSvg
                        className={undefined}
                        width={large}
                        height={large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step25Waist}</ImgAnnotation>
                </ImgAndAnnotationContainer>
            </CarrouselMobileLayout>
        );
    };

    const renderStep2 = () => {
        return (
            <CarrouselMobileLayout>
                <ImgAndAnnotationContainer>
                    <HipsImgSvg
                        className={undefined}
                        width={large}
                        height={large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step35Hips}</ImgAnnotation>
                </ImgAndAnnotationContainer>
            </CarrouselMobileLayout>
        );
    };

    const renderStep3 = () => {
        return (
            <CarrouselMobileLayout>
                <ImgAndAnnotationContainer>
                    <ThighImgSvg
                        className={undefined}
                        width={large}
                        height={large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step45Thigh}</ImgAnnotation>
                </ImgAndAnnotationContainer>
            </CarrouselMobileLayout>
        );
    };

    const renderStep4 = () => {
        return (
            <CarrouselMobileLayout>
                <ImgAndAnnotationContainer>
                    <InseamImgSvg
                        className={undefined}
                        width={large}
                        height={large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step55Inseam}</ImgAnnotation>
                </ImgAndAnnotationContainer>
            </CarrouselMobileLayout>
        );
    };

    switch (props.step) {
        case 0:
            return renderStep0();
        case 1:
            return renderStep1();
        case 2:
            return renderStep2();
        case 3:
            return renderStep3();
        case 4:
            return renderStep4();
        default:
            return renderStep0();
    }
};

export default CarrouselMobile;

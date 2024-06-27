import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { isSafari } from 'react-device-detect';

import Center from './StyledComponents/StyledCenter';
import { I18nContext } from '../context/I18nContext';
import {
    BustImgSvg,
    WaistImgSvg,
    HipsImgSvg,
    ThighImgSvg,
    InseamImgSvg,
} from './SizeMeasurementSVG';

const CarrouselLayout = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 30% 25% 20% 15% 10%;
    .box-shadow {
        box-shadow: 0px 4px 40px rgba(223, 227, 232, 0.6);
        height: auto;
    }
`;

const ImgAnnotation = styled.div`
    border-top: 1px solid ${(props) => props.theme.borderColor};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: 400;
    text-align: center;
    color: rgb(106, 121, 132);
    font-size: 1.2em;
    font-family: ${(props) => props.theme.fontFamily};
`;

const ImgAndAnnotationContainer = styled.div`
    display: grid;
    height: 100%;
    width: 80%;
    grid-template-rows: 80% 20%;
    align-items: center;
    box-shadow: 0px 4px 40px rgba(223, 227, 232, 0.6);
    border-radius: 4px;
    min-height: 0;
    min-width: 0;
`;

interface CarrouselProps {
    step: number;
    gender: string;
}

const Carrousel: FC<CarrouselProps> = (props: CarrouselProps) => {
    const { i18n } = useContext(I18nContext);

    const gender = props.gender;

    // Different images size
    const largeStr = 100;
    const mediumStr = largeStr * 0.75;
    const smallStr = largeStr * 0.8;
    const extraSmallStr = largeStr * 0.85;
    const extraExtraSmallStr = largeStr * 0.9;

    const large = largeStr + '%';
    const medium = mediumStr + '%';
    const small = smallStr + '%';
    const extraSmall = extraSmallStr + '%';
    const extraExtraSmall = extraExtraSmallStr + '%';

    // Fix weird SVG bug on Safari
    // Up and bottom spacings are added with 100% height
    let safariLarge: string | null = null;
    if (isSafari) {
        safariLarge = 'none';
    }

    const renderStep0 = () => {
        return (
            <CarrouselLayout>
                <ImgAndAnnotationContainer>
                    <BustImgSvg
                        className={undefined}
                        width={large}
                        height={safariLarge ? safariLarge : large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step15Bust}</ImgAnnotation>
                </ImgAndAnnotationContainer>
                <Center>
                    <WaistImgSvg
                        className="box-shadow"
                        width={medium}
                        height={medium}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <Center>
                    <HipsImgSvg
                        className="box-shadow"
                        width={small}
                        height={small}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <Center>
                    <ThighImgSvg
                        className="box-shadow"
                        width={extraSmall}
                        height={extraSmall}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <Center>
                    <InseamImgSvg
                        className="box-shadow"
                        width={extraExtraSmall}
                        height={extraExtraSmall}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
            </CarrouselLayout>
        );
    };

    const renderStep1 = () => {
        return (
            <CarrouselLayout>
                <ImgAndAnnotationContainer>
                    <WaistImgSvg
                        className={undefined}
                        width={large}
                        height={safariLarge ? safariLarge : large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step25Waist}</ImgAnnotation>
                </ImgAndAnnotationContainer>
                <Center>
                    <HipsImgSvg
                        className="box-shadow"
                        width={medium}
                        height={medium}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <Center>
                    <ThighImgSvg
                        className="box-shadow"
                        width={small}
                        height={small}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <Center>
                    <InseamImgSvg
                        className="box-shadow"
                        width={extraSmall}
                        height={extraSmall}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <div></div>
            </CarrouselLayout>
        );
    };

    const renderStep2 = () => {
        return (
            <CarrouselLayout>
                <ImgAndAnnotationContainer>
                    <HipsImgSvg
                        className={undefined}
                        width={large}
                        height={safariLarge ? safariLarge : large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step35Hips}</ImgAnnotation>
                </ImgAndAnnotationContainer>
                <Center>
                    <ThighImgSvg
                        className="box-shadow"
                        width={medium}
                        height={medium}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <Center>
                    <InseamImgSvg
                        className="box-shadow"
                        width={small}
                        height={small}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <div></div>
                <div></div>
            </CarrouselLayout>
        );
    };

    const renderStep3 = () => {
        return (
            <CarrouselLayout>
                <ImgAndAnnotationContainer>
                    <ThighImgSvg
                        className={undefined}
                        width={large}
                        height={safariLarge ? safariLarge : large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step45Thigh}</ImgAnnotation>
                </ImgAndAnnotationContainer>
                <Center>
                    <InseamImgSvg
                        className="box-shadow"
                        width={medium}
                        height={safariLarge ? safariLarge : large}
                        opacity={0.2}
                        gender={gender}
                    />
                </Center>
                <div></div>
                <div></div>
                <div></div>
            </CarrouselLayout>
        );
    };

    const renderStep4 = () => {
        return (
            <CarrouselLayout>
                <ImgAndAnnotationContainer>
                    <InseamImgSvg
                        className={undefined}
                        width={large}
                        height={safariLarge ? safariLarge : large}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>{i18n.step55Inseam}</ImgAnnotation>
                </ImgAndAnnotationContainer>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </CarrouselLayout>
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

export default Carrousel;

import React, { FC, useContext, useEffect, useState } from 'react';
import store from 'store';

import styled from 'styled-components';
import { I18nContext } from '../../context/I18nContext';
import { RouteContext } from '../../context/RouteContext';
import { UserContext } from '../../context/UserContext';
import {
    BustImgSvg,
    WaistImgSvg,
    HipsImgSvg,
    ThighImgSvg,
    InseamImgSvg,
} from '../SizeMeasurementSVG';
import { Measurements } from '../../Models';

const StyledMeasurements = styled.div`
    display: grid;
    grid-template-rows: 15% 85%;
    justify-items: center;
    align-items: center;
    height: 90%;
    width: 90%;

    .link {
        cursor: pointer;
        text-decoration: underline;
        color: #adb5c4;
    }
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    @media only screen and (max-width: 632px) {
        .link {
            text-align: right;
        }
    }
`;

const StyledMeasurementsContent = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2%;
    height: 100%;
    width: 100%;
`;

const ImgAnnotation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: 500;
    font-size: 14px;

    .annotation-title {
        color: #adb5c4;
    }

    .measurement {
        margin-bottom: 3%;
        margin-top: 3%;
        font-size: 16px;
    }
`;

const ImgAndAnnotationContainer = styled.div`
    display: grid;
    height: 100%;
    width: 80%;
    grid-template-rows: 80% 20%;
    align-items: center;
    box-shadow: 0px 4px 40px rgba(223, 227, 232, 0.6);
    border-radius: 4px;
`;

const MyMeasurements: FC<unknown> = () => {
    const { i18n } = useContext(I18nContext);
    const routeContext = useContext(RouteContext);
    const userContext = useContext(UserContext);
    const gender = userContext.getCurrentProduct().gender;

    const [measurements, setMeasurements] = useState<Measurements>({});
    const [unit, setUnit] = useState('cm');
    const [linkText, setLinkText] = useState('Change measurements');

    useEffect(() => {
        let customerMeasurements = store.get('measurements');

        if (customerMeasurements) {
            if (userContext.getUnit() === i18n.inches) {
                setUnit('in');
                customerMeasurements.bust = Math.round(
                    customerMeasurements.bust / 2.54,
                );
                customerMeasurements.waist = Math.round(
                    customerMeasurements.waist / 2.54,
                );
                customerMeasurements.hips = Math.round(
                    customerMeasurements.hips / 2.54,
                );
                customerMeasurements.thigh = Math.round(
                    customerMeasurements.thigh / 2.54,
                );
                customerMeasurements.inseam = Math.round(
                    customerMeasurements.inseam / 2.54,
                );
            }
        } else {
            customerMeasurements = {
                bust: null,
                waist: null,
                hips: null,
                thigh: null,
                inseam: null,
            };
            setLinkText('Create measurements');
        }

        setMeasurements(customerMeasurements);
    }, [userContext, i18n.inches]);

    const createMeasButton = (
        <span className="link" onClick={routeContext.goToSizeMeasurementPage}>
            Create
        </span>
    );

    const bustMeas =
        (measurements.bust && `${measurements.bust} ${unit}`) ||
        createMeasButton;
    const waistMeas =
        (measurements.waist && `${measurements.waist} ${unit}`) ||
        createMeasButton;
    const hipsMeas =
        (measurements.hips && `${measurements.hips} ${unit}`) ||
        createMeasButton;
    const thighMeas =
        (measurements.thigh && `${measurements.thigh} ${unit}`) ||
        createMeasButton;
    const inseamMeas =
        (measurements.inseam && `${measurements.inseam} ${unit}`) ||
        createMeasButton;

    return (
        <StyledMeasurements>
            <StyledHeader>
                <h1>My Measurements</h1>
                <span
                    className="link"
                    onClick={routeContext.goToSizeMeasurementPage}
                >
                    {linkText}
                </span>
            </StyledHeader>
            <StyledMeasurementsContent>
                <ImgAndAnnotationContainer>
                    <BustImgSvg
                        className={undefined}
                        width={'100%'}
                        height={'100%'}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>
                        <div className="annotation-title">Bust </div>
                        <div className="measurement">{bustMeas}</div>
                    </ImgAnnotation>
                </ImgAndAnnotationContainer>
                <ImgAndAnnotationContainer>
                    <WaistImgSvg
                        className={undefined}
                        width={'100%'}
                        height={'100%'}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>
                        <div className="annotation-title">Waist</div>
                        <div className="measurement">{waistMeas}</div>
                    </ImgAnnotation>
                </ImgAndAnnotationContainer>
                <ImgAndAnnotationContainer>
                    <HipsImgSvg
                        className={undefined}
                        width={'100%'}
                        height={'100%'}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>
                        <div className="annotation-title">Hips</div>
                        <div className="measurement">{hipsMeas}</div>
                    </ImgAnnotation>
                </ImgAndAnnotationContainer>
                <ImgAndAnnotationContainer>
                    <ThighImgSvg
                        className={undefined}
                        width={'100%'}
                        height={'100%'}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>
                        <div className="annotation-title">Thigh</div>
                        <div className="measurement">{thighMeas}</div>
                    </ImgAnnotation>
                </ImgAndAnnotationContainer>
                <ImgAndAnnotationContainer>
                    <InseamImgSvg
                        className={undefined}
                        width={'100%'}
                        height={'100%'}
                        opacity={1}
                        gender={gender}
                    />
                    <ImgAnnotation>
                        <div className="annotation-title">Inseam</div>
                        <div className="measurement">{inseamMeas}</div>
                    </ImgAnnotation>
                </ImgAndAnnotationContainer>
            </StyledMeasurementsContent>
        </StyledMeasurements>
    );
};

export default MyMeasurements;

import React, { FC, useContext, useEffect, useState } from 'react';
import store from 'store';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { I18nContext } from '../context/I18nContext';
import { RouteContext } from '../context/RouteContext';
import { UserContext } from '../context/UserContext';
import useCreateMeasurement from '../hooks/useCreateMeasurement';
import { Sizes } from '../Models';
import Button, { BackButton } from './Button';
import Carrousel from './Carrousel';
import CarrouselMobile from './CarrouselMobile';
import Guidelines from './Guidelines';
import Center from './StyledComponents/StyledCenter';
import SwitchComponent from './SwitchComponent';

const StyledCustomTextField = styled.div`
    .MuiInput-underline:after {
        border-bottom-color: ${props => props.theme.mainColor} !important;
    }
    .MuiInput-underline:hover:not(.Mui-disabled)::before {
        border-bottom-color: ${props => props.theme.mainColor} !important;
    }
    .MuiInputBase-input {
        color: ${props => props.theme.inputColor} !important;
        font-weight: lighter !important;
    }
`;

const CustomTextField = withStyles({
    root: {
        width: '100%',
        '& label.Mui-focused': {
            color: '#4ab7c3',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#4ab7c3',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled)::before': {
            borderBottom: '2px solid #4ab7c3',
        },
        '& .MuiInputBase-input::placeholder': {
            transition: 'none',
        },
        '@media only screen and (max-height: 499px)': {
            '& .MuiInputBase-root': {
                fontSize: '1em',
                fontFamily: '"Inter", "Helvetica", "Arial", sans- serif',
                height: '100%;',
            },
            '& .MuiFormLabel-root': {
                fontSize: '1em',
            },
        },
        '@media only screen and (max-width: 449px)': {
            height: '80%',
            '& .MuiInputBase-root': {
                fontSize: '1em',
                height: '100%;',
            },
            '& .MuiFormLabel-root': {
                fontSize: '1.5em',
            },
        },
        '@media only screen and (min-width: 449px) and (min-height: 700px)': {
            height: '65%',
            '& .MuiInputBase-root': {
                fontSize: '1em',
                fontFamily: '"Inter", "Helvetica", "Arial", sans- serif',
                height: '100%;',
            },
            '& .MuiFormLabel-root': {
                fontSize: '1.5em',
            },
        },
    },
})(TextField);

const MainLayout = styled.div`
    width: 90%;
    display: grid;
    .bottom {
        display: grid;
        grid-gap: 1vmin;
        grid-template-rows: repeat(2, 1fr);
    }
    .guideline {
        display: grid;
        justify-content: start;
        align-content: start;
        vertical-align: top;
        margin-top: 2.5vh;
    }
    .size-error {
        color: #ea4335;
        display: flex;
        justify-content: center;
        text-align: right;
        align-self: center;
    }
    .switch {
        align-self: end;
        margin-bottom: 4px;
    }
    input {
        font-weight: 400;
    }
    h3 {
        font-weight: 400;
    }
    @media only screen and (max-width: 449px) and (min-height: 550px) {
        height: 90%;
        .carrousel-mobile {
            display: block;
        }
        .carrousel {
            display: none;
        }
        grid-template-rows: 45% 15% 40%;
        .bottom {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: 50% 30% 20%;
            margin-top: 3%;
            .input {
                grid-column: 1 / 7;
                grid-row: 1;
            }
            input {
                font-size: 2em;
            }
            .switch {
                grid-column: 4 / 7;
                grid-row: 1;
                align-items: flex-end;
            }
            .size-error {
                grid-column: 1 / 7;
                grid-row: 2;
                display: flex;
                align-self: flex-start;
            }
            .gender-switch {
                grid-column: 1 / 7;
                grid-row: 2;
            }
            .back-button {
                grid-column: 1 / 2;
                grid-row: 3;
            }
            .next-button {
                grid-column: 2 / 7;
                grid-row: 3;
            }
        }
    }
    @media only screen and (min-width: 450px) and (min-height: 700px) {
        height: 90%;
        .carrousel-mobile {
            display: none;
        }
        .carrousel {
            display: block;
            height: 80%;
            margin-top: 3vh;
        }
        grid-template-rows: 50% 10% 40%;
        .bottom {
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: 70% 30%;
            margin-top: 3%;
            .switch {
                grid-column: 4 / 7;
                grid-row: 1;
                align-items: flex-end;
            }
            .size-error {
                grid-column: 5 / 11;
                grid-row: 1;
            }
            .gender-switch {
                grid-column: 1 / 7;
                grid-row: 2;
            }
        }
    }
    @media only screen and (min-width: 450px) {
        .input {
            grid-column: 1 / 7;
            grid-row: 1;
        }
        input {
            font-size: 2.5em;
        }
        .back-button {
            grid-column: 7 / 8;
            grid-row: 2;
        }
        .next-button {
            grid-column: 8 / 11;
            grid-row: 2;
        }
    }
    @media only screen and (min-width: 800px) {
        .input {
            grid-column: 1 / 5;
            grid-row: 1;
        }
        .back-button {
            grid-column: 7 / 8;
            grid-row: 2;
        }
        .next-button {
            grid-column: 8 / 11;
            grid-row: 2;
        }
    }
    @media only screen and (max-height: 499px) {
        .gender-switch {
            font-size: 1em;
        }
    }
    @media only screen and (max-width: 450px) {
        .gender-switch {
            font-size: 1.2em;
        }
        .guideline {
            font-size: 1.2em;
        }
    }
    @media only screen and (min-width: 449px) and (min-height: 700px) {
        .gender-switch {
            font-size: 1.2em;
        }
    }
    @media only screen and (max-width: 449px) and (max-height: 699px) {
        .carrousel-mobile {
            display: block;
        }
        .carrousel {
            display: none;
            font-size: 11px;
            min-height: 20px;
        }
        h3 {
            font-size: 1em;
        }
        .guideline {
            min-height: 20px;
        }
        grid-template-rows: 45% 15% 30%;
        .bottom {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(3, 1fr);
            .input {
                grid-column: 1 / 7;
                grid-row: 1;
            }
            input {
                font-size: 1rem;
                min-height: 20px;
            }
            .switch {
                grid-column: 4 / 7;
                grid-row: 1;
                align-items: flex-end;
            }
            .size-error {
                grid-column: 1 / 7;
                grid-row: 2;
                display: flex;
                align-self: flex-start;
            }
            .gender-switch {
                grid-column: 1 / 7;
                grid-row: 2;
            }
            .back-button {
                grid-column: 1 / 2;
                grid-row: 3;
            }
            .next-button {
                grid-column: 2 / 7;
                grid-row: 3;
                text-align: center;
            }
        }
    }
    @media only screen and (min-width: 450px) and (max-height: 699px) {
        height: 90%;
        .carrousel-mobile {
            display: none;
        }
        .carrousel {
            display: block;
            font-size: 11px;
        }
        .guideline {
            align-content: end;
        }
        input {
            font-size: 2em;
        }
        grid-template-rows: 50% 10% 40%;
        .bottom {
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: 70% 30%;
            margin-top: 1%;
            .switch {
                grid-column: 4 / 7;
                grid-row: 1;
                align-items: flex-end;
            }
            .size-error {
                grid-column: 5 / 11;
                grid-row: 1;
            }
            .gender-switch {
                grid-column: 1 / 7;
                grid-row: 2;
            }
        }
    }
    @media only screen and (min-width: 1800px) {
        height: 90%;
    }
`;

const SizeMeasurementContent: FC<unknown> = () => {
    const { i18n } = useContext(I18nContext);
    const userContext = useContext(UserContext);
    const selectedColor = (userContext.getCurrentProduct().color);
    const selectedFamilyFont = (userContext.getCurrentProduct().fontStyle);
    const routeContext = useContext(RouteContext);

    const step = routeContext.getCurrentSizeMeasurementStep();

    const [switchOptions] = useState(['centimetres', 'inches']);
    const [switchDisabled, setSwitchDisabled] = useState(false);

    const [gender, setGender] = useState(
        userContext.getCurrentProduct().gender,
    );
    const [genderSwitchOptions] = useState(['woman', 'man']);

    const [bustSize, setBustSize] = useState(userContext.getSizes().bustSize);
    const [waistSize, setWaistSize] = useState(
        userContext.getSizes().waistSize,
    );
    const [hipsSize, setHipsSize] = useState(userContext.getSizes().hipsSize);
    const [thighSize, setThighSize] = useState(
        userContext.getSizes().thighSize,
    );
    const [inseamSize, setInseamSize] = useState(
        userContext.getSizes().inseamSize,
    );

    const [sizeError, setSizeError] = useState('');

    const [stepsData] = useState([
        {
            instruction: i18n.bustInstruction,
            placeholder: i18n.yourBust,
        },
        {
            instruction: i18n.waistInstruction,
            placeholder: i18n.yourWaist,
        },
        {
            instruction: i18n.hipsInstruction,
            placeholder: i18n.yourHips,
        },
        {
            instruction: i18n.thighInsruction,
            placeholder: i18n.yourThigh,
        },
        {
            instruction: i18n.inseamInsruction,
            placeholder: i18n.yourInseam,
        },
    ]);

    const [trigger, setTrigger] = useState(false);

    const [unit, setUnit] = useState(userContext.getUnit());

    const { measurement } = useCreateMeasurement(
        {
            bust: bustSize,
            waist: waistSize,
            hips: hipsSize,
            thigh: thighSize,
            inseam: inseamSize,
        },
        trigger,
    );

    useEffect(() => {
        if (measurement && measurement.id) {
            const tempMeasurement = store.get('measurements');
            tempMeasurement.id = measurement.id;
            store.set('measurements', tempMeasurement);
            routeContext.goToNextSizeMeasurementStep();
        }
    }, [measurement, userContext, routeContext]);

    const getInputValue = () => {
        switch (step) {
            case 0:
                return bustSize === 0 ? '' : bustSize;
            case 1:
                return waistSize === 0 ? '' : waistSize;
            case 2:
                return hipsSize === 0 ? '' : hipsSize;
            case 3:
                return thighSize === 0 ? '' : thighSize;
            case 4:
                return inseamSize === 0 ? '' : inseamSize;
            default:
                return '';
        }
    };

    const saveInLocalStorage = (step: number, value: number) => {
        const measurements = store.get('measurements') || {};
        switch (step) {
            case 0:
                measurements['bust'] = value;
                break;
            case 1:
                measurements['waist'] = value;
                break;
            case 2:
                measurements['hips'] = value;
                break;
            case 3:
                measurements['thigh'] = value;
                break;
            case 4:
                measurements['inseam'] = value;
                break;
            default:
                break;
        }
        store.set('measurements', measurements);
    };

    const setIntputValue = (value: number) => {
        saveInLocalStorage(step, value);
        switch (step) {
            case 0:
                setBustSize(value);
                break;
            case 1:
                setWaistSize(value);
                break;
            case 2:
                setHipsSize(value);
                break;
            case 3:
                setThighSize(value);
                break;
            case 4:
                setInseamSize(value);
                break;
            default:
                break;
        }
    };

    const isBustSizeValide = () => {
        if (userContext.getUnit() === switchOptions[1]) {
            return bustSize >= 20 && bustSize <= 55;
        } else {
            return bustSize >= 60 && bustSize <= 135;
        }
    };

    const isWaistSizeValide = () => {
        if (userContext.getUnit() === switchOptions[1]) {
            return waistSize >= 15 && waistSize <= 55;
        } else {
            return waistSize >= 50 && waistSize <= 130;
        }
    };

    const isHipsSizeValide = () => {
        if (userContext.getUnit() === switchOptions[1]) {
            return hipsSize >= 20 && hipsSize <= 55;
        } else {
            return hipsSize >= 60 && hipsSize <= 135;
        }
    };

    const isThighSizeValide = () => {
        if (userContext.getUnit() === switchOptions[1]) {
            return thighSize >= 20 && thighSize <= 35;
        } else {
            return thighSize >= 30 && thighSize <= 85;
        }
    };

    const isInseamSizeValide = () => {
        if (userContext.getUnit() === switchOptions[1]) {
            return inseamSize >= 15 && inseamSize <= 50;
        } else {
            return inseamSize >= 40 && inseamSize <= 120;
        }
    };

    const getSizeError = () => {
        let error = '';
        switch (step) {
            case 0:
                if (bustSize === 0 || !isBustSizeValide()) {
                    if (userContext.getUnit() === switchOptions[1]) {
                        error = i18n.errorBustSizeNotInRangeInches;
                    } else {
                        error = i18n.errorBustSizeNotInRangeCm;
                    }
                }
                break;
            case 1:
                if (waistSize === 0 || !isWaistSizeValide()) {
                    if (userContext.getUnit() === switchOptions[1]) {
                        error = i18n.errorWaistSizeNotInRangeInches;
                    } else {
                        error = i18n.errorWaistSizeNotInRangeCm;
                    }
                }
                break;
            case 2:
                if (hipsSize === 0 || !isHipsSizeValide()) {
                    if (userContext.getUnit() === switchOptions[1]) {
                        error = i18n.errorHipsSizeNotInRangeInches;
                    } else {
                        error = i18n.errorHipsSizeNotInRangeCm;
                    }
                }
                break;
            case 3:
                if (thighSize === 0 || !isThighSizeValide()) {
                    if (userContext.getUnit() === switchOptions[1]) {
                        error = i18n.errorThighSizeNotInRangeInches;
                    } else {
                        error = i18n.errorThighSizeNotInRangeCm;
                    }
                }
                break;
            case 4:
                if (inseamSize === 0 || !isInseamSizeValide()) {
                    if (userContext.getUnit() === switchOptions[1]) {
                        error = i18n.errorInseamSizeNotInRangeInches;
                    } else {
                        error = i18n.errorInseamSizeNotInRangeCm;
                    }
                }
                break;
            default:
                break;
        }
        setSizeError(error);

        return error;
    };

    const sizeErrorMessage = sizeError !== '' && (
        <div className="size-error">{sizeError}</div>
    );

    return (
        <MainLayout>
            <Center className="carrousel-mobile">
                <CarrouselMobile step={step} />
            </Center>
            <Center className="carrousel">
                <Carrousel step={step} gender={gender} />
            </Center>
            <Center className="guideline">
                <Guidelines instruction={stepsData[step].instruction} />
            </Center>

            <div className="bottom">
                <Center className="input">
                    <StyledCustomTextField>
                    <CustomTextField
                        label={stepsData[step].placeholder}
                        defaultValue={getInputValue()}
                        value={getInputValue()}
                        autoFocus={true}
                        size={'medium'}
                        InputLabelProps={{
                            style: {
                                color: 'rgb(106, 121, 132)',
                                fontSize: '1em',
                                fontWeight: 400,
                                fontFamily: selectedFamilyFont,
                            },
                            shrink: true,
                        }}
                        onChange={(e) => {
                            setSizeError('');
                            // only number and not empty
                            if (isNaN(Number(e.target.value))) {
                                if (e.target.value.length === 0) {
                                    setIntputValue(0);
                                } else {
                                    if (('' + getInputValue()).length) {
                                        setIntputValue(
                                            parseInt('' + getInputValue()),
                                        );
                                    } else {
                                        setIntputValue(0);
                                    }
                                }
                            } else {
                                if (e.target.value.length === 0) {
                                    setIntputValue(0);
                                } else {
                                    setIntputValue(parseInt(e.target.value));
                                }
                            }
                        }}
                        InputProps={{
                            endAdornment: (
                                <Center className="switch">
                                    <SwitchComponent
                                        disabled={switchDisabled}
                                        firstSelected={
                                            (unit === 'centimetres' && true) ||
                                            false
                                        }
                                        firstOption={switchOptions[0]}
                                        secondOption={switchOptions[1]}
                                        callback={(isFirstSelected) => {
                                            userContext.setUnit(
                                                isFirstSelected
                                                    ? switchOptions[0]
                                                    : switchOptions[1],
                                            );
                                            store.set(
                                                'unit',
                                                isFirstSelected
                                                    ? switchOptions[0]
                                                    : switchOptions[1],
                                            );
                                            store.set('measurements', {
                                                bust: bustSize,
                                            });
                                            setSizeError('');
                                        }}
                                    />
                                </Center>
                            ),
                        }}
                    />
                    </StyledCustomTextField>
                </Center>
                {sizeErrorMessage}
                <Center className="gender-switch">
                    <SwitchComponent
                        disabled={false}
                        firstSelected={(gender === 'woman' && true) || false}
                        firstOption={genderSwitchOptions[0]}
                        secondOption={genderSwitchOptions[1]}
                        callback={(isFirstSelected) => {
                            userContext.setGender(
                                isFirstSelected
                                    ? genderSwitchOptions[0]
                                    : genderSwitchOptions[1],
                            );
                            setGender(
                                isFirstSelected
                                    ? genderSwitchOptions[0]
                                    : genderSwitchOptions[1],
                            );
                        }}
                    />
                </Center>
                <Center className="back-button">
                    {step > 0 && (
                        <BackButton
                            onClick={() => {
                                userContext.setSizes({
                                    bustSize,
                                    waistSize,
                                    hipsSize,
                                    thighSize,
                                    inseamSize,
                                } as Sizes);
                                if (step === 1) {
                                    setSwitchDisabled(false);
                                }
                                routeContext.goToPreviousSizeMeasurementStep();
                            }}
                        />
                    )}
                </Center>
                <Center className="next-button">
                    <Button
                        onClick={async () => {
                            const error = getSizeError();
                            if (error === '') {
                                userContext.setSizes({
                                    bustSize,
                                    waistSize,
                                    hipsSize,
                                    thighSize,
                                    inseamSize,
                                } as Sizes);
                                if (step === stepsData.length - 1) {
                                    setTrigger(true);
                                } else {
                                    routeContext.goToNextSizeMeasurementStep();
                                }
                                if (step === 0) {
                                    setSwitchDisabled(true);
                                }
                            }
                        }}
                        text={
                            step < stepsData.length - 1
                                ? i18n.buttonTextContinue
                                : i18n.buttonTextFindMyFit
                        }
                    />
                </Center>
            </div>
        </MainLayout>
    );
};

export default SizeMeasurementContent;

import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { I18nContext } from '../context/I18nContext';
import { UserContext } from '../context/UserContext';


const StyledSwitchComponent = styled.div`
    display: flex;
    width: 100%;
    cursor: pointer;

    @media only screen and (max-width: 449px) {
        margin-bottom: 1vh;
    }

    .switch-option-one {
        margin-right: 1vw;
    }

    .switch-option-two {
        margin-left: 1vw;
    }
`;

const StyledNoPointerSwitchComponent = styled.div`
    display: flex;
    width: 100%;

    @media only screen and (max-width: 449px) {
        margin-bottom: 1vh;
    }

    .switch-option-one {
        margin-right: 1vw;
    }

    .switch-option-two {
        margin-left: 1vw;
    }
`;

interface SwitchComponentProps {
    className?: string;
    disabled: boolean;
    firstSelected: boolean;
    firstOption: string;
    secondOption: string;
    callback: (isFirstSelected: boolean) => void;
}

const SwitchComponent: FC<SwitchComponentProps> = (
    props: SwitchComponentProps,
) => {
    const { i18n } = useContext(I18nContext);
    const userContext = useContext(UserContext);
    const selectedColor = (userContext.getCurrentProduct().color).toString();
    const selectedFamilyFont = (userContext.getCurrentProduct().fontStyle);


    const [firstSelected, setFirstSelected] = useState(props.firstSelected);

    // @ts-ignore
    const firstOption = i18n[props.firstOption] || props.firstOption;
    // @ts-ignore
    const secondOption = i18n[props.secondOption] || props.secondOption;

    if (props.disabled) {
        return (
            <StyledNoPointerSwitchComponent className={props.className}>
                <div
                    className="switch-option-one"
                    onClick={() => null}
                    style={
                        firstSelected
                            ? {
                                fontFamily: selectedFamilyFont,
                                color: selectedColor,
                              }
                            : {
                                fontFamily: selectedFamilyFont,
                                color: '#ADB5C4',
                              }
                    }
                >
                    {firstOption}
                </div>
                <div
                    style={{
                        fontFamily: selectedFamilyFont,
                        color: '#ADB5C4',
                    }}
                >
                    /
                </div>
                <div
                    className="switch-option-two"
                    onClick={() => null}
                    style={
                        !firstSelected
                            ? {
                                fontFamily: selectedFamilyFont,
                                color: selectedColor,
                              }
                            : {
                                fontFamily: selectedFamilyFont,
                                color: '#ADB5C4',
                              }
                    }
                >
                    {secondOption}
                </div>
            </StyledNoPointerSwitchComponent>
        );
    } else {
        return (
            <StyledSwitchComponent
                className={props.className}
                onClick={() => {
                    if (!props.disabled) {
                        setFirstSelected(!firstSelected);
                        props.callback(!firstSelected);
                    }
                }}
            >
                <div
                    className="switch-option-one"
                    style={
                        firstSelected
                            ? {
                                fontFamily: selectedFamilyFont,
                                color: selectedColor,
                              }
                            : {
                                fontFamily: selectedFamilyFont,
                                color: '#ADB5C4',
                              }
                    }
                >
                    {firstOption}
                </div>
                <div
                    style={{
                        fontFamily: selectedFamilyFont,
                        color: '#ADB5C4',
                    }}
                >
                    /
                </div>
                <div
                    className="switch-option-two"
                    style={
                        !firstSelected
                            ? {
                                fontFamily: selectedFamilyFont,
                                color: selectedColor,
                              }
                            : {
                                fontFamily: selectedFamilyFont,
                                color: '#ADB5C4',
                              }
                    }
                >
                    {secondOption}
                </div>
            </StyledSwitchComponent>
        );
    }
};

export default SwitchComponent;

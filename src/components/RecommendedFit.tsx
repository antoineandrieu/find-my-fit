import React, { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CircleSpinner } from 'react-spinners-kit';
import store from 'store';

import { Product } from './Product';
import { I18nContext } from '../context/I18nContext';
import StyledHeaderAndFooter from './StyledComponents/StyledHeaderAndFooter';
import Button from './Button';
import { RouteContext } from '../context/RouteContext';
import { UserContext } from '../context/UserContext';
import { IframeParentContext } from '../context/IframeParentContext';
import useCreateAnalytic from '../hooks/useCreateAnalytic';
import Center from './StyledComponents/StyledCenter';
import { CreateAnalyticResponse } from '../Models';

const StyledRecomendedFitExplanation = styled.div`
    height: 70%;
    display: grid;

    grid-gap: 2vmin;
    grid-template-rows: repeat(4, 1fr);

    .recommended-fit-title {
        color: #343537;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .recommended-fit-subtitle {
        color: #6a7984;
        margin-top: 2vh;
        font-size: 16px;
    }

    .change-measurements {
        text-decoration-line: underline;
        color: #6a7984;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
    @media only screen and (min-width: 769px) {
        width: 70%;
    }
`;

const StyledNoFitExplanation = styled.div`
    height: 50%;
    display: grid;

    grid-gap: 2vmin;
    grid-template-rows: repeat(2, 1fr);

    .nofit-title {
        color: #343537;
        font-size: 18px;
        font-weight: 600;
        margin-top: 8vh;
    }

    .change-measurements {
        text-decoration-line: underline;
        color: #6a7984;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
    @media only screen and (min-width: 769px) {
        width: 100%;
    }
`;

interface RecomendedFitExplanationProps {
    callBack: () => void;
}

const RecomendedFitExplanation = (props: RecomendedFitExplanationProps) => {
    const { i18n } = useContext(I18nContext);
    const userContext = useContext(UserContext);
    const iframeParent = useContext(IframeParentContext);
    const selectedColor = (userContext.getCurrentProduct().color).toString();

    const { recommendedSize, loading, error } = useCreateAnalytic(
        userContext.getCurrentProduct().id,
        store.get('measurements').id,
    );

    useEffect(() => {
        if (
            recommendedSize &&
            recommendedSize.size !== 'no match' &&
            iframeParent.recommendedSize
        ) {
            iframeParent.recommendedSize(recommendedSize);
        }
    }, [recommendedSize, userContext, iframeParent]);

    const addToCart = () => {
        if (iframeParent.addToCart) {
            iframeParent.addToCart(recommendedSize as CreateAnalyticResponse);
        }
    };

    if (error) {
        return (
            <Center>
                Oops. Something went wrong.<br></br> We&apos;re working on
                getting this fixed as soon as we can.
            </Center>
        );
    } else if (loading) {
        return (
            <Center>
                <CircleSpinner size={30} color={selectedColor} loading={loading} />
            </Center>
        );
    } else {
        if (recommendedSize && recommendedSize.size) {
            return (
                <StyledRecomendedFitExplanation>
                    <h1 className={'recommended-fit-title'}>
                        {i18n.recommendedFitTitle}
                    </h1>
                    {/*
                    <div className={'recommended-fit-subtitle'}>
                        // {i18n.recommendedFitSubtitle}
                        //{' '}
                    </div>
                    */}
                    <SizeContainer size={recommendedSize.size} />
                    <div
                        className={'change-measurements'}
                        onClick={props.callBack}
                    >
                        {i18n.recommendedFitChangeMeasurement}
                    </div>
                    <Button onClick={addToCart} text={i18n.addToCart} />
                </StyledRecomendedFitExplanation>
            );
        } else {
            return (
                <StyledNoFitExplanation>
                    <div className={'nofit-title'}>{i18n.noFitExplanation}</div>
                    <div
                        className={'change-measurements'}
                        onClick={props.callBack}
                    >
                        {i18n.recommendedFitChangeMeasurement}
                    </div>
                </StyledNoFitExplanation>
            );
        }
    }
};

const StyledSizeContainer = styled.div<any>`
    border-radius: 5px;
    border: solid 1px lightgrey;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
        color: ${props => props.theme.mainColor};
    }

    @media only screen and (max-width: 768px) {
        padding: 3vw;
    }

    @media only screen and (min-width: 769px) {
        padding: 1vw;
    }
`;

interface SizeContainerProps {
    size: string;
}

const SizeContainer = (props: SizeContainerProps) => {
    const { i18n } = useContext(I18nContext);
    const userContext = useContext(UserContext);
    const selectedColor = (userContext.getCurrentProduct().color);

    return (
        <StyledSizeContainer selectedColor={selectedColor}>
            <div>{i18n.recommendedFitSizeTitle}</div>
            <h2>{props.size}</h2>
        </StyledSizeContainer>
    );
};

const StyledRecommendedFit = styled.div`
    display: grid;
    align-items: center;

    img {
        width: 40vmin;
    }

    @media (orientation: portrait) {
        @media only screen and (max-width: 768px) {
            grid-template-rows: 50% 50%;
            height: 100%;
            width: 90%;
            margin: auto;

            > div {
                height: 70%;
            }
        }

        @media only screen and (min-width: 769px) {
            grid-template-columns: 50% 50%;
            height: 60%;
            margin-top: auto;
            margin-bottom: auto;
        }
    }

    @media (orientation: landscape) {
        @media only screen and (max-height: 768px) {
            grid-template-columns: 50% 50%;
            width: 90%;
            height: 100%;
            margin: auto;
        }

        @media only screen and (min-height: 769px) {
            grid-template-columns: 50% 50%;
            height: 60%;
            margin-top: auto;
            margin-bottom: auto;
        }
    }
`;

export const RecommendedFit: FC<unknown> = () => {
    const routeContext = useContext(RouteContext);
    const userContext = useContext(UserContext);

    return (
        <StyledHeaderAndFooter showProduct={false}>
            <StyledRecommendedFit>
                <div className="product">
                    <Product product={userContext.getCurrentProduct()} />
                </div>
                <RecomendedFitExplanation
                    callBack={routeContext.goToFirstSizeMeasurementStep}
                />
            </StyledRecommendedFit>
        </StyledHeaderAndFooter>
    );
};

export default RecommendedFit;

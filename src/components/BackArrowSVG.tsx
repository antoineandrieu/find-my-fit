import { FC } from 'react';

interface ImgProps {
    width: number;
    height: number;
    opacity: number;
}

const BackArrowSVG: FC<ImgProps> = (props: ImgProps) => {
    const { width, height, opacity } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity={opacity}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.81077 7.75006L8.53044 12.4697L7.46978 13.5304L0.939453 7.00006L7.46978 0.469727L8.53044 1.53039L3.81077 6.25006H14.7501V7.75006H3.81077Z"
                fill="#0B0B0F"
            />
        </svg>
    );
};

export default BackArrowSVG;

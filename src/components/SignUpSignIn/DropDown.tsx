import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { DropDownItem } from "../../Models";

const StyledDropDown = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    .dd-header {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        height: 2em;
        align-items: center;
    }
    .dd-list {
        background: #ffffff;
        border: 1px solid #e9eff2;
        border-radius: 4px;
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        width: 100%;
        max-height: 30vh;
        overflow: auto;
        z-index: 100;
        .element {
            padding: 2vh;
            text-align: center;
            border-bottom: 1px solid #e9eff2;
        }
    }
    .close {
        display: none;
    }
`;

interface DropDownProps {
    title: string;
    items: DropDownItem[];
    callBack: (item: DropDownItem) => void;
}

const DropDown = (props: DropDownProps) => {
    const [listOpen, setListOpen] = useState(false);
    return (
        <StyledDropDown>
            <div
                className="dd-header"
                onClick={() => {
                    setListOpen(!listOpen);
                }}
            >
                <div className="dd-header-title">{props.title}</div>
                <div>
                    <ChevronSVG open={listOpen} />
                </div>

                <div className={`dd-list ${listOpen ? "open" : "close"}`}>
                    {props.items.map((item: DropDownItem) => (
                        <div
                            className="element"
                            key={item.id}
                            onClick={() => {
                                props.callBack(item);
                            }}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
        </StyledDropDown>
    );
};

interface ChevronSVGProps {
    open: boolean;
}

const ChevronSVG = (props: ChevronSVGProps) => (
    <svg
        transform={props.open ? "scale(1,-1)" : ""}
        width="24"
        height="24"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.64648 3.64648L10.3536 4.35359L6.00004 8.70714L1.64648 4.35359L2.35359 3.64648L6.00004 7.29293L9.64648 3.64648Z"
            fill="#0B0B0F"
        />
    </svg>
);

export default DropDown;

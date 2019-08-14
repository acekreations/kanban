import React from "react";

function ColorMarker(props) {
    return (
        <li
            className={`colorMarker${props.colorClass}`}
            onClick={() => props.updateColor(props.colorClass)}
        >
            {props.children}
        </li>
    );
}

export default ColorMarker;

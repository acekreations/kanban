import React from "react";

function ColorMarker(props) {
    return <li className={props.colorClass}>{props.children}</li>;
}

export default ColorMarker;

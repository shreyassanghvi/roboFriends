import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll",border: "2px solid black", padding: "5px",height:"720px"}}>
            {props.children}
        </div>
    );
};
export default Scroll;
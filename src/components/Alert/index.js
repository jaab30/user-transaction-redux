import React from "react";

function Alert(props) {

    return (
        <div className="alert alert-success mt-3 mb-3" role="alert">{props.children}</div>
    )
}

export  default Alert;
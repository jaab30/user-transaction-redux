import React from "react";


export function Form(props) {
        
    return (
            <form {...props}>{props.children}</form>
        )
}

export function Input(props) {
        
    return (
            <input className="form-control" {...props}/>
        )
}
export function Submit(props) {

        return (
            <button type="submit" className="btn btn-primary">{props.children}</button>
        )
}
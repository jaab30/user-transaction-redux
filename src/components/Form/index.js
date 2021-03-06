import React from "react";


export function Form(props) {
        
    return (
            <form {...props}>{props.children}</form>
        )
}

export function Input(props) {
        
    return (
            <input className="form-control inputRound" {...props}/>
        )
}
export function TextArea(props) {
        
    return (
            <textarea className="form-control textRound" {...props}></textarea>
        )
}
export function Submit(props) {

        return (
            <button type="submit" className={`btn btn-${props.color}`}>{props.children}</button>
        )
}
export function Button(props) {

        return (
            <button {...props} className={`btn btn-${props.color}`}>{props.children}</button>
        )
}
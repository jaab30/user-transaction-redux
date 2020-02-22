import React from "react";

function Jumbotron({title, text}) {


    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{text}</p>
            </div>
        </div>


    )

}

export default Jumbotron;
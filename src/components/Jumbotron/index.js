import React from "react";

function Jumbotron({title, text}) {


    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-5">{title}</h1>
                <p className="lead">{text}</p>
            </div>
        </div>


    )

}

export default Jumbotron;
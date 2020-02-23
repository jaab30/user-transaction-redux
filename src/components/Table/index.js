import React from "react";


function Table({ children }){

    return (
        <table className="table">{ children }</table>
    )
}
function Thead({ children }){

    return (
        <thead>{ children }</thead>
    )
}
function Th({ children }){

    return (
        <th scope="col">{ children }</th>
    )
}
function Tbody({ children }){

    return (
        <tbody>{ children }</tbody>
    )
}


function Tr({ children }){

    return (
        <tr>{ children }</tr>
    )
}

function Td({ children }){
    return (
        <td className="td">{ children }</td>
    )
}

export { Table, Thead, Th, Tbody, Tr, Td };
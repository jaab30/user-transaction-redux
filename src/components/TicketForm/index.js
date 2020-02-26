import React, { useState } from "react";
import { Form, Input, TextArea, Submit } from "../Form";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction, ticketSwitch } from "../../actions";


function TicketForm() {

    const transaction = useSelector(state => state.transactionReducer);
    const chosen = useSelector(state => state.chosenReducer);
    const ticketBoolean = useSelector(state=>state.ticketSwitchReducer)
    const dispatch = useDispatch();
    

    const [ticketId, setTicketId] = useState(`${chosen.username}-000${Math.floor(Math.random()*1000 + 1)}`);
    const [date, setDate] = useState(Date.now());
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [followUp, setFollowUp] = useState("");
    const [showForm, setShowForm] = useState(ticketBoolean)

    const onSubmitForm = (e) => {
        e.preventDefault();

        dispatch(addTransaction({
            userId: chosen.id,
            ticketId,
            date,
            subject,
            description,
            followUp
        }))
        setShowForm(!showForm)
        const dispatchFunc = () => {
            return dispatch(ticketSwitch(!ticketBoolean))
        }
        setTimeout(dispatchFunc, 2000 )
    }
    return (
        <React.Fragment>
            {showForm ? 
            <Form
            onSubmit={onSubmitForm}
            >       
                <p>TICKET ID: {ticketId}</p>
                <p>Date: {date} </p>
                <p>Subject:</p>
                <Input 
                    type="text"
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                    placeholder="Enter Subject"
                />
                <p>Description:</p>
                <TextArea 
                    type="textarea"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    placeholder="Enter Description"
                />
                <p>Follow Up:</p>
                <TextArea  
                    type="textarea"
                    value={followUp}
                    onChange={(e)=>setFollowUp(e.target.value)}
                    placeholder="Enter Follow Up"
                />
                <Submit color="success">Submit</Submit>
            </Form> :
            <h3> Ticket Submitted. Thanks..! </h3>}
        </React.Fragment>
    )
}

export default TicketForm;

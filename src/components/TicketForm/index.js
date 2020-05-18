import React, { useState } from "react";
import Moment from 'react-moment';
import Alert from "../../components/Alert";
import { Form, Input, TextArea, Submit } from "../Form";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction, ticketSwitch } from "../../actions";


function TicketForm() {

    const chosen = useSelector(state => state.chosenReducer);
    const ticketBoolean = useSelector(state => state.switchReducer)
    const dispatch = useDispatch();

    const [ticketId] = useState(`${chosen.username}-000${Math.floor(Math.random() * 1000 + 1)}`);
    const [date] = useState(Date.now());
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [followUp, setFollowUp] = useState("");
    const [showForm, setShowForm] = useState(ticketBoolean.ticket);
    const [showAlert, setShowAlert] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!subject || !description) {
            setShowAlert(true);
        } else {
            dispatch(addTransaction({
                userId: chosen.id,
                ticketId,
                date,
                subject,
                description,
                followUp
            }))
            setShowForm(!showForm)
            dispatch(ticketSwitch(!ticketBoolean.ticket))
        }
    }

    // const dateToFormat = date;
    return (
        <React.Fragment>
            {showAlert ? <Alert>Please Enter Subject and Description</Alert> : ""}
            {showForm ?
                <Form
                    className="tixForm"
                    onSubmit={onSubmitForm}
                >
                    <p>TICKET ID: {ticketId}</p>
                    <p>Date: <Moment format="MMMM Do YYYY, h:mm a">{date}</Moment></p>
                    <p>Subject:</p>
                    <Input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter Subject"
                    />
                    <p>Description:</p>
                    <TextArea
                        type="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Description"
                    />
                    <p>Follow Up:</p>
                    <TextArea
                        type="textarea"
                        value={followUp}
                        onChange={(e) => setFollowUp(e.target.value)}
                        placeholder="Enter Follow Up"
                    />
                    <Submit color="success mt-3">Submit</Submit>
                </Form> : ""}
        </React.Fragment>
    )
}

export default TicketForm;

import React, { useState } from "react";
import Moment from 'react-moment';
import Alert from "../../components/Alert";
import { Form, Input, TextArea, Submit } from "../Form";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction, editSwitch } from "../../actions";


function EditForm({ transId }) {

    const transaction = useSelector(state => state.transactionReducer);
    const chosen = useSelector(state => state.chosenReducer);
    const chosenTransaction = transaction.filter(item=> item.ticketId === transId);
    const ticketBoolean = useSelector(state=>state.switchReducer);
    const dispatch = useDispatch();

    const [ticketId] = useState(chosenTransaction[0].ticketId);
    const [date] = useState(chosenTransaction[0].date);
    const [subject, setSubject] = useState(chosenTransaction[0].subject);
    const [description, setDescription] = useState(chosenTransaction[0].description);
    const [followUp, setFollowUp] = useState(chosenTransaction[0].followUp);
    const [showForm, setShowForm] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!subject || !description){
            setShowAlert(true);
        } else {

            let index = transaction.findIndex(item=>item.ticketId === chosenTransaction[0].ticketId)
            transaction.splice(index, 1)

            dispatch(addTransaction({
                userId: chosen.id,
                ticketId,
                date,
                subject,
                description,
                followUp
            }))
            setShowForm(!showForm)
            }
            dispatch(editSwitch(!ticketBoolean.edit))
        }

    const dateToFormat = date;
    return (
        <React.Fragment>
            { showAlert ? <Alert>Please Enter Subject and Description</Alert> : "" }
            {showForm ? 
            <Form
            onSubmit={onSubmitForm}
            >       
            <h2>Edit Transaction</h2>
                <p>TICKET ID: {ticketId}</p>
                <p>Date: <Moment format="MMMM Do YYYY, h:mm a">{dateToFormat}</Moment></p>
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
            </Form> : ""}
        </React.Fragment>
    )
}

export default EditForm;

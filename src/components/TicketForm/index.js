import React from "react";
import { Form, Input, TextArea, Submit } from "../Form";


function TicketForm() {

    
    return (
        <>
            <Form
            // onSubmit={}
        >       <p>TICKET ID: </p>
                <p>Date:</p>
                <p>Subject:</p>
                <Input 
                    type="text"
                    // value={username}
                    // onChange={(e)=>setUsername(e.target.value)}
                    placeholder="Enter Subject"
                />
                <p>Description:</p>
                <TextArea 
                    type="textarea"
                    // value={email}
                    // onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter Description"
                />
                <p>Follow Up:</p>
                <TextArea  
                    type="textarea"
                    // value={firstName}
                    // onChange={(e)=>setFirstName(e.target.value)}
                    placeholder="Enter Follow Up"
                />
                <Submit>Submit</Submit>
            </Form>
        </>





    )
}

export default TicketForm;

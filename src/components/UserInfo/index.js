import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Submit } from "../../components/Form";
import { Row, Col } from "../../components/Container";
import { updateSwitch } from "../../actions"



function UserInfo() {

    const chosen = useSelector(state => state.chosenReducer);
    const ticketBoolean = useSelector(state=>state.switchReducer)
    const dispatch = useDispatch();

    const [firstName] = useState(chosen.firstName ? chosen.firstName : "");
    const [lastName] = useState(chosen.lastName ? chosen.lastName : "");
    const [phone] = useState(chosen.phone ? chosen.phone : "");
    const [location] = useState(chosen.location ? chosen.location : "");
    const [chosenUser] = useState(chosen)

 
    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSwitch(!ticketBoolean.update))

    }

    return (
        
          <Row>
                <Col className="col-12">
                    <Form
                    className="userInfo"
                    onSubmit={onFormSubmit}>
                        <p><strong>Username:</strong> {chosenUser.username}</p>
                        <p><strong>email:</strong> {chosenUser.email}</p>
                        <p><strong>First Name:</strong> {firstName ? firstName : chosenUser.firstName}</p>
                        <p><strong>Last Name:</strong> {lastName ? lastName : chosenUser.lastName}</p>
                        <p><strong>Phone Number:</strong> {phone ? phone : chosenUser.phone}</p>
                        <p><strong>Location:</strong> {location ? location : chosenUser.location}</p>
                        <Submit 
                        color="success">Update
                        </Submit>
                    </Form>
                </Col>
            </Row>
    )
}

export default UserInfo;
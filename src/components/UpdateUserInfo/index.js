import React, { useState } from "react";
import { Form, Input, Submit} from "../../components/Form";
import { Row, Col } from "../../components/Container";
import { useSelector, useDispatch } from "react-redux";
import { newUser, updateSwitch, currentUser } from "../../actions";


function UpdateUserInfo() {
    const user = useSelector(state => state.userReducer);
    const chosen = useSelector(state => state.chosenReducer);
    const ticketBoolean = useSelector(state=>state.switchReducer)
    const dispatch = useDispatch();


    const [username, setUsername] = useState(chosen.username);
    const [email, setEmail] = useState(chosen.email);
    const [firstName, setFirstName] = useState(chosen.firstName ? chosen.firstName : "");
    const [lastName, setLastName] = useState(chosen.lastName ? chosen.lastName : "");
    const [phone, setPhone] = useState(chosen.phone ? chosen.phone : "");
    const [location, setLocation] = useState(chosen.location ? chosen.location : "");

    const onUpdateSubmit = (e) => {
        e.preventDefault();

        let index = user.findIndex(item=>item.id === chosen.id)
        user.splice(index, 1)

        dispatch(newUser({
            id: chosen.id,
            username,
            email,
            firstName,
            lastName,
            phone,
            location
        }))
        dispatch(currentUser({
            id: chosen.id,
            username,
            email,
            firstName,
            lastName,
            phone,
            location
        }))

        dispatch(updateSwitch(!ticketBoolean.update))
    }
    

    return (
        
            <Row>
                <Col 
                className="col-6"
                >
                    <Form
                    onSubmit={onUpdateSubmit}
                    >   
                        <p>Username:</p>
                        <Input 
                            type="text"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            placeholder="Enter Username"
                        />
                        <p>email:</p>
                        <Input 
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                        <p>First Name:</p>
                        <Input 
                            type="text"
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            placeholder="Enter First Name"
                        />
                        <p>Last Name:</p>
                        <Input 
                            type="text"
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            placeholder="Enter Last name"
                        />
                        <p>Phone Number:</p>
                        <Input 
                            type="phone"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            placeholder="Enter Phone Number ex. 4072223344"
                        />
                        <p>Location:</p>
                        <Input 
                            type="text"
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                            placeholder="Enter State"
                        />
                        <Submit>Submit</Submit>
                    </Form>
                </Col>
            </Row>
        

    )

}

export default UpdateUserInfo;
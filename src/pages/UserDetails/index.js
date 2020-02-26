import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Jumbotron from "../../components/Jumbotron";
import { Form, Input, Submit, Button} from "../../components/Form";
import { Container, Row, Col } from "../../components/Container";
import { newUser, ticketSwitch } from "../../actions";
import TicketView from "../../components/TicketView"
import TicketForm from "../../components/TicketForm";

function UserDetails () {

    const user = useSelector(state => state.userReducer);
    const chosen = useSelector(state => state.chosenReducer);
    const ticketBoolean = useSelector(state=>state.ticketSwitchReducer)
    const dispatch = useDispatch();
   
    const [username, setUsername] = useState(chosen.username);
    const [email, setEmail] = useState(chosen.email);
    const [firstName, setFirstName] = useState(chosen.firstName ? chosen.firstName : "");
    const [lastName, setLastName] = useState(chosen.lastName ? chosen.lastName : "");
    const [phone, setPhone] = useState(chosen.phone ? chosen.phone : "");
    const [location, setLocation] = useState(chosen.location ? chosen.location : "");
    const [isUpdate, setIsUpdate] = useState(false)
   

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, firstName, lastName, phone, location)
        setIsUpdate(true)

    }
    const onUpdateSubmit = (e) => {
        e.preventDefault();
        setIsUpdate(false)

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
    }

    const onTicketSubmit = (e) => {
        console.log("yes");
        e.preventDefault();
        dispatch(ticketSwitch(!ticketBoolean));
      }


    const updateUserInfo = () => {

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
    const userInfo = () => {

        return (
            
                <Row>
                    <Col className="col-6">
                        <Form
                        onSubmit={onFormSubmit}>
                            <p><strong>Username:</strong> {chosen.username}</p>
                            <p><strong>email:</strong> {chosen.email}</p>
                            <p><strong>First Name:</strong> {firstName ? firstName : chosen.firstName}</p>
                            <p><strong>Last Name:</strong> {lastName ? lastName : chosen.lastName}</p>
                            <p><strong>Phone Number:</strong> {phone ? phone : chosen.phone}</p>
                            <p><strong>Location:</strong> {location ? location : chosen.location}</p>
                            <Submit 
                            color="success">Update
                            </Submit>
                        </Form>
                    </Col>
                </Row>
           
        )
    }
    
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className="col-6 text-center">
                        <Jumbotron
                        title={"Welcome " + chosen.username} 
                        text="Please review and Update your user information"
                        />
                    </Col>
                    <Col 
                        className="col-6 text-center"
                        >
                        <Jumbotron
                        title={"Your Tickets"} 
                        text="View and Create Tickets"
                        />
                    </Col>
                </Row>
                <Row>
                <Col className="col-6">
                    {isUpdate ? updateUserInfo() : userInfo()}
                </Col>
                <Col className="col-6">
                    <Form onSubmit={onTicketSubmit}>
                        <Submit 
                        color="warning"
                        >
                        Create Ticket
                        </Submit>
                    </Form>
                    {ticketBoolean ? <TicketForm /> : ""}
                    <TicketView />
                </Col>

                </Row>
            


                <Link to="/"><Button color="primary">BACK</Button></Link>
            </Container>
        </React.Fragment>
    )


}

export default UserDetails;
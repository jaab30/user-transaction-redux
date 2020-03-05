import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Jumbotron from "../../components/Jumbotron";
import { Form, Submit, Button} from "../../components/Form";
import { Container, Row, Col } from "../../components/Container";
import { ticketSwitch } from "../../actions";
import TicketList from "../../components/TicketList"
import TicketForm from "../../components/TicketForm";
import UserInfo from "../../components/UserInfo";
import UpdateUserInfo from "../../components/UpdateUserInfo";

function UserDetails () {

    const chosen = useSelector(state => state.chosenReducer);
    const ticketBoolean = useSelector(state=>state.switchReducer)
    const dispatch = useDispatch();

    const onTicketSubmit = (e) => {
        e.preventDefault();
        dispatch(ticketSwitch(!ticketBoolean.ticket));
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
                
                <Col className="col-6 userInfo">
                    <Link to="/"><Button color="danger mb-3">Log Out</Button></Link>
                    {ticketBoolean.update ? <UpdateUserInfo/> : <UserInfo/>}
                </Col>
                <Col className="col-6 userInfo">
                    <Form 
                    className="updateForm"
                    onSubmit={onTicketSubmit}>
                    {ticketBoolean.ticket ?
                        <Submit 
                        color="primary"
                        >
                        X
                        </Submit> : 
                        <Submit 
                        color="warning"
                        >
                        Create Ticket
                        </Submit> }
                    </Form>
                    {ticketBoolean.ticket ? <TicketForm /> : ""}
                    <TicketList />
                </Col>
                </Row>
                
            </Container>
        </React.Fragment>
    )
}

export default UserDetails;
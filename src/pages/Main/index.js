import React, { useState }from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Submit } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { Container, P } from "../../components/Container";
import Alert from "../../components/Alert";
import { useSelector, useDispatch } from "react-redux";
import { newUser, currentUser } from "../../actions";
import "./style.css"




function Main () {

        const user = useSelector(state => state.userReducer);
        const dispatch = useDispatch();
        const history = useHistory();

        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [ showAlert, setShowAlert] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!username || !email){
                // alert('Please Enter Username and Email')
                setShowAlert(true);
            } else {
                let chosen;
                user.forEach(item => {
                if (item.username === username && item.email === email){
                    chosen = item;
                }
                })
                
                if (chosen){
                dispatch(currentUser(chosen))
                history.push("/details");

                } else {
                    let lastItem = user.slice(-1)[0]
                    dispatch(newUser({
                    id: user.length ? lastItem.id + 1 : 1,
                    username: username,
                    email: email
                }))
                
                dispatch(currentUser({
                    id: user.length ? lastItem.id + 1 : 1,
                    username: username,
                    email: email
                }))
                setShowAlert(false);
                history.push("/details");
                }
                
            }
            
        }


    return (
        <React.Fragment>
            <Jumbotron
            title= {"User Registration"}
            text= {"Please Enter Your Credentials"} 
            />
            <Container>
                <Form
                className="mx-auto logInForm"
                onSubmit={handleSubmit}
                >
                    <P className="p_login">Username:</P>
                    <Input 
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder="Enter Username"
                    />
                    <P className="p_login">Email:</P>
                    <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter email"
                    />
                    <Submit
                    color="primary round"
                    >Submit</Submit>
                    { showAlert ? <Alert>Please Enter Username and Email</Alert> : "" }
                </Form>
                
            </Container>
        </React.Fragment>

    )




}

export default Main;
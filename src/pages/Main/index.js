import React, { useState }from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Submit } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Container from "../../components/Container";
import { useSelector, useDispatch } from "react-redux";
import { newUser, currentUser } from "../../actions";




function Main () {

        const user = useSelector(state => state.userReducer);
        const dispatch = useDispatch();
        const history = useHistory();

        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
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
            dispatch(newUser({
                id: user.length ? user[user.length - 1].id + 1 : 1,
                username: username,
                email: email
            }))
            
            dispatch(currentUser({
                id: user.length ? user[user.length - 1].id + 1 : 1,
                username: username,
                email: email,
                other: []
            }))
            history.push("/details");
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
                onSubmit={handleSubmit}
                >
                    Username:
                    <Input 
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder="Enter Username"
                    />
                    eMail:
                    <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter email"
                    />
                    <Submit>Submit</Submit>
                </Form>
            </Container>
        </React.Fragment>

    )




}

export default Main;
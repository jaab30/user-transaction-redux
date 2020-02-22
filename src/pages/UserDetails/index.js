import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Jumbotron from "../../components/Jumbotron";
import {Form, Input, Submit} from "../../components/Form";
import Container from "../../components/Container";
import { newUser } from "../../actions";

function UserDetails () {

    const user = useSelector(state => state.userReducer);
    const chosen = useSelector(state => state.chosenReducer);
    const dispatch = useDispatch();
   
    const [username, setUsername] = useState(chosen.username);
    const [email, setEmail] = useState(chosen.email);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
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


    const updateUserInfo = () => {

        return (
            <Container>
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
            </Container>

        )

    }
    const userInfo = () => {

        return (
            <Container>
                <Form
                onSubmit={onFormSubmit}>
                    <p>Username:</p>
                    <p>{chosen.username}</p>
                    <p>email:</p>
                    <p>{chosen.email}</p>
                    <p>First Name:</p>
                    <p>{firstName}</p>
                    <p>Last Name:</p>
                    <p>{lastName}</p>
                    <p>Phone Number:</p>
                    <p>{phone}</p>
                    <p>Location:</p>
                    <p>{location}</p>
                    <Submit>Update</Submit>
                </Form>
            </Container>
        )
    }
    
    return (
        <React.Fragment>
            <Jumbotron
            title={"Welcome " + chosen.username} 
            text="Please review and Update your user information"
            />
            {isUpdate ? updateUserInfo() : userInfo()}


        <Link to="/"><button>BACK</button></Link>
        </React.Fragment>
    )


}

export default UserDetails;
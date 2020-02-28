import React, {useState, useEffect} from "react";
import { Table, Thead, Th, Tbody, Tr, Td } from "../Table";
// import { Form, Input, Submit, Button} from "../../components/Form";
import { Button } from "../Form";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction, ticketSwitch } from "../../actions";
import EditForm from "../EditForm";


function TicketList() {
    console.log("TRANSACTION");
    
    const transactions = useSelector(state => state.transactionReducer);
    const chosen = useSelector(state => state.chosenReducer);
    // const ticketBoolean = useSelector(state=>state.ticketSwitchReducer)
    const dispatch = useDispatch();

    const [isDeleted, setisDeleted] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);
    const [chosenTransId, setChosenTransId ] = useState("");
    const userTransactions = transactions.filter(item => item.userId === chosen.id);

    const onDelete = (tixId) => {
     
        let index = transactions.findIndex(item=>item.ticketId === tixId)
        transactions.splice(index, 1)
        dispatch(deleteTransaction(transactions))
        setisDeleted(!isDeleted)
    }

    const onEdit = (id) => {
        setChosenTransId(id)
        setIsEditForm(!isEditForm);
        
        // dispatch(ticketSwitch(!ticketBoolean))
    }

    return (
        <>
            {isEditForm ? <EditForm transId={chosenTransId}/> : ""}
            <Table>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date</Th>
                        <Th>Subject</Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {userTransactions.map((transaction, i) =>{
                    return(
                        <Tr key={i}>
                            <Td>{transaction.ticketId}</Td>
                            <Td>{transaction.date}</Td>
                            <Td>{transaction.subject}</Td>
                            <Td><Button onClick={() => onEdit(transaction.ticketId)} color="success">Edit</Button></Td>
                            <Td><Button onClick={() => onDelete(transaction.ticketId)}color="danger">Delete</Button></Td>
                            
                        </Tr>
                    )
                })}
                </Tbody>
            </Table>
            
            </>
    )
}

export default TicketList;

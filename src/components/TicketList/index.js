import React, { useState } from "react";
import Moment from 'react-moment';
import { Table, Thead, Th, Tbody, Tr, Td } from "../Table";
import { Button } from "../Form";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction, editSwitch } from "../../actions";
import EditForm from "../EditForm";


function TicketList() {

    const transactions = useSelector(state => state.transactionReducer);
    const chosen = useSelector(state => state.chosenReducer);
    const ticketBoolean = useSelector(state => state.switchReducer);
    const dispatch = useDispatch();

    const [isDeleted, setisDeleted] = useState(false);
    const [chosenTransId, setChosenTransId] = useState("");
    const userTransactions = transactions.filter(item => item.userId === chosen.id);

    const onDelete = (tixId) => {

        let index = transactions.findIndex(item => item.ticketId === tixId)
        transactions.splice(index, 1)
        dispatch(deleteTransaction(transactions))
        setisDeleted(!isDeleted)
    }

    const onEdit = (id) => {
        setChosenTransId(id)
        dispatch(editSwitch(!ticketBoolean.edit));
    }

    return (

        <>
            {ticketBoolean.edit ? <EditForm transId={chosenTransId} /> : ""}
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
                    {userTransactions.map((transaction, i) => {
                        const dateToFormat = transaction.date;
                        return (
                            <Tr key={i}>
                                <Td>{transaction.ticketId}</Td>
                                <Td><Moment format="MMMM Do YYYY">{dateToFormat}</Moment></Td>
                                <Td>{transaction.subject}</Td>
                                <Td><Button onClick={() => onEdit(transaction.ticketId)} color="success">Edit</Button></Td>
                                {ticketBoolean.edit ? "" :
                                    <Td><Button onClick={() => onDelete(transaction.ticketId)} color="danger">Delete</Button></Td>
                                }


                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>

        </>
    )
}

export default TicketList;

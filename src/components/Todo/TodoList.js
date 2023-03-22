import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Todo from './Todo';
import { connect } from "react-redux";

function TodoList({ todoList }) {
    if (!todoList || todoList.length === 0) {
        return <p> No data to display. </p>
    }
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell> First Name </TableCell>
                    <TableCell> Last Name </TableCell>
                    <TableCell> Email </TableCell>
                    <TableCell> Todo </TableCell>
                    <TableCell> Action </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    todoList.map((todo) => <Todo key={todo.id} todo={todo} />)
                }
            </TableBody>
        </Table>
    )
}

const mapStateToProps = (state) => ({
    todoList: state.todos
})

export default connect(mapStateToProps, null)(TodoList)
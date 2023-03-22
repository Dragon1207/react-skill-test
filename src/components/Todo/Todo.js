import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";
import { deleteTodo } from "./action/todoAction";
import { connect } from "react-redux";

function Todo({ todo, deleteTodo }) {
    return (
        <TableRow>
            <TableCell> {todo.firstName} </TableCell>
            <TableCell> {todo.lastName} </TableCell>
            <TableCell> {todo.email} </TableCell>
            <TableCell> {todo.todo} </TableCell>
            <TableCell>
                <Button color="error" onClick={(e) => deleteTodo(todo.id)}>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    )
}

const mapDispatchToProps = {
    deleteTodo,
}

export default connect(null, mapDispatchToProps)(Todo);
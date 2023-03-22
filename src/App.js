import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'
import TodoList from './components/Todo/TodoList'

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const [todoList, setTodoList] = React.useState([]);
	const handleOnClick = (page) => {
		console.log('open');
		if (!openForm) {
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};

	const addTodo = (todo) => {
		setTodoList([...todoList, { id: Math.random(), ...todo }]);
	}

	const deleteTodo = (todoId) => {
		setTodoList(todoList.filter(todo => todo.id !== todoId));
	}

	return (
		<Container maxWidth="sm">
			<AccountMenu onClick={handleOnClick} />
			{openForm && <BasicForm addTodo={addTodo} />}
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					React Skills test
				</Typography>
			</Box>
			<TodoList todoList={todoList} deleteTodo={deleteTodo} />
		</Container>
	);
}

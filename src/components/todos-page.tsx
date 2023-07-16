import React, { FC, useEffect, useState } from "react"
import { ITodos } from "../types/types";
import axios from "axios";
import List from "./list.tsx";
import TodoItem from "./todo-item.tsx";

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodos>([]);

	useEffect(() => {
		fetchTodos();
	}, [])

	const fetchTodos = async () => {
		try {
			const request = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos');
			setTodos(request.data);
		} catch (err) {
			console.error(err)
		}
	}

	return (<div>
		<List items={todos} renderItem={(todo: ITodos) => <TodoItem todo={todo} key={todo.id} />} />
	</div>);
}

export default TodosPage;
import React, { FC, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { IUsers } from "../types/types";
import axios from "axios";
import List from "./list.tsx";
import UserItem from "./user-item.tsx";

const UserPage: FC = () => {
	const [users, setUsers] = useState<IUsers>([]);
	const history = useHistory();

	useEffect(() => {
		fetchUsers();
	}, [])

	const fetchUsers = async () => {
		try {
			const request = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users');
			setUsers(request.data);
		} catch (err) {
			console.error(err)
		}
	}

	return (<div>
		<List items={users} renderItem={(user: IUsers) =>
			<UserItem
				user={user}
				key={user.id}
				onClick={(user) => history.push(`/users/${user.id}`)}
			/>}
		/>
	</div>);
}

export default UserPage;
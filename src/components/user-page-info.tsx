import React, { FC, useEffect, useState } from "react"
import { IUsers } from "../types/types";
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';

interface UserPageParams {
	id: number
}

const UserPageInfo: FC = () => {
	const [user, setUser] = useState<IUsers | null>(null);
	const params = useParams<UserPageParams>();
	const history = useHistory()

	useEffect(() => {
		fetchUser();
	}, [])

	const fetchUser = async () => {
		try {
			const request = await axios.get<IUsers[]>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
			setUser(request.data);
		} catch (err) {
			console.error(err)
		}
	}

	return (<div>
		<span onClick={() => history.push('/users')}>Назад к пользователям</span>
		<h2>Это страница: {user?.name} / {user?.username}</h2>
		<p>Email: {user?.email}</p>
	</div>);
}

export default UserPageInfo;
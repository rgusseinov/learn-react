interface IUsersAdress {
	street: string
	suite: string
	city: string
	zipcode: string
}

export interface IUsers {
	id: number
	name: string
	username: string
	email: string
	address: string
}

export interface ITodos {
	userId: number
	id: number
	title: string
	completed: boolean
}

import React, { FC } from "react";
import { IUsers } from "../types/types";
import UserItem from "./user-item.tsx";

interface UserListProps {
  users: IUsers[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => <UserItem key={user.id} user={user} />)}
    </>
  )
}
export default UserList;
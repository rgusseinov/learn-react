import React, { FC } from "react";
import { IUsers } from "../types/types";

interface UserItemProps {
  user: IUsers
  onClick: (user: IUsers) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <>
      <ul style={{ padding: 15, border: '1px solid gray' }}>
        <li onClick={() => onClick(user)}>{user.name}</li>
        <li>{user.email}</li>
      </ul>
      <br />
    </>
  )
}
export default UserItem;

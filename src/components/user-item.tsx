import React, { FC } from "react";
import { IUsers } from "../types/types";

interface UserItemProps {
  user: IUsers
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
      <br />
    </>
  )
}
export default UserItem;

import React, { useState } from "react";
import { users as usersData } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper, StyledList } from "./UsersList.styles";

const UsersList = (props) => {
  const [users, setUsers] = useState(usersData);
  const [isLoading, setIsLoading] = useState(true);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem
            deleteUser={deleteUser}
            index={index}
            userData={userData}
            key={userData.name}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;

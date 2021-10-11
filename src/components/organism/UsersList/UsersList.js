import React, { useState } from "react";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper, StyledList, StyledTitle } from "./UsersList.styles";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button";
import Form from "../Form/Form";

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
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
    </>
  );
};

export default UsersList;

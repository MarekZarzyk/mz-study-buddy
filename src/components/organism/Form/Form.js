import React from "react";

import FormField from "components/molecules/FormField/FormField";
import { Wrapper, StyledTitle } from "../UsersList/UsersList.styles";
import { Button } from "components/atoms/Button/Button";

const Form = ({ handleAddUser, formData, handleInputChange }) => {
  return (
    <Wrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formData.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="averge"
        name="average"
        value={formData.average}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </Wrapper>
  );
};

export default Form;

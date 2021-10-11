import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UsersListItem.styles";
import DeleteButton from "components/atoms/deleteButton/DeleteButton";
import AverageGrade from "components/atoms/average/AverageGrade";
import PersonData from "components/atoms/personData/PersonData";

const UsersListItem = ({
  userData: { name, average, attendance = "0%" },
  deleteUser,
}) => {
  return (
    <Wrapper>
      <AverageGrade average={average} />
      <PersonData name={name} attendance={attendance} />
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

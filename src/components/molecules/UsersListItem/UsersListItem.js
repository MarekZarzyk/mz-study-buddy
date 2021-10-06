import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UsersListItem.styles";
import Button from "components/atoms/button/Button";
import AverageGrade from "components/atoms/average/AverageGrade";
import PersonData from "components/atoms/personData/PersonData";

const UsersListItem = ({ userData: { name, average, attendance = "0%" } }) => (
  <Wrapper>
    <AverageGrade average={average} />
    <PersonData name={name} attendance={attendance} />
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

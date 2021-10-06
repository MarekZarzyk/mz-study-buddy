import React from "react";
import { Wrapper } from "./PersonData.styles";

const PersonData = ({ name, attendance }) => {
  return (
    <Wrapper>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </Wrapper>
  );
};

export default PersonData;

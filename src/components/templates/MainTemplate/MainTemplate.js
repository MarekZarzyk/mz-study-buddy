import Navigation from "components/organism/Navigation/Navigation";
import React from "react";
import { Wrapper } from "./MinaTemplate.styles";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;

import React from "react";
import { Wrapper } from "./AverageGrade.styles";
// import PropTypes from "prop-types";

const AverageGrade = ({ average }) => {
  return <Wrapper value={Number(average)}>{average}</Wrapper>;
};

// AverageGrade.propTypes = {
//   average: PropTypes.string,
// };

export default AverageGrade;

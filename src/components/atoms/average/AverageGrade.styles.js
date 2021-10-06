import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ value, theme }) => {
    if (value < 3) {
      return theme.colors.error;
    } else if (value >= 4) {
      return theme.colors.success;
    } else {
      return theme.colors.warning;
    }
  }};

  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 20px;
`;

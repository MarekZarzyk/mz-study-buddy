import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 17px 20px 0;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    margin: 0;
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
  }
`;

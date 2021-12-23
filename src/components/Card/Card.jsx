import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #ffffff;
  width: 272px;
  height: 160px;
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

  padding: 22px 20px;
`;

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;

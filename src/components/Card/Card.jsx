import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #ffffff;
  width: 272px;
  height: 160px;
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  padding: 22px 20px;
  overflow-y: hidden;

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.2);
  }
`;

const Card = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import lightLogo from "../../images/logo-light.png";
import darkLogo from "../../images/logo-dark.png";

const StyledHeader = styled.div`
  > span {
    font-weight: 100;
    font-size: 26px;
    display: inline-block;
    vertical-align: middle;
    line-height: 28px;
    margin: 0 0 0 12px;
    padding: 0;
    color: ${(props) => (props.theme === "dark" ? "#333333" : "#FFFFFF")};
  }
`;

const Header = ({ theme }) => {
  return (
    <StyledHeader theme={theme}>
      <img src={theme === "dark" ? darkLogo : lightLogo} alt="Ioasys Logo" />
      <span>Books</span>
    </StyledHeader>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

Header.defaultProps = {
  theme: "light",
};

export default Header;

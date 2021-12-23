import styled from "styled-components";
import PropTypes from "prop-types";

// import loadingGif from "../../images/loading.gif";

const StyledButton = styled.button`
  height: fit-content;
  width: fit-content;
  font-weight: 500;
  cursor: pointer;
  border-radius: 44px;

  color: ${({ fnColor }) => fnColor};
  background: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};

  &:disabled {
    background: ${({ bgColor }) => `${bgColor}77`};
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  bgColor,
  fnColor,
  border,
  fontSize,
  padding,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      fnColor={fnColor}
      border={border}
      fontSize={fontSize}
      padding={padding}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  fnColor: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  bgColor: "#FFFFFFF",
  fnColor: "#B22E6F",
  border: "none",
  fontSize: "16px",
  padding: "6px 21px",
  disabled: false,
};

export default Button;

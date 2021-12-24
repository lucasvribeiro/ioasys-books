import styled from "styled-components";
import PropTypes from "prop-types";

// import loadingGif from "../../images/loading.gif";

const StyledButton = styled.button`
  font-weight: 500;
  cursor: pointer;

  color: ${({ fnColor }) => fnColor};
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius || "44px"};

  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};

  &:disabled {
    background-color: ${({ bgColor }) => `${bgColor}77`};
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  className,
  bgColor,
  fnColor,
  border,
  fontSize,
  padding,
  borderRadius,
  width,
  height,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      className={className}
      bgColor={bgColor}
      fnColor={fnColor}
      border={border}
      fontSize={fontSize}
      padding={padding}
      borderRadius={borderRadius}
      width={width}
      height={height}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  fnColor: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  bgColor: "#FFFFFF",
  fnColor: "#B22E6F",
  border: "none",
  fontSize: "16px",
  padding: "6px 21px",
  borderRadius: "44px",
  width: "fit-content",
  height: "fit-content",
  disabled: false,
};

export default Button;

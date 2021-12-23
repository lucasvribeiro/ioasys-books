import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  height: 44px;
  width: calc(368px - 40px);
  color: #ffffff;
  font-size: 16px;
  line-height: 16px;
  padding: 16px 20px 0 20px;

  background: rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  &::placeholder {
    color: #ffffff;
    opacity: 0.5;
  }

  &:not(:placeholder-shown) {
    + .input-label {
      font-size: 12px;
      top: 7px;
    }
  }

  &:focus {
    outline: none;
    border: none;

    + .input-label {
      font-size: 12px;
      top: 7px;
    }
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  font-size: 16px;
  color: #ffffff88;
  top: 23px;
  left: 20px;
  opacity: 1;

  transition: all 0.2s ease;
`;

const Input = ({ id, type, placeholder }) => {
  return (
    <StyledDiv>
      <StyledInput id={id} type={type} placeholder=" " />

      <StyledLabel for={id} className="input-label">
        {placeholder}
      </StyledLabel>
    </StyledDiv>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  id: "input",
  type: "text",
  placeholder: "Input",
};

export default Input;

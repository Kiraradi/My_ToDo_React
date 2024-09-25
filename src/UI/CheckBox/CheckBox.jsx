import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const CheckBox = (props) => {
 
  return (
    <StyledCheckBox>
      <label>
        <input
          type="checkbox"
          checked={props.active}
          onChange={props.onChange}
          className="checkbox"
        />
      </label>
    </StyledCheckBox>
  )}
 
export default CheckBox;

const StyledCheckBox = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;

    label{
      position: relative;
    }

    .checkbox {
      width: 30px;
      height: 30px;
      border: 2px solid ${COLORS.black};
      appearance: none;
      cursor: pointer;
      border-radius: 30px;
    }

    .checkbox:checked {
      background-color: ${COLORS.white};
    }

    .checkbox:checked {
      border: 2px solid ${COLORS.green};
    }
    .checkbox:checked::before {
      content: "";
      display: flex;
      width: 30px;
      height: 30px;
      position: absolute;
      top: 0;
      left: 0;      
      background-image: url('/icons/icon-check.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 23px;
    }
`; 

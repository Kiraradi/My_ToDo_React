import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

import checkImg from '../../images/icon-check.png';

const CheckBox = (props) => {
  const handleChange = () => {
    props.onChange(props.id);
  }
  return (
    <StyledCheckBox>
      <label>
        <input
          type="checkbox"
          checked={props.active}
          onChange={handleChange}
          className="checkbox"/>
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

    .checkbox {
      width: 30px;
      height: 30px;
      border: 2px solid ${COLORS.black};
      position: relative;
      appearance: none;
      cursor: pointer;
      border-radius: 30px;
    }

    .checkbox:checked {
      background-color: ${COLORS.white};
    }

    .checkbox:checked::before {
      content: "";
      display: flex;
      width: 30px;
      height: 30px;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(${checkImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 15px;
    }
`; 

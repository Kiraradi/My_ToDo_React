import React from "react";

import styled from "styled-components";
import checkImg from '../../images/icon-check.png';
import { COLORS } from "../../constants";

const CheckBox = (props) => (
    <StyledCheckBox>
      <label>
        <input type="checkbox" checked={props.active} onChange={props.changeActive} className="checkbox"/>
      </label>
    </StyledCheckBox>
  )
 
export default CheckBox

const StyledCheckBox = styled.div`
    display: flex;
    width: 30px;
    height: 30px;

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

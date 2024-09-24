import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const Button = (props) => (
    <StyledButtonContainer  >
        <button
            className={props.active ? 'button active' : 'button'}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    </StyledButtonContainer>
)

export default Button;


const StyledButtonContainer = styled.div `
    display: flex;
    width: 100%;
    max-width: 150px;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

    .button {
        width: 100%;                
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${COLORS.white};
        cursor: pointer;
        font-weight: 600;
        border: 2px solid ${COLORS.black};
        border-radius: 5px;
        font-size: unset;
        text-transform: uppercase;
    }

    @media(max-width: 550px) {
        font-size: 12px;
        max-width: 100px;
    }

    @media(max-width: 380px) {
        font-size: 9px;
        max-width: 80px;
    }
    

    .active {
        background-color: ${COLORS.red};
    }
`
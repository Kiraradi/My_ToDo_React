import React from 'react';
import styled from "styled-components";

const Description = () => {
  return (
    <StyledDescription >
        <p className='description_text'>
            Разработано в рамках стажировки в компании
            <a className='description_link' target="_blank" href='https://fusion-tech.ru/'>Fusion-Tech</a>
        </p>
    </StyledDescription>
  )
}

export default Description;

const StyledDescription = styled.div `
    display: flex;
    .description_text {
        font-size: 15px;
    }

    .description_link {
        margin-left: 15px;
        font-size: 20px;
        color: black;
        text-decoration: none;
        font-weight: 600;
    }
`

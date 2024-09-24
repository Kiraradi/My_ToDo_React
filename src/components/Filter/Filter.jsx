import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

import { filterData } from "./filterData";

const Filter = (props) => (
    <StyledFilterContainer>
        {
            filterData.map(button => {
                return <Button
                    key={button.id}
                    text={button.text}
                    active={button.id === props.activeFilter}
                    onClick={() => props.setActiveFilter(button.id)}
                />
            })
        }
    </StyledFilterContainer>
)


export default Filter;

const StyledFilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

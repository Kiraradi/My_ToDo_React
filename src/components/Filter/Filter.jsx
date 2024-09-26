import React from "react";
import styled from "styled-components";
import CustomButton from "../../UI/CustomButton/CustomButton";

import { filterData } from "./filterData";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentFilter } from "../../store/todoSlise";

const Filter = () => {
  const currentFilter = useSelector(state => state.todo.currentFilter);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (currentFilter === id) {
      return;
    }

    dispatch(changeCurrentFilter(id));
  }
  
  return (
    <StyledFilterContainer>
      {
        filterData.map(button => {
          return <CustomButton
            key={button.id}
            text={button.text}
            active={button.id === currentFilter}
            onClick={() => handleClick(button.id)}
          />
        })
      }
    </StyledFilterContainer>
  );
}


export default Filter;

const StyledFilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

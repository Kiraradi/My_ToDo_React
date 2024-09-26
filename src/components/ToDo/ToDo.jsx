import React from "react";
import styled from "styled-components";
import TodoContainer from "../TodoContainer/TodoContainer";
import Menu from "../Menu/Menu";


const ToDo = () => {
  return (
    <StyledToDoWrapper>
      <h1 className="title">Todos</h1>
      <div className="todo">
        <Menu />
        <TodoContainer />
      </div>
    </StyledToDoWrapper>

  )
}

export default ToDo;

const StyledToDoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 550px;
  margin: 35px 15px 0;

  .title {
    font-size: ${({ theme }) => theme.f_size.header};
    color: ${({ theme }) => theme.colors.red};
  }

  .todo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.white};
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }  

`


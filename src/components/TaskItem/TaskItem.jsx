import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const StyledTask = styled.li `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border: 1px solid ${COLORS.grey};
`

const TaskItem = (props) => {
    React.useEffect(() => {}, [])
  return (
    <StyledTask>

        {props.test}
    </StyledTask>
  )
}

export default TaskItem

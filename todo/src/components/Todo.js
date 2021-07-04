import React from "react";
import styled from "styled-components";

const ToDo = styled.div``;

const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Task = styled.p`
  width: 300px;
  border-radius: 12px;
  padding: 10px;
  background-color: lightpink;
  font-weight: bold;
`;

const Todo = props => {
  return (
    <ToDo>
      <List onClick={props.strike} onClick={props.click}>
        <Task>{props.todoItem}</Task>
      </List>
    </ToDo>
  );
};
export default Todo;

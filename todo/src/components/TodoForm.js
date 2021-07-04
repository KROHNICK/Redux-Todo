import React from "react";
import styled from "styled-components";

const ToDoForm = styled.div`
  padding: 25px;
`;

const Entry = styled.input`
  width: 300px;
  margin-right: 15px;
  border-radius: 8px;
  border: 1px solid black;
  height: 30px;
`;

const Button = styled.button`
  width: 100px;
  margin-left: 15px;
  border-radius: 8px;
  border: 1px solid black;
  height: 35px;
  background-color: white;
`;

const TodoForm = props => {
  return (
    <ToDoForm>
      <Entry
        onChange={props.inputHandler}
        type="text"
        value={props.value}
        placeholder="Enter task here"
      />
      <Button onClick={props.submit}>Add Todo</Button>
    </ToDoForm>
  );
};
export default TodoForm;

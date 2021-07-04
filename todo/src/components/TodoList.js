import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { toggleComplete } from "../actions";
import styled from "styled-components";

const ToDoList = styled.div``;

const List = styled.ul``;

const TodoList = props => {
  {
    console.log(props.toggleComplete);
  }
  return (
    <ToDoList>
      <List>
        {props.todos.map((item, index) => {
          return (
            <Todo
              strike={{
                textDecoration: item.completed ? "line-through" : "none"
              }}
              click={() => props.toggleComplete(item.id)}
              todoItem={item.task}
              key={item.id}
            />
          );
        })}
      </List>
    </ToDoList>
  );
};
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { toggleComplete }
)(TodoList);

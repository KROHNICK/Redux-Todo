import React, { Component } from "react";
import { addTodo } from "./actions";
import { connect } from "react-redux";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import styled from "styled-components";

const APP = styled.div`
  text-align: center;
  width: 800px;
  margin: 50px auto;
  border-radius: 12px;
  background-color: lightgrey;
  box-shadow: 10px 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  inputHandler = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  submit = event => {
    const newTask = {
      id: new Date(),
      task: this.state.newTask,
      completed: false
    };
    this.props.addTodo(newTask);
    this.setState({
      newTask: ""
    });
  };

  render() {
    return (
      <APP>
        <TodoList />
        <TodoForm
          submit={this.submit}
          value={this.state.newTask}
          inputHandler={this.inputHandler}
        />
      </APP>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { addTodo }
)(App);

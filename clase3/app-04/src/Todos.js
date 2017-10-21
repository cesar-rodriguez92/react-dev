import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './reducers/todos';

const renderTodoItem  = (item, index) => (
  <li key={index}>{item.text}</li>
);

const Todos = (props) => (
  <div>
    <input id="nombre" /> &nbsp;
    <button onClick={() => props.dispatch(addTodo(Date.now()))}>Agregar</button>
    <ul>
      {props.todos.map(renderTodoItem)}
    </ul>
  </div>
);

const mapStateToProps = state => (
  {
    todos: state.todos
  }
);

export default connect(mapStateToProps)(Todos);

import React, { useState } from 'react';
//import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../actions/index';
import styles from './FormTodo.module.scss';

const FormTodo = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  // Input change handler
  const onInputChangeHandler = (e) => {
    const { value } = e.target;
    setName(value);
  };
  // Create new todo
  const createTodo = () => {
    let todoItem = {
      id: uuidv4(),
      name,
      completed: false,
    };
    setName('');
    if (name == null || name === '') {
      //alert('Name should not be emplty');
      return false;
    } else {
      dispatch(actionCreators.createTodo(todoItem));
      //props.createTodo(todoItem);
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    createTodo();
  };
  // Delete toto
  const deleteTodo = (e, id) => {
    e.preventDefault();
    //props.deleteTodo(index);
    dispatch(actionCreators.deleteTodo(id));
  };
  const completedTodo = (e, index) => {
    e.preventDefault();
    //props.completedTodo(index);
    dispatch(actionCreators.completeTodo(index));
  };

  const listView = (data, index) => {
    return (
      <div className={styles.todo_list} key={index + 1}>
        <ul>
          <li
            key={index}
            className={styles.show}
            style={{
              textDecoration: data.completed ? 'line-through' : '',
            }}
          >
            {data.name}
            <div>
              <button
                onClick={(e) => completedTodo(e, index)}
                className={!data.completed ? styles.pending : styles.completed}
              >
                {!data.completed ? 'Pending' : 'Completed'}
              </button>
              <button
                onClick={(e) => deleteTodo(e, data.id)}
                className={styles.btn_danger}
              >
                X
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  const taskRemaining = todo.filter((todo) => !todo.completed).length;
  return (
    <div>
      <p className={styles.tasks_count}>
        You have<span className={styles.counter}>{taskRemaining} </span>
        pending tasks
      </p>
      {/* Form  */}
      <form onSubmit={formSubmitHandler} className={styles.flex_row}>
        <input
          type="text"
          value={name}
          onChange={onInputChangeHandler}
          className={styles.input_box}
          autoFocus
        ></input>
        <div>
          <button type="submit" className={styles.add_button}>
            +
          </button>
        </div>
      </form>
      {todo.map((todo, i) => listView(todo, i))}
      {/* Form */}
    </div>
  );
};
export default FormTodo;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../actions';
import styles from './TodoForm.module.scss';
import deleteIcon from '../../delete.svg';

const Index = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const onInputChangeHandler = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const createTodo = () => {
    let todoItem = {
      id: uuidv4(),
      name,
      completed: false,
    };
    setName('');
    if (name == null || name === '') {
      return false;
    } else {
      dispatch(actionCreators.createTodo(todoItem));
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createTodo();
  };

  const deleteTodo = (e, id) => {
    e.preventDefault();
    dispatch(actionCreators.deleteTodo(id));
  };

  const completedTodo = (e, index) => {
    e.preventDefault();
    dispatch(actionCreators.completeTodo(index));
  };

  const listView = (data, index) => {
    return (
      <li key={index} className={styles.show}>
        <span
          className={styles.text}
          style={{
            textDecoration: data.completed ? 'line-through' : '',
          }}
        >
          {data.name}
        </span>
        <div className={styles.btn_action}>
          <button
            onClick={(e) => completedTodo(e, index)}
            className={!data.completed ? styles.pending : styles.completed}
          >
            {!data.completed ? 'Pending' : 'Completed'}
          </button>
          <div
            onClick={(e) => deleteTodo(e, data.id)}
            className={styles.btn_danger}
          >
            <img src={deleteIcon} width={15} height={15} alt="delete" />
          </div>
        </div>
      </li>
    );
  };

  const taskRemaining = todo.filter((todo) => !todo.completed).length;
  return (
    <>
      <p className={styles.tasks_count}>
        You have<span className={styles.counter}>{taskRemaining} </span>
        pending tasks
      </p>
      {/* Form  */}
      <form onSubmit={formSubmitHandler} className={styles.flex}>
        <input
          type="text"
          value={name}
          onChange={onInputChangeHandler}
          className={styles.textbox}
          autoFocus
        ></input>
        <div>
          <button type="submit" className={styles.add_button}>
            +
          </button>
        </div>
      </form>
      <div className={styles.todo_list}>
        <ul>{todo.map((todo, i) => listView(todo, i))}</ul>
      </div>
    </>
  );
};
export default Index;

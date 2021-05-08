import React, { useState } from "react";
//import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actionCreators from "../actions/index";
const FormTodo = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  // Input change handler
  const onInputChangeHandler = (e) => {
    const { value } = e.target;
    setName(value);
  };
  // Create new todo
  const createTodo = () => {
    let todoItem = {
      name,
      completed: false,
    };
    setName("");
    if (name == null || name === "") {
      alert("Name should not be emplty");
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
  const deleteTodo = (e, index) => {
    e.preventDefault();
    //props.deleteTodo(index);
    dispatch(actionCreators.deleteTodo(index));
  };
  const completedTodo = (e, index) => {
    e.preventDefault();
    //props.completedTodo(index);
    dispatch(actionCreators.completeTodo(index));
  };

  const listView = (data, index) => {
    return (
      <div className="row" key={index + 1}>
        <div className="col-md-10">
          <li
            key={index}
            className="list-group-item clearfix"
            style={{
              textDecoration: data.completed ? "line-through" : "",
            }}
          >
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button
            onClick={(e) => deleteTodo(e, index)}
            className="btn btn-danger"
          >
            Remove
          </button>
          <button
            onClick={(e) => completedTodo(e, index)}
            className="btn btn-danger"
          >
            {!data.completed ? "Pending" : "completed"}
          </button>
        </div>
      </div>
    );
  };
  const taskRemaining = todo.filter((todo) => !todo.completed).length;
  return (
    <div>
      <h1>Example of Hooks</h1>
      {taskRemaining}
      {/* Form  */}
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={name} onChange={onInputChangeHandler}></input>
        <button type="submit">Add</button>
      </form>
      {todo.map((todo, i) => listView(todo, i))}
      {/* Form */}
    </div>
  );
};
// Old code without useSelector/useDispatch function
// const mapStateToProps = (state) => {
//   return {
//     todo: state.todo,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     createTodo: (todo) => dispatch(actionCreators.createTodo(todo)),
//     deleteTodo: (index) => dispatch(actionCreators.deleteTodo(index)),
//     completedTodo: (index) => dispatch(actionCreators.completeTodo(index)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(FormTodo);
export default FormTodo;

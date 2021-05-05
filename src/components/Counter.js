import { connect } from "react-redux";
import * as taskAction from "../actions/counterAction";
const Counter = (props) => {
  return (
    <>
      {console.log(props.counter.storedResult)}
      {props.counter}
      <button onClick={props.incrementCounter}>+</button>
      <button onClick={props.decrementCounter}>-</button>
      <button onClick={props.onStoreResult}>Store Result</button>
      <ul>
        {props.storedResult.map((strResult) => (
          <li
            key={strResult.id}
            onClick={() => props.onDeleteResult(strResult.id)}
          >
            {strResult.value}
          </li>
        ))}
      </ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    storedResult: state.counter.result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(taskAction.incrementCounter()),
    decrementCounter: () => dispatch(taskAction.decrementCounter()),
    onStoreResult: () => dispatch(taskAction.onStoreResult()),
    onDeleteResult: (id) => dispatch(taskAction.onDeleteResult(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

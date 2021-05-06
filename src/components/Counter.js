import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
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
    incrementCounter: () => dispatch(actionCreators.incrementCounter()),
    decrementCounter: () => dispatch(actionCreators.decrementCounter()),
    onStoreResult: () => dispatch(actionCreators.onStoreResult()),
    onDeleteResult: (id) => dispatch(actionCreators.onDeleteResult(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

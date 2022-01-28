import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../actions/index';

const Index = () => {
  const counter = useSelector((state) => state.counter.counter);
  const storedResult = useSelector((state) => state.counter.result);
  const dispatch = useDispatch();
  return (
    <>
      {counter}
      <button onClick={() => dispatch(actionCreators.incrementCounter())}>
        +
      </button>
      <button onClick={() => dispatch(actionCreators.decrementCounter())}>
        -
      </button>
      <button onClick={() => dispatch(actionCreators.onStoreResult())}>
        Store Result
      </button>
      <ul>
        {storedResult.map((strResult) => (
          <li
            key={strResult.id}
            onClick={() =>
              dispatch(actionCreators.onDeleteResult(strResult.id))
            }
          >
            {strResult.value}
          </li>
        ))}
      </ul>
    </>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter.counter,
//     storedResult: state.counter.result,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementCounter: () => dispatch(actionCreators.incrementCounter()),
//     decrementCounter: () => dispatch(actionCreators.decrementCounter()),
//     onDeleteResult: (id) => dispatch(actionCreators.onDeleteResult(id)),
//     onStoreResult: () => dispatch(actionCreators.onStoreResult()),
//   };
// };
export default Index;

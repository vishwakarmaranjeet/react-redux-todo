import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils/utility";

let initialState = {
  counter: 0,
  result: [],
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      // return {
      //   ...state,
      //   counter: state.counter + 1,
      // };
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT_COUNTER:
      // return {
      //   ...state,
      //   counter: state.counter - 1,
      // };
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        result: state.result.concat({ id: new Date(), value: state.counter }),
      });
    // return {
    //   ...state,
    //   result: state.result.concat({ id: new Date(), value: state.counter }),
    // };
    case actionTypes.DELETE_RESULT:
      const updatedResult = state.result.filter(
        (result) => result.id !== action.id
      );
      // return {
      //   ...state,
      //   result: updatedResult,
      // };
      return updateObject(state, { result: updatedResult });
    default:
      return state;
  }
};
export default counterReducer;

import * as actionTypes from "../actions/actionTypes";
let initialState = {
  counter: 0,
  result: [],
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedResult = state.result.filter(
        (result) => result.id !== action.id
      );
      return {
        ...state,
        result: updatedResult,
      };
    default:
      return state;
  }
};
export default counterReducer;

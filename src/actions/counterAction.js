import * as actionTypes from "./actionTypes";
export const incrementCounter = () => {
  return {
    type: actionTypes.INCREMENT_COUNTER,
  };
};
export const decrementCounter = () => {
  return {
    type: actionTypes.DECREMENT_COUNTER,
  };
};
export const onStoreResult = () => {
  return {
    type: actionTypes.STORE_RESULT,
  };
};
export const onDeleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id,
  };
};

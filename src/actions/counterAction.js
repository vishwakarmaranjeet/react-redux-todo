import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT_COUNTER,
  };
};

export const incrementCounter = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 100);
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT_COUNTER,
  };
};

export const decrementCounter = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrement());
    }, 100);
  };
};

export const saveResult = () => {
  return {
    type: actionTypes.STORE_RESULT,
  };
};

export const onStoreResult = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult());
    }, 100);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id,
  };
};
export const onDeleteResult = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(deleteResult(id));
    }, 100);
  };
};

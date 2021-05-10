import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils/utility";

const initialState = {
  show: true,
};

const changeStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_HIDE:
      //   return {
      //     ...state,
      //     status: !state.status,
      //   };
      return updateObject(state, { show: !state.show });
    default:
      return state;
  }
};

export default changeStatusReducer;

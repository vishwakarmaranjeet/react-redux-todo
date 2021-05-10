import React from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "../actions/index";

const ShowHide = (props) => {
  const { showHideStatus } = props;
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(actionCreators.showHide());
      }}
    >
      {showHideStatus ? "Hide todo form" : "Show todo form"}
    </button>
  );
};

export default ShowHide;

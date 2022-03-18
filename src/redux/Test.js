import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Test() {
  const value = useSelector((state) => {
    return state.value;
  });
  const show = useSelector((state) => {
    return state.show;
  });
  console.log(show);
  const dispatch = useDispatch();
  return (
    <div className="card flex">
      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        increment
      </button>
      <br />
      <p>{value}</p>
      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        decrement
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "check",
            payload: "6",
          })
        }
      >
        check
      </button>
      <p>{show}</p>
    </div>
  );
}

export default Test;

import React, { useState } from "react";
import { createStore } from "redux";

const initialState = {
  value: 0,
};
const appReducer = (prevState = initialState, action) => {
  // if previous state is undefined ,will take initial state,
  // otherwise,take prevstate
  //  if(prevState === undefined){
  //      return initialState ;
  //  }
  //   return prevState;
  switch (action.type) {
    case "increment":
      return {
        ...prevState,
        value: prevState.value + 1,
      };
    case "decrement" :
        return{
            ...prevState,
            value:prevState.value - 1
        }
    default:
      return prevState;
  }
};
// must pass argument inside create store
// otherwise shows

const store = createStore(appReducer);
const state = store.getState();
// console.log(state.value);

function Reduxcore() {
  const [base, setBase] = useState("");
  const addIncrement = () => {
    // setBase(state.value);
    store.dispatch({
      type: "increment",
    });
  };
  const addDecrement = () => {
    store.dispatch({
      type: "decrement",
    });
  };
  store.subscribe(() => {
    setBase(store.getState().value);
  });

  return (
    <div className="redux">
      <p>redux core</p>
      <div className="">
        <button className="btn" onClick={() => addIncrement()}>
          Increment
        </button>
        <p>{base}</p>
        <button className="btn" onClick={() => addDecrement()}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Reduxcore;

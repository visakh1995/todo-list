import { createStore,combineReducers } from "redux";
const initialState = {
  value: 0,
  show: 1,
};
const appReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...prevState,
        value: prevState.value + 1,
      };
    case "decrement":
      return {
        ...prevState,
        value: prevState.value - 1,
      };
    default:
      return prevState;
  }
};

// combine reducers



// const valueReducer = (prevState = 0, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         return: prevState + 1,
//       };
//     case "decrement":
//       return {
//         return: prevState - 1,
//       };
//     default:
//       return prevState;
//   }
// };

// const showReducer = (prevState = 1, action) => {
//   switch (action.type) {
//     case "check":
//       return {
//          return:action.payload
//       };
//     default: return prevState;
//   }
// };

// const appReducer = combineReducers({
//     value:valueReducer,
//     show:showReducer
// });

const store = createStore(appReducer);
export default store;

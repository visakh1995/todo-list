import React from "react";
import "./Uttilities.css";
import Navbar from "./Navbar";
import Users from "./Users";
import Showcase from "./Showcase";
import CartContainer from "./CartContainer";
import TodoList from "./TodoList";
import Promises from "./Promises";
import Basics from "./Basics";
import Home from "./Home";
import Workaround from "./Workaround";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reduxcore from "./redux/Reduxcore";
import Test from "./redux/Test";
import { Provider } from 'react-redux';
import store from "./redux/store";

 
function App() {
  return (
    <Provider store ={store}>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/cart" element={<CartContainer />}></Route>
          <Route exact path="/plans" element={<TodoList />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/workaround" element={<Workaround/>}></Route>

        </Routes>
        {/* <Showcase /> */}
        {/* <Promises/> */}
        {/* <Basics/> */}
        {/* <Reduxcore/> */}

        {/* function PrivateRoute({ children, ...rest }) {
        let auth = useAuth();
        return (
          <Route
            {...rest}
            render={() => auth
              ? children
              : <Redirect to="/login" />
            }
          />
        );
       } */}
       {/* function PrivateRoute({ children }) {
       const auth = useAuth();
       return auth ? children : <Navigate to="/login" />; */}
       {/* } */}
        <Test/>
        
        
      </div>
    </Router>
    </Provider>
  );
}

export default App;

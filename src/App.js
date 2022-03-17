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

function App() {
  return (
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
        
        
      </div>
    </Router>
  );
}

export default App;

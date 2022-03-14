import React, { useEffect, useState } from "react";
import "./Uttilities.css";
import List from "./List";
import Alert from "./Alert";
import Navbar from "./Navbar";
import data from "./data";
import Users from "./Users";
import Showcase from "./Showcase"
import CartContainer from "./CartContainer";

import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editID, setEditID] = useState(null);

  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter something");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "succeess", "Updated successfully");
    } else {
      showAlert(true, "success", "Item added to list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    setAlert(true, "danger", "empty list");
    setList([]);
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "removed successfully");
    setList(list.filter((item) => item.id != id));
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
       <Route exact path='/cart' element={<CartContainer/>}></Route>
     </Routes>
      <section className="todoList">
        <div class="container flex">
          <div className="todoList-form card">
            <h2>Organize your plans here.</h2>
            <form onSubmit={handleSubmit}>
              {alert.show && <Alert {...alert} removeAlert={showAlert} />}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter something"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  {isEditing ? "Update" : "Create"}
                </button>
              </div>
            </form>

            {list.length > 0 && (
              <div className="clear-list">
                <List
                  items={list}
                  editItem={editItem}
                  removeItem={removeItem}
                />
                <button className="btn btn-dark" onClick={clearList}>
                  Clear Items
                </button>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* users */}

      <section className="users">
        <div className="container part-2 ">
          <div className="users-form-1">
            <Users people={people} />
          </div>

        </div>
      </section>

     {/* showcase  */}
     <Showcase/>



    </div>
    </Router>
  );
}

export default App;

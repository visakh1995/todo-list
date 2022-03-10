import React, { useState } from "react";
import "./Uttilities.css";
import List from "./List";
import Alert from "./Alert";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editID, setEditID] = useState(null);
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
  return (
    <section className="todoList">
      <div class="container grid">
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
              <List items={list} editItem={editItem} removeItem={removeItem} />
              <button className="btn btn-dark" onClick={clearList}>
                Clear Items
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;

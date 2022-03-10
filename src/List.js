import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function List({ items, editItem, removeItem }) {
  return (
    <div className="listItem">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="listItem-plan" key={id}>
            <p className="title">{title}</p>
            <div>
              <button className="edit-btn" onClick={() => editItem(id)}>
                <FaEdit />
              </button>

              <button className="delete-btn" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;

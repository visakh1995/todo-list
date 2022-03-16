import React, { useState } from "react";
import App from "./App";
import data from "./data";

function Users() {
  const [people, setPeople] = useState(data);

  return (
    <section className="users">
      <div className="container part-2 ">
        <div className="users-form-1">
          {/* <Users people={people} /> */}
          <>
            {people.map((person) => {
              const { id, name, image, age } = person;
              return (
                <div className="users-list card ">
                  <img src={image} />
                  <p>{name}</p>
                  <p>{age}</p>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </section>
  );
}

export default Users;

// other way from App.js ,passing as props

//          <section className="users">
//           <div className="container part-2 ">
//             <div className="users-form-1">
//               <Users people={people} />
//             </div>
//           </div>
//         </section>

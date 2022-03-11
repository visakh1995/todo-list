import React from "react";

function Users({people}) {
  return (
    <>
    {
      people.map((person) => {
        const {id, name, image, age} = person;
         return (
           <div className="users-list small-card ">
             <img src={image} />
             <p>{name}</p>
             <p>{age}</p>
           </div>
         )
      })
    }
    </>

  );
}

export default Users;

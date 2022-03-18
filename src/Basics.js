import React, { useState, useEffect } from "react";
import company from "./company";
import "./basic.css";
import axios from "axios";
import {createStore} from 'redux'

function Basics() {
  const [employees, setEmployee] = useState(company);
  const [users, setUsers] = useState([]);
  //   console.log(employees[0].name);

  //   one method outside useEffect
  // const outSource = async() => {
  //     const use =  await axios.get(`https://jsonplaceholder.typicode.com/users`);
  //     setUsers(use.data);
  // }

  useEffect(() => {
    // outSource();
    // another method inside useEffect without async await
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      // console.log(response);
      const dataDetails = response.data;
      setUsers(dataDetails);
    });
  }, []);
  //   console.log(users);

  // weather api

  const weatherForecast = (temp) => {
    return new Promise((resolve, reject) => {
      if (temp <= 30) {
        resolve("temperature is affordable");
      } else {
        reject("abort,cant tolerate");
      }
    });
  };

  const checkWeather = async () => {
    try {
      const res = await weatherForecast(33);
      console.log("response received");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    checkWeather();
  }, []);

  return (
    <div className="company container">
      <h1>Company</h1>
      <div className="data-company">
        {employees.map((employee) => {
          return (
            <div className="company-content" key={employee.name}>
              <p>Name of company :{employee.name}</p>
              <p>Count :{employee.count}</p>
              <p>CEO:{employee.ceo}</p>
              <p>Rating:{employee.rating}</p>
            </div>
          );
        })}
      </div>

      <div className="api-content">
        {users.map((user) => {
          return (
            <div className="api-data small-card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>Street : {user.address.street}</p>
              <p>Suite : {user.address.suite}</p>
              <p>City : {user.address.city}</p>
              <p>Zipcode : {user.address.zipcode}</p>
              <p>Phone : {user.phone}</p>
              <p>Website : {user.website}</p>
              <p>company : {user.company.name}</p>
              <p>catchphrase : {user.company.catchphrase}</p>
              <p>bs : {user.company.bs}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Basics;

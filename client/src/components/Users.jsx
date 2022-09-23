import React from "react";
import { useEffect, useState } from "react";
//import app from "../../../server/app.mjs";
import DeleteUser from "./DeleteUser";

//hardcoded objects into array
const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

const Users = () => {
  const [userList, setUserList] = useState([]);

  console.log("users", userList);

  const getUsers = () => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((res) => setUserList(res.users));
  };

//   const postUsers = () => {
//     fetch("http://localhost:4000/users", {
//       method: "POST",
//       body: JSON.stringify(newUser),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => console.log(json));
//   };

  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getUsers();
  }, []);
  //stores users in an array, initialized from hardcode, ARRAY OF OBJECTS
  const [users, setUsers] = useState([marlin, nemo, dory]);
  //stores the user input into new user
  //const [newUser, setNewUser] = useState({ name: "", email: "", id: "" });

  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [email, setEmail] = useState("");

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component
  const handleSubmit = async (e) => {
    e.preventDefault();
    //creates a new user profile with all of the updated values for name, id, email, and name
    const newUser = { id: id, name: name, email: email };
    await fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    //add newUser to users list, by unwrapping user array and adding a new user to it, ALWAYS saves the previous users
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setId("");
  };

  //   let addUser = () => {
  //     router.post("/", function (req, res, next) {
  //       // save request data to a variable in routes/users.js
  //       res.send(
  //         "some message about your data being saved, and a copy of that data"
  //       );
  //     });
  //   };

  const handleDelete = (deletedId) => {
    const filteredUsers = users.filter((user) => {
      return user.id != deletedId;
    });
    // set changes data and tells React to re-render the screen
    setUsers(filteredUsers);
    //setNewUser({...newUser, name: "sam", email: 'sam.com', id: 123})
  };

  return (
    <div>
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users on the page */}
        {users.map((user, index) => {
          return (
            <li key={index}>
              {/* each thing inside map is an object */}
              Name: {user.name}, Email: {user.email}
            </li>
          );
        })}
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#">
          {/* all formfields are contained in the fieldset tag so they can all be manipulated at once */}
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-user-name"
              value={name}
              //setting the value that the user input into the name input by calling the setName useState function to update the name variable
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>ID</label>
            <input
              type="number"
              id="add-user-id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              type="text"
              id="add-user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          {/* calls the handleSubmit functino with all of the fields filled out */}
          <input type="submit" value="Add" onClick={handleSubmit} />
        </form>
        <DeleteUser onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Users;

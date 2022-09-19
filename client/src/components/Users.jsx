import React from "react";
import { useState } from "react";

//hardcoded objects into array
const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

const Users = () => {
  //stores users in an array, initialized from hardcode
  const [users, setUsers] = useState([marlin, nemo, dory]);
  //stores the user input into new user
  const [newUser, setNewUser] = useState({ name: "", email: "", id: "" });

  const [name, setName] = useState('');
  const [id, setId] = useState();
  const [email, setEmail] = useState('');

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: id, name: name, email: email };
    //add newUser to users list
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users here */}
        {users.map((user, index) => {
            return (
                <li key={index}>
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
            <input type="text" id="add-user-name" value={name} onChange={(e) => setName(e.target.value)}/>
          </fieldset>
          <fieldset>
            <label>ID</label>
            <input type="number" id="add-user-id" value={id} onChange={(e) => setId(e.target.value)}/>
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input type="text" id="add-user-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" onClick ={handleSubmit}/>
        </form>
      </div>

      <div>
        <h3>Delete User</h3>
        <form id="delete-user" action="#">
          <fieldset>
            <label>User ID</label>
            <input type="text" id="delete-user-id" />
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Users;
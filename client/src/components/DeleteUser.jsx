import { useState } from "react";

const DeleteUser = (props) => {
    const [id, setId] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onDelete(id)
        setId("");
    }
  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" onSubmit={handleSubmit}>
        <fieldset>
          <label>User ID</label>
          <input value={id} type="number" id="delete-user-id" onChange={ (e) => setId(e.target.value) }/>
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteUser;

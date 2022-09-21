import React from "react";
import { useState } from "react";
import { useReducer } from "react";

// some sample events
// feel free to edit the data, and/or edit the fields
const event1 = {
  id: "1",
  name: "Birthday",
  date: "2021-09-01",
  description: "A birthday party for my best friend",
  category: "Celebration",
};

const event2 = {
  id: "2",
  name: "Graduation",
  date: "2021-08-01",
  description: "The class of 2021 graduates from East High",
  category: "Education",
};

const event3 = {
  id: "3",
  name: "JS Study Session",
  date: "2021-10-01",
  description: "A chance to practice Javascript interview questions",
  category: "Education",
};

const Events = () => {
  //stores users in an array, initialized from hardcode
  const [events, setEvents] = useState([event1, event2, event3]);
  //defining the intial state for the event
  const initialState = {
    id: "",
    name: "",
    date: null,
    description: "",
    category: "",
  };
  //must create the function because it's not pre-defined as useState is
  const reducer = (state, action) => {
    console.log(action, "this is the action");
    switch (action.type) {
      case "editName":
        console.log("Logged if the editName action is being dispatched");
        return { ...state, name: action.payload };

      case "editDescription":
        return { ...state, description: action.payload };

      case "editCategory":
        return { ...state, category: action.payload };

      case "editDate":
        return { ...state, date: action.payload };
      case "editId":
        return { ...state, date: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  //const [events, setEvents] = useState([]);
  //stores the user input into new user
  //   const [newEvent, setNewEvent] = useState({
  //     name: "",
  //     id: "",
  //     date: "",
  //     description: "",
  //     category: "",
  //   });

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component
  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, state]);
    //call dispatch insted > setNewEvent({ name: newEvent.name });
    //add newUser to users list, by unwrapping user array and adding a new user to it

  };

  const handleDelete = (deletedId) => {
    const filteredEvents = events.filter((event) => {
      return event.id != deletedId;
    });
    // set changes data and tells React to re-render the screen
    setEvents(filteredEvents);
    //setNewUser({...newUser, name: "sam", email: 'sam.com', id: 123})
  };
  // const handleDelete = (deletedId) => {
  //   const filteredUsers = users.filter((user) => {
  //     return user.id != deletedId;
  //   });
  // set changes data and tells React to re-render the screen
  // setUsers(filteredUsers);
  //setNewUser({...newUser, name: "sam", email: 'sam.com', id: 123})
  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {/* Display all Events here */}
          <ul>
            {events.map((event, index) => {
              return (
                <li key={index}>
                  {/* each thing inside map is an object */}
                  Name: {event.name}, Description: {event.description}
                </li>
              );
            })}
          </ul>
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#"  onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              value={state.name}
              id="add-event-name"
              placeholder="Virtual corgi meetup"
              onChange={(e) =>
                dispatch({
                  type: "editName",
                  payload: e.target.value,
                })
              }
              //taking object out and assigning the key name to e.target.value
              // onChange={(e) => setNewEvent(i => i.name = e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>ID</label>
            <input
              type="number"
              id="add-user-id"
              value={state.id}
              onChange={(e) =>
                dispatch({
                  type: "editId",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>Date</label>
            <input
              type="date"
              id="add-user-email"
              value={state.date}
              onChange={(e) =>
                dispatch({
                  type: "editDate",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>Description</label>
            <input
              type="text"
              id="add-event-description"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>Category</label>
            <input
              type="text"
              id="add-event-category"
              value={state.category}
              onChange={(e) =>
                dispatch({
                  type: "editCategory",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form >
      </div>
      {/* why is delete event not in user and events */}
      <div>
        <h3>Delete Event</h3>
        <form id="delete-event" action="#">
          <fieldset>
            <label>Event ID</label>
            <input type="number" min="1" id="delete-event-id" />
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Events;

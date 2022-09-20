import calendar from "./calendar.png";
import Footer from "./components/footer.jsx"
import Users from "./components/Users.jsx"
import DeleteUser from "./components/DeleteUser.jsx"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={calendar} alt="Calendar Star Logo" />
        <h1>Eventonica</h1>
      </header>

      <main>
        <Users />
        <DeleteUser />
          <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
                {/* Display all Events here */}
                <li>...</li>
              </ul>

              <h3>Add Event</h3>
              <form id="add-event" action="#">
                <fieldset>
                  <label>Name</label>
                  <input
                    type="text"
                    id="add-event-name"
                    placeholder="Virtual corgi meetup"
                  />
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" />
              </form>
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

      <section className="directoryr">

        <aside className="search-toolbar">
        <h2>Directory Search</h2>
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
      </section>
      </main>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
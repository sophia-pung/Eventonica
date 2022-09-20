import calendar from "./calendar.png";
import Footer from "./components/footer.jsx"
import Users from "./components/Users.jsx"
import DeleteUser from "./components/DeleteUser.jsx"
import Event from "./components/Events"
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
        <Event />
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
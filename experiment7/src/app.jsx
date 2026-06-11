// App.jsx
import Greetings from "./components/Greetings";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Student Information</h1>

      <div className="cards">
        <Greetings
          name="Rahul Sharma"
          course="Computer Science"
          marks="85"
        />

        <Greetings
          name="Anita Verma"
          course="Information Technology"
          marks="92"
        />

        <Greetings
          name="Amit Kumar"
          course="Electronics"
          marks="78"
        />
      </div>
    </div>
  );
}

export default App;
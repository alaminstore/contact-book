import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="clr"></div>
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;

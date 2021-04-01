import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Contacts from "./components/contacts/Contacts";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          {/* <Contacts /> */}
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contacts/add" component={AddContact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

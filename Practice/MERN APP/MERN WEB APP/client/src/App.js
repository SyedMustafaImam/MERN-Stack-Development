// import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserForm from './Components/UserForm'
import LoginForm from './Components/LoginForm'
import Navbars from './Components/Navbars'
import Home from './Components/home'
import Error from './Components/error'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div class="myBody">
        <Navbars />

        <Switch>

          <Route path="/UserForm">
            <UserForm />
          </Route>

          <Route path="/LoginForm">
            <LoginForm />
          </Route>

          <Route exact path="/" >
            <Home />
          </Route>

          <Route>
            <Error />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;

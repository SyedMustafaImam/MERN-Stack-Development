// import logo from "./logo.svg";
import './Form.css'
import { Route } from "react-router-dom"
import UserForm from './Components/UserForm'
import LoginForm from './Components/LoginForm'
import Navbars from './Components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div class="myBody">
      <Navbars />
      <br></br>
      <br></br>
      <Route exact path="/LoginForm">
        <LoginForm />
      </Route>

      <Route path="/UserForm">
        <UserForm />
      </Route>

      <br></br>



    </div>
  );
}

export default App;

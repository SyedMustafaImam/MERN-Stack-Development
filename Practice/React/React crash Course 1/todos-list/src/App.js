import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
function App() {

  return (
   <>
        <Header/>
        <Todos/>
        <Footer/>

  </>
  );
}


function Body(){
  <>
    <h1>Todo's List</h1>
   <p>this is my todo's list'</p>
  </>
}

export default App;



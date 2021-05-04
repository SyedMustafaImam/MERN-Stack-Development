import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import { Footer } from './MyComponents/Footer'
import React, { useState } from 'react'
import AddTodo from './MyComponents/AddTodo'

function App() {
  const onDelete = (todo) => {
    console.log('I am on delete', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.getItem('todos')
  }

  function addTodo(title,desc) {
    console.log("I am adding this title: ", title);
    console.log("I am adding this desc: ", desc);
    let sno; 
    if(todos.length ==0){
      sno=1;
    }
    else{
     sno = todos[todos.length - 1].sno+1
    }
    const newTodo= {
      sno:sno,
      title:title,
      desc:desc,
    }
    console.log(newTodo);

    setTodos([...todos,newTodo])

    if(localStorage.getItem('todos')){
      localStorage.setItem('todos', JSON.stringify(todos))

    }

  }

  const [show, setShow]= useState(false)

  const [todos, setTodos] = useState([
    // {
    //   sno: 1,
    //   title: "Go to the market",
    //   desc: "You need to go to the market to get this job done"
    // },

    // {
    //   sno: 2,
    //    title: "Complete the home work",
    //   desc: "You need to Complete the home work till night"
    // },

    // {
    //   sno: 3,
    //   title: "Free lancer project",
    //   desc: "You need to go to complete the project"
    // },
  ])

  return (
    <> 
      <Header title="Todo" searchBar={false} />

      <Todos todos={todos} onDelete={onDelete} />
      <AddTodo addTodo={addTodo}/>     
      <br></br>
      <br></br>
      
      <Footer />

    </>
  );
}


function Body() {
  <>
    <h1>Todo's List</h1>
    <p>this is my todo's list'</p>
  </>
}

export default App;



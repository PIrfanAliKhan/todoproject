import React, { useState, useEffect } from "react";
import Add from "./com/Add";
import Header from "./com/Header";
import View from "./com/View";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {


  useEffect(() => {
    fetch('http://localhost:2000/getTodo')
    .then((resp) => {
      if (resp.ok)
      {
        return resp.json();
      }
      else
      {
        return resp;
      }
    })
    .then((data) => {
      setTodos(data)
    })
    .catch((err) => {console.log("Error",err)})
  })

  function DeleteTodo(todo) {
    fetch(`http://localhost:2000/deleteTodo/${todo._id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }

  function AddTodo(newtask, newtime) {
    // const abc = {
    //   desc: d,
    //   time: t,
    // };
    // setTodos([...todos, abc]);

    fetch('http://localhost:2000/addTodo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: newtask,
        time: newtime,
      })
    })
  }
  const [todos, setTodos] = useState([]);
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
          <Route path="/add" exact>
            <Add addtodo={AddTodo} />
          </Route>
          <Route path="/view" exact>
            <View todos={todos} deletetodo={DeleteTodo}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

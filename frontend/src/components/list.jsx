import Todo from "./todo";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function List() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) =>{
    if(id){
      axios.delete('http://localhost:8000/api/todo/' + id).then((res)=>{
        console.log(res)
        getData()
      });
    }
  }

  function getData(){
    axios.get("http://localhost:8000/api/todo/").then((res) => {
      if(res) {
          setTodos(res.data);
      }      
  });
  }
  useEffect(() => {
    getData()
  }, []);

  

  const editTodo = async (id) =>{
    
  }

  return (
    <div className="container">
      <div className="card-group">
        {todos  ? todos.map((todo, index) => (
          <Todo key={index} todo={todo} delete={deleteTodo}/>
        )) : <h1> There is no todo</h1>}
      </div>
    </div>
  );
}

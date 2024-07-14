import Todo from "./todo";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/todo/").then((res) => {
        if(res) {
            setTodos(res.data);
        }

        console.log('data yok')
      
    });
  }, []);

  return (
    <div className="container">
      <div className="card-group">
        {todos  ? todos.map((todo, index) => (
          <Todo index={index} todo={todo} />
        )) : <h1> There is no todo</h1>}
      </div>
    </div>
  );
}

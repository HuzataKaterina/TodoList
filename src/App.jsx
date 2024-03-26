import { useState, useEffect } from "react";
import { AddTask } from "./components/AddTask";
import { TodosList } from "./components/TodosList";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  return (
    <>
      <AddTask addTodo={addTodo} />
      <TodosList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

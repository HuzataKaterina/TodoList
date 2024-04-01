import { useState, useEffect } from "react";
import { TodoForm } from "./components/AddTask";
import { TodosList } from "./components/TodosList";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (task) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== task.id;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (task) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === task.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deletAllTodos = () => {
    setTodos([]);
    localStorage.clear();
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodosList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        deletAllTodos={deletAllTodos}
      />
    </>
  );
}

export default App;

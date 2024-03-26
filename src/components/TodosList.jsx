import React from "react";
import imgDel from "../images/delete.svg";
import style from "../styles/ListStyle.module.css";

import PropTypes from "prop-types";

export const TodosList = ({ todos, setTodos }) => {
  const handleClickDelete = (task) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== task.id;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleCompleted = (task) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === task.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handleClickDeleteAll = () => {
    localStorage.clear();
  };
  return (
    <>
      <div>
        <button>All tasks</button>
        <button>Completed tasks</button>
        <button>Not completed tasks</button>
        <button onClick={handleClickDeleteAll}>Delete all tasks</button>
      </div>
      <ul className={style.ulTodo}>
        {todos.map((todo) => (
          <div className={style.divTodo} key={todo.id}>
            <li
              key={todo.id}
              completed={todo.completed}
              className={`${style.liTodo} ${
                todo.completed ? style.completed : ""
              }`}
            >
              <input
                type="checkbox"
                onChange={() => handleCompleted(todo)}
                checked={todo.completed ? "checked" : ""}
              />
              <span>{todo.task}</span>
            </li>
            <button
              onClick={() => handleClickDelete(todo)}
              className={style.btnInput}
            >
              <img src={imgDel} alt="Delete" />
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

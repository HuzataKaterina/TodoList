import React from "react";
import { useState } from "react";
import imgDel from "../images/delete.svg";
import style from "../styles/ListStyle.module.css";

import PropTypes from "prop-types";

export const TodosList = ({
  todos,
  deleteTodo,
  toggleComplete,
  deletAllTodos,
}) => {
  const [filter, setFilter] = useState("All");

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "completed":
        return todo.completed;
      case "notCompleted":
        return !todo.completed;
      default:
        return todo;
    }
  });

  const handleClickDelete = (task) => {
    deleteTodo(task);
  };

  const handleCompleted = (task) => {
    toggleComplete(task);
  };

  const handleClickDeleteAll = () => {
    deletAllTodos();
  };
  return (
    <>
      <div className={style.divFilters}>
        <button
          onClick={() => {
            setFilter("all");
          }}
          className={style.buttonFilters}
        >
          All tasks
        </button>
        <button
          onClick={() => {
            setFilter("completed");
          }}
          className={style.buttonFilters}
        >
          Completed
        </button>
        <button
          onClick={() => {
            setFilter("notCompleted");
          }}
          className={style.buttonFilters}
        >
          Not completed
        </button>
        <button onClick={handleClickDeleteAll} className={style.buttonFilters}>
          Delete all
        </button>
      </div>
      <ul className={style.ulTodo}>
        {filteredTodos.map((todo) => (
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
  deleteTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deletAllTodos: PropTypes.func.isRequired,
};

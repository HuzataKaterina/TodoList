import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import style from "../styles/ListStyle.module.css";
import { AddIcon } from "./AddIcon";

import PropTypes from "prop-types";

export const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({
    id: uuid(),
    task: "",
    completed: false,
  });
  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (newTodo.task !== "") {
      addTodo(newTodo);
      setNewTodo({
        id: uuid(),
        task: "",
        completed: false,
      });
    }
  };

  const hadleChange = (e) => {
    setNewTodo((predNewTodo) => ({ ...predNewTodo, task: e.target.value }));
  };

  return (
    <div className={style.divAdd}>
      <input
        type="text"
        value={newTodo.task}
        onChange={hadleChange}
        onKeyDown={handleKeyDown}
        className={style.input}
        placeholder="Enter your task"
        autoFocus
      />
      <button onClick={handleAddTask} className={style.btnAdd}>
        <AddIcon />
      </button>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

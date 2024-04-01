import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import style from "../styles/ListStyle.module.css";
import { AddIcon } from "./AddIcon";

import PropTypes from "prop-types";

export const AddTask = ({ addTodo }) => {
  const [todoFull, setTodoFull] = useState({
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
    if (todoFull.task !== "") {
      addTodo(todoFull);
      setTodoFull({
        id: uuid(),
        task: "",
        completed: false,
      });
    }
  };

  const hadleChange = (e) => {
    setTodoFull((predTodoFull) => ({ ...predTodoFull, task: e.target.value }));
  };

  return (
    <div className={style.divAdd}>
      <input
        type="text"
        value={todoFull.task}
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

AddTask.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

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
    <>
      <input
        type="text"
        value={todoFull.task}
        onChange={hadleChange}
        className={style.input}
        placeholder="Enter your task"
      />
      <button onClick={handleAddTask}>
        <AddIcon />
      </button>
    </>
  );
};

AddTask.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

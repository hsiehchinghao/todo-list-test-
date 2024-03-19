import React, { createContext, useContext, useReducer, useState } from "react";
import { TaskReducer, ACTIONS } from "./TaskReducer";

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const initialState = {
    todos: [],
  };

  //reducer
  const [tasks, dispatch] = useReducer(TaskReducer, initialState);
  const [ifSorted, setIfSorted] = useState(false);
  //addTodo
  const addTodo = (todoContent) => {
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: [
          ...tasks.todos,
          {
            id: Date.now(),
            name: todoContent,
            complete: false,
          },
        ],
      },
    });
  };

  //completeTodo
  const completeTodo = (id) => {
    const completedTask = tasks.todos.map((data) => {
      if (data.id == id) {
        data.complete = !data.complete;
        return data;
      } else {
        return data;
      }
    });
    dispatch({ type: ACTIONS.PATCH_TODO, payload: { todo: completedTask } });
  };

  //deleteTodo
  const deleteTodo = (id) => {
    let updateTask = tasks.todos.filter((data) => {
      return data.id !== id;
    });
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: { todo: updateTask },
    });
  };

  //sortTodo
  const sortTodo = (tasks, method) => {
    if (method == "default") {
      tasks.sort((a, b) => b.id - a.id);
      dispatch({
        type: ACTIONS.SORT_TODO,
        payload: { todo: tasks },
      });
    } else if (method == "done") {
      const finished = tasks
        .filter((item) => item.complete == true)
        .sort((a, b) => b.id - a.id);
      const notFinished = tasks
        .filter((item) => item.complete == false)
        .sort((a, b) => b.id - a.id);
      const result = notFinished.concat(finished);
      dispatch({
        type: ACTIONS.SORT_TODO,
        payload: { todo: result },
      });
    }
  };

  const value = {
    addTodo,
    tasks,
    completeTodo,
    deleteTodo,
    sortTodo,
    ifSorted,
    setIfSorted,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

//customer hook
export const useTodo = () => {
  const context = useContext(TaskContext);
  if (!context) {
    console.log("error");
  } else {
    return context;
  }
};

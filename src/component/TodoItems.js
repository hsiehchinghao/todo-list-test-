import React from "react";
import { useTodo } from "../TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskItems = () => {
  const { tasks, deleteTodo, completeTodo, ifSorted, sortTodo } = useTodo();
  const handleComplete = (id) => {
    completeTodo(id);
    //確保分類模式開啟點擊完成仍會持續分類
    if (ifSorted) {
      sortTodo(tasks.todos, "done");
    } else {
      sortTodo(tasks.todos, "default");
    }
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <>
      {tasks.todos.map((t) => {
        return (
          <div key={t.id} className="todo">
            <input
              type="checkbox"
              id={t.id}
              className="complete"
              onChange={() => {
                handleComplete(t.id);
              }}
            />
            <label
              htmlFor={t.id}
              className={
                t.complete
                  ? "todo__complete-button__checked"
                  : "todo__complete-button__unchecked"
              }
            >
              <FontAwesomeIcon icon={faCheck} />
            </label>

            <div className="todo__titlebox">
              <span
                className={
                  t.complete
                    ? "todo__titlebox__finshed"
                    : "todo__titlebox__unfinish"
                }
              >
                {t.name}
              </span>
            </div>
            <div className="todo__delete-button">
              <FontAwesomeIcon
                onClick={(e) => {
                  handleDelete(t.id);
                }}
                icon={faXmark}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskItems;

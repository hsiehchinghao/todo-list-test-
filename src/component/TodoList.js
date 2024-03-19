import { useEffect, useRef } from "react";
import { useTodo } from "../TaskContext";
import Progress from "./Progress";
import TodoItems from "./TodoItems";

const TaskList = () => {
  const { tasks, sortTodo, ifSorted, setIfSorted } = useTodo();
  const sortToggleRef = useRef();

  const handleSort = (tasks, method) => {
    setIfSorted((prev) => {
      return !prev;
    });
    if (sortToggleRef.current.checked) {
      method = "done";
    } else {
      method = "default";
    }
    sortTodo(tasks, method);
  };

  return (
    <>
      <Progress />
      <div className="todolist">
        {tasks && tasks.todos.length == 0 ? (
          <div className="alert-message">Add something...</div>
        ) : (
          <TodoItems />
        )}
      </div>
      <div className="todolost__underline"></div>
      <div className="sort-switch">
        <label htmlFor="switch" className="sort-switch__alert">
          <span>Move done things to end?</span>
          <div
            className={
              ifSorted
                ? "sort-switch__toggle__checked"
                : "sort-switch__toggle__unchecked"
            }
          >
            <div className="sort-switch__toogle__switch"></div>
          </div>
        </label>
        <input
          id="switch"
          type="checkbox"
          ref={sortToggleRef}
          onChange={(e) => {
            e.target.checked
              ? handleSort(tasks.todos, "done")
              : handleSort(tasks.todos, "default");
          }}
        />
      </div>
    </>
  );
};

export default TaskList;

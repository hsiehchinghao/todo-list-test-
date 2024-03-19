import React, { useRef, useEffect } from "react";
import { useTodo } from "../TaskContext";

const Progress = () => {
  const { tasks } = useTodo();
  const completedRef = useRef();
  //計算當前完成%
  const completedPercent = Math.floor(
    (tasks.todos.filter((t) => t.complete == true).length /
      tasks.todos.length) *
      100
  );
  useEffect(() => {
    if (completedRef.current && completedPercent) {
      completedRef.current.style.width = `${completedPercent}%`;
    } else {
      completedRef.current.style.width = `0%`;
    }
  }, [tasks]);

  return (
    <div className="progress-bar">
      <span className="progress-bar__percent">{completedPercent || 0}%</span>
      <div className="progress-bar__bar">
        <div className="progress-bar__bar__completed" ref={completedRef}></div>
      </div>
    </div>
  );
};

export default Progress;

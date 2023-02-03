import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";
import TaksItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-svgrepo-com.svg";
const TaksList = ({
  title,
  onAddTask,
  taskState,
  tasks,
  onTaskUpdate,
  onTaskDelete,
}) => {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };
  return (
    <div className={"tasklist "+ title}>
      <div className='title'>{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaksItem
              key={task.id}
              id={task.id}
              title={task.title}
              className={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onTaskDelete={onTaskDelete}
            />
          );
        })}
        {tasks.length ===0 && <div className="empty-list">Lista vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus" /> Adicionar Tarefa
        </button>
      </div>
    </div>
  );
};

TaksList.PropTypess = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default TaksList;

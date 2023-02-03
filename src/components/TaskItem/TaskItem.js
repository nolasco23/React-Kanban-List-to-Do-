import React, { useState } from "react";
import ProtoTypes from "prop-types";
import "./TaskItem.css";
const TaksItem = ({ id, title, taskState, onTaskUpdate,onTaskDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle((existingEditableTitle) => {
      return newTitle;
    });
    onTaskUpdate(id, newTitle, taskState);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if(editableTitle.length ===0){
        onTaskDelete(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

 
  if (isEditing) {
    return (<div className="task-item">
      <input
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyPress={onKeyPress}
      />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div
          onClick={(e) => {
            setIsEditing(true);
          }}
        >
          {editableTitle}
        </div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
};

TaksItem.protoTypes = {
  id: ProtoTypes.number.isRequired,
  title: ProtoTypes.string.isRequired,
  taskState: ProtoTypes.string.isRequired,
};

export default TaksItem;

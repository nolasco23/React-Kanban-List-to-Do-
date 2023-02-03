import React, { useState } from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

const TaksList = ({ title }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {count}
        <button onClick={increment}>Incrementar</button>
      </div>
    </div>
  );
};

TaksList.PropTypess = {
  title: PropTypes.string.isRequired,
};

export default TaksList;

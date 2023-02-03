import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TaksList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTasks((existingTask) => {
      return [...existingTask, newTask];
    });
  };
  const updateTask = (id, title, state) => {
    console.log("Update ");
    setTasks((existingTask) => {
      return existingTask.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaksList
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
        <TaksList
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
        <TaksList
          title="Completa"
          taskState="Completa"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;

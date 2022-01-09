import React, { useState } from "react";
import List from "./components/List";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  let [task, setTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), text: task };
    setTasks([...tasks, newTask]);
    setTask((task = ""));
  }

  function removeTask(id) {
    setTasks(tasks.filter((item) => item.id != id));
  }

  let result = tasks.map((item) => {
    return <List task={item} key={item.id} remove={removeTask} />;
  });

  return (
    <div className="app">
      <div className="app__content">
        <form className="app__header" onSubmit={addTask}>
          <input value={task} onChange={(e) => setTask(e.target.value)} />
          <button className="app__btn">Add</button>
        </form>
      </div>
      {result}
    </div>
  );
}

export default App;

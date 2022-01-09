import React from "react";
import "../styles/App.css";
function List(props) {
  return (
    <div className="app__item">
      <li>{props.task.text}</li>
      <button onClick={() => props.remove(props.task.id)}>remove</button>
    </div>
  );
}
export default List;

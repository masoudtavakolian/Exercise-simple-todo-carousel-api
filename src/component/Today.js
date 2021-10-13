import React from "react";
import AddTask from "./AddTask";
import "./Today.css";
import ShowTask from "./ShowTask";
export default function Today(props) {
    return (
    <div className="todaycontainer">
      <span>Today</span>
      <div className="showtodaytask">
          <ShowTask showCategory={-1} status={false}></ShowTask>
      </div>
      <div>
          <AddTask addNewTaskFunc={props.addNewTaskFunc}></AddTask>
       </div>
    </div>
  );
}

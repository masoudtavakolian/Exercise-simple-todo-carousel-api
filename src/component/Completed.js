import React from "react";
import "./Today.css";
import ShowTask from "./ShowTask";
export default function Completed(props) {
    return (
    <div className="todaycontainer">
      <span>Completed Task</span>
      <span className="showtodaytask">
          <ShowTask showCategory={-2} status={true}></ShowTask>
      </span>
    </div>
  );
}

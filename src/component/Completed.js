import React,{useContext} from "react";
import AddTask from "./AddTask";
import "./Today.css";
import AlertDialog from "../mui/AlertDialog";
import { mycontext } from "./MainPanel";
import ShowTask from "./ShowTask";
export default function Completed(props) {
    const tasks=useContext(mycontext);
    return (
    <div className="todaycontainer">
      <span>Completed Task</span>
      <span className="showtodaytask">
          <ShowTask showcategory={-1} status={true}></ShowTask>
      </span>
    </div>
  );
}

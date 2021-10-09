import React,{useContext} from "react";
import AddTask from "./AddTask";
import "./Today.css";
import AlertDialog from "../mui/AlertDialog";
import { mycontext } from "./MainPanel";
import ShowTask from "./ShowTask";
export default function SearchPanel(props) {
    
    return (
    <div className="todaycontainer">
      <span>Search: {props.searchtext}</span>
      <span className="showtodaytask">
          <ShowTask showcategory={-1} status={true}></ShowTask>
      </span>
    </div>
  );
}

import React,{useContext} from "react";
import AddTask from "./AddTask";
import "./Today.css";
import AlertDialog from "../mui/AlertDialog";
import ShowTask from "./ShowTask";
import {contextsearchitem} from "../App"
export default function SearchPanel(props) {

  const {searchitem,setsearchitem}=useContext(contextsearchitem);
  
  return (
    <div className="todaycontainer">
      <span>Search: {searchitem}</span>
      <span className="showtodaytask">
          <ShowTask search={searchitem} showcategory={-2} status={true}></ShowTask>
      </span>
    </div>
  );
}

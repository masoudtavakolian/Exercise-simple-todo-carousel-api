import React,{useContext} from "react";
import AddTask from "./AddTask";
import "./Today.css";
import AlertDialog from "../mui/AlertDialog";
import { mycontext } from "./MainPanel";
export default function Today(props) {
    const tasks=useContext(mycontext);
  return (
    <div className="todaycontainer">
      <span>Today</span>
      <span className="showtodaytask">
          
      </span>
      <span>
       {/*  {(props.showaddpanel)?<AddTask changeaddpanelshow={props.changeaddpanelshow} addnewtask={props.addnewtask}></AddTask>:null}
      */}
      <AddTask addnewtask={props.addnewtask}></AddTask>
       </span>
    </div>
  );
}

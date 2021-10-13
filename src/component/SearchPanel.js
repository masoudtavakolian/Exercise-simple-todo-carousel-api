import React,{useContext} from "react";
import "./Today.css";
import ShowTask from "./ShowTask";
import {contextSearchItem} from "../App"
export default function SearchPanel(props) {
  const {searchItem}=useContext(contextSearchItem);
  return (
    <div className="todaycontainer">
      <span>Search: {searchItem}</span>
      <span className="showtodaytask">
          <ShowTask search={searchItem} showCategory={100} status={true}></ShowTask>
      </span>
    </div>
  );
}

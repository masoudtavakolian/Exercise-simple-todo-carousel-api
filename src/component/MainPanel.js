import React, { useContext } from "react";
import { wichPanelContext,myContext, myContextSetTask } from "../App";
import SearchPanel from "./SearchPanel";
import Today from "./Today";
import Completed from "./Completed";
import MySwiper from "./MySwiper";
export default function MainPanel(props) {
    const tasks = useContext(myContext);
    const {v1:WichPanel}=useContext(wichPanelContext);
    const setTasks = useContext(myContextSetTask);
    let addNewTaskFunc=(item)=>{
        setTasks([...tasks,item]);
    }
  return (
    <>
      <div className={"mainPanel" + (!props.menu ? " mainPanelCheck" : "")}>
        {(WichPanel==="today")?<Today addNewTaskFunc={addNewTaskFunc}></Today>:null}
        {(WichPanel==="completed")?<Completed></Completed>:null}
        {(WichPanel==="search")?<SearchPanel></SearchPanel>:null}
        {(WichPanel==="lastSearch")?<SearchPanel></SearchPanel>:null}
        {(WichPanel==="swiper")?<MySwiper></MySwiper>:null}
      </div>
    </>
  );
}

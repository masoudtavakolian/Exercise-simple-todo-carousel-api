import React, { createContext,useContext } from "react";
import "./MainPanel.css";
import Today from "./Today";
import { useState,Context } from "react";
import Completed from "./Completed";
import { wichpanelcontext,mycontext, mycontextsettask } from "../App";
import SearchPanel from "./SearchPanel";

export default function MainPanel(props) {
    const tasks = useContext(mycontext);
    const {v1:wichpanel,v2:setwichpanel}=useContext(wichpanelcontext);
    const settasks = useContext(mycontextsettask);
    let addnewtask=(item)=>{
        settasks([...tasks,item]);
    }
  return (
    <>
      <div className={"mainpanel" + (!props.menu ? " mainpanelcheck" : "")}>
        
        {(wichpanel=="today")?<Today addnewtask={addnewtask}></Today>:null}
        {(wichpanel=="completed")?<Completed /* addnewtask={addnewtask} */></Completed>:null}
        {(wichpanel=="search")?<SearchPanel /* addnewtask={addnewtask} */></SearchPanel>:null}
        
      </div>
    </>
  );
}

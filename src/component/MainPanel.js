import React, { createContext,useContext } from "react";
import "./MainPanel.css";
import Today from "./Today";
import { useState,Context } from "react";
import Completed from "./Completed";
import { wichpanelcontext } from "../App";
export const mycontext=createContext();
export const mycontextsettask=createContext();


export default function MainPanel(props) {
    const [tasks,settasks]=useState([])
    const {v1:wichpanel,v2:setwichpanel}=useContext(wichpanelcontext);
    let addnewtask=(item)=>{
        settasks([...tasks,item]);
    }
    /* 
    const [addnewpanelshow,setaddnewpanelshow]=useState(true)
    let changeaddpanelshow=(v)=>{
        setaddnewpanelshow(v);
    } */
  return (
    <>
      {/* mainpanel check Responsive */}
      <div className={"mainpanel" + (!props.menu ? " mainpanelcheck" : "")}>
        <mycontextsettask.Provider value={settasks}>
        <mycontext.Provider value={tasks} >
        {(wichpanel=="today")?<Today addnewtask={addnewtask}></Today>:null}
        {(wichpanel=="completed")?<Completed addnewtask={addnewtask}></Completed>:null}
        </mycontext.Provider>
        </mycontextsettask.Provider>
      </div>
      
    </>
  );
}

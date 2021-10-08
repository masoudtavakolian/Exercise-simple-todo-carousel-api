import React, { createContext } from "react";
import "./MainPanel.css";
import Today from "./Today";
import { useState,Context } from "react";

export const mycontext=createContext();

export default function MainPanel(props) {
    const [tasks,settasks]=useState([{category:0,done:true,title:"",description:""}])
    
    let addnewtask=(item)=>{
        settasks({task:[...tasks.task,item]});
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
        <mycontext.Provider value={tasks}>
        {(true)?<Today /* showaddpanel={addnewpanelshow} */ /* changeaddpanelshow={changeaddpanelshow} */ addnewtask={addnewtask}></Today>:"haha"}
        </mycontext.Provider>
      </div>
      {/* <div className="mainpanelcontainer">
          
          <div className="addnewpanel">
            <div className="searchcontainer">
              <form style={{padding: 0}} className="savetask">
              <input
                type="text"
                className="searchinput newitembox"
                placeholder="Write Something here..."
              />
              
              <p className="showerror"></p>
              <button type="submit" className="okbutton">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
                </svg>
              </button>
              <button className="cancelbutton">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path fill="CurrentColor" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                </svg>
              </button>
            </form>
            </div>
          </div>
          <div className="showitemcontainer">
            <div className="message"></div>
          </div>
        </div> */}
    </>
  );
}

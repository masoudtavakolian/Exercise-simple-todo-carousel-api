import React,{useContext} from 'react'
import {useState} from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import './SideMenu.css'
import { wichPanelContext } from '../App';
export default function SideMenu(props) {

  const {v1:WichPanel,v2:setWichPanel}=useContext(wichPanelContext);
  const [removeFirstState,setRemoveFirstStatePanel]=useState(false);
    
    if(!props.menu && !removeFirstState)
      setRemoveFirstStatePanel(true);
    
    return (
      <div className={"menupanel "+((!removeFirstState)?"firststatepanel":"")+((props.menu)?" showmenu":"")}>

        <div className="into" >
          <span className="sp2"  >
          <span><MoveToInboxIcon className="dt" sx={{marginRight:"10px",width:"20px",height:"20px",color:"#109bad"}}></MoveToInboxIcon></span>
            <span>inbox</span>
          </span>

          <span style={(WichPanel==="today")?{backgroundColor:"#eee"}:{backgroundColor:""}} onClick={()=>setWichPanel("today")}>
            <span><DateRangeIcon className="dt" sx={{marginRight:"10px",width:"20px",height:"20px",color:"#0f018a"}}></DateRangeIcon></span>
            <span>Today Tasks</span>
          </span>
          
          <span style={(WichPanel==="completed")?{backgroundColor:"#eee"}:{backgroundColor:""}} className="sp3" onClick={()=>setWichPanel("completed")}>
          <span><AssignmentTurnedInIcon className="dt" sx={{marginRight:"10px",width:"20px",height:"20px",color:"#4f9b11 "}}></AssignmentTurnedInIcon></span>
            <span>Completed Tasks</span>
          </span>
          
        </div>
        {/* <div className="menuitems newtask">
          New Task
        </div>
        <div className="menuitems showallTaskList">
          Show all Task
        </div>
        <div className="menuitems completedtask">
          Show completed tasks
        </div>
        <div className="menuitems notcompletedtask">
          Show not completed tasks
        </div> */}
      </div>
    )
}

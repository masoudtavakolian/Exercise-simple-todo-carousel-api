import React,{useContext,useState} from 'react' 
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
      <div className={"menuPanel "+((!removeFirstState)?"firstStatePanel":"")+((props.menu)?" showMenu":"")}>
        <div className="into" >
          <span className="sp2"  >
          <span><MoveToInboxIcon className="Icons" sx={{color:"#109bad"}}></MoveToInboxIcon></span>
            <span>inbox</span>
          </span>

          <span style={(WichPanel==="today")?{backgroundColor:"#eee"}:{backgroundColor:""}} onClick={()=>setWichPanel("today")}>
            <span><DateRangeIcon className="Icons" sx={{color:"#0f018a"}}></DateRangeIcon></span>
            <span>Today Tasks</span>
          </span>
          
          <span style={(WichPanel==="completed")?{backgroundColor:"#eee"}:{backgroundColor:""}} className="sp3" onClick={()=>setWichPanel("completed")}>
          <span><AssignmentTurnedInIcon className="Icons" sx={{color:"#4f9b11"}}></AssignmentTurnedInIcon></span>
            <span>Completed Tasks</span>
          </span>
          
        </div>
      
      </div>
    )
}

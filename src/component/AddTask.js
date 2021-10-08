import React from 'react'
import { useState } from 'react'
import './AddTask.css'
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AlertDialog from '../mui/AlertDialog'
export default function AddTask(props) {
    const [canadd,setcanadd]=useState({canadd:false,value:"",des:"",successmessage:""});
    const [showpanel,ssetshowpanel]=useState(true);
   /*  const [Tasksuccessmessage,settasksuccessmessage]=useState(""); */
    let all=(e)=>{
        if(e.target.value!="")
            setcanadd({...canadd,canadd:true,value:e.target.value,successmessage:""})
        else
            setcanadd({...canadd,canadd:false,value:"",successmessage:""})
    }
    let txtarea=(e)=>{
        setcanadd({...canadd,des:e.target.value,successmessage:""});
    }
    let savetask=()=>{
        props.addnewtask({category:-1,done:false,title:canadd.value,description:canadd.des});
        setcanadd({canadd:false,value:"",des:"",successmessage:"Add Task: "+canadd.value+" successfully! "})
    }
    let changeshowpanel=(v)=>{
            ssetshowpanel(v);
    }
    return (
    <>
    
        {(!showpanel)?<div className="addnewtaskbar" onClick={()=>changeshowpanel(true)}>
            <span className="span1">
                <AddBoxIcon variant="contained" color="primary"></AddBoxIcon>
            </span>
            <span>texticon</span>
        </div>:null}
        {(showpanel)?<div className="addtaskparent">

            <div className="main">
            <input value={canadd.value} placeholder="write task here..." type="text" onChange={e=>all(e)}></input>
            <textarea placeholder="Description..." type="text" onChange={e=>txtarea(e)} value={canadd.des}></textarea>
            {/* <AlertDialog d  isabled={(!canadd)?"disabled":null}  title="ADDD" text="Add Task!" message="Are you sure?"></AlertDialog>
            */} 
            
            </div>
            {(canadd.successmessage.length!=0)?<div className="successmessage">{canadd.successmessage}</div>:null}
            <Button disabled={(!canadd.canadd)?"disabled":null} variant="contained" color="primary" onClick={()=>savetask()}>
                {/* {canadd.value} */}
                Add Task!
            </Button>
            <Button style={{marginLeft:"5px"}} disabled={null} variant="outlined" color="error" onClick={()=>changeshowpanel(false)}>
                
                cancel
            </Button>
        </div>
        :null}
   </>
    )
}

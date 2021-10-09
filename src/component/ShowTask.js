import React,{useContext,useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import blue from '@mui/material/colors/blue'
import './ShowTask.css'
import { mycontextsettask,mycontext } from './MainPanel';
export default function ShowTask(props) {
const settask=useContext(mycontextsettask);
const alltask=useContext(mycontext);

let setcheck=(items)=>{

    setTimeout(() => {
        alltask[items].done=true;
        settask([...alltask]);
    }, 500)
    
}
let myex=[]
let leng=0

if(props.showcategory===-1){
myex=alltask.map((item,index)=>{
if(item.category===-1 && item.done===props.status){
leng++
return <div className="grouptask">
<Checkbox   
checked={(item.done)?item.done:null}
onChange={()=>{setcheck(index)}}
/><div key={index} onClick={()=>{alert(item.title)}}><span className="numberlist">{leng+" - "}</span>{item.title}</div></div>
}
else
return null; 
});
}
    return (
        <>
          {(leng>0)?<div className="grouptaskcontainer">{myex}</div>:null}  
        </>
    )
}

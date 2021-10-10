import React,{useContext,useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import blue from '@mui/material/colors/blue'
import ReactHtmlParser from 'react-html-parser';
import './ShowTask.css'
import { mycontextsettask,mycontext } from '../App';
export default function ShowTask(props) {
const settask=useContext(mycontextsettask);
const alltask=useContext(mycontext);

let setcheck=(items)=>{

    setTimeout(() => {
        alltask[items].done=true;
        settask([...alltask]);
    }, 500)    
    
}
function colorsearchresult(find,value){
  
    let all="";
    let lastindex;
    //while(value.length>=find.length){
    lastindex=value.search(find);
    while(lastindex!=-1){
    all=all+`${value.slice(0,lastindex).replace(" ","&nbsp;")}<span style='text-align:left;color:orange'>${value.slice(lastindex,lastindex+find.length).replace(" ","&nbsp;")}</span>`;
    // if(lastindex+find.length-1)
    if((lastindex+find.length)==value.length){
    value="";lastindex=-1;
    }
    else{
    value=value.slice(lastindex+find.length,value.length);
    lastindex=value.search(find);
    }
}
    all+=value;
    
    // firstindex=lastindex+find.length;
    // value=value.substr(firstindex,v.length-1);
    /* value=value.substr(find.length,value.length-1);
    lastindex=value.search(find); */
  // }
  //console.log(all)
  return all
  }

let myex=[]
let leng=0
if(props.search!==undefined && props.search!==""){
    myex=alltask.map((item,index)=>{
        if(item.title.search(props.search)!=-1)
        {
        leng++
        return <div className="grouptask">
        <Checkbox   
        checked={(item.done)?item.done:null}
        onChange={()=>{setcheck(index)}}
        /><div key={index} onClick={()=>{alert("FindIn:\n"+item.title)}}><span className="numberlist">{leng+" - "}</span>
        {ReactHtmlParser(colorsearchresult(props.search,item.title))}</div></div>
        }
        else
        return null; 
        });
}
else if(props.showcategory===-1){
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

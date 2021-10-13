import React,{useContext} from 'react'
import Checkbox from '@mui/material/Checkbox';
import ReactHtmlParser from 'react-html-parser';
import './ShowTask.css'
import { myContextSetTask,myContext } from '../App';
export default function ShowTask(props) {

const setTaskFunc=useContext(myContextSetTask);
const finalStringTaskList=useContext(myContext);

let setCheckBox=(items)=>{
    setTimeout(() => {
        finalStringTaskList[items].done=true;
        setTaskFunc([...finalStringTaskList]);
    }, 500)    
}

function colorShowSearchResult(find,toFind){
  
    let finalString="";
    let lastIndex;
    lastIndex = toFind.search(find);
    while(lastIndex !== -1){
    finalString=finalString+`${toFind.slice(0,lastIndex).replace(" ","&nbsp;")}<span style='text-align:left;color:orange'>${toFind.slice(lastIndex,lastIndex+find.length).replace(" ","&nbsp;")}</span>`;
    if((lastIndex+find.length) === toFind.length){
        toFind="";
        lastIndex=-1;
    }
    else{
        toFind=toFind.slice(lastIndex+find.length,toFind.length);
        lastIndex=toFind.search(find);
    }
}
    finalString+=toFind;
  return finalString
  }

let finalJsxList=[];
let countItems=0;
let messageBelowSearch="";
let messageBelowSearchOther="";

if(props.search !== undefined && props.search !== ""){
    finalJsxList=finalStringTaskList.map((item,index)=>{
        if(item.title.search(props.search)!==-1)
        {
         countItems++
         return <div key={index+"firstdiv"} className="grouptask">
         <Checkbox   
         key={index+"checkbox"}
         checked={(item.done)?item.done:null}
         onChange={()=>{setCheckBox(index)}}
         /><div key={index} onClick={()=>{alert("Item:\n"+item.title)}}><span key={index+"span"} className="numberlist">{countItems+" - "}</span>
         {ReactHtmlParser(colorShowSearchResult(props.search,item.title))}</div></div>
        }
        else
         return null; 
        });
        if(countItems===0)
        messageBelowSearch="Not Find!";
}
else if(props.showCategory===-1 || props.showCategory===-2){
finalJsxList=finalStringTaskList.map((item,index)=>{
if(item.category===-1 && item.done===props.status){
    countItems++;
    return(<div key={index+"firstdiv"} className="grouptask">
            <Checkbox  
            key={index+"checkbox"} 
            checked={(item.done)?item.done:null}
            onChange={()=>{setCheckBox(index);}}
            /><div key={index} onClick={()=>{alert(item.title)}}><span key={index+"span"} className="numberlist">{countItems+" - "}</span>{item.title}</div></div>)
}
else
    return null; 
});
if(countItems===0 && props.showCategory===-1)
    messageBelowSearchOther ="";
else if(countItems===0 && props.showCategory===-2)
    messageBelowSearchOther = "No Task Complited yet!";
}

    return (
        <>
          {(countItems>0)?<div className="grouptaskcontainer">{finalJsxList}</div>:null}  
          {(messageBelowSearch!=="")?<div className="grouptaskcontainer">{messageBelowSearch}</div>:null}
          {(messageBelowSearchOther!=="")?<div className="grouptaskcontainer">{messageBelowSearchOther}</div>:null}
          
        </>
    )
}

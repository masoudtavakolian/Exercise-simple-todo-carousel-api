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

if(props.user!=undefined){
    finalJsxList=finalStringTaskList.map((item,index)=>{
        if(item.userId===props.user){
            countItems++;
            return(<div key={index+"firstdiv"} className="groupTask">
                    <Checkbox  
                    key={index+"checkbox"} 
                    checked={(item.done)?item.done:null}
                    onChange={()=>{setCheckBox(index);}}
                    inputProps={{ 'aria-label': 'controlled' }}
                    /><div key={index} onClick={()=>{(item.description==="")?alert("No Description Defined!"):alert("Item Description:\n"+item.description)}}><span key={index+"span"} className="numberList">{countItems+" - "}</span>{item.title}</div></div>)
        }
        else
            return null; 
        });
}
else if(props.search !== undefined && props.search !== ""){
    finalJsxList=finalStringTaskList.map((item,index)=>{
        if(item.title.search(props.search)!==-1)
        {
         countItems++
         return <div key={index+"firstdiv"} className="groupTask">
         <Checkbox   
         key={index+"checkbox"}
         checked={(item.done)?item.done:null}
         onChange={()=>{setCheckBox(index)}}
         inputProps={{ 'aria-label': 'controlled' }}
         /><div key={index} onClick={()=>{(item.description==="")?alert("No Description Defined!"):alert(item.description)}}><span key={index+"span"} className="numberList">{countItems+" - "}</span>
         {ReactHtmlParser(colorShowSearchResult(props.search,item.title))}</div></div>
        }
        else
         return null; 
        });
        if(countItems===0)
        messageBelowSearch=props.search+" Not Find!";
}

else if(props.search !== undefined && props.search === ""){
    messageBelowSearch="No previous search yet!";
}

else if(props.showCategory===-1 || props.showCategory===-2 ){

finalJsxList=finalStringTaskList.map((item,index)=>{
if(item.category===-1 && item.done===props.status){
    countItems++;
    return(<div key={index+"firstdiv"} className="groupTask">
            <Checkbox  
            key={index+"checkbox"} 
            checked={(item.done)?item.done:null}
            onChange={()=>{setCheckBox(index);}}
            inputProps={{ 'aria-label': 'controlled' }}
            /><div key={index} onClick={()=>{(item.description==="")?alert("No Description Defined!"):alert("Item Description:\n"+item.description)}}><span key={index+"span"} className="numberList">{countItems+" - "}</span>{item.title}</div></div>)
}
else
    return null; 
});
if(countItems===0 && props.showCategory===-1)
    messageBelowSearchOther ="";
else if(countItems===0 && props.showCategory===-2)
    messageBelowSearchOther = "No Task Completed yet!";

}

    return (
        <>
          {(countItems>0)?<div className="groupTaskContainer">{finalJsxList}</div>:null}  
          {(messageBelowSearch!=="")?<div className="groupTaskContainer">{messageBelowSearch}</div>:null}
          {(messageBelowSearchOther!=="")?<div className="groupTaskContainer">{messageBelowSearchOther}</div>:null}
        </>
    )
}

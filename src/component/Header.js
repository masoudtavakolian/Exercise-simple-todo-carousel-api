import React from 'react'
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {useContext} from 'react'
import { wichPanelContext,contextSearchItem } from '../App';
export default function Header(props) {
    const {v2:setWichPanel}=useContext(wichPanelContext);
    const {setSearchItem}=useContext(contextSearchItem);
    
    let handleSearchIcon=()=>{
      let searchInputElement = document.querySelector(".searchInput");
      if(searchInputElement.value==="")
        searchInputElement.placeholder="Enter Value To search!";
      else{
        searchInputElement.placeholder="Search...";
        setWichPanel("search");
        setSearchItem(searchInputElement.value); 
        searchInputElement.value="";
      }
    }

    let handleSearch=(e)=>{
      let target=e.target;
      if(e.keyCode===13 && target.value==="") {
         e.preventDefault();
         target.placeholder="Enter Value To search!";
      }
      else if(e.keyCode===13){
          target.placeholder="Search...";
          setWichPanel("search");
          setSearchItem(target.value);
          target.value="";
        }
    }

    return (
      <section className="head">
      <div className="container">
        {(!props.menu)?
        <div className="into menu" style={{display:"inline-flex"}} onClick={()=>{props.toggleMenuFunc(true)}}>
          <ListIcon></ListIcon>
        </div>
        :
        <div className="into closeMenu" style={{display:"inline-flex"}} onClick={()=>props.toggleMenuFunc(false)}>
          <CloseIcon></CloseIcon>
        </div>
        }
        <div className="into home">
          <HomeIcon></HomeIcon>
        </div>
        <div className="into searchBox">
          <div onClick={()=>{handleSearchIcon()}} className="into searchIcon">
            <ManageSearchIcon></ManageSearchIcon>
          </div>
          <input onKeyUp={(e)=>handleSearch(e)} type="text" className="searchInput" placeholder="Search..." />
        </div> 
      </div>
    </section>
    )
}

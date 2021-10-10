import logo from './logo.svg';
import './App.css';

import { useState, createContext } from 'react';
import MetaTags from 'react-meta-tags';
import {Button,Alert} from  '@mui/material';
import * as Mui from '@material-ui/core';
import Header from './component/Header';
import SideMenu from './component/SideMenu';
import MainPanel from './component/MainPanel';
export const wichpanelcontext = createContext();
export const mycontext = createContext();
export const mycontextsettask = createContext();
export const contextsearchitem = createContext();
function App() {
  const [tasks,settasks]=useState([])
  const [menustate,setmenustate] = useState(true);
  const [wichpanel,setwichpanel]=useState("today");
  const [searchitem,setsearchitem]=useState("");

  const toggle_menu = (toggle_state) => {
    setmenustate(toggle_state);
  };


  /* const diiv={width:"auto",height:"10px"} */
  return (
    <>
    <MetaTags>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <meta name="description" content="MY TODO APP" />
    <title>TODO-APP</title>
    </MetaTags>
      {/* <div className="App"> */}


      <contextsearchitem.Provider value={{searchitem,setsearchitem}}>
      <mycontextsettask.Provider value={settasks}>
      <mycontext.Provider value={tasks} >
      <wichpanelcontext.Provider value={{v1:wichpanel,v2:setwichpanel}}>
      <Header menu={menustate} toggle_menu={toggle_menu}></Header>
      <section className="section-below container">
        <SideMenu menu={menustate}></SideMenu>
        <MainPanel menu={menustate}></MainPanel>
      </section>
      </wichpanelcontext.Provider>
      </mycontext.Provider>
      </mycontextsettask.Provider>
      </contextsearchitem.Provider>


      {/* <div style={diiv}><Alert severity="warning">This is a warning alert — check it out!</Alert></div>
      <Mui.Typography>Test</Mui.Typography> 
      <Button color="primary" variant="contained" onClick={()=>{}}>Free</Button> 
      <switch /> */}
      {/* </div> */}
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { useState, createContext } from 'react';
import MetaTags from 'react-meta-tags';
import {Button,Alert} from  '@mui/material';
import * as Mui from '@material-ui/core';
import Header from './component/Header';
import SideMenu from './component/SideMenu';
import MainPanel from './component/MainPanel';
export const wichpanelcontext=createContext();
function App() {
  const [menustate,setmenustate] = useState(true);
  const toggle_menu = (toggle_state) => {
    setmenustate(toggle_state);
  };
  /* const diiv={width:"auto",height:"10px"} */
  const [wichpanel,setwichpanel]=useState("today")
  return (
    <>
    <MetaTags>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <meta name="description" content="MY TODO APP" />
    <title>TODO-APP</title>
    </MetaTags>
      {/* <div className="App"> */}
      <wichpanelcontext.Provider value={{v1:wichpanel,v2:setwichpanel}}>
      <Header menu={menustate} toggle_menu={toggle_menu}></Header>
      <section className="section-below container">
        <SideMenu menu={menustate}></SideMenu>
        <MainPanel menu={menustate}></MainPanel>
      </section>
      </wichpanelcontext.Provider>
      {/* <div style={diiv}><Alert severity="warning">This is a warning alert — check it out!</Alert></div>
      <Mui.Typography>Test</Mui.Typography> 
      <Button color="primary" variant="contained" onClick={()=>{}}>Free</Button> 
      <switch /> */}
      {/* </div> */}
    </>
  );
}

export default App;

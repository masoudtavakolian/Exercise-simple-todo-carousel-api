import './App.css';
import { useState, createContext } from 'react';
import MetaTags from 'react-meta-tags';
import Header from './component/Header';
import SideMenu from './component/SideMenu';
import MainPanel from './component/MainPanel';

export const wichPanelContext = createContext();
export const myContext = createContext();
export const myContextSetTask = createContext();
export const contextSearchItem = createContext();

function App() {
  const [tasks,setTaskFuncs]=useState([])
  const [menuState,setMenuState] = useState(true);
  const [wichPanel,setWichPanel]=useState("today");
  const [searchItem,setSearchItem]=useState("");

  const toggleMenuFunc = (toggle_state) => {
    setMenuState(toggle_state);
  };

  return (
    <>
    <MetaTags>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <meta name="description" content="MY TODO APP" />
    <title>TODO-APP</title>
    </MetaTags>
      <contextSearchItem.Provider value={{searchItem,setSearchItem}}>
      <myContextSetTask.Provider value={setTaskFuncs}>
      <myContext.Provider value={tasks} >
      <wichPanelContext.Provider value={{v1:wichPanel,v2:setWichPanel}}>
      <Header menu={menuState} toggleMenuFunc={toggleMenuFunc}></Header>
      <section className="section-below container">
        <SideMenu menu={menuState}></SideMenu>
        <MainPanel menu={menuState}></MainPanel>
      </section>
      </wichPanelContext.Provider>
      </myContext.Provider>
      </myContextSetTask.Provider>
      </contextSearchItem.Provider>
    </>
  );
}

export default App;

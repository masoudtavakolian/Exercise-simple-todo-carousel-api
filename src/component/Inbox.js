import React,{useState,useContext,useEffect} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel"
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import "./Inbox.css";
import axios from "axios";
import { myContextSetTask,myContext } from "../App";
import ShowTask from "./ShowTask";
export default function Inbox() {
  const [value, setValue] = useState("one");
  const [data,setData]=useState({data:[],success:false})
  const [users,setUsers]=useState([1,2,3,4,5,6,7,8,9,10])
  const Tasks = useContext(myContext);
  const setTask = useContext(myContextSetTask);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(data.data+data.success)
  let allJsxUserTab=[]
  let allJsxUserTask=[]
  if(users.length!=0)
  allJsxUserTab=users.map((item,index)=>{
    return <Tab label={"User" + item} value={item} />
  })
  if(data.success)
  {
    allJsxUserTask=users.map((item,index)=>{
        return <TabPanel value={item}><ShowTask user={item}></ShowTask></TabPanel>
      })        
  }
  if(!data.success && data.data.length!==0 && users.length!==0 ){
      
        let allList=[]
        for (const iterator of data.data) {
        allList.push({userId:iterator.userId,
        category: -1,
        done: iterator.completed,
        title: iterator.title,
        description: ""})
    }
    setData({...data,success:true})
    setTask([...Tasks,...allList]);
    
  }
  else{}
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=>setData({...data,data:res.data}))
}, [])
 
  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{borderBottom: 1, borderColor: 'divider' }}>
        <TabList
            className="hhh"
            textColor="secondary"
            indicatorColor="secondary"
            onChange={handleChange} aria-label="lab API tabs example">
                {
                    allJsxUserTab
                }
          {/* <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" /> */}
        </TabList>
      </Box>
      {
          allJsxUserTask
      }
      {/* <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel> */}
    </TabContext>
  </Box>
  )
}

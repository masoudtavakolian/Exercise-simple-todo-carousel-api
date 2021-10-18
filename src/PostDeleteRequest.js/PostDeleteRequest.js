import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Post from './Post';
import { ClosedCaptionDisabledSharp } from '@mui/icons-material';
export default function PostDeleteRequest() {
    const [data,setData]=useState([]);
    let postData=()=>{
            axios.post("https://jsonplaceholder.typicode.com/posts",data)
            .then(response => console.log(response))
    }
    let changeData=(event)=>{
       /*  setData([...data,{
            [event.target.name]: event.target.value,
        }]) */
    }
    let deletePost=(id)=>{
                        data.splice(id,1);
                        let newData=data;
                        setData(newData);
    }
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts",data)
            .then(response => setData([...response.data]))
    }, [])

    let allJsx=data.map((item,index)=><Post key={index} title={item.title} body={item.body} deletePost={()=>{deletePost(index)}} ></Post>)
    return (
        <div>
            <label>title</label>
            <input name="title" onChange={changeData} type="text" style={{width:"100px"}} />
            <br />
            <label>body</label>
            <input name="body" onChange={changeData} type="text" style={{width:"90px"}} />
            <br />
            <button style={{width:"60px",height:"30px"}} onClick={postData} >postData</button>
            {
                allJsx
            }
            
        </div>
    )
}
//get - post - delete - update

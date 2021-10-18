import React from 'react'

export default function Post(props) {
    const {title,body,deletePost} = props;
    return (
        <div style={{border:"1px solid gray",marginTop:"10px"}}>
            <h1>{title}</h1>
            <br />
            <p>{body}</p>
            <br />
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}

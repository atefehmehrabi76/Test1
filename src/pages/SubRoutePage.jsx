import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SubRoutePage() {
    const {id}=useParams();
    const[post,setPost]=useState({});
    const getPost=async()=>{
        const endPoint=`https://jsonplaceholder.typicode.com/posts/${id}`;
        const result=await fetch(endPoint);
        const response=await result.json();
        setPost(response);
    }
    useEffect(()=>{
        getPost();
    },[id])
  return (
    <div>
                      <p>{post.title}</p>
                      <br />
                      <br />
                      <br />
                      <br />
                      <p>{post.body}</p>
                    
        
    </div>
  )
}

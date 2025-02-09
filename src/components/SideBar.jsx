import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function SideBar() {
    const [post,setPost]=useState([]);
    const getPost=async()=>{
        const endPoint="https://jsonplaceholder.typicode.com/posts";
        const result=await fetch(endPoint);
        const response=await result.json();
        setPost(response);
    }
    useEffect(()=>{
        getPost()
    },[])
  return (
    <ul>
        {
            post.map((item)=>{
                return(
                    <li key={item.id} className='mb-3'>
                        <NavLink className={({isActive ,isPending})=>isActive ? "text-blue-500" : ""} to={`/route-2/${item.id}`}>{item.title}</NavLink>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default SideBar
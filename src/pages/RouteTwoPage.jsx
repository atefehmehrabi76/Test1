import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

export default function RouteTwoPage() {
  return (
    <div className='grid grid-cols-5 gap-5 m-5'>
        <aside className='col-start-1 col-end-3 border border-gray-700 rounded-lg p-5 bg-green-300' ><SideBar/></aside>
        <main className='col-start-3 col-end-6 border border-gray-700 rounded-lg p-5 bg-yellow-500'><Outlet/></main>
    </div>
  )
}

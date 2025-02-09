import './App.css';
import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import RouteOnePage from './pages/RouteOnePage';
import RouteTwoPage from './pages/RouteTwoPage';
import RouteThreePage from './pages/RouteThreePage';
import NotFoundPage from './pages/NotFoundPage';
import SubRoutePage from './pages/SubRoutePage';
import UseRef from './hooks/UseRef';

function App() {
  return (
    <>
    <UseRef/>
       <Header/>
       <Routes>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='/route-1' element={<RouteOnePage/>}/>
          <Route path='/route-2' element={<RouteTwoPage/>}>
            <Route path=':id' element={<SubRoutePage/>}/>
          </Route>
          <Route path='/route-3' element={<RouteThreePage/>}/>
       </Routes>
    </>
  )
}

export default App
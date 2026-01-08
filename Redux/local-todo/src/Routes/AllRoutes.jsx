import {Route,Routes}from 'react-router-dom'

import React from 'react'
import {Home} from '../pages/Home';
import {Login} from '../pages/login';
import {Signup} from '../pages/Signup';
import {Todo} from '../pages/Todo';
import {Counter} from '../components/Counter'



export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/Login" element={<Login/>}> </Route>
            <Route path="/Signup" element={<Signup/>}> </Route>
            <Route path="/Todo" element={<Todo/>}> </Route>
            <Route path="/counter" element={<Counter/>}> </Route>
        </Routes>
    )
}

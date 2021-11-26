import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Content from './Container/Content.js';
import Actu from './Container/Actu.js';
import Team from './Container/Team.js';


export default() => (
    <Routes>
        <Route path="/" exact element={<Content />}/>
        <Route path="/actu" exact element={<Actu/>}/>
        <Route path="/team" exact element={<Team/>}/>
    </Routes>
)
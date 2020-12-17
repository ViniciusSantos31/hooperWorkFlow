import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/Detail/detail';
import Home from './pages/Home/home';

export default function Routes() {

    return (

        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={Detail} />
        </BrowserRouter>
    );
}
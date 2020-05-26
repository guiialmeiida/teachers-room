import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeTeacher from './pages/AreaLogada/HomeTeacher';
import HomeStudent from './pages/AreaLogada/HomeStudent';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/homeTeacher" exact component={HomeTeacher} />
                <Route path="/homeStudent" exact component={HomeStudent} />
            </Switch>
        </BrowserRouter>
    );
}
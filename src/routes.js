import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeStudent from './pages/Logged/HomeStudent';
import TeacherActivities from './pages/Logged/TeacherActivities';
import Classes from './pages/Logged/Classes';
import NewActivity from './pages/Logged/NewActivity';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/homeStudent" exact component={HomeStudent} />
                <Route path="/teacherActivities" exact component={TeacherActivities} />
                <Route path="/classes" exact component={Classes} />
                <Route path="/newActivity" exact component={NewActivity} />
            </Switch>
        </BrowserRouter>
    );
}
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeTeacher from './pages/Logged/HomeTeacher';
import HomeStudent from './pages/Logged/HomeStudent';
import TeacherActivities from './pages/Logged/TeacherActivities';
import Classes from './pages/Logged/Classes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/homeTeacher" exact component={HomeTeacher} />
                <Route path="/homeStudent" exact component={HomeStudent} />
                <Route path="/teacherActivities" exact component={TeacherActivities} />
                <Route path="/classes" exact component={Classes} />
            </Switch>
        </BrowserRouter>
    );
}
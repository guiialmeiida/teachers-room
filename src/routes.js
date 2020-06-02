import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeTeacher from './pages/Logged/HomeTeacher';
import HomeStudent from './pages/Logged/HomeStudent';
import TeacherActivities from './pages/Logged/TeacherActivities';
import Classes from './pages/Logged/Classes';
import NewClass from './pages/Logged/NewClass';
import NewActivity from './pages/Logged/NewActivity';
import Grades from './pages/Logged/Grades';

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
                <Route path="/newClass" exact component={NewClass} />
                <Route path="/newActivity" exact component={NewActivity} />
                <Route path="/grades" exact component={Grades} />
            </Switch>
        </BrowserRouter>
    );
}
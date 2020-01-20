import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesIndexScreen from './screens/notes/index';
import UserEditScreen from './screens/users/edit'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/notes" component={NotesIndexScreen} />
            <Route path="/users/edit" component={UserEditScreen} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
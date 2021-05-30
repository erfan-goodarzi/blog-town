import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Login from '../../Components/auth/Login';
import Registration from '../../Components/auth/Registration';
import Dashboard from '../../Components/Dashboard';
import Navbar from '../../Components/Layout/Navbar';
import Auxiliary from '../../hos/Auxiliary';

const Router = () => {
    return (
        <Auxiliary>
            <Route path="/"  component={Navbar}/>
                   <Switch>
           <Route path="/login" exact component={Login}/>
           <Route path="/sign-up" exact component={Registration}/>
           <Route path="/dashboard" exact component={Dashboard}/>
       </Switch>
       
        </Auxiliary>
    );
}

export default Router;

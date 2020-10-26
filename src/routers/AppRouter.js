import React, { useContext } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
    return (
        <Router>
      <div>    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <PublicRoute 
          exact 
          path="/login" 
          component={LoginScreen}
            isAuthenticated={user.logged}
          />
        
          <PrivateRoute 
          path="/" 
          component={DashboardRoutes}  
          isAuthenticated={user.logged}/>
           
        </Switch>
      </div>
    </Router>
    )
}

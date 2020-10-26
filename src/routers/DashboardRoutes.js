import React from 'react';
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { CcsrScreen } from '../components/ccsr/CcsrScreen';
import { FutbolScreen } from '../components/futbolistas/FutbolScreen';
import { PeruScreen } from '../components/peru/PeruScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
        <Navbar />
        <div className="container mt-2">
        <Switch>
            <Route exact path="/ccsr" component={ CcsrScreen} />
           {/*  <Route exact path="/peru" component={PeruScreen} /> */}
            <Route exact path="/futbolista/:jugadorId" component={FutbolScreen}/>
            <Route exact path="/search" component={ SearchScreen} />
            <Redirect to="/ccsr" />

        </Switch>
   
            
        </div>
        </>
    )
}

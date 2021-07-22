
import React from 'react';
import {Navbar} from '../src/components/Navbar';
import {Home} from '../src/components/Home';
import {About} from '../src/components/About';
import {Services} from '../src/components/Services';
import {Contact} from '../src/components/Contact';
import {Load} from '../src/components/Load';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const App = () => {
    return (
        <Router>
        <main>
        <Navbar />
         <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
             <Contact />
          </Route>
         </Switch>
        <Load />
        </main>
        </Router>
    )
}
import {FC} from 'react'
import {Main} from './components/Main';
import {Item} from './components/Item'
import {Navbar} from './components/Navbar'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const App:FC = () => {
    return (
      <main>
        <div className="mainDiv">
         <Navbar />
        <Router>
          <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/:id">
            <Item/>
          </Route>
        </Switch>
        </Router>
        </div>
      </main>
    )
}

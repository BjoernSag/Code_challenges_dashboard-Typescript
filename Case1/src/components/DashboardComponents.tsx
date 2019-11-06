import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import Dashboard from './Dashboard'
import Main from './Main'
import Data from './Data'

export interface Props {
}

/* isActive props to give the active page some styling */
const DashboardComponents: React.FC<Props> = (props) => {
  return (
    <div>
      <Router>
        <div>
          <Route isActive="main" exact path="/" render={() => <Dashboard isActive="main"> 
              <Main />
            </Dashboard>}>
          </Route>
          <Route isActive="main" path="/main" render={() => <Dashboard isActive="main"> 
              <Main />
            </Dashboard>}>
          </Route>
          <Route isActive="data" path="/data" render={() => <Dashboard isActive="data"> 
              <Data/>
            </Dashboard>}>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default DashboardComponents;

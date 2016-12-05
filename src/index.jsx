import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

import App from './App.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import ContentContainer from './ContentContainer/ContentContainer.jsx'
import SiteRoutes from './Routes/Routes.js'

const Read = () => (<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>)
const Write = () => (<h3>The write page. Story snippets will be uploaded here.</h3>)
const About = () => (<h3>The about page. Things will be posted...eventually</h3>)
const NotFound = () => (<h3>404 Not found</h3>)

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path={SiteRoutes.container} component={ContentContainer}>
        <Route path={SiteRoutes.read} component={Read} />
        <Route path={SiteRoutes.write} component={Write} />
        <Route path={SiteRoutes.about} component={About} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('app')
)

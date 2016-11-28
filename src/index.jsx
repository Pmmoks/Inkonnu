import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

import LandingPage from './LandingPage/LandingPage.jsx'
import App from './App.jsx'
import SiteRoutes from './Routes/Routes.js'

const Sample = () => (<h1>React Router is working.</h1>)
const Example = () => (<h1>React Router is really working!</h1>)
const NotFound = () => (<h1>404 Not found</h1>)

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path={SiteRoutes.sample} component={Sample} />
      <Route path={SiteRoutes.example} component={Example} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app')
)

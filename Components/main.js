import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import about from './about';
import contact from './contact';
import tech from './tech';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={about} />
    <Route path="/projects" component={tech} />
    <Route path="/contact" component={contact} />
  </Switch>
)
export default Main;
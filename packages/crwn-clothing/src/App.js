import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function TestPage() {
  return (<p>Test Pages</p>)
}
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/test" component={TestPage}/>
      </Switch>
    </Router>
  );
}

export default App;

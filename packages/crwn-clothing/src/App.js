import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function TestPage() {
  return (<p>Test Pages</p>)
}
function App() {
  return (
    <Router>
    <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
      </Switch>
    </Router>
  );
}

export default App;

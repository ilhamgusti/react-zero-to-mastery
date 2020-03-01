import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/auth/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        })
      } else {
        setCurrentUser(user)
      }
    })
    return () => {
      setCurrentUser(null)
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Header currentUser={currentUser}/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
    </Router>
  );
}

export default App;

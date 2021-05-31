import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import CurrencyPage from './pages/CurrencyPage';
import ProfilePage from './pages/ProfilePage';

function App() {


  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  }

  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} onLogin={login} />

      <Switch>
        <PrivateRoute path='/profile' active={loggedIn}  >
          <ProfilePage />
        </PrivateRoute>
        <Route path='/'>
          <CurrencyPage />
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;

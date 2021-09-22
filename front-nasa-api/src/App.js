import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login'
import Signup from './signup'
import Nav from './nav'
import Home from './Home'

const App = () => {

  useEffect(() => {
    picOfTheDay()
  }, [])

const APP_KEY = 'hTFfl6PaUKinqZUL6bNgwH62JCGYCzbISDZBX3LI'

const [potd, updatePotd] = useState([])
const [user, updateUser] = useState('')


const updateUserState = (userInput) => {
  if(!!userInput) {
    updateUser(userInput)
  }
}


const picOfTheDay = async () => {
  const req = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`)
  const res = await req.json()

  updatePotd(res)
}


  return (
    <div className="App">

      <Router>
        {(!user ? <Nav /> : null)}
        <Switch>
          
          <Route path='/signup' exact component={Signup}/>
          <Route path='/login' exact component={(props) => <Login updateUserState={updateUserState}>{props.children} </Login>}/>
          <Route path='/Home' exact component={(props) => <Home updateUserState={updateUserState}>{console.log(`children ${props.children}`)} </Home>} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

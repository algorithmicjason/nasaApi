import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login'
import Signup from './signup'
import Nav from './nav'

const App = () => {

const APP_KEY = 'hTFfl6PaUKinqZUL6bNgwH62JCGYCzbISDZBX3LI'
//this is a comment to commit
const [potd, updatePotd] = useState([])

useEffect(() => {
  picOfTheDay()
}, [])
//track me????????????

const picOfTheDay = async () => {
  const req = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`)
  const res = await req.json()

  updatePotd(res)
}


  return (
    <div className="App">

      <Router>
        <Nav />
        <Switch>
          
          <Route path='/signup' exact component={Signup}/>
          <Route path='/login' exact component={Login}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router,
    Route,
    Switch,
    } from 'react-router-dom'

//Pages
import Login from './pages/Login/index'
import NewRegister from './pages/NewRegister/index'
import HomePage from './pages/HomePage/index'
import EditUser from './pages/EditUser/index'
import PokemonPage from './pages/PokemonPage/index'
import Counter from './pages/ClassCounter'

const Routes =()=>{
    return(
        <Router>
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/homePage' exact component={HomePage}/>
            <Route path='/newRegister' exact component={NewRegister}/>
            <Route path='/editUser/:id' exact component={EditUser}/>
            <Route path='/pokemon/' exact component={PokemonPage}/>
            <Route path='/counter' exact component={Counter}/>

        </Switch>
      </Router>
    )
}

export default Routes
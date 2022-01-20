import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Countries from './components/countries/Countries'
import Header from './components/header/Header'
import Filter from './components/filter/Filter'
import Country from './components/country/Country'
import Filterbyregion from './components/Filterbyregion/Filterbyregion'

export default function App() {
    return (
        <div>        
            <Router> 
            <Header />
            <Route exact path="/">
                <Filter />
                <Countries />
            </Route>     
            <Route path="/countries/:name" children={<Country/>}/>
            
            <Route path="/region/:regionname" children={<Filterbyregion/>}/> 
        </Router>
        </div>

    )
}
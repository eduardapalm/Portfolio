import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Portfolio from './Pages/Home/index'

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={['', '/']} component={Portfolio}/>
      </Switch> 
    </BrowserRouter>
  )
}
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Register, Main } from './pages'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path='/'
                    component={Main}
                    exact
                />
                <Route
                    path='/registrate'
                    component={Register}
                    exact
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App

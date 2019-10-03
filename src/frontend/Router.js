import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Register, Main, Login } from './pages'

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
                <Route
                    path='/inicia-sesion'
                    component={Login}
                    exact
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App

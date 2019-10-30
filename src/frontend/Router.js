import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Register, Main, Login } from './pages'
import UserData from './pages/UserData'

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
                <Route
                    path='/perfil-usuario'
                    component={UserData}
                    exact
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App

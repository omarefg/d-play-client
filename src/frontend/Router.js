import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import {
    Login,
    Register,
    Recommendations,
    MyLists,
    Genres,
} from './pages'

const mapStateToProps = state => {
    return {
        auth: { ...state.auth },
    }
}

const App = connect(mapStateToProps)(({ auth }) => {
    const isLogged = auth.user

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path='/inicia-sesion'
                    component={Login}
                    exact
                />
                <Route
                    path='/registrate'
                    component={Register}
                    exact
                />
                <Redirect
                    from='/'
                    to={isLogged ? '/recomendaciones' : '/inicia-sesion'}
                    exact
                />
                <Route
                    path='/recomendaciones'
                    component={isLogged ? Recommendations : Login}
                    exact
                />
                <Route
                    path='/mis-listas'
                    component={isLogged ? MyLists : Login}
                    key='myLists'
                    exact
                />
                <Route
                    path='/generos'
                    component={isLogged ? Genres : Login}
                    key='genres'
                    exact
                />
            </Switch>
        </BrowserRouter>
    )
})

export default App

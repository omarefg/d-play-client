import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { serverRoutes } from './routes'
import { Player, Header } from './components'

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

const App = connect(mapStateToProps)(({ auth }) => {
    const isLogged = auth.user

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                {serverRoutes.map(({ path, component, exact }) => {
                    return (
                        <Route
                            path={path}
                            component={component}
                            exact={exact}
                            key={path}
                        />
                    )
                })}
                <Redirect
                    from='/'
                    to={isLogged ? '/recomendaciones' : '/inicia-sesion'}
                    exact
                />
            </Switch>
            <Player/>
        </BrowserRouter>
    )
})

export default App

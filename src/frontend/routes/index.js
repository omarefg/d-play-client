import { Main, Register, Login } from '../pages'

export const serverRoutes = isLogged => ([
    {
        path: '/',
        component: Main,
        exact: true,
    },
    {
        path: '/registrate',
        component: Register,
        exact: true,
    },
    {
        path: '/inicia-sesion',
        component: Login,
        exact: true,
    },
])

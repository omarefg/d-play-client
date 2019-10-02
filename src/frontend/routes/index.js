import { Main, Register } from '../pages'

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
])

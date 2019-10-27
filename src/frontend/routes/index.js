import {
    Login,
    Register,
    Recommendations,
    MyLists,
    Genres,
} from '../pages'

export const serverRoutes = isLogged => ([
    {
        path: '/inicia-sesion',
        component: Login,
        exact: true,
    },
    {
        path: '/registrate',
        component: Register,
        exact: true,
    },
    {
        path: isLogged ? '/recomendaciones' : '/inicia-sesion',
        component: isLogged ? Recommendations : Login,
        exact: true,
    },
    {
        path: isLogged ? '/mis-listas' : '/inicia-sesion',
        component: isLogged ? MyLists : Login,
        exact: true,
    },
    {
        path: isLogged ? '/generos' : '/inicia-sesion',
        component: isLogged ? Genres : Login,
        exact: true,
    },
])

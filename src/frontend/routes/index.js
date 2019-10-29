import {
    Login,
    Register,
    Recommendations,
    MyLists,
    Genres,
} from '../pages'

export const serverRoutes = [
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
        path: '/recomendaciones',
        component: Recommendations,
        exact: true,
    },
    {
        path: '/mis-listas',
        component: MyLists,
        exact: true,
    },
    {
        path: '/generos',
        component: Genres,
        exact: true,
    },
]

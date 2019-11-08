import {
    Login,
    Register,
    Recommendations,
    MyLists,
    Genres,
    UserData,
    Artist,
    SearchPage,
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
    {
        path: '/perfil-usuario',
        component: UserData,
        exact: true,
    },
    {
        path: '/artista',
        component: Artist,
        exact: true,
    },
    {
        path: '/buscar',
        component: SearchPage,
        exact: true,
    },
]

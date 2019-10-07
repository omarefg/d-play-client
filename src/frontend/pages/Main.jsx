import React from 'react'
import { Header, Search, CardsSection, ListItem, Player } from '../components'

import styles from '../styles/pages/Main.module.scss'

export const Main = () => {
    return (
        <div className={styles['main__container']}>
            <Header>
                <Search/>
                <ul>
                    <ListItem
                        title='Mis favoritos'
                    />
                    <ListItem
                        title='Mis listas'
                    />
                    <ListItem
                        title='Géneros'
                    />
                    <ListItem
                        title='Para descubrir'
                    />
                    <ListItem
                        title='Eventos'
                    />
                </ul>
            </Header>
            <CardsSection
                title='Escuchados recientemente'
            />
            <CardsSection
                title='Artistas Relacionados'
            />
            <Player/>
        </div>
    )
}

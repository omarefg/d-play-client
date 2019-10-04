import React from 'react'
import { Header, Search, CardsSection } from '../components'

export const Main = props => {
    return (
        <div>
            <Header>
                <Search/>
            </Header>
            <CardsSection
                title='Escuchados recientemente'
            />
            <CardsSection
                title='Artistas Relacionados'
            />
        </div>
    )
}

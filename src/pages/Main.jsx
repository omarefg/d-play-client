import React from 'react'
import { LateralBanner, LateralSection } from '../components'
import { HouseIcon, SearchIcon, HeadphoneIcon, PlaylistIcon, AddIcon } from '../icons'

export const Main = props => {
    return (
        <div>
            <LateralBanner>
                <LateralSection
                    title='Inicio'
                    icon={<HouseIcon/>}
                />
                <LateralSection
                    title='Encuentra tus favoritos'
                    icon={<SearchIcon/>}
                />
                <LateralSection
                    title='Mi música'
                    icon={<HeadphoneIcon/>}
                />
                <LateralSection
                    title='Listas'
                    icon={<PlaylistIcon/>}
                />
                <LateralSection
                    title='Crea una lista'
                    icon={<AddIcon/>}
                />
                <LateralSection title='Usuario'/>
            </LateralBanner>
        </div>
    )
}

import React, { Fragment } from 'react'
import { Slider } from '@material-ui/core'
import { PlayerArtistInfo } from './PlayerArtistInfo'
import { PlayerMenu } from './PlayerMenu'

export const Player = props => {
    const { src } = props
    return (
        <Fragment>
            <audio
                controls='true'
                preload='true'
                hidden='true'
            >
                <source src={src}/>
            </audio>
            <Slider/>
            <div>
                <PlayerArtistInfo/>
                <PlayerMenu/>
            </div>
        </Fragment>
    )
}

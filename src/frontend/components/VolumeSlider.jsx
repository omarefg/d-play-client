import React from 'react'
import Grid from '@material-ui/core/Grid'
import { SpeakerHighIcon, SpeakerMidIcon, SpeakerLowIcon, SpeakerNonIcon } from '../icons'
import { ProgressBar } from './ProgressBar'

import styles from '../styles/components/VolumeSlider'

export const VolumeSlider = props => {
    const classes = styles()
    const { value, onChange, volumeClickHandler } = props

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs>
                    <ProgressBar
                        value={value}
                        onChange={onChange}
                        aria-labelledby='continuous-slider'
                    />
                </Grid>
                <Grid item>
                    {value === 0 && (
                        <SpeakerNonIcon
                            className='icon__container--player-menu'
                            onClick={volumeClickHandler}
                        />
                    )}
                    {value > 0 && value <= 33 && (
                        <SpeakerLowIcon
                            className='icon__container--player-menu'
                            onClick={volumeClickHandler}
                        />
                    )}
                    {value > 33 && value <= 66 && (
                        <SpeakerMidIcon
                            className='icon__container--player-menu'
                            onClick={volumeClickHandler}
                        />
                    )}
                    {value > 66 && value <= 100 && (
                        <SpeakerHighIcon
                            className='icon__container--player-menu'
                            onClick={volumeClickHandler}
                        />
                    )}
                </Grid>
            </Grid>
        </div>
    )
}

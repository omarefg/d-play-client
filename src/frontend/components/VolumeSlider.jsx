import React from 'react'
import Grid from '@material-ui/core/Grid'
import VolumeUp from '@material-ui/icons/VolumeUp'
import { ProgressBar } from './ProgressBar'

import styles from '../styles/components/VolumeSlider'

export const VolumeSlider = props => {
    const classes = styles()
    const { value, onChange } = props

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
                    <VolumeUp/>
                </Grid>
            </Grid>
        </div>
    )
}

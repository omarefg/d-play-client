import React from 'react'
import { Slider } from '@material-ui/core'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import styles from '../styles/components/ProgressBar'

export const ProgressBar = props => {
    const { onChange, value } = props
    return (
        <MuiThemeProvider theme={styles}>
            <Slider
                value={value}
                onChange={onChange}
            />
        </MuiThemeProvider>
    )
}

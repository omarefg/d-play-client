import React from 'react'
import { Slider } from '@material-ui/core'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import styles from '../styles/components/ProgressBar'

export const ProgressBar = props => {
    const { onChange, value } = props
    return (
        <ThemeProvider theme={styles}>
            <Slider
                value={value}
                onChange={onChange}
            />
        </ThemeProvider>
    )
}

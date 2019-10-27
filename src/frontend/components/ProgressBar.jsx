import React from 'react'
import { Slider } from '@material-ui/core'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            track: { backgroundColor: '#707070' },
            thumb: { backgroundColor: '#f6ba00' },
            backgroundColor: '#707070',
        },
    },
})

export const ProgressBar = props => {
    const { onChange, value } = props
    return (
        <MuiThemeProvider theme={muiTheme}>
            <Slider
                value={value}
                onChange={onChange}
            />
        </MuiThemeProvider>
    )
}

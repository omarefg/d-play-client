import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const styles = createMuiTheme({
    overrides: {
        MuiSlider: {
            track: { backgroundColor: '#707070' },
            rail: { backgroundColor: '#707070' },
            thumb: { backgroundColor: '#f6ba00' },
        },
    },
})

export default styles

import { makeStyles } from '@material-ui/core/styles'
import Color from 'color'

const styles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.dContrastBackground,
        padding: theme.spacing(1),
    },
    item: {
        backgroundColor: theme.dContrastBackground,
        color: 'white',
        padding: '6px',
        minWidth: '200px',
        '&:hover': {
            color: theme.dThird,
            backgroundColor: Color(theme.dThird).luminosity(),
        },
    },
}))

export default styles

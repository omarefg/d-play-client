import { makeStyles } from '@material-ui/core/styles'
import Color from 'color'

const styles = makeStyles(theme => ({
    paper: {
        backgroundColor: '#292828',
        padding: theme.spacing(1),
    },
    item: {
        backgroundColor: '#292828',
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

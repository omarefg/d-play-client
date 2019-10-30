import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
    title: {
        backgroundColor: theme.dSecondary,
        color: theme.dThird,
    },
    content: {
        backgroundColor: theme.dSecondary,
    },
    text: {
        color: 'white',
    },
    actions: {
        backgroundColor: theme.dSecondary,
    },
}))

export default styles

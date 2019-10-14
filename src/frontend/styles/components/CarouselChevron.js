import { makeStyles } from '@material-ui/core/styles'

const CarouselChevronStyles = makeStyles(theme => ({
    chevron__container: {
        background: theme.dSecondaryLight,
        height: '100%',
        width: '100%',
        display: 'flex',
        color: theme.dPrimary,
        fontSize: '2em',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
    },
}))

export default CarouselChevronStyles

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
    input: {
        width: '100%',
        marginTop: theme.spacing(3)
    }
}))

export const DateInput = props => {
    const classes = useStyles()

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableFuture={props.disableFuture}
                clearable={props.clearable}
                id={props.id}
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                format='dd/MM/yyyy'
                className={classes.input}
                required={props.required}
                animateYearScrolling
            />
        </MuiPickersUtilsProvider>
    )
}

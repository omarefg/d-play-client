import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import useStyles from '../styles/components/DateInput'

export const DateInput = props => {
    const classes = useStyles()

    const {
        disableFuture,
        clearable,
        id,
        label,
        value,
        onChange,
        className,
        required,
        modalClassName,
    } = props

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableFuture={disableFuture}
                clearable={clearable}
                id={id}
                label={label}
                value={value}
                onChange={onChange}
                format='dd/MM/yyyy'
                className={classes[className] || classes['date-input__input']}
                DialogProps={{
                    className: classes[modalClassName] || classes['date-input__modal'],
                }}
                required={required}
                animateYearScrolling
            />
        </MuiPickersUtilsProvider>
    )
}
